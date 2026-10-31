import { test, expect } from '@playwright/test';

async function enter(page, path = '/?test=1&seed=moss-424') {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto(path);
  await page.waitForFunction(() => window.__whiskerfield?.getState().ready);
  await page.click('#start-button');
  await page.waitForFunction(() => getComputedStyle(document.getElementById('welcome')).opacity === '0');
  // Lighter rendering for software-WebGL CI; the shipped game keeps its full quality.
  await page.evaluate(() => {
    const g = window.__whiskerfield;
    g.renderer.setPixelRatio(0.5);
    g.renderer.shadowMap.enabled = false;
    g.world.radius = 1;
    g.world.center = '';
  });
  return errors;
}
const overlaps = (a, b) => a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y;

test('wander, jump, climb, discover, map, rest, and resume offline', async ({ page, context }) => {
  const errors = await enter(page);
  await page.waitForFunction(() => window.__whiskerfield.getState().offlineReady);

  const before = await page.evaluate(() => window.__whiskerfield.getState().position);
  await page.keyboard.down('w');
  await page.waitForFunction(p => {
    const q = window.__whiskerfield.getState().position;
    return Math.hypot(q[0] - p[0], q[2] - p[2]) > 1.2;
  }, before);
  await page.keyboard.up('w');

  await page.keyboard.down('Space');
  await page.waitForFunction(() => window.__whiskerfield.getState().position[1] > 0.4);
  await page.keyboard.up('Space');
  await page.waitForFunction(() => window.__whiskerfield.getState().grounded);

  const wall = await page.evaluate(() => {
    const g = window.__whiskerfield;
    const b = g.world.buildings.find(b => b.roofType < 2 && Math.hypot(b.x, b.z) < 80);
    g.teleport(b.x, 0, b.z + b.d / 2 + 0.3); g.player.heading = Math.PI;
    return { x: b.x, z: b.z, h: b.h, d: b.d };
  });
  await page.keyboard.down('e');
  await page.waitForFunction(() => window.__whiskerfield.getState().climbing);
  // Advance the physics deterministically while the real E key is held, so the
  // assertion does not depend on the software renderer's frame rate.
  await page.evaluate(() => {
    const g = window.__whiskerfield;
    for (let i = 0; i < 420 && !(g.getState().roofs >= 1 && g.player.grounded); i++) { g.step(1 / 60); g.discover(); }
  });
  await page.waitForFunction(() => window.__whiskerfield.getState().roofs >= 1);
  await page.keyboard.up('e');
  await page.waitForFunction(h => window.__whiskerfield.getState().grounded && window.__whiskerfield.getState().position[1] >= h - 0.2, wall.h);
  await expect(page.locator('#roof-count')).toHaveText('1');
  const toast = await page.locator('#toast').boundingBox();
  expect(toast.height).toBeLessThan(44);
  expect(toast.width).toBeLessThan(420);
  await page.screenshot({ path: '../screenshots/test-rooftop.png' });

  await page.keyboard.press('m');
  await expect(page.locator('#map-modal')).toBeVisible();
  await expect(page.locator('#map-description')).toContainText('1 rooftop');
  await page.keyboard.press('Escape');
  await expect(page.locator('#map-modal')).toBeHidden();

  await page.keyboard.press('n');
  await page.waitForFunction(() => window.__whiskerfield.getState().resting);
  await page.keyboard.down('w');
  await page.waitForFunction(() => !window.__whiskerfield.getState().resting);
  await page.keyboard.up('w');

  const saved = await page.evaluate(() => { window.__whiskerfield.save(); return window.__whiskerfield.getState(); });
  await context.setOffline(true);
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => window.__whiskerfield?.getState().ready);
  await expect(page.locator('#offline-label')).toHaveText('Playing offline');
  const resumed = await page.evaluate(() => window.__whiskerfield.getState());
  expect(resumed.roofs).toBe(saved.roofs);
  expect(Math.hypot(resumed.position[0] - saved.position[0], resumed.position[2] - saved.position[2])).toBeLessThan(0.1);
  expect(await page.evaluate(() => !!navigator.serviceWorker.controller)).toBe(true);
  expect(errors).toEqual([]);
});

test('the cat is quick, analog input stays useful, and scenery is solid and climbable', async ({ page }) => {
  const errors = await enter(page);
  const r = await page.evaluate(() => {
    const g = window.__whiskerfield, out = {}, step = n => { for (let i = 0; i < n; i++) g.step(1 / 60); };
    const untilMantle = (max = 400) => { for (let i = 0; i < max; i++) { g.step(1 / 60); if (g.player.mantling > 0) return true; } return false; };
    g.setCamera(0);
    // A straight, empty stretch to run along (verified against the colliders, so the lane never clips scenery).
    const lane = (() => { for (let x = -60; x <= 60; x += 2) for (let z0 = -60; z0 <= 60; z0 += 2) { let ok = true; for (let z = z0; z > z0 - 46 && ok; z -= 1) for (const s of g.physics.query(x, z, 1.4)) if (s.maxY > .15 && s.minY < 1.2) ok = false; if (ok) return [x, z0]; } return [0, 60]; })();
    out.lane = lane;
    // Speed: walk, sprint, gentle stick, release.
    g.teleport(lane[0], 0, lane[1]); step(5); g.hold.y = -1; step(90); out.walk = g.player.speed;
    g.hold.sprint = true; step(90); out.sprint = g.player.speed; g.hold.sprint = false;
    g.hold.y = -.25; step(90); out.analog = g.player.speed;
    g.hold.y = 0; step(20); out.stop = g.player.speed;
    // Held and tapped jumps.
    g.hold.jump = true; g.hold.jumpHeld = true; let maxY = 0; for (let i = 0; i < 90; i++) { g.step(1 / 60); maxY = Math.max(maxY, g.player.pos.y); } out.heldJump = maxY; g.hold.jumpHeld = false;
    step(30); g.hold.jump = true; maxY = 0; for (let i = 0; i < 90; i++) { g.step(1 / 60); maxY = Math.max(maxY, g.player.pos.y); } out.tapJump = maxY;
    // Tree: climb the trunk and settle on the crown.
    const trunk = g.world.colliders.find(s => s.kind === 'trunk');
    g.teleport(trunk.x, 0, trunk.z + trunk.r + 0.3); g.player.heading = Math.PI; step(5);
    g.hold.climb = true; untilMantle(); g.hold.climb = false; step(60);
    out.tree = { y: g.player.pos.y, top: trunk.maxY, support: g.player.support?.kind, grounded: g.player.grounded };
    // Walking beneath the same crown is free.
    g.teleport(trunk.x + 1.5, 0, trunk.z + 3); step(5); g.hold.y = -1; step(90); g.hold.y = 0; step(10);
    out.underTree = { travelled: trunk.z + 3 - g.player.pos.z, y: g.player.pos.y };
    // Chimney: push into it on the roof, scramble up, stand on top.
    const ch = g.world.colliders.find(s => s.kind === 'chimney');
    const b = g.world.buildings.find(b => Math.abs(b.x - (ch.minX + ch.maxX) / 2) < b.w / 2 && Math.abs(b.z - (ch.minZ + ch.maxZ) / 2) < b.d / 2);
    const rx = (ch.minX + ch.maxX) / 2, rz = ch.maxZ + .5;
    g.teleport(rx, g.world.roofHeight(b, rx, rz) + .05, rz); step(20);
    g.hold.y = -1; step(12); out.chimneyBlocked = { z: g.player.pos.z, face: ch.maxZ };
    const mantled = untilMantle(); g.hold.y = 0; step(40);
    out.chimney = { mantled, y: g.player.pos.y, top: ch.maxY, support: g.player.support?.kind };
    // Parked car: jump onto the bonnet, scramble onto the roof.
    const car = g.world.colliders.find(s => s.kind === 'car' && s.maxY < 1 && s.maxX - s.minX < 2);
    g.teleport((car.minX + car.maxX) / 2, 0, car.maxZ + 1.4); step(5);
    g.hold.y = -1; step(12); g.hold.jump = true; untilMantle(); step(20); out.bonnet = { y: g.player.pos.y, support: g.player.support?.kind };
    untilMantle(); g.hold.y = 0; step(30); out.carRoof = { y: g.player.pos.y, support: g.player.support?.kind };
    // Lamp post: a thin perch.
    const lamp = g.world.colliders.find(s => s.kind === 'lamp');
    g.teleport(lamp.x, 0, lamp.z + lamp.r + .3); g.player.heading = Math.PI; step(5);
    g.hold.climb = true; untilMantle(); g.hold.climb = false; step(60);
    out.lamp = { y: g.player.pos.y, top: lamp.maxY, support: g.player.support?.kind };
    // Infinite world: far away, still streaming and finite.
    g.teleport(7200.5, 0, -5100.2); step(30);
    out.far = { ...g.getState(), position: g.player.pos.toArray() };
    return out;
  });
  expect(r.walk).toBeGreaterThan(6.5);
  expect(r.sprint).toBeGreaterThan(11.5);
  expect(r.analog).toBeGreaterThan(3);
  expect(r.analog).toBeLessThan(r.walk);
  expect(r.stop).toBeLessThan(0.05);
  expect(r.heldJump).toBeGreaterThan(1.2);
  expect(r.tapJump).toBeGreaterThan(0.85);
  expect(r.tapJump).toBeLessThan(r.heldJump);
  expect(r.tree.support).toBe('tree');
  expect(r.tree.grounded).toBe(true);
  expect(r.tree.y).toBeGreaterThan(r.tree.top - 0.6);
  expect(r.underTree.travelled).toBeGreaterThan(6);
  expect(r.underTree.y).toBeLessThan(0.3);
  expect(r.chimneyBlocked.z).toBeGreaterThan(r.chimneyBlocked.face + 0.1);
  expect(r.chimney.mantled).toBe(true);
  expect(r.chimney.support).toBe('chimney');
  expect(Math.abs(r.chimney.y - r.chimney.top)).toBeLessThan(0.1);
  expect(r.bonnet.support).toBe('car');
  expect(r.carRoof.y).toBeGreaterThan(1.4);
  expect(r.lamp.support).toBe('lamp');
  expect(Math.abs(r.lamp.y - r.lamp.top)).toBeLessThan(0.1);
  expect(r.far.chunks).toBeGreaterThanOrEqual(9);
  expect(r.far.chunks).toBeLessThanOrEqual(25);
  expect(r.far.position.every(Number.isFinite)).toBe(true);
  expect(r.far.npcs).toBeGreaterThan(0);
  expect(errors).toEqual([]);
});

test('neighbours wander freely, chat, and make a fuss of the cat', async ({ page }) => {
  const errors = await enter(page);
  const before = await page.evaluate(() => window.__whiskerfield.people.wanderers.map(p => [p.x, p.z, p.axis, p.dir]));
  expect(before.length).toBeGreaterThan(5);
  await page.waitForTimeout(2500);
  const after = await page.evaluate(() => window.__whiskerfield.people.wanderers.map(p => [p.x, p.z, p.axis, p.dir, p.state]));
  const moved = after.filter((a, i) => Math.hypot(a[0] - before[i][0], a[1] - before[i][1]) > 0.1).length;
  expect(moved).toBeGreaterThan(after.length / 2);
  // Not a parade: the crowd heads in more than one direction.
  expect(new Set(after.map(a => a[2] + a[3])).size).toBeGreaterThan(1);
  const greet = await page.evaluate(async () => {
    const g = window.__whiskerfield, p = g.people.list.find(p => p.state === 'walk' && p.cooldown === 0) || g.people.list[0];
    g.teleport(p.x + 1.2, 0, p.z); g.setCamera(Math.atan2(1.2, 0) + .5, .3, 5);
    for (let i = 0; i < 150; i++) g.step(1 / 60);
    await new Promise(r => setTimeout(r, 300));
    return { greetings: g.people.greetings, line: p.line, state: p.state, friends: g.getState().friends, bubble: getComputedStyle(document.getElementById('bubble')).opacity };
  });
  expect(greet.greetings).toBeGreaterThanOrEqual(1);
  expect(greet.state).toBe('greet');
  expect(greet.line.length).toBeGreaterThan(4);
  expect(greet.friends).toBeGreaterThanOrEqual(1);
  await expect(page.locator('#bubble')).toHaveClass(/show/);
  await expect(page.locator('#friend-count')).not.toHaveText('0');
  await page.screenshot({ path: '../screenshots/test-greeting.png' });
  expect(errors).toEqual([]);
});

test('landscape phone: fullscreen request, compact HUD without overlap, latching run', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 844, height: 390 }, isMobile: true, hasTouch: true, reducedMotion: 'reduce' });
  const page = await context.newPage();
  const errors = await enter(page);
  await expect(page.locator('#joystick')).toBeVisible();
  await expect(page.locator('#touch-jump')).toBeVisible();
  await expect(page.locator('#rotate')).toBeHidden();
  const calls = await page.evaluate(() => window.__whiskerfield.platformCalls.map(c => c.name));
  expect(calls).toContain('fullscreen');
  expect(calls).toContain('orientation');
  const boxes = {};
  for (const id of ['joystick', 'touch-jump', 'touch-climb', 'touch-run', 'rest-button', 'brand', 'settings-button', 'map-button', 'fullscreen-button', 'sound-button', 'location-card']) boxes[id] = await page.locator('#' + id).boundingBox();
  const ids = Object.keys(boxes);
  for (let i = 0; i < ids.length; i++) for (let j = i + 1; j < ids.length; j++) expect(overlaps(boxes[ids[i]], boxes[ids[j]]), `${ids[i]} overlaps ${ids[j]}`).toBe(false);
  // Controls sit at the edges, leaving the middle of the world clear.
  expect(boxes.joystick.x + boxes.joystick.width).toBeLessThan(844 * .3);
  expect(boxes['touch-jump'].x).toBeGreaterThan(844 * .7);
  for (const id of ['joystick', 'touch-jump', 'touch-climb', 'touch-run']) expect(boxes[id].y).toBeGreaterThan(390 * .5);

  const before = await page.evaluate(() => window.__whiskerfield.getState().position);
  const joy = boxes.joystick;
  await page.mouse.move(joy.x + joy.width / 2, joy.y + joy.height / 2);
  await page.mouse.down();
  await page.mouse.move(joy.x + joy.width / 2, joy.y + joy.height / 2 - 38);
  await page.waitForFunction(p => {
    const q = window.__whiskerfield.getState().position;
    return Math.hypot(q[0] - p[0], q[2] - p[2]) > 1;
  }, before);
  await page.mouse.up();
  // Run latches on with a tap and shows up in the physics input.
  await page.tap('#touch-run');
  await expect(page.locator('#touch-run')).toHaveAttribute('aria-pressed', 'true');
  const sprint = await page.evaluate(() => { const g = window.__whiskerfield; g.setCamera(0);
    const lane = (() => { for (let x = -60; x <= 60; x += 2) for (let z0 = -60; z0 <= 60; z0 += 2) { let ok = true; for (let z = z0; z > z0 - 46 && ok; z -= 1) for (const s of g.physics.query(x, z, 1.4)) if (s.maxY > .15 && s.minY < 1.2) ok = false; if (ok) return [x, z0]; } return [0, 60]; })();
    g.teleport(lane[0], 0, lane[1]); g.hold.y = -1; for (let i = 0; i < 120; i++) g.step(1 / 60); const s = g.player.speed; g.hold.y = 0; return s; });
  expect(sprint).toBeGreaterThan(11.5);
  await page.tap('#touch-run');
  await expect(page.locator('#touch-run')).toHaveAttribute('aria-pressed', 'false');

  await page.evaluate(() => {
    const g = window.__whiskerfield;
    const b = g.world.buildings.find(b => b.roofType < 2 && Math.hypot(b.x, b.z) < 80);
    g.teleport(b.x, 0, b.z + b.d / 2 + 0.3); g.player.heading = Math.PI;
  });
  const climb = boxes['touch-climb'];
  await page.mouse.move(climb.x + climb.width / 2, climb.y + climb.height / 2);
  await page.mouse.down();
  await page.waitForFunction(() => window.__whiskerfield.getState().climbing);
  await page.mouse.up();
  await page.screenshot({ path: '../screenshots/test-mobile-landscape.png' });
  expect(errors).toEqual([]);
  await context.close();
});

test('portrait phone: rotate prompt with a working portrait fallback', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: 'reduce' });
  const page = await context.newPage();
  const errors = await enter(page);
  await expect(page.locator('#rotate')).toBeVisible();
  await page.tap('#rotate-continue');
  await expect(page.locator('#rotate')).toBeHidden();
  const joy = await page.locator('#joystick').boundingBox();
  const jump = await page.locator('#touch-jump').boundingBox();
  const top = await page.locator('#settings-button').boundingBox();
  expect(overlaps(joy, jump)).toBe(false);
  expect(joy.y).toBeGreaterThan(top.y + top.height + 200);
  await page.screenshot({ path: '../screenshots/test-mobile-portrait.png' });
  expect(errors).toEqual([]);
  await context.close();
});

test('PWA shell, landscape manifest, offline cache, and install button rules', async ({ page }) => {
  await page.goto('/?test=1');
  await page.waitForFunction(() => window.__whiskerfield?.getState().offlineReady);
  const manifest = await (await page.request.get('/manifest.webmanifest')).json();
  expect(manifest.display).toBe('standalone');
  expect(manifest.orientation).toBe('landscape');
  expect(manifest.related_applications[0].platform).toBe('webapp');
  expect(manifest.icons.length).toBeGreaterThanOrEqual(3);
  for (const icon of manifest.icons) expect((await page.request.get('/' + icon.src.replace('./', ''))).status()).toBe(200);
  const cached = await page.evaluate(async () => {
    const keys = await caches.keys();
    const cache = await caches.open(keys.find(k => k.startsWith('whiskerfield-')));
    return (await cache.keys()).map(r => new URL(r.url).pathname);
  });
  for (const file of ['/', '/index.html', '/styles.css', '/assets/game.js', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png', '/icons/icon-maskable-512.png']) expect(cached).toContain(file);
  // No install prompt available here, so no install button; the settings sheet still explains how.
  await expect(page.locator('#install-button')).toBeHidden();
  await page.click('#settings-button');
  await page.click('#install-link');
  await expect(page.locator('#install-modal')).toBeVisible();
  await expect(page.locator('#install-ready')).toContainText('ready to play offline');
  await page.keyboard.press('Escape');
  // A prompt makes the button appear; installing hides it again, and it stays hidden on later visits.
  await page.evaluate(() => { const e = new Event('beforeinstallprompt'); e.prompt = async () => {}; e.userChoice = Promise.resolve({ outcome: 'accepted' }); window.dispatchEvent(e); });
  await expect(page.locator('#install-button')).toBeVisible();
  await page.evaluate(() => window.dispatchEvent(new Event('appinstalled')));
  await expect(page.locator('#install-button')).toBeHidden();
  expect(await page.evaluate(() => window.__whiskerfield.getState().installed)).toBe(true);
  await page.reload();
  await page.waitForFunction(() => window.__whiskerfield?.getState().ready);
  await expect(page.locator('#install-button')).toBeHidden();
  expect(await page.evaluate(() => window.__whiskerfield.getState().installed)).toBe(true);
  await expect(page.locator('#offline-label')).toHaveText('Installed');
});

test('housekeeping: seeds, map drag, adaptive quality, hearts, saves, labels, wake lock', async ({ page }) => {
  const errors = await enter(page);
  // Settings and a save in town A.
  await page.evaluate(() => { const g = window.__whiskerfield; g.teleport(123.4, 0, -77.7); g.save(); });
  await page.click('#settings-button');
  await page.locator('#sensitivity-slider').fill('55');
  await expect(page.locator('#sensitivity-label')).toHaveText('55%');
  await expect(page.locator('#volume-label')).toHaveText(/%$/);
  await page.keyboard.press('Escape');
  // Visiting another town by URL starts fresh there but keeps the settings.
  await page.goto('/?test=1&seed=fern-808');
  await page.waitForFunction(() => window.__whiskerfield?.getState().ready);
  const fresh = await page.evaluate(() => { const g = window.__whiskerfield; return { seed: g.world.seedText, pos: g.player.pos.toArray(), settings: g.getSettings() }; });
  expect(fresh.seed).toBe('fern-808');
  expect(Math.hypot(fresh.pos[0] - 123.4, fresh.pos[2] + 77.7)).toBeGreaterThan(50);
  expect(fresh.settings.sensitivity).toBeCloseTo(.55, 2);
  // Back in town A the old spot is still remembered.
  await page.goto('/?test=1&seed=moss-424');
  await page.waitForFunction(() => window.__whiskerfield?.getState().ready);
  const back = await page.evaluate(() => window.__whiskerfield.player.pos.toArray());
  expect(Math.hypot(back[0] - 123.4, back[2] + 77.7)).toBeLessThan(0.1);
  await page.click('#start-button');
  await page.waitForFunction(() => getComputedStyle(document.getElementById('welcome')).opacity === '0');

  // Map: the seed is shown and dragging tracks the finger exactly.
  await page.keyboard.press('m');
  await expect(page.locator('#map-seed')).toHaveText('Seed moss-424');
  const canvas = await page.locator('#map-canvas').boundingBox();
  const c0 = await page.evaluate(() => ({ ...window.__whiskerfield.mapCenter() }));
  await page.mouse.move(canvas.x + canvas.width / 2, canvas.y + canvas.height / 2);
  await page.mouse.down();
  await page.mouse.move(canvas.x + canvas.width / 2 + 100, canvas.y + canvas.height / 2 + 50, { steps: 5 });
  await page.mouse.up();
  const c1 = await page.evaluate(() => ({ ...window.__whiskerfield.mapCenter() }));
  const perPx = 1 / (3.15 * canvas.width / 960);
  expect(c0.x - c1.x).toBeCloseTo(100 * perPx, 1);
  expect(c0.z - c1.z).toBeCloseTo(50 * perPx, 1);
  await page.keyboard.press('Escape');

  // Adaptive quality degrades under load and recovers after smooth frames.
  const q = await page.evaluate(() => {
    const g = window.__whiskerfield, out = {};
    out.start = g.getQuality();
    for (let i = 0; i < 400; i++) g.adapt(60); out.slow = g.getQuality();
    for (let i = 0; i < 3000; i++) g.adapt(12); out.recovered = g.getQuality();
    return out;
  });
  expect(q.slow.level).toBeGreaterThan(0);
  expect(q.slow.pixelRatio).toBeLessThan(q.start.pixelRatio);
  expect(q.recovered.level).toBe(0);
  expect(q.recovered.pixelRatio).toBeCloseTo(q.start.pixelRatio, 2);
  await expect(page.locator('#toast')).toContainText('Softening the picture');

  // Each neighbour owns their heart material; saves only happen when something changed.
  const misc = await page.evaluate(async () => {
    const g = window.__whiskerfield;
    const mats = new Set(g.people.list.map(p => p.heart.material)), headcount = g.people.list.length;
    let writes = 0; const orig = localStorage.setItem.bind(localStorage);
    localStorage.setItem = (k, v) => { writes++; orig(k, v); };
    g.hold.x = g.hold.y = 0; g.save();
    const after = writes;
    for (let i = 0; i < 60 * 30; i++) g.step(1 / 60); // 30 idle seconds
    const idle = writes - after;
    g.hold.y = -1; for (let i = 0; i < 60 * 7; i++) g.step(1 / 60); g.hold.y = 0;
    const moving = writes - after - idle;
    localStorage.setItem = orig;
    return { people: headcount, mats: mats.size, idle, moving, wake: g.platformCalls.some(c => c.name === 'wakelock') || !navigator.wakeLock };
  });
  expect(misc.mats).toBe(misc.people);
  expect(misc.idle).toBe(0);
  expect(misc.moving).toBeGreaterThanOrEqual(1);
  expect(misc.wake).toBe(true);
  expect(errors).toEqual([]);
});

test('ponds, fountains, birds, and a camera that stays above the scenery', async ({ page }) => {
  const errors = await enter(page);
  const r = await page.evaluate(() => {
    const g = window.__whiskerfield, out = {}, step = n => { for (let i = 0; i < n; i++) g.step(1 / 60); };
    // The cat will not walk into the pond, even through a gap in the stones; a jump in means a wade back out.
    const w = g.world.water[0], a = (3.5 / 18) * Math.PI * 2;
    g.teleport(w.x + Math.cos(a) * (w.r + 2), 0, w.z + Math.sin(a) * (w.r + 2)); step(5);
    g.setCamera(Math.atan2(Math.cos(a), Math.sin(a))); g.hold.y = -1; step(150); g.hold.y = 0;
    out.edge = { d: Math.hypot(g.player.pos.x - w.x, g.player.pos.z - w.z), r: w.r, wet: !!g.world.inWater(g.player.pos.x, g.player.pos.z) };
    g.hold.y = -1; step(3); g.hold.jump = true; g.hold.jumpHeld = true; step(8); g.hold.y = 0;
    for (let i = 0; i < 90 && !g.player.grounded; i++) { g.step(1 / 60); if (i === 40) g.hold.jumpHeld = false; }
    g.hold.jumpHeld = false; step(30);
    g.hold.y = -1; step(20);
    out.wade = { wet: !!g.world.inWater(g.player.pos.x, g.player.pos.z) && g.player.pos.y < .2, speed: g.player.speed, y: g.player.pos.y };
    g.hold.y = 1; step(200); g.hold.y = 0; out.out = !g.world.inWater(g.player.pos.x, g.player.pos.z);
    // The fountain's colliders match its shape: the cat sits on the real rim, not in the air above it.
    const f = g.world.colliders.find(s => s.kind === 'fountain' && s.maxY < .6);
    g.teleport(f.x, 0, f.z + 2); g.setCamera(0); step(5); g.hold.y = -1; step(10); g.hold.jump = true; step(40); g.hold.y = 0; step(40);
    out.fountain = { y: g.player.pos.y, support: g.player.support?.kind, top: f.maxY };
    // Birds perch on scenery, mostly low, and flutter off when the cat gets close.
    const small = g.birds.list.filter(b => !b.crow); out.birds = { count: small.length, perched: small.filter(b => b.perch?.solid && ['perch', 'fly'].includes(b.state)).length, low: small.filter(b => b.perch?.y < 3.4).length };
    let b = null; for (let i = 0; i < 900 && !b; i++) { g.step(1 / 60); b = g.birds.list.find(b => b.state === 'perch' && b.perch.y < 3 && b.group.position.distanceTo(g.player.pos) > 6); }
    g.teleport(b.group.position.x + .8, 0, b.group.position.z); step(100);
    out.startle = { state: b.state, startles: g.birds.startles, moved: b.group.position.distanceTo(new (b.group.position.constructor)(b.from.x, b.from.y, b.from.z)) };
    return out;
  });
  expect(r.edge.wet).toBe(false);
  expect(r.edge.d).toBeLessThan(r.edge.r + 0.3);
  expect(r.wade.wet).toBe(true);
  expect(r.wade.speed).toBeLessThan(6);
  expect(r.out).toBe(true);
  expect(r.fountain.support).toBe('fountain');
  expect(Math.abs(r.fountain.y - r.fountain.top)).toBeLessThan(0.02);
  expect(r.birds.count).toBeGreaterThanOrEqual(8);
  expect(r.birds.perched).toBe(r.birds.count);
  expect(r.birds.low).toBeGreaterThan(r.birds.count / 2);
  expect(r.startle.startles).toBeGreaterThanOrEqual(1);
  // Paws stay on top of the paving: pavements, roads, footpaths and park paths all have real heights,
  // and stepping off a kerb is a step, not a fall.
  const ground = await page.evaluate(() => {
    const g = window.__whiskerfield, step = n => { for (let i = 0; i < n; i++) g.step(1 / 60); };
    const at = (x, z) => { g.teleport(x, .5, z); step(40); return g.player.pos.y; };
    const out = { pavement: at(28.45, 10), road: at(32.5, 10), footpath: at(0, 10) };
    g.setCamera(0); g.teleport(31, .5, 10); step(20); let air = 0, lands = 0, prev = true; g.hold.x = -1;
    for (let i = 0; i < 150; i++) { g.step(1 / 60); if (!g.player.grounded) air++; if (g.player.grounded && !prev) lands++; prev = g.player.grounded; }
    g.hold.x = 0; out.kerb = { air, lands, x: g.player.pos.x };
    step(60); out.people = g.people.wanderers.filter(p => Math.abs(p.y - g.world.groundHeight(p.x, p.z)) < .02).length / g.people.wanderers.length;
    return out;
  });
  expect(ground.pavement).toBeCloseTo(.13, 2);
  expect(ground.road).toBeCloseTo(.045, 2);
  expect(ground.footpath).toBeCloseTo(.05, 2);
  expect(ground.kerb.x).toBeLessThan(27);
  expect(ground.kerb.air).toBe(0);
  expect(ground.kerb.lands).toBe(0);
  expect(ground.people).toBeGreaterThanOrEqual(.8);
  // Camera: the lowest allowed pitch never puts the eye into the ground or inside a fountain.
  await page.evaluate(() => { const g = window.__whiskerfield; const f = g.world.colliders.find(s => s.kind === 'fountain' && s.maxY < .6); g.teleport(f.x, 0, f.z + 2.2); g.setCamera(Math.PI + .4, .16, 4); });
  await page.waitForTimeout(2500);
  const cam = await page.evaluate(() => { const g = window.__whiskerfield; const f = g.world.colliders.find(s => s.kind === 'fountain' && s.maxY < .6); const c = g.camera.position; return { y: c.y, inFountain: Math.hypot(c.x - f.x, c.z - f.z) < 1.35 && c.y < f.maxY + .4 }; });
  expect(cam.y).toBeGreaterThan(0.4);
  expect(cam.inFountain).toBe(false);
  expect(errors).toEqual([]);
});

test('everything that is drawn is solid: bushes, planters, railings and other scenery stop the cat', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('/?test=1&seed=moss-424');
  await page.waitForFunction(() => window.__whiskerfield?.getState().ready, null, { timeout: 60000 });
  const r = await page.evaluate(() => {
    const g = window.__whiskerfield, w = g.world, step = n => { for (let i = 0; i < n; i++) g.step(1 / 60); };
    const auto = w.colliders.filter(s => s.auto);
    const out = { total: w.colliders.length, auto: auto.length, shapes: {}, runs: [] };
    for (const s of auto) out.shapes[s.shape] = (out.shapes[s.shape] || 0) + 1;
    // Low scenery on open ground, approached from the west: the cat must end up outside it (or on top, never inside).
    const targets = auto.filter(s => s.minY < .3 && s.maxY > .5 && s.maxX - s.minX < 2 && !w.inWater((s.minX + s.maxX) / 2, (s.minZ + s.maxZ) / 2)
      && Math.abs(w.groundHeight(s.minX - 2, (s.minZ + s.maxZ) / 2)) < .2).slice(0, 6);
    for (const s of targets) {
      const cz = (s.minZ + s.maxZ) / 2;
      g.teleport(s.minX - 2, .1, cz); step(30); g.setCamera(Math.atan2(-1, 0)); g.hold.y = -1; step(150); g.hold.y = 0;
      const p = g.player.pos, insideXZ = p.x > s.minX + .02 && p.x < s.maxX - .02 && p.z > s.minZ + .02 && p.z < s.maxZ - .02;
      out.runs.push({ kind: s.kind, shape: s.shape, x: +p.x.toFixed(2), y: +p.y.toFixed(2), minX: +s.minX.toFixed(2), maxY: +s.maxY.toFixed(2), insideBody: insideXZ && p.y < s.maxY - .1, moved: p.x > s.minX - 2.5 });
    }
    // Physics stays cheap even with every primitive registered.
    g.teleport(0, .1, 8); step(30); g.hold.y = -1; const t0 = performance.now(); step(300); g.hold.y = 0; out.msPerStep = (performance.now() - t0) / 300;
    return out;
  });
  expect(r.auto).toBeGreaterThan(500);
  expect(r.runs.length).toBeGreaterThanOrEqual(3);
  for (const run of r.runs) expect(run.insideBody, JSON.stringify(run)).toBe(false);
  expect(r.msPerStep).toBeLessThan(2);
  expect(errors).toEqual([]);
});

test('places: a café you can walk into, a trampoline that bounces, a market with stallholders, towers and works', async ({ page }) => {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('/?test=1&seed=moss-424');
  await page.waitForFunction(() => window.__whiskerfield?.getState().ready, null, { timeout: 60000 });
  const r = await page.evaluate(() => {
    const g = window.__whiskerfield, w = g.world, step = n => { for (let i = 0; i < n; i++) g.step(1 / 60); };
    g.start(); const out = {};
    out.kinds = [...new Set(w.landmarks.map(l => l.kind))].sort();
    // Café: through the front door, onto the floor, and the discovery fires.
    const cafe = w.landmarks.find(l => l.kind === 'cafe' && Math.abs(l.x) < 40);
    g.teleport(cafe.x, .3, cafe.inside.maxZ + 2.5); step(20); g.setCamera(Math.atan2(0, 1)); g.hold.y = -1; step(140); g.hold.y = 0; g.discover();
    out.cafe = { z: g.player.pos.z, maxZ: cafe.inside.maxZ, y: g.player.pos.y, places: g.getState().places, support: g.getState().support };
    // Market: stallholders appear at their stalls with the right job, and face their work.
    const market = w.landmarks.find(l => l.kind === 'market' && Math.abs(l.x) < 40);
    g.teleport(market.x, .3, market.z + 6); step(90);
    out.market = { vendors: g.people.list.filter(p => p.job && p.role.startsWith('vendor')).length, shoppers: g.people.list.filter(p => p.job && p.role === 'shopper').length, sitting: g.people.list.filter(p => p.sitting).length, total: g.people.list.length };
    // Trampoline: fall onto it and get thrown back up higher than a normal step.
    const tramp = w.colliders.find(s => s.kind === 'trampoline') || (() => { const pg = w.landmarks.find(l => l.kind === 'playground'); g.teleport(pg.x, .3, pg.z); step(5); return w.colliders.find(s => s.kind === 'trampoline'); })();
    g.teleport(tramp.x, tramp.maxY + 3, tramp.z); let peak = 0, bounced = false, landed = false;
    for (let i = 0; i < 240; i++) { g.step(1 / 60); const y = g.player.pos.y; if (!bounced && g.player.vy > 1 && i > 10) bounced = true; if (bounced) peak = Math.max(peak, y); if (bounced && g.player.grounded) { landed = true; break; } }
    out.tramp = { bounced, peak: peak - tramp.maxY, landed, support: g.getState().support };
    // Tower: the roof counts as a place once you are standing on it.
    const tower = w.landmarks.find(l => l.kind === 'tower'); g.teleport(tower.x, tower.y + .5, tower.z); step(30); g.discover();
    out.tower = { y: g.player.pos.y, top: tower.y, grounded: g.player.grounded, places: g.getState().places };
    // Works: sawtooth roof steps are walkable, and the smoke/cog extras are animated meshes.
    const works = w.landmarks.find(l => l.kind === 'works'); const shed = w.buildings.find(b => b.id === works.id);
    g.teleport(shed.x, shed.h + .3, shed.z - shed.d / 2 + .6); step(20); g.setCamera(Math.atan2(0, -1)); g.hold.y = -1; const y0 = g.player.pos.y; let top = y0; for (let i = 0; i < 120; i++) { g.step(1 / 60); top = Math.max(top, g.player.pos.y); } g.hold.y = 0;
    out.works = { climbed: top - y0, grounded: g.player.grounded, extras: [...w.chunks.values()].reduce((a, c) => a + c.ticks.length, 0) };
    return out;
  });
  expect(r.kinds).toEqual(expect.arrayContaining(['cafe', 'market', 'tower', 'works', 'home', 'shop', 'warehouse']));
  expect(r.cafe.z).toBeLessThan(r.cafe.maxZ - .5);
  expect(r.cafe.y).toBeCloseTo(.36, 1);
  expect(r.cafe.places).toBeGreaterThanOrEqual(1);
  expect(r.market.vendors).toBeGreaterThanOrEqual(6);
  expect(r.market.shoppers).toBeGreaterThanOrEqual(2);
  expect(r.tramp.bounced).toBe(true);
  expect(r.tramp.peak).toBeGreaterThan(1.2);
  expect(r.tower.grounded).toBe(true);
  expect(r.tower.places).toBeGreaterThanOrEqual(2);
  expect(r.works.climbed).toBeGreaterThan(.6);
  expect(r.works.extras).toBeGreaterThan(0);
  expect(errors).toEqual([]);
});

test('fun: shinies can be picked up, things can be knocked over, and hats unlock', async ({ page }) => {
  await page.goto('/?test=1&seed=moss-424');
  await page.waitForFunction(() => window.__whiskerfield?.getState().ready, null, { timeout: 60000 });
  const r = await page.evaluate(() => {
    const g = window.__whiskerfield, step = n => { for (let i = 0; i < n; i++) g.step(1 / 60); };
    g.start();
    const sh = g.fun.listShinies(), pr = g.fun.listProps(), out = { shinies: sh.length, props: pr.length, kinds: new Set(sh.map(s => s.kind)).size };
    const s0 = sh.sort((a, b) => Math.hypot(a.x - 1, a.z - 7) - Math.hypot(b.x - 1, b.z - 7))[0];
    g.teleport(s0.x, s0.y + .2, s0.z); step(30); out.collected = g.getState().shinies; out.hudCount = document.getElementById('shiny-count').textContent;
    out.lockedFirst = g.wearHat('crown'); out.leaf = g.wearHat('leaf'); out.hat = g.getState().hat; out.hatMeshes = g.cat.hatMount.children.length;
    const pr0 = pr.filter(q => q.state === 'up').sort((a, b) => Math.hypot(a.x - 1, a.z - 7) - Math.hypot(b.x - 1, b.z - 7))[0];
    g.teleport(pr0.x - 2.5, pr0.y + .2, pr0.z); step(25); g.setCamera(Math.atan2(-1, 0)); g.hold.y = -1; g.hold.sprint = true; step(60); g.hold.y = 0; g.hold.sprint = false; step(150);
    const after = g.fun.listProps().filter(q => q.kind === pr0.kind).sort((a, b) => Math.hypot(a.x - pr0.x, a.z - pr0.z) - Math.hypot(b.x - pr0.x, b.z - pr0.z))[0];
    out.prop = { before: pr0.state, after: after.state, moved: Math.hypot(after.x - pr0.x, after.z - pr0.z), knocks: g.getState().knocks };
    g.save(); const saved = JSON.parse(localStorage.getItem('whiskerfield.journey.v1')); out.saved = { shinies: saved.shinies.length, hat: saved.hat, knocks: saved.knocks };
    return out;
  });
  expect(r.shinies).toBeGreaterThan(30); expect(r.kinds).toBeGreaterThanOrEqual(5); expect(r.props).toBeGreaterThan(40);
  expect(r.collected).toBe(1); expect(r.hudCount).toBe('1');
  expect(r.lockedFirst).toBe(false); expect(r.leaf).toBe(true); expect(r.hat).toBe('leaf'); expect(r.hatMeshes).toBe(1);
  expect(r.prop.before).toBe('up'); expect(r.prop.after).toBe('down'); expect(r.prop.moved).toBeGreaterThan(.3); expect(r.prop.knocks).toBeGreaterThanOrEqual(1);
  expect(r.saved).toEqual({ shinies: 1, hat: 'leaf', knocks: r.prop.knocks });
  // The wardrobe opens with H, lists every hat on the hat tab, and several items can be worn at once.
  await page.keyboard.press('KeyH');
  await expect(page.locator('#wardrobe-modal')).toBeVisible();
  expect(await page.locator('.hat-card').count()).toBe(10);
  await expect(page.locator('.hat-card.wearing strong')).toHaveText('Leaf');
  const w = await page.evaluate(() => { const g = window.__whiskerfield; const scarf = g.wear('neck', 'collar'); const o = g.outfit; return { scarf, hat: o.hat, neck: o.neck }; });
  expect(w.scarf).toBe(true); expect(w.hat).toBe('leaf'); expect(w.neck).toBe('collar');
});

test('towers have floors, stairs and a lift that carries the cat; houses grow wings; gable roofs are walkable', async ({ page }) => {
  const errors = []; page.on('pageerror', e => errors.push(e.message));
  await page.goto('/?test=1&seed=moss-424');
  await page.waitForFunction(() => window.__whiskerfield?.getState().ready, null, { timeout: 60000 });
  const r = await page.evaluate(() => {
    const g = window.__whiskerfield, step = n => { for (let i = 0; i < n; i++) g.step(1 / 60); };
    g.start(); g.world.radius = 1; g.world.center = '';
    g.teleport(-160.5, .3, -74.5); step(60);
    const chunk = [...g.world.chunks.values()].find(c => c.lifts?.length), spec = chunk.lifts[0], car = g.lifts.cars.get(spec.id);
    const out = { levels: spec.levels.length, floors: g.world.landmarks.filter(l => l.kind === 'floor').length, wings: g.world.buildings.filter(b => b.parent).length };
    g.teleport(spec.x, .6, spec.z + 2.2); step(30); g.setCamera(0); g.hold.y = -1; step(40); g.hold.y = 0; out.boarded = g.player.support?.kind;
    step(360); out.ride = { y: +g.player.pos.y.toFixed(2), level: car.level, support: g.player.support?.kind };
    // Stairs from floor 1 to floor 2.
    const bld = g.world.buildings.find(b => b.id === spec.id.replace(':lift', '')), lane = bld.z - bld.d / 2 + .35 + 1.45 + .725, startX = bld.x + bld.w / 2 - .3 - 2.5 - .05 - .35 - .6;
    g.teleport(startX, spec.levels[1] + .3, lane); step(30); g.setCamera(Math.PI / 2); g.hold.y = -1; let top = 0; for (let i = 0; i < 160 && !top; i++) { g.step(1 / 60); if (g.player.support?.kind === 'floor' && Math.abs(g.player.pos.y - spec.levels[2]) < .05) top = g.player.pos.y; } g.hold.y = 0; out.stairs = { y: +top.toFixed(2), target: spec.levels[2] };
    // Gable roof: a cat put on the eave ends up on the tiles, not inside the roof.
    const gb = g.world.buildings.find(b => b.roofType === 0 && !b.parent); g.teleport(gb.x - gb.w / 2 + 1.5, gb.h + .5, gb.z); step(40);
    out.roof = { y: +g.player.pos.y.toFixed(2), h: gb.h, support: g.player.support?.kind };
    return out;
  });
  expect(r.levels).toBeGreaterThanOrEqual(7); expect(r.floors).toBeGreaterThan(0); expect(r.wings).toBeGreaterThan(0);
  expect(r.boarded).toBe('lift'); expect(r.ride.level).toBeGreaterThanOrEqual(1); expect(r.ride.y).toBeGreaterThan(3); expect(r.ride.support).toBe('lift');
  expect(Math.abs(r.stairs.y - r.stairs.target)).toBeLessThan(.3);
  expect(r.roof.y).toBeGreaterThan(r.roof.h + .5); expect(r.roof.support).toBe('roof');
  expect(errors).toEqual([]);
});

test('out of town: a station with a canopy to sit on, allotments with a greenhouse, ducks that flee, crows up high', async ({ page }) => {
  await page.goto('/?test=1&seed=moss-424');
  await page.waitForFunction(() => window.__whiskerfield?.getState().ready, null, { timeout: 60000 });
  const r = await page.evaluate(() => {
    const g = window.__whiskerfield, step = n => { for (let i = 0; i < n; i++) g.step(1 / 60); }, out = {};
    g.start();
    // Ducks live on the nearest pond and keep away from the cat.
    const flock = [...g.ducks.flocks.values()][0], m = flock[0], d0 = [m.x, m.z];
    out.ducks = { flocks: g.ducks.flocks.size, size: flock.length, ducklingsFollow: flock.slice(1).every(d => d.follow) };
    g.teleport(m.x - 1.5, .3, m.z); step(120); out.ducks.moved = Math.hypot(m.x - d0[0], m.z - d0[1]); out.ducks.startles = g.ducks.startles;
    out.ducks.nearPond = Math.hypot(m.x - m.pond.x, m.z - m.pond.z) < m.pond.r + 2.5;
    // Crows prefer roofs and chimneys.
    const crows = g.birds.list.filter(b => b.crow); out.crows = { count: crows.length, high: crows.filter(b => b.perch.y >= 3.4).length };
    // The station lot (seed moss-424): a platform step, a climbable engine, and a landmark that can be discovered.
    // The railway station (seed moss-424, the line west of town): staff and passengers on the platform, a canopy to sit on.
    g.teleport(-380, .3, 290); step(70); const st = g.world.landmarks.find(l => l.kind === 'station');
    out.station = { found: !!st, name: st?.name, people: g.people.list.filter(p => Math.hypot(p.x - st.x, p.z - st.z) < 20).length };
    const canopy = g.world.colliders.find(s => s.kind === 'roof' && s.shape === 'box' && Math.hypot((s.minX + s.maxX) / 2 - st.x, (s.minZ + s.maxZ) / 2 - st.z) < 12);
    g.teleport((canopy.minX + canopy.maxX) / 2, canopy.maxY + .3, (canopy.minZ + canopy.maxZ) / 2); step(40); out.station.onCanopy = g.player.pos.y;
    g.teleport(-448, .3, -215); step(40); const al = g.world.landmarks.find(l => l.kind === 'allotments');
    out.allot = { found: !!al, name: al?.name };
    g.teleport(al.x - 6.5, .3, al.z + 9); step(40); out.allot.insideGreenhouse = g.player.pos.y;
    g.teleport(al.x - 6.5, 3, al.z + 9); step(40); out.allot.onGreenhouseRoof = g.player.pos.y;
    return out;
  });
  expect(r.ducks.flocks).toBeGreaterThanOrEqual(1); expect(r.ducks.size).toBeGreaterThanOrEqual(4); expect(r.ducks.ducklingsFollow).toBe(true);
  expect(r.ducks.moved).toBeGreaterThan(.8); expect(r.ducks.startles).toBeGreaterThan(0); expect(r.ducks.nearPond).toBe(true);
  expect(r.crows.count).toBeGreaterThanOrEqual(2); expect(r.crows.high).toBeGreaterThanOrEqual(1);
  expect(r.station.found).toBe(true); expect(r.station.name).toBe('the station'); expect(r.station.people).toBeGreaterThanOrEqual(3);
  expect(r.station.onCanopy).toBeGreaterThan(3.5);
  expect(r.allot.found).toBe(true); expect(r.allot.insideGreenhouse).toBeLessThan(.6); expect(r.allot.onGreenhouseRoof).toBeGreaterThan(2);
});

test('indoors and abroad: furnished houses, a works floor, a train you can ride, and a flight to another country', async ({ page }) => {
  await page.goto('/?test=1&seed=moss-424');
  await page.waitForFunction(() => window.__whiskerfield?.getState().ready, null, { timeout: 60000 });
  const r = await page.evaluate(() => {
    const g = window.__whiskerfield, step = n => { for (let i = 0; i < n; i++) g.step(1 / 60); }, out = {};
    g.start();
    // Every ordinary house has a ground floor you can walk into through the front door.
    const houses = g.world.landmarks.filter(l => l.kind === 'house');
    out.houses = houses.length; out.kits = new Set(houses.flatMap(h => h.kits)).size;
    const h = houses.find(l => Math.hypot(l.x - 1, l.z - 7) < 40) || houses[0];
    g.teleport(h.x, .6, h.z); step(40); out.inHouse = { y: +g.player.pos.y.toFixed(2), support: g.getState().support, inside: g.player.pos.x > h.inside.minX && g.player.pos.x < h.inside.maxX };
    const before = g.getState().places; g.discover(); out.houseFound = g.getState().places > before;
    // Walk at a wall: the cat must be stopped, not pass through.
    g.teleport(h.inside.minX + 1, .6, h.z); step(20); g.hold.x = -1; g.setCamera(0); step(90); g.hold.x = 0; out.wallStop = g.player.pos.x > h.inside.minX - .5;
    // Furniture is solid: there is at least one solid piece in every house interior.
    out.furniture = g.physics.query(h.x, h.z, 6).filter(s => ['sofa', 'table', 'bed', 'counter', 'desk', 'shelf', 'chair', 'bench', 'oven', 'wardrobe', 'piano'].includes(s.kind)).length;
    // Works floor and lobby exist as places.
    out.kinds = [...new Set(g.world.landmarks.map(l => l.kind))];
    // Train: wait at the station on the first line east of the square and ride it.
    g.teleport(50, 1.3, -16.5); step(30); const t = g.train; let arrived = false;
    for (let i = 0; i < 60 * 70 && !arrived; i++) { g.step(1 / 60); if (t.state === 'stop' && Math.abs(t.z + 16.5) < .5) arrived = true; }
    out.trainArrived = arrived;
    g.teleport(63, 4.3, -13.3); step(40); out.onTrain = g.getState().support; const z0 = g.player.pos.z; step(60 * 14); out.carried = +(g.player.pos.z - z0).toFixed(1);
    // The carriages are hollow: a cat can stand inside, on the floor between the benches.
    g.teleport(63, 1.3, t.z + 3.2); step(40); out.inCarriage = { support: g.getState().support, y: +g.player.pos.y.toFixed(2), seats: g.physics.query(63, t.z + 3.2, 4).filter(s => s.kind === 'seat').length };
    // Airport: up the steps, into the cabin, the departures card appears; fly to Sunmarch.
    g.teleport(146.1, .3, 12); step(40); g.hold.y = -1; g.setCamera(0); step(60 * 6); g.hold.y = 0; step(20);
    out.boarded = { support: g.getState().support, modal: g.getState().modal, y: +g.player.pos.y.toFixed(2) };
    out.flightOk = g.board('sunmarch'); const phases = []; let last = null;
    let seated = null; for (let i = 0; i < 60 * 90 && g.flight.active; i++) { g.step(1 / 60); if (g.flight.phase !== last) { last = g.flight.phase; phases.push(last); } if (g.flight.phase === 'cruise' && g.flight.t > 14 && !seated) seated = { visible: g.cat.root.visible, atSeat: g.player.pos.distanceTo(g.flight.seat) < .05, high: g.player.pos.y > 30, camInside: g.camera.position.distanceTo(g.flight.seat) < 4 }; }
    out.phases = phases; out.country = g.country; out.seated = seated; out.landedNear = Math.hypot(g.player.pos.x - 144.1, g.player.pos.z + .05) < 1 && g.player.pos.y > 1.8; out.catVisible = g.cat.root.visible; out.doorOpen = [...g.planes.list.values()][0].doorOpen;
    out.seedLabel = document.getElementById('seed-label').textContent; out.airportsAbroad = g.world.airports.length; out.planesAbroad = g.planes.list.size;
    out.saved = JSON.parse(localStorage.getItem('whiskerfield.journey.v1')).country;
    return out;
  });
  expect(r.houses).toBeGreaterThanOrEqual(6); expect(r.kits).toBeGreaterThanOrEqual(4);
  expect(r.inHouse.support).toBe('floor'); expect(r.inHouse.y).toBeCloseTo(.42, 1); expect(r.inHouse.inside).toBe(true); expect(r.houseFound).toBe(true);
  expect(r.wallStop).toBe(true); expect(r.furniture).toBeGreaterThanOrEqual(3);
  expect(r.trainArrived).toBe(true); expect(r.onTrain).toBe('car'); expect(r.carried).toBeGreaterThan(5);
  expect(r.inCarriage.support).toBe('car'); expect(r.inCarriage.y).toBeCloseTo(1.06, 1); expect(r.inCarriage.seats).toBeGreaterThanOrEqual(4);
  expect(r.boarded.modal).toBe('flight-modal'); expect(r.boarded.support).toBe('floor');
  expect(r.flightOk).toBe(true); expect(r.phases).toEqual(['board', 'taxi', 'roll', 'climb', 'cruise', 'descend', 'rollout', 'taxiIn', 'stand', null]);
  expect(r.seated).toEqual({ visible: true, atSeat: true, high: true, camInside: true });
  expect(r.country).toBe('sunmarch'); expect(r.landedNear).toBe(true); expect(r.catVisible).toBe(true); expect(r.doorOpen).toBe(1); expect(r.seedLabel).toContain('Sunmarch');
  expect(r.airportsAbroad).toBeGreaterThanOrEqual(1); expect(r.planesAbroad).toBeGreaterThanOrEqual(1); expect(r.saved).toBe('sunmarch');
  await page.reload(); await page.waitForFunction(() => window.__whiskerfield?.getState().ready, null, { timeout: 60000 });
  expect(await page.evaluate(() => window.__whiskerfield.country)).toBe('sunmarch');
});

test('time passes: dusk, night with lit windows, and dawn; the clock on the HUD follows', async ({ page }) => {
  const errors = await enter(page);
  const r = await page.evaluate(() => {
    const g = window.__whiskerfield, out = {}, step = n => { for (let i = 0; i < n; i++) g.step(1 / 60); };
    out.mode = g.day.mode; out.hourType = typeof g.day.hour;
    const look = h => { g.day.mode = 'pin'; g.day.hour = h; g.day.update(1 / 60, g.camera, g.player.pos, g.world.lamps); return { label: g.day.label(), period: g.day.period(), night: +g.day.look.night.toFixed(2), sun: +g.day.look.sunI.toFixed(2), stars: +g.day.stars.material.opacity.toFixed(2), lit: g.day.lights.some(l => l.intensity > .05) }; };
    out.noon = look(12); out.dusk = look(18.6); out.night = look(1); out.dawn = look(6.2);
    out.lamps = g.world.lamps.length; out.cardPeriod = document.getElementById('clock-card').dataset.period !== undefined;
    g.day.mode = 'cycle'; const h0 = g.day.hour; for (let i = 0; i < 30; i++) g.day.update(1 / 60, g.camera, g.player.pos, g.world.lamps); out.advances = g.day.hour !== h0;
    return out;
  });
  expect(errors).toEqual([]);
  expect(r.mode).toBe('cycle'); expect(r.hourType).toBe('number');
  expect(r.noon.period).toBe('afternoon'); expect(r.noon.night).toBeLessThan(.05); expect(r.noon.label).toMatch(/12:0\d/);
  expect(r.dusk.period).toBe('sunset'); expect(r.night.period).toBe('night'); expect(r.night.night).toBeGreaterThan(.8); expect(r.dawn.period).toBe('dawn');
  expect(r.night.sun).toBeLessThan(r.noon.sun); expect(r.night.stars).toBeGreaterThan(.5); expect(r.noon.stars).toBeLessThan(.05);
  expect(r.lamps).toBeGreaterThan(0); expect(r.night.lit).toBe(true); expect(r.noon.lit).toBe(false); expect(r.advances).toBe(true);
});

test('water: a lake with a jetty and boats that go where you point them, a seafront, open sea; balloons that ride the wind', async ({ page }) => {
  const errors = await enter(page);
  const r = await page.evaluate(() => {
    const g = window.__whiskerfield, out = {}, step = n => { for (let i = 0; i < n; i++) g.step(1 / 60); };
    // The lake fills the block south-west of the square; the cat cannot walk into it.
    g.teleport(-103, .3, 80); step(30); out.lake = g.world.landmarks.find(l => l.kind === 'lake'); out.lakeWater = !!g.world.inWater(-72, 72);
    g.setCamera(-Math.PI / 2); g.hold.y = -1; step(120); g.hold.y = 0; out.stoppedAtEdge = g.player.pos.x < -92 && g.player.pos.x > -97 && !g.world.inWater(g.player.pos.x, g.player.pos.z);
    // Along the jetty, onto a boat; point it east and it keeps going; point it north and it turns; it stops at the shore.
    g.teleport(-92, .6, 72); step(30); out.jetty = g.getState().support; g.setCamera(0); g.hold.y = -1; step(28); g.hold.y = 0; step(10); out.aboard = g.getState().support;
    const boat = g.vehicles.list.get('-1,1:boat0'); const x0 = g.player.pos.x;
    g.hold.x = 1; step(60); g.hold.x = 0; step(240); out.sailed = { dx: +(g.player.pos.x - x0).toFixed(1), speed: +boat.speed.toFixed(1), support: g.getState().support, onBoat: Math.hypot(g.player.pos.x - boat.x, g.player.pos.z - boat.z) < 2.2 };
    g.hold.y = -1; step(30); g.hold.y = 0; step(60 * 12); out.shore = { z: +boat.z.toFixed(1), speed: +boat.speed.toFixed(1), heading: +boat.heading.toFixed(2), support: g.getState().support };
    // Pushing toward dry land from a moored boat walks the cat off instead of steering.
    g.setCamera(0); g.hold.y = -1; step(90); g.hold.y = 0; out.walkedOff = g.getState().support !== 'boat' && boat.speed < .1;
    // The seafront: a promenade, a pier, a lighthouse, boats at the quay; nothing but sea beyond; no airports or stations out there.
    g.teleport(0, .3, -214); step(30); out.coast = g.world.landmarks.find(l => l.kind === 'coast'); out.seaIsWater = !!g.world.inWater(0, -300)?.sea; out.beachDry = !g.world.inWater(0, -236);
    out.pier = g.physics.query(0, -250, .3).some(s => s.kind === 'pier'); out.lighthouse = g.physics.query(0, -264.2, .5).some(s => s.kind === 'lighthouse'); out.harbourBoats = [...g.vehicles.list.values()].filter(v => v.kind === 'boat' && v.spec.id.startsWith('0,-3')).length;
    out.seaTheme = g.world.theme(0, -5); out.noSeaAirport = g.world.airports.every(a => a.z > -200); out.seaChunkLoaded = g.world.chunks.has('0,-4');
    // Balloon field: up the steps into the basket, wait, and go up; the basket carries the cat; it comes down again.
    g.teleport(19.7, .3, -55.5); step(30); out.balloonField = g.world.landmarks.find(l => l.kind === 'balloons'); g.setCamera(Math.PI / 2); g.hold.y = -1; step(60); g.hold.y = 0; step(30);
    const v = g.vehicles.list.get('0,-1:3:balloon'); out.inBasket = { support: g.getState().support, y: +g.player.pos.y.toFixed(2) };
    step(60 * 12); out.rising = { state: v.state, y: +v.y.toFixed(1), catY: +g.player.pos.y.toFixed(1), support: g.getState().support };
    let n = 0; while (v.state !== 'landed' && n < 60 * 240) { step(30); n += 30; }
    out.landed = { state: v.state, moved: +Math.hypot(v.x - 16.5, v.z + 55.5).toFixed(0), catWith: Math.hypot(g.player.pos.x - v.x, g.player.pos.z - v.z) < 1.2, catY: +(g.player.pos.y - v.y).toFixed(2) };
    return out;
  });
  expect(errors).toEqual([]);
  expect(r.lake).toBeTruthy(); expect(r.lakeWater).toBe(true); expect(r.stoppedAtEdge).toBe(true);
  expect(r.jetty).toBe('jetty'); expect(r.aboard).toBe('boat');
  expect(r.sailed.dx).toBeGreaterThan(8); expect(r.sailed.speed).toBeGreaterThan(3); expect(r.sailed.support).toBe('boat'); expect(r.sailed.onBoat).toBe(true);
  expect(r.shore.speed).toBe(0); expect(r.shore.z).toBeLessThan(54); expect(Math.abs(r.shore.heading)).toBeLessThan(.2); expect(r.shore.support).toBe('boat'); expect(r.walkedOff).toBe(true);
  expect(r.coast).toBeTruthy(); expect(r.seaIsWater).toBe(true); expect(r.beachDry).toBe(true); expect(r.pier).toBe(true); expect(r.lighthouse).toBe(true); expect(r.harbourBoats).toBe(2);
  expect(r.seaTheme).toBe('sea'); expect(r.noSeaAirport).toBe(true); expect(r.seaChunkLoaded).toBe(true);
  expect(r.balloonField).toBeTruthy(); expect(r.inBasket.support).toBe('balloon'); expect(r.inBasket.y).toBeCloseTo(.5, 1);
  expect(r.rising.state).toBe('rising'); expect(r.rising.y).toBeGreaterThan(5); expect(r.rising.catY).toBeGreaterThan(5); expect(r.rising.support).toBe('balloon');
  expect(r.landed.state).toBe('landed'); expect(r.landed.moved).toBeGreaterThan(60); expect(r.landed.catWith).toBe(true); expect(r.landed.catY).toBeCloseTo(.5, 1);
});

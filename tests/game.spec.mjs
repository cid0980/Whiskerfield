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
  const before = await page.evaluate(() => window.__whiskerfield.people.list.map(p => [p.x, p.z, p.axis, p.dir]));
  expect(before.length).toBeGreaterThan(5);
  await page.waitForTimeout(2500);
  const after = await page.evaluate(() => window.__whiskerfield.people.list.map(p => [p.x, p.z, p.axis, p.dir, p.state]));
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

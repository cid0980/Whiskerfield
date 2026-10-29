import { test, expect } from '@playwright/test';

async function enter(page, path = '/?test=1') {
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
    const b = g.world.buildings.find(b => b.id === '0,0:0');
    g.teleport(b.x, 0, b.z + b.d / 2 + 0.55);
    return { x: b.x, z: b.z, h: b.h, d: b.d };
  });
  await page.keyboard.down('e');
  await page.waitForFunction(() => window.__whiskerfield.getState().climbing);
  // Advance the physics deterministically while the real E key is held, so the
  // assertion does not depend on the software renderer's frame rate.
  await page.evaluate(() => {
    const g = window.__whiskerfield;
    for (let i = 0; i < 420 && g.getState().roofs < 1; i++) { g.step(1 / 60); g.discover(); }
  });
  await page.waitForFunction(() => window.__whiskerfield.getState().roofs >= 1);
  await page.keyboard.up('e');
  await page.waitForFunction(h => window.__whiskerfield.getState().grounded && window.__whiskerfield.getState().position[1] >= h - 0.2, wall.h);
  await expect(page.locator('#roof-count')).toHaveText('1');
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

test('mobile controls are usable and do not overlap', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, reducedMotion: 'reduce' });
  const page = await context.newPage();
  const errors = await enter(page);
  await expect(page.locator('#touch-controls')).toBeVisible();
  const joy = await page.locator('#joystick').boundingBox();
  const rest = await page.locator('#rest-button').boundingBox();
  const run = await page.locator('#touch-run').boundingBox();
  expect(rest.x + rest.width).toBeLessThan(run.x);
  expect(rest.x).toBeGreaterThan(joy.x + joy.width);

  const before = await page.evaluate(() => window.__whiskerfield.getState().position);
  await page.mouse.move(joy.x + joy.width / 2, joy.y + joy.height / 2);
  await page.mouse.down();
  await page.mouse.move(joy.x + joy.width / 2, joy.y + joy.height / 2 - 35);
  await page.waitForFunction(p => {
    const q = window.__whiskerfield.getState().position;
    return Math.hypot(q[0] - p[0], q[2] - p[2]) > 1;
  }, before);
  await page.mouse.up();

  await page.evaluate(() => {
    const g = window.__whiskerfield;
    const b = g.world.buildings.find(b => b.id === '0,0:0');
    g.teleport(b.x, 0, b.z + b.d / 2 + 0.55);
  });
  const climb = await page.locator('#touch-climb').boundingBox();
  await page.mouse.move(climb.x + climb.width / 2, climb.y + climb.height / 2);
  await page.mouse.down();
  await page.waitForFunction(() => window.__whiskerfield.getState().climbing);
  await page.mouse.up();
  await page.screenshot({ path: '../screenshots/test-mobile.png' });
  expect(errors).toEqual([]);
  await context.close();
});

test('PWA shell, icons, and offline cache are complete', async ({ page }) => {
  await page.goto('/?test=1');
  await page.waitForFunction(() => window.__whiskerfield?.getState().offlineReady);
  const manifest = await (await page.request.get('/manifest.webmanifest')).json();
  expect(manifest.display).toBe('standalone');
  expect(manifest.icons.length).toBeGreaterThanOrEqual(3);
  for (const icon of manifest.icons) expect((await page.request.get('/' + icon.src.replace('./', ''))).status()).toBe(200);
  const cached = await page.evaluate(async () => {
    const keys = await caches.keys();
    const cache = await caches.open(keys.find(k => k.startsWith('whiskerfield-')));
    return (await cache.keys()).map(r => new URL(r.url).pathname);
  });
  for (const file of ['/', '/index.html', '/styles.css', '/assets/game.js', '/manifest.webmanifest', '/icons/icon-192.png', '/icons/icon-512.png', '/icons/icon-maskable-512.png']) expect(cached).toContain(file);
  await page.click('#install-button');
  await expect(page.locator('#install-modal')).toBeVisible();
  await expect(page.locator('#install-ready')).toContainText('ready to play offline');
});

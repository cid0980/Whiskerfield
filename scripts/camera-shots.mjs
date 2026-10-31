// Camera probe: puts the cat in every interior / moving support and reports where the camera ends
// up there, then saves a screenshot per scene. Deterministic: the camera is settled by g.settle()
// instead of waiting for slow software-WebGL frames.
//   node scripts/camera-shots.mjs after [house|train|plane|tower|sky|balloon|planeout|street]
import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

const tag = process.argv[2] || 'now';
await mkdir('/home/user/screenshots', { recursive: true });
const browser = await chromium.launch({ args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });

const measure = () => {
  const g = window.__whiskerfield, cam = g.camera.position, cat = g.player.pos;
  const box = (o, d, s, pad = 0) => {
    let tmin = 0, tmax = 1;
    for (const [oo, dd, lo, hi] of [[o[0], d[0], s.minX - pad, s.maxX + pad], [o[1], d[1], s.minY - pad, s.maxY + pad], [o[2], d[2], s.minZ - pad, s.maxZ + pad]]) {
      if (Math.abs(dd) < 1e-7) { if (oo < lo || oo > hi) return Infinity; } else { let a = (lo - oo) / dd, b = (hi - oo) / dd; if (a > b) [a, b] = [b, a]; tmin = Math.max(tmin, a); tmax = Math.min(tmax, b); if (tmin > tmax) return Infinity; }
    }
    return tmin > .02 ? tmin : Infinity;
  };
  const eye = [cam.x, cam.y, cam.z], toCat = [cat.x - cam.x, cat.y + .3 - cam.y, cat.z - cam.z];
  let blocked = null;
  for (const s of g.physics.query(cat.x, cat.z, 9)) {
    if (s.shape === 'ellipsoid' || s.shape === 'roof' || s.person || s.sensor || s.maxY - s.minY < .3) continue;
    const t = box(eye, toCat, s, 0);
    if (t < .97 && (!blocked || t < blocked.t)) blocked = { t: +t.toFixed(2), kind: s.kind };
  }
  let inside = null;
  for (const s of g.physics.query(cam.x, cam.z, .5)) {
    if (s.sensor || s.person || s.shape === 'roof' || s.shape === 'ellipsoid') continue;
    if (cam.x > s.minX && cam.x < s.maxX && cam.z > s.minZ && cam.z < s.maxZ && cam.y > s.minY && cam.y < s.maxY) inside = { kind: s.kind, top: +s.maxY.toFixed(2) };
  }
  const fwd = new (cam.constructor)(0, 0, -1).applyQuaternion(g.camera.quaternion);
  const want = cat.clone(); want.y += .3; want.sub(cam).normalize();
  const aimErr = Math.acos(Math.max(-1, Math.min(1, fwd.dot(want)))) * 180 / Math.PI;
  const ndc = cat.clone(); ndc.y += .25; ndc.project(g.camera);
  const st = g.getState();
  return { cam: [+cam.x.toFixed(2), +cam.y.toFixed(2), +cam.z.toFixed(2)], dist: +cam.distanceTo(cat).toFixed(2), blocked, inside, indoors: st.indoors, support: st.support, aimErr: +aimErr.toFixed(1), ndc: [+ndc.x.toFixed(2), +ndc.y.toFixed(2), +ndc.z.toFixed(2)], pitch: +st.cameraPitch.toFixed(2), yaw: +st.cameraYaw.toFixed(2), head: +g.physics.headroomAbove(cat.x, cat.z, cat.y, .35).toFixed(2) };
};

let page;
const scenes = {
  house: async () => { const r = await page.evaluate(() => {
    const g = window.__whiskerfield, step = n => { for (let i = 0; i < n; i++) g.step(1 / 60); };
    const h = g.world.landmarks.filter(l => l.kind === 'house').find(l => Math.hypot(l.x - 1, l.z - 7) < 40) || g.world.landmarks.find(l => l.kind === 'house');
    g.teleport(h.x, .6, h.z); step(40);
    // Stand clear of the nearest wall (the house centre can be right against a room divider),
    // so the shot shows a room, not a cat with its nose on a wall.
    let best = null;
    for (const s of g.physics.query(g.player.pos.x, g.player.pos.z, 3)) {
      if (s.kind !== 'wall' || s.person || s.sensor) continue;
      const cx = Math.max(s.minX, Math.min(g.player.pos.x, s.maxX)), cz = Math.max(s.minZ, Math.min(g.player.pos.z, s.maxZ));
      const d = Math.hypot(g.player.pos.x - cx, g.player.pos.z - cz);
      if (!best || d < best.d) best = { d, nx: (g.player.pos.x - cx) / (d || 1), nz: (g.player.pos.z - cz) / (d || 1) };
    }
    if (best && best.d < 2.2) g.teleport(g.player.pos.x + best.nx * (2.4 - best.d), .6, g.player.pos.z + best.nz * (2.4 - best.d));
    step(40);
    // Pick the roomiest angle: a room has four walls, and a shot fired straight into one is a
    // close-up of plaster. A player would simply turn, so the probe turns for them.
    let pick = { yaw: .6, distance: -1 }, worst = Infinity;
    for (let i = 0; i < 8; i++) {
      const yaw = i * Math.PI / 4; g.setCamera(yaw, .3, 5.4); step(6); g.settle(150);
      const c = g.cameraInfo(); if (c.distance > pick.distance) pick = { yaw, distance: c.distance }; worst = Math.min(worst, c.distance);
    }
    g.setCamera(pick.yaw, .3, 5.4); step(6); g.settle(150);
    window.__pick = { worst: +worst.toFixed(2), best: pick };
    return { id: h.id };
  }); return r; },
  train: async () => page.evaluate(() => {
    const g = window.__whiskerfield, t = g.train; let n = 0;
    g.teleport(50, 1.3, -16.5);
    while (!(t.state === 'stop' && Math.abs(t.z + 16.5) < .5) && n < 60 * 90) { g.step(1 / 60); n++; }
    g.teleport(63, 1.3, t.z + 3.2);
    for (let i = 0; i < 40; i++) g.step(1 / 60);
    g.setCamera(Math.PI / 2, .3, 5.4); g.settle(120);
    return { support: g.getState().support };
  }),
  plane: async () => page.evaluate(() => {
    const g = window.__whiskerfield, step = n => { for (let i = 0; i < n; i++) g.step(1 / 60); };
    g.teleport(146.1, .3, 12); step(40); g.setCamera(0); g.hold.y = -1; step(60 * 6); g.hold.y = 0; step(20);
    document.querySelector('#flight-modal [data-close]')?.click();
    g.teleport(144.1, 1.95, -.05); step(30);
    g.setCamera(-.9, .25, 5.4); g.settle(140);
    return { support: g.getState().support, modal: g.getState().modal, cat: g.player.pos.toArray().map(v => +v.toFixed(2)) };
  }),
  tower: async () => page.evaluate(() => {
    let out;
    const g = window.__whiskerfield, step = n => { for (let i = 0; i < n; i++) g.step(1 / 60); };
    // A tower with a lift: ride it to the second floor and look around from inside.
    g.teleport(-160.5, .3, -74.5); step(60);
    const chunk = [...g.world.chunks.values()].find(c => c.lifts?.length), spec = chunk.lifts[0], car = g.lifts.cars.get(spec.id);
    out = { levels: spec.levels.length };
    g.teleport(spec.x, .6, spec.z + 2.2); step(30); g.setCamera(0); g.hold.y = -1; step(40); g.hold.y = 0;
    step(360);
    g.setCamera(.9, .3, 5.4); g.settle(120);
    return { y: +g.player.pos.y.toFixed(2), level: car.level, support: g.getState().support };
  }),
  sky: async () => page.evaluate(() => {
    const g = window.__whiskerfield; g.teleport(4, .4, 6); for (let i = 0; i < 30; i++) g.step(1 / 60);
    g.setCamera(.5, -1.0, 5.4); g.settle(160);
    return { pitch: g.getState().cameraPitch };
  }),
  balloon: async () => page.evaluate(() => {
    const g = window.__whiskerfield, step = n => { for (let i = 0; i < n; i++) g.step(1 / 60); };
    g.teleport(19.7, .3, -55.5); step(30); g.setCamera(Math.PI / 2); g.hold.y = -1; step(60); g.hold.y = 0; step(30);
    step(60 * 25);
    const v = g.vehicles.list.get('0,-1:3:balloon');
    g.settle(60);
    return { state: v.state, y: +v.y.toFixed(1), lag: +g.camera.position.distanceTo(g.player.pos).toFixed(2) };
  }),
  // Seen from outside on the apron: the shell must still look like a plane.
  planeout: async () => page.evaluate(() => {
    const g = window.__whiskerfield;
    g.teleport(142, .4, 14); for (let i = 0; i < 30; i++) g.step(1 / 60);
    g.setCamera(Math.PI, .18, 11); g.settle(160); return {};
  }),
  street: async () => page.evaluate(() => {
    const g = window.__whiskerfield; g.teleport(28.5, .4, 6); for (let i = 0; i < 30; i++) g.step(1 / 60);
    g.setCamera(.7, .3, 5.4); g.settle(120); return {};
  }),
};

const want = process.argv[3] ? [process.argv[3]] : Object.keys(scenes);
for (const key of want) {
  page = await browser.newPage({ viewport: { width: 760, height: 470 } });
  page.on('pageerror', e => console.log('PAGE ERROR', key, e.message));
  await page.goto('http://localhost:3000/?test=1&seed=moss-424');
  await page.waitForFunction(() => window.__whiskerfield?.getState().ready);
  await page.click('#start-button');
  await page.waitForFunction(() => getComputedStyle(document.getElementById('welcome')).opacity === '0');
  await page.evaluate(() => { const g = window.__whiskerfield; g.renderer.setPixelRatio(.5); g.renderer.shadowMap.enabled = false; g.world.radius = 1; g.world.center = ''; });
  const info = await scenes[key]();
  const m = await page.evaluate(measure);
  await page.screenshot({ path: `/home/user/screenshots/${tag}-${key}.png`, timeout: 180000 });
  const after = await page.evaluate(measure);
  console.log(key.padEnd(8), JSON.stringify({ ...info, ...m }));
  if (Math.abs(after.aimErr - m.aimErr) > 3 || Math.hypot(after.cam[0] - m.cam[0], after.cam[2] - m.cam[2]) > .4) console.log('  DRIFTED', JSON.stringify(after));
  await page.close();
}
await browser.close();

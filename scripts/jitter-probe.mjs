// Cat-jitter probe: walks the cat through scenery and counts erratic behaviour — auto-scrambles
// onto knee-high junk, bounces off overlapping colliders (position flips), and heading snaps.
// Serves nothing itself: start `npm start` first (port 3000). To compare a change against the
// previous build, `git worktree add /tmp/before HEAD`, build there, `PORT=3100 node server.mjs`
// in that directory, and probe both:
//   node scripts/jitter-probe.mjs 3000 after
//   node scripts/jitter-probe.mjs 3100 before
import { chromium } from '@playwright/test';

const port = process.argv[2] || '3000', tag = process.argv[3] || 'now';
const browser = await chromium.launch({ args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 640, height: 400 } });
page.on('pageerror', e => console.log('PAGE ERROR', e.message));
await page.goto(`http://localhost:${port}/?test=1&seed=moss-424`);
await page.waitForFunction(() => window.__whiskerfield?.getState().ready);
await page.click('#start-button');
await page.waitForFunction(() => getComputedStyle(document.getElementById('welcome')).opacity === '0');
await page.evaluate(() => { const g = window.__whiskerfield; g.renderer.setPixelRatio(.4); g.renderer.shadowMap.enabled = false; g.world.radius = 2; g.world.center = ''; });

const run = ({ x, z, yaw, steps }) => {
  const g = window.__whiskerfield;
  g.teleport(x, .3, z); for (let i = 0; i < 40; i++) g.step(1 / 60);
  g.setCamera(yaw); g.hold.y = -1;
  const ys = [], path = [];
  const hits = []; let scrambles = 0, climbing = false, flips = 0, dir = null, airborne = 0, jerk = 0, maxStep = 0;
  for (let i = 0; i < steps; i++) {
    g.step(1 / 60);
    const p = g.player.pos;
    if (g.player.climbing && !climbing) { scrambles++; hits.push({ kind: g.player.climbing.solid?.kind, auto: !!g.player.climbing.solid?.auto, h: +(g.player.climbing.solid.maxY - g.player.climbing.solid.minY).toFixed(2), at: [+p.x.toFixed(1), +p.z.toFixed(1)] }); }
    climbing = !!g.player.climbing;
    if (!g.player.grounded && g.player.vy < .1) airborne++;
    path.push([p.x, p.z]);
    if (i > 2) {
      const a = Math.atan2(p.x - path[i - 1][0], p.z - path[i - 1][1]);
      if (dir !== null) {
        let d = a - dir; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI;
        if (Math.abs(d) > 1.2) flips++;
        jerk += Math.abs(d);
      }
      dir = a;
      maxStep = Math.max(maxStep, Math.hypot(p.x - path[i - 1][0], p.z - path[i - 1][1]));
    }
    ys.push(p.y);
  }
  g.hold.y = 0;
  return { hits, scrambles, flips, airborne, yMax: +Math.max(...ys).toFixed(2), step: +maxStep.toFixed(2), jerk: +jerk.toFixed(1), end: [+g.player.pos.x.toFixed(1), +g.player.pos.z.toFixed(1)] };
};

const lanes = [
  ['pavement-n', 28.45, 30, Math.PI],
  ['pavement-e', 30, -20, 0],
  ['square', 0, 6, 0],
  ['market', 16.5, -16.5, Math.PI],
  ['lane-s', -30, -6, Math.PI],
  ['park', 8, 8, Math.PI],
];
const out = {};
for (const [name, x, z, yaw] of lanes) out[name] = await page.evaluate(run, { x, z, yaw, steps: 420 });
console.log(tag, JSON.stringify(out));
await browser.close();

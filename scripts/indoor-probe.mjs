// Probe: which interiors does the camera not recognise as indoors, and where does the eye end up?
//   node scripts/indoor-probe.mjs [port]
import { chromium } from '@playwright/test';
const port = process.argv[2] || '3000';
const browser = await chromium.launch({ args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 640, height: 400 } });
await page.goto(`http://localhost:${port}/?test=1&seed=moss-424`);
await page.waitForFunction(() => window.__whiskerfield?.getState().ready);
await page.click('#start-button');
await page.waitForFunction(() => getComputedStyle(document.getElementById('welcome')).opacity === '0');
await page.evaluate(() => { const g = window.__whiskerfield; g.renderer.setPixelRatio(.4); g.renderer.shadowMap.enabled = false; g.world.radius = 1; g.world.center = ''; });

const out = await page.evaluate(() => {
  const g = window.__whiskerfield, step = n => { for (let i = 0; i < n; i++) g.step(1 / 60); };
  const rows = [];
  const spots = g.world.landmarks.filter(l => l.inside);
  const seen = {};
  const keep = spots.filter(l => (seen[l.kind] = (seen[l.kind] || 0) + 1) <= 3);
  for (const l of keep) {
    const b = l.inside;
    // Stand 1.2 m inside the doorway-side wall, in the middle of the far half of the room.
    const x = (b.minX + b.maxX) / 2, z = (b.minZ + b.maxZ) / 2;
    g.teleport(x, .6, z); step(30);
    g.setCamera(.6, .3, 5.4); step(8); g.settle(120);
    const c = g.cameraInfo(), p = g.player.pos;
    const head = g.physics.headroomAbove(p.x, p.z, p.y, .35);
    const above = g.physics.query(p.x, p.z, 1.2).map(s => ({ shape: s.shape, kind: s.kind, minY: +s.minY.toFixed(2), maxY: +s.maxY.toFixed(2), w: +(s.maxX - s.minX).toFixed(1), d: +(s.maxZ - s.minZ).toFixed(1) })).filter(s => s.minY > p.y + .3).sort((a, b2) => a.minY - b2.minY).slice(0, 3);
    rows.push({ kind: l.kind, id: l.id, y: +p.y.toFixed(2), head: head === Infinity ? 'inf' : +head.toFixed(2), indoors: c.indoors, dist: c.distance, blocked: c.blocked && c.blocked.kind, above });
  }
  return rows;
});
for (const r of out) console.log(JSON.stringify(r));
await browser.close();

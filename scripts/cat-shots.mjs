// Close-up look at the cat model from a few angles, for judging the silhouette.
import { chromium } from '@playwright/test';
const browser = await chromium.launch({ args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 760, height: 520 } });
page.setDefaultTimeout(120000);
await page.goto('http://localhost:3000/?test=1&seed=moss-424');
await page.waitForFunction(() => window.__whiskerfield?.getState().ready);
await page.click('#start-button');
await page.waitForFunction(() => getComputedStyle(document.getElementById('welcome')).opacity === '0');
const shots = [
  ['side', [1.0, .34, 0], [0, .22, 0]],
  ['front', [0, .32, 1.0], [0, .22, 0]],
  ['quarter', [.82, .46, .82], [0, .22, 0]],
  ['rear', [-.7, .42, -.75], [0, .22, 0]],
  ['top', [.05, 1.1, .05], [0, .2, 0]],
];
await page.evaluate(() => { const g = window.__whiskerfield; g.hold.x = g.hold.y = 0; g.teleport(1.1, .3, 7.1); for (let i = 0; i < 60; i++) g.step(1 / 60); });
for (const [name, pos, at] of shots) {
  await page.evaluate(([pos, at]) => {
    const g = window.__whiskerfield, p = g.player.pos;
    g.hold.camera = { pos: [p.x + pos[0], p.y + pos[1], p.z + pos[2]], at: [p.x + at[0], p.y + at[1], p.z + at[2]] };
  }, [pos, at]);
  await page.waitForTimeout(600);
  await page.screenshot({ path: `../screenshots/cat-${name}.png` });
}
// and a walking cat, from the side
await page.evaluate(() => {
  const g = window.__whiskerfield, p = g.player.pos;
  g.hold.camera = { pos: [p.x + 1.2, p.y + .34, p.z], at: [p.x, p.y + .22, p.z] };
  g.setCamera(Math.PI / 2); g.hold.y = -1;
});
await page.waitForTimeout(700);
await page.screenshot({ path: '../screenshots/cat-walk.png' });
await page.evaluate(() => { window.__whiskerfield.hold.y = 0; });
await browser.close();

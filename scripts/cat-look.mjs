// Close-up views of the cat, for iterating on the model.
import { chromium } from '@playwright/test';
const browser = await chromium.launch({ args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const page = await browser.newPage({ viewport: { width: 460, height: 340 } });
page.setDefaultTimeout(200000);
await page.goto('http://localhost:3000/?test=1&seed=moss-424');
await page.waitForFunction(() => window.__whiskerfield?.getState().ready);
await page.click('#start-button');
await page.waitForFunction(() => getComputedStyle(document.getElementById('welcome')).opacity === '0');
await page.evaluate(() => { const g = window.__whiskerfield; g.teleport(0, .3, 6); for (let i = 0; i < 60; i++) g.step(1 / 60); g.player.heading = 0; });
const views = [['side', '1.0:.40:0'], ['front', '.5:.38:.95'], ['back', '-.55:.45:-.9']];
for (const v of views) {
  const [name, spec] = v;
  const [dx, dy, dz] = spec.split(':').map(Number);
  await page.evaluate(([dx, dy, dz]) => {
    const g = window.__whiskerfield, p = g.player.pos;
    g.hold.camera = { pos: [p.x + dx, p.y + dy, p.z + dz], at: [p.x, p.y + .26, p.z + .04] };
  }, [dx, dy, dz]);
  await page.waitForTimeout(300);
  await page.screenshot({ path: `../screenshots/look-${name}.png` });
}
await browser.close();

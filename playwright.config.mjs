import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 240000, // software WebGL: a heavy test plus its screenshot can take four minutes
  expect: { timeout: 20000 },
  fullyParallel: false,
  workers: 1,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:3000',
    viewport: { width: 1000, height: 700 },
    reducedMotion: 'reduce',
    launchOptions: { args: ['--no-sandbox', '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] },
  },
  webServer: { command: 'npm start', url: 'http://localhost:3000', reuseExistingServer: true, timeout: 30000 },
});

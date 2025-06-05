import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:5182', // 👈 Change this if your app runs on a different port
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  webServer: {
    command: 'npm run dev', // or 'npm start' depending on your app
    port: 5182,
    reuseExistingServer: !process.env.CI,
  },
});

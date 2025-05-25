// playwright.config.js
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  use: {
    headless: true,
    baseURL: 'http://localhost:5177', // change this if your app runs on a different port
  },
});

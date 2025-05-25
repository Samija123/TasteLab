import { test, expect } from '@playwright/test';

test('homepage should load and show correct title', async ({ page }) => {
  await page.goto('/'); // uses baseURL from playwright.config.js

  // Check if the page title contains "TasteLab"
  await expect(page).toHaveTitle(/TasteLab/);

  // Example: check if a key element is visible
  const dashboard = page.locator('text=Dashboard');
  await expect(dashboard).toBeVisible();
});

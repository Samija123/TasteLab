import { test, expect } from '@playwright/test';

test.describe('Navigation tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // Start from homepage before each test
  });

  test('Navigation links are visible', async ({ page }) => {
    // Check main nav links by text
    await expect(page.locator('text=Dashboard')).toBeVisible();
    await expect(page.locator('text=Recipes')).toBeVisible();
    await expect(page.locator('text=Wellness')).toBeVisible();
    await expect(page.locator('text=Grocery List')).toBeVisible();
    await expect(page.locator('text=Profile')).toBeVisible();
  });

  test('Navigate to Recipes page', async ({ page }) => {
    await page.click('text=Recipes');
    await expect(page).toHaveURL(/.*recipes/);
    await expect(page.locator('text=Recipe Categories')).toBeVisible();
  });

  test('Navigate to Wellness page', async ({ page }) => {
    await page.click('text=Wellness');
    await expect(page).toHaveURL(/.*wellness/);
    await expect(page.locator('text=Fitness Tracking')).toBeVisible();
  });

  test('Navigate to Grocery List page', async ({ page }) => {
    await page.click('text=Grocery List');
    await expect(page).toHaveURL(/.*grocery-list/);
    await expect(page.locator('text=Meal Planning')).toBeVisible();
  });

  test('Navigate to Profile page', async ({ page }) => {
    await page.click('text=Profile');
    await expect(page).toHaveURL(/.*profile/);
    await expect(page.locator('text=User Preferences')).toBeVisible();
  });
});

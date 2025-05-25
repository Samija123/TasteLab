import { test, expect } from '@playwright/test';

test('should load and show title and description', async ({ page }) => {
  await page.goto('http://localhost:5178/recipes'); // <-- Update URL to your app’s recipes page
  
  await expect(page.locator('h1')).toHaveText('Recipe Collection');
  await expect(page.locator('p.text-gray-600').first()).toHaveText('Discover healthy, delicious recipes for every meal.');
});

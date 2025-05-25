import { test, expect } from '@playwright/test';

test('Homepage loads successfully', async ({ page }) => {
  await page.goto('http://localhost:5174'); 

  
  await expect(page.locator('h1')).toBeVisible();

 
  await expect(page).toHaveTitle(/TasteLab/i);
});

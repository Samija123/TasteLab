import { test, expect } from '@playwright/test';

test('User profile loads and updates (mocked backend)', async ({ page }) => {
  await page.goto('http://localhost:5179/profile');

  // Wait for label to appear
  await page.waitForSelector('label:text("First Name")', { timeout: 10000 });

  // Check input values using label selectors with extended timeout
  await expect(page.getByLabel('First Name')).toHaveValue('Samija', { timeout: 10000 });
  await expect(page.getByLabel('Last Name')).toHaveValue('Hadzic');
  await expect(page.getByLabel('Email')).toHaveValue('Samija123@gmail.com');
  await expect(page.getByLabel('Phone')).toHaveValue('+387 62 987 654');
});

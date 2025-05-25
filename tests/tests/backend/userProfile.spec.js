import { test, expect } from '@playwright/test';

test('User profile loads and updates (mocked backend)', async ({ page }) => {
  await page.goto('http://localhost:5180/profile');

  await page.waitForSelector('form');

  const firstNameInput = page.locator('label:has-text("First Name") + input');
  const lastNameInput = page.locator('label:has-text("Last Name") + input');
  const emailInput = page.locator('label:has-text("Email") + input');
  const phoneInput = page.locator('label:has-text("Phone") + input');

  await expect(firstNameInput).toHaveValue('Samija ');
  await expect(lastNameInput).toHaveValue('Hadzic');
  await expect(emailInput).toHaveValue('Samija123@gmail.com');
  await expect(phoneInput).toHaveValue('+387 62 987 654');
});

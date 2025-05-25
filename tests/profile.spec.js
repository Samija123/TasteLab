import { test, expect } from '@playwright/test';

test('Profile page loads and shows main elements', async ({ page }) => {
  await page.goto('/profile');

  // Check the main heading and description
  await expect(page.locator('h1')).toHaveText('Your Profile');
  // Narrowed selector for the description paragraph
  await expect(page.locator('h1 + p')).toHaveText('Manage your account settings and preferences.');

  // Check profile card info
  const profileCard = page.locator('.card').first();
  await expect(profileCard.locator('h2')).toHaveText('Samija Hadzic');
  await expect(profileCard.locator('p.opacity-90')).toHaveText('samija123@gmail.com');

  // Check menu items in the sidebar
  const menuItems = profileCard.locator('nav a');
  await expect(menuItems).toHaveCount(5); // 4 menu + 1 logout

  // Check first menu item is active and has correct label
  await expect(menuItems.nth(0)).toHaveClass(/bg-primary-50/);
  await expect(menuItems.nth(0)).toContainText('Account Information');

  // Check other menu items are not active
  for (let i = 1; i < 4; i++) {
    await expect(menuItems.nth(i)).not.toHaveClass(/bg-primary-50/);
  }
  await expect(menuItems.nth(4)).toContainText('Log Out');

  // Check form fields in the account info form
  const form = page.locator('form');
  await expect(form.locator('input[type="text"]').nth(0)).toHaveValue('Samija ');
  await expect(form.locator('input[type="text"]').nth(1)).toHaveValue('Hadzic');
  await expect(form.locator('input[type="email"]')).toHaveValue('Samija123@gmail.com');
  await expect(form.locator('input[type="tel"]')).toHaveValue('+387 62 987 654');

  await expect(form.locator('input[type="text"]').nth(2)).toHaveValue('5\'10"');
  await expect(form.locator('input[type="text"]').nth(3)).toHaveValue('100 lbs');
  await expect(form.locator('input[type="date"]')).toHaveValue('2003-01-15');

  const checkboxes = form.locator('input[type="checkbox"]');
  await expect(checkboxes).toHaveCount(6);
  
  await expect(checkboxes.nth(0)).toBeChecked();
  await expect(checkboxes.nth(5)).toBeChecked();

  await expect(form.locator('button').nth(0)).toHaveText('Cancel');
  await expect(form.locator('button').nth(1)).toHaveText('Save Changes');
});

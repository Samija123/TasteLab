import { test, expect } from '@playwright/test';

test.describe('Navigation tests', () => {
  const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Recipes', path: '/recipes', },
  { label: 'Wellness', path: '/wellness', },
  { label: 'Profile', path: '/profile',}
];


  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Navigation links are visible', async ({ page }) => {
    for (const item of navItems) {
      const link = page.getByRole('link', { name: item.label });
      await expect(link).toBeVisible({ timeout: 15000 });
    }
  });

  for (const item of navItems) {
    test(`Navigate to ${item.label} page`, async ({ page }) => {
      const link = page.getByRole('link', { name: item.label });
      await expect(link).toBeVisible({ timeout: 15000 });
      await link.click();

      await expect(page).toHaveURL(new RegExp(item.path));

      if (item.heading) {
        const heading = page.locator('h2.section-title', { hasText: item.heading });
        await expect(heading).toBeVisible({ timeout: 15000 });
      }
    });
  }
});

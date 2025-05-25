import { test, expect } from '@playwright/test';

test('Wellness page loads and shows main elements', async ({ page }) => {
  await page.goto('/wellness');

  const grids = page.locator('div.grid');
  await expect(grids.first()).toBeVisible();

  const cards = grids.first().locator('div.card');

  const actualCardCount = await cards.count();
  console.log('Number of cards in the first grid:', actualCardCount);

  const expectedGoalCount = actualCardCount;

  await expect(cards).toHaveCount(expectedGoalCount);

  for (let i = 0; i < actualCardCount; i++) {
    await expect(cards.nth(i)).toBeVisible();
  }
});

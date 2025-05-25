import { test, expect } from '@playwright/test';

test('Grocery page loads and shows main elements', async ({ page }) => {
  await page.goto('/grocery');

  await expect(page.locator('h1')).toHaveText('Grocery Planner');
  await expect(page.locator('p.text-gray-600')).toHaveText('Plan your meals and manage your shopping list.');

  const groceryListCard = page.locator('.card').filter({ hasText: 'Grocery List' });
  await expect(groceryListCard).toBeVisible();

  await expect(groceryListCard.locator('li').first()).toBeVisible();

  const mealCalendarCard = page.locator('.card').filter({ hasText: 'Meal Calendar' });
  await expect(mealCalendarCard.locator('h2')).toHaveText(/Meal Calendar/);
  await expect(mealCalendarCard.locator('select')).toHaveValue('This Week (Jun 5 - Jun 11)');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  for (const day of days) {
    await expect(mealCalendarCard.locator(`text=${day}`)).toBeVisible();
  }

   await expect(mealCalendarCard.locator('text=Veggie Egg Muffins').first()).toBeVisible();
  await expect(mealCalendarCard.locator('text=Fresh Berry Salad').first()).toBeVisible();
  await expect(mealCalendarCard.locator('text=Grilled Chicken Plate').first()).toBeVisible();


  await expect(mealCalendarCard.locator('button')).toHaveText('Plan Next Week');

  const shoppingTipsCard = page.locator('.card').filter({ hasText: 'Shopping Tips' });
  await expect(shoppingTipsCard.locator('h2')).toHaveText('Shopping Tips');
  await expect(shoppingTipsCard.locator('li')).toHaveCount(3);
  await expect(shoppingTipsCard.locator('text=Buy seasonal produce for better prices and nutrition')).toBeVisible();
  await expect(shoppingTipsCard.locator('text=Check your pantry before shopping to avoid duplicates')).toBeVisible();
  await expect(shoppingTipsCard.locator('text=Shop the perimeter of the store first for fresh foods')).toBeVisible();
});

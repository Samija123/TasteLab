import { test, expect } from '@playwright/test';

test('Grocery page loads with real backend data', async ({ page }) => {
  await page.goto('/grocery');

  const groceryListCard = page.locator('.card').filter({ hasText: 'Grocery List' });
  await expect(groceryListCard).toBeVisible();

 await expect(groceryListCard.locator('li').nth(0)).toHaveText(/Organic Eggs/);
await expect(groceryListCard.locator('li').nth(1)).toHaveText(/Greek Yogurt/);
await expect(groceryListCard.locator('li').nth(2)).toHaveText(/Baby Spinach/);
  
const items = await groceryListCard.locator('li').allTextContents();
console.log('Grocery list items:', items);

});

import { test, expect } from '@playwright/test';

test('Grocery page loads with real backend data', async ({ page }) => {
  await page.goto('/grocery');

  // Wait for the grocery list card to appear
  const groceryListCard = page.locator('.card').filter({ hasText: 'Grocery List' });
  await expect(groceryListCard).toBeVisible();

  // Check the grocery items that actually come from your backend
  // Adjust these strings based on what your backend really returns
 await expect(groceryListCard.locator('li').nth(0)).toHaveText(/Organic Eggs/);
await expect(groceryListCard.locator('li').nth(1)).toHaveText(/Greek Yogurt/);
await expect(groceryListCard.locator('li').nth(2)).toHaveText(/Baby Spinach/);
  
const items = await groceryListCard.locator('li').allTextContents();
console.log('Grocery list items:', items);

  // ...rest of your assertions for other parts of the page
});

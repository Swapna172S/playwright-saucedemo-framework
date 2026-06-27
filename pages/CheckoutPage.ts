
import { test, expect } from '../../fixtures/authFixture';
import { InventoryPage } from '../../pages/InventoryPage';

test('Add item to cart', async ({ authenticatedPage }) => {
  const inventory = new InventoryPage(authenticatedPage);

  await authenticatedPage.goto('/inventory.html');
  await inventory.addItem('Sauce Labs Backpack');

  await expect(inventory.cartBadge).toHaveText('1');
});

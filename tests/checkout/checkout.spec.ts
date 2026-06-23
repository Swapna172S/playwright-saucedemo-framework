import { test, expect } from '../../fixtures/authFixture';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test('Complete checkout flow', async ({ authenticatedPage }) => {
  const inventory = new InventoryPage(authenticatedPage);
  const cart = new CartPage(authenticatedPage);
  const checkout = new CheckoutPage(authenticatedPage);

  await authenticatedPage.goto('/inventory.html');

  await inventory.addItem('Sauce Labs Backpack');
  await inventory.cartIcon.click();

  await cart.checkout();

  await checkout.fillDetails();
  await checkout.completeOrder();

  await expect(
    authenticatedPage.locator('text=Thank you for your order!')
  ).toBeVisible();

  // ✅ Visual validation
  await expect(authenticatedPage).toHaveScreenshot('order-success.png');
});

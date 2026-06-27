import { Page } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

   addToCartButton = (item: string) =>
    this.page.locator('.inventory_item').filter({
      hasText: item
    }).getByRole('button', { name: 'Add to cart' });


    
  // FIX: use getter
  get cartIcon() {
    return this.page.locator('.shopping_cart_link');
  }


  get cartBadge() {
    return this.page.locator('.shopping_cart_badge');
  }

  async addItem(item: string) {
    // ensure page loaded
    await this.page.waitForLoadState('domcontentloaded');

    await this.addToCartButton(item).click();
  }
  
}

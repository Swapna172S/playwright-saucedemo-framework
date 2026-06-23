
export class InventoryPage {
  constructor(private page: Page) {}

  addToCartButton = (item: string) =>
    this.page.locator(`text=${item}`).locator('..').getByRole('button');

  cartIcon = this.page.locator('.shopping_cart_link');
  cartBadge = this.page.locator('.shopping_cart_badge');

  async addItem(item: string) {
    await this.addToCartButton(item).click();
  }
}

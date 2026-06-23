
export class CartPage {
  constructor(private page: Page) {}

  checkoutBtn = this.page.getByRole('button', { name: 'Checkout' });

  async checkout() {
    await this.checkoutBtn.click();
  }
}

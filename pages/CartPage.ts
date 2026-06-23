
export class CartPage {
  constructor(private page) {}

  checkoutBtn = this.page.getByRole('button', { name: 'Checkout' });

  async checkout() {
    await this.checkoutBtn.click();
  }
}


import { Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  get checkoutBtn() {
    return this.page.getByRole('button', { name: 'Checkout' });
  }

  async checkout() {
    // Using role-based selector for stability
    await this.checkoutBtn.click();
  }
}

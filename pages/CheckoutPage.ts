
export class CheckoutPage {
  constructor(private page: Page) {}

  async fillDetails() {
    await this.page.fill('#first-name', 'Test');
    await this.page.fill('#last-name', 'User');
    await this.page.fill('#postal-code', '400001');
  }

  async completeOrder() {
    await this.page.click('#continue');
    await this.page.click('#finish');
  }
}

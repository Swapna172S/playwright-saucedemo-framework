import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  // ✅ getters instead of direct properties
  get username() {
    return this.page.locator('#user-name');
  }

  get password() {
    return this.page.locator('#password');
  }

  get loginBtn() {
    return this.page.locator('#login-button');
  }

  async login(user: string, pass: string) {
    // Using stable selectors for maintainability
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}

/*Pattern for all pages:

class PageObject {
  constructor(private page: Page) {}

  get element() {
    return this.page.locator('...');
  }

  async action() {
    await this.element.click();
  }
}
*/

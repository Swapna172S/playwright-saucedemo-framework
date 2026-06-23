
import { test as base } from '@playwright/test';

export const test = base.extend({
  authenticatedPage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: 'storageState.json'
    });

    const page = await context.newPage();
    await use(page);
  }
});



import { test as base, Page } from '@playwright/test';

type Fixtures = {
  authenticatedPage: Page;
};

export const test = base.extend<Fixtures>({
  authenticatedPage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: 'storageState.json'
    });

    const page = await context.newPage();
    await use(page);
  }
});

export const expect = test.expect;


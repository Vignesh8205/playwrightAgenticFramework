import { test as base } from '@playwright/test';

import { ContactPage } from '../pom/ContactPage';
import { Navigation } from '../pom/Navigation';

export type CustomFixtures = {

  contactPage: ContactPage;
  navigation: Navigation;
};

export const test = base.extend<CustomFixtures>({
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    await use(contactPage);
  },
  navigation: async ({ page }, use) => {
    const navigation = new Navigation(page);
    await use(navigation);
  }
});

export { expect } from '@playwright/test';

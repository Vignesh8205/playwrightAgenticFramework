import { test as base } from '@playwright/test';
import { ContactPage } from '../pages/ContactPage';
import { Navigation } from '../pages/Navigation';
import { Newsletter } from '../pages/Newsletter';

export type CustomFixtures = {
  contactPage: ContactPage;
  navigation: Navigation;
  newsletter: Newsletter;
};

export const test = base.extend<CustomFixtures>({
  contactPage: async ({ page }, use) => {
    const contactPage = new ContactPage(page);
    await use(contactPage);
  },
  navigation: async ({ page }, use) => {
    const navigation = new Navigation(page);
    await use(navigation);
  },
  newsletter: async ({ page }, use) => {
    const newsletter = new Newsletter(page);
    await use(newsletter);
  }
});

export { expect } from '@playwright/test';

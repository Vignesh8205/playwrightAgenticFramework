import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ContactPage } from '../pages/ContactPage';

type CustomFixtures = {
  homePage: HomePage;
  contactPage: ContactPage;
};

export const test = base.extend<CustomFixtures>({
  homePage: async ({ page, isMobile }, use) => {
    const homePage = new HomePage(page, isMobile);
    await use(homePage);
  },
  contactPage: async ({ page, isMobile }, use) => {
    const contactPage = new ContactPage(page, isMobile);
    await use(contactPage);
  },
});

export { expect } from '@playwright/test';

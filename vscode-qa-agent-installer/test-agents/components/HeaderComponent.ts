import { Locator, Page } from '@playwright/test';

export class HeaderComponent {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly aboutLink: Locator;
  readonly servicesLink: Locator;
  readonly contactLink: Locator;
  readonly getStartedBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.getByRole('link', { name: 'Home', exact: true });
    this.aboutLink = page.getByRole('link', { name: 'About', exact: true });
    this.servicesLink = page.getByRole('link', { name: 'Services', exact: true });
    this.contactLink = page.getByRole('link', { name: 'Contact', exact: true }).first();
    this.getStartedBtn = page.getByRole('link', { name: 'Get Started' });
  }

  async clickContact() {
    await this.contactLink.click({ force: true });
  }
  
  async clickGetStarted() {
    await this.getStartedBtn.click();
  }
}

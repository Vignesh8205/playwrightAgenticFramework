import { Page, Locator, expect } from '@playwright/test';

export class Navigation {
  readonly page: Page;
  readonly homeLink: Locator;
  readonly aboutLink: Locator;
  readonly servicesLink: Locator;
  readonly projectsLink: Locator;
  readonly blogLink: Locator;
  readonly contactLink: Locator;
  readonly logoLink: Locator;

  constructor(page: Page) {
    this.page = page;
    // We can use exact text matching to ensure we don't click a random link in the footer
    this.homeLink = page.locator('nav a:has-text("Home")');
    this.aboutLink = page.locator('nav a:has-text("About")');
    this.servicesLink = page.locator('nav a:has-text("Services")');
    this.projectsLink = page.locator('nav a:has-text("Projects")');
    this.blogLink = page.locator('nav a:has-text("Blog")');
    this.contactLink = page.locator('nav a:has-text("Contact")');
    
    // Logo usually doesn't have text, just an href to "/" inside the header/nav
    // Looking at the DOM, the first <a> with href="/" and without text is likely the logo
    this.logoLink = page.locator('header a[href="/"]').first();
  }

  async gotoHome() {
    await this.page.goto('/');
  }

  async clickHome() {
    await this.homeLink.click();
  }

  async clickAbout() {
    await this.aboutLink.click();
  }

  async clickServices() {
    await this.servicesLink.click();
  }

  async clickProjects() {
    await this.projectsLink.click();
  }

  async clickBlog() {
    await this.blogLink.click();
  }

  async clickContact() {
    await this.contactLink.click();
  }

  async clickLogo() {
    await this.logoLink.click();
  }

  async goBack() {
    await this.page.goBack();
  }

  async goForward() {
    await this.page.goForward();
  }
}

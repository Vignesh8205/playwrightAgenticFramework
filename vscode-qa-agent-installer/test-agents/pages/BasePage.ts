import { Page, Locator } from '@playwright/test';
import { NetworkHelpers } from '../utils/network-helpers';

export class BasePage {
  readonly page: Page;
  readonly isMobile: boolean | undefined;
  readonly networkHelpers: NetworkHelpers;
  
  // Generic Global locators
  readonly genericNotification: Locator;

  constructor(page: Page, isMobile?: boolean) {
    this.page = page;
    this.isMobile = isMobile;
    this.networkHelpers = new NetworkHelpers(page);
    this.genericNotification = page.locator('.notification-toast');
  }

  async navigateTo(path: string) {
    await this.page.goto(path);
  }

  async waitForPageLoad() {
    await this.page.waitForLoadState('domcontentloaded');
  }
}

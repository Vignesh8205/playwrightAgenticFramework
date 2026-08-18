import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { HeaderComponent } from '../components/HeaderComponent';

export class ContactPage extends BasePage {
  readonly header: HeaderComponent;
  readonly pageHeading: Locator;

  constructor(page: Page, isMobile?: boolean) {
    super(page, isMobile);
    this.header = new HeaderComponent(page);
    this.pageHeading = page.getByRole('heading', { name: 'Contact Us' });
  }

  async verifyPageLoaded() {
    await this.pageHeading.waitFor({ state: 'visible' });
  }
}

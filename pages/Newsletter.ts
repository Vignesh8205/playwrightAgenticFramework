import { Page, Locator } from '@playwright/test';

export class Newsletter {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly subscribeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByRole('textbox', { name: 'Enter your email' });
    this.subscribeButton = page.getByRole('button', { name: 'Subscribe' });
  }

  async subscribe(email: string) {
    await this.emailInput.fill(email);
    await this.subscribeButton.click();
  }
}

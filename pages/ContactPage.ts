import { Page, Locator, expect } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly mobileInput: Locator;
  readonly messageInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('input[name="name"]');
    this.emailInput = page.locator('input[name="email"]');
    this.mobileInput = page.locator('input[name="mobile"]');
    this.messageInput = page.locator('textarea[name="message"]');
    this.submitButton = page.locator('button[type="submit"]:has-text("Request Support Now")');
  }

  async navigate() {
    await this.page.goto('/contact');
  }

  async fillName(name: string) {
    await this.nameInput.fill(name);
  }

  async fillEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async fillMessage(message: string) {
    await this.messageInput.fill(message);
  }

  async clickSubmit() {
    // Force click if we want to trigger validation, or we can check if it's disabled
    await this.submitButton.click({ force: true });
  }

  async expectSubmitButtonToBeDisabled() {
    await expect(this.submitButton).toBeDisabled();
  }
}

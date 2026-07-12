import { Page, Locator, expect } from '@playwright/test';

export class ChatWidget {
  readonly page: Page;
  readonly chatButton: Locator;
  readonly whatsappOption: Locator;
  readonly phoneOption: Locator;
  readonly instagramOption: Locator;
  readonly emailOption: Locator;

  constructor(page: Page) {
    this.page = page;
    // Assuming the chat button is the last empty button on the page
    this.chatButton = page.locator('button').last();
    this.whatsappOption = page.getByRole('link', { name: /whatsapp/i });
    this.phoneOption = page.getByRole('link', { name: /phone/i });
    this.instagramOption = page.getByRole('link', { name: /instagram/i });
    this.emailOption = page.getByRole('link', { name: /email/i });
  }

  async navigateToHome() {
    await this.page.goto('/');
  }

  async expectChatButtonToBeVisible() {
    await expect(this.chatButton).toBeVisible();
  }

  async clickChatButton() {
    await this.chatButton.click();
  }

  async expectWidgetToOpen() {
    await expect(this.whatsappOption).toBeVisible();
    await expect(this.phoneOption).toBeVisible();
    await expect(this.instagramOption).toBeVisible();
    await expect(this.emailOption).toBeVisible();
  }
}

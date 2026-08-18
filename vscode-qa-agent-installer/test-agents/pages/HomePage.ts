import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';
import { HeaderComponent } from '../components/HeaderComponent';
import { EnvHelpers } from '../utils/env-helpers';

export class HomePage extends BasePage {
  readonly header: HeaderComponent;
  readonly servicesSection: Locator;

  constructor(page: Page, isMobile?: boolean) {
    super(page, isMobile);
    this.header = new HeaderComponent(page);
    this.servicesSection = page.getByRole('heading', { name: 'Our Services' });
  }

  async navigate() {
    await this.navigateTo(EnvHelpers.getBaseUrl());
  }

  async navigateAndWaitForServices() {
    await this.networkHelpers.triggerAndWaitForResponse(
      async () => { await this.navigate(); },
      /supabase\.co.*\/services/
    );
  }
}

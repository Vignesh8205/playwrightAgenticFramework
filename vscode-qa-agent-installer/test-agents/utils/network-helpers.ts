import { Page, Response } from '@playwright/test';

export class NetworkHelpers {
  constructor(private page: Page) {}

  /**
   * Executes an action and gracefully awaits a specific API call.
   * Useful for waiting for Supabase responses like /services or /testimonials
   * @param action Function that triggers the network request
   * @param urlPattern URL pattern to wait for
   * @returns Response object of the triggered network request
   */
  async triggerAndWaitForResponse(action: () => Promise<void>, urlPattern: string | RegExp): Promise<Response> {
    const [response] = await Promise.all([
      this.page.waitForResponse(res => res.url().match(urlPattern) !== null && res.status() === 200),
      action()
    ]);
    return response;
  }

  /**
   * Waits for network to be idle after an action.
   * @param action Function that triggers network activity
   */
  async triggerAndWaitForNetworkIdle(action: () => Promise<void>): Promise<void> {
    await Promise.all([
      this.page.waitForLoadState('networkidle'),
      action()
    ]);
  }
}

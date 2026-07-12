import { test } from '../fixtures/customFixtures';

test.describe('Chat Widget', () => {
  test('TC_REG_009: Verify chat button is always visible and functional', async ({ chatWidget, page }) => {
    // Navigate to home page
    await chatWidget.navigateToHome();

    // Verify chat button (purple circle) is visible in bottom right
    await chatWidget.expectChatButtonToBeVisible();

    // Scroll down the page
    await page.evaluate(() => window.scrollBy(0, 500));

    // Verify chat button remains visible
    await chatWidget.expectChatButtonToBeVisible();

    // Click on chat button
    await chatWidget.clickChatButton();

    // Verify chat widget opens or action is triggered
    await chatWidget.expectWidgetToOpen();
  });
});

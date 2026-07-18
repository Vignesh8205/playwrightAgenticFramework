import { test, expect } from '../fixtures/customFixtures';

test.describe('KAN-36: Logo Home Redirection Validation', () => {
  test('Verify clicking the site logo redirects to the home page', async ({ page, navigation }) => {
    // Given I am on the '/about' page
    await page.goto('/about');

    // When I click the site logo in the header
    await navigation.clickLogo();

    // Then I should be redirected to the home page URL '/'
    // Note: The regex /.*\/$/ matches a URL ending with a slash, typical for home pages.
    await expect(page).toHaveURL(/.*\/$/);
  });
});

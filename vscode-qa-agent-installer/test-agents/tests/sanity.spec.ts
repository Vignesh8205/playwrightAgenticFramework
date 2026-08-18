import { test, expect } from '../fixtures';

test.describe('Sanity Suite', () => {
  test('User can view services and navigate to the Contact page', async ({ homePage, contactPage }) => {
    // 1 & 2. Navigate to homepage and wait for dynamic services to load from Supabase API
    await homePage.navigateAndWaitForServices();

    // 3. Verify that the "Our Services" section is visible
    await expect(homePage.servicesSection).toBeVisible();

    // 4. Click on the "Contact" link using the reusable Header Component
    await homePage.header.clickContact();

    // 5. Verify that the user is redirected to the Contact page successfully
    await contactPage.verifyPageLoaded();
  });
});

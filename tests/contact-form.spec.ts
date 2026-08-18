import { test, expect } from '../fixtures/customFixtures';

test.describe('Contact Form Validation', () => {
  test('TC_REG_003: Submit form without email field', async ({ contactPage, page }) => {
    // Navigate to the contact page
    await contactPage.navigate();

    // Fill in first name and last name
    await contactPage.fillName('Jane Smith');

    // Leave the email field empty intentionally

    // Fill in the message
    await contactPage.fillMessage('Support needed');

    // Verify that the submit button is disabled because the required email field is empty
    await contactPage.expectSubmitButtonToBeDisabled();

    // Verify form did not submit by checking we are still on the contact page
    await expect(page).toHaveURL(/.*\/contact/);
  });

  test('TC_REG_005: Try to submit empty contact form', async ({ contactPage, page }) => {
    // Navigate to the contact page
    await contactPage.navigate();

    // Do not fill in any form fields

    // Verify that the submit button is disabled because required fields are empty
    await contactPage.expectSubmitButtonToBeDisabled();

    // Verify form did not submit by checking we are still on the contact page
    await expect(page).toHaveURL(/.*\/contact/);
  });
  test('TC_PROJ_101: Submit a valid contact form', async ({ contactPage, page }) => {
    // Given I navigate to the contact page
    await contactPage.navigate();

    // When I fill in the name with "John Doe"
    await contactPage.fillName('John Doe');

    // And I fill in the email with "john@example.com"
    await contactPage.fillEmail('john@example.com');

    // And I fill in the message with "Hello world"
    await contactPage.fillMessage('Hello world');

    // And I click the submit button
    await contactPage.clickSubmit();

    // Then I should see a success message
    // Assuming .success-message or similar element appears on success
    await expect(page.locator('text=Thank you for your message')).toBeVisible(); 
  });
});

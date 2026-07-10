import { test, expect } from '../fixtures/customFixtures';

test.describe('Navigation', () => {
  test('TC_REG_001: Complete navigation through all pages', async ({ navigation, page }) => {
    // 1. Click "Home" link → verify on /
    await navigation.gotoHome();
    await navigation.clickHome();
    await expect(page).toHaveURL(/.*\/$/);

    // 2. Click "About" link → verify on /about
    await navigation.clickAbout();
    await expect(page).toHaveURL(/.*\/about/);

    // 3. Click "Services" link → verify on /services
    await navigation.clickServices();
    await expect(page).toHaveURL(/.*\/services/);

    // 4. Click "Projects" link → verify on /projects
    await navigation.clickProjects();
    await expect(page).toHaveURL(/.*\/projects/);

    // 5. Click "Blog" link → verify on /blog
    await navigation.clickBlog();
    await expect(page).toHaveURL(/.*\/blog/);

    // 6. Click "Contact" link → verify on /contact
    await navigation.clickContact();
    await expect(page).toHaveURL(/.*\/contact/);

    // 7. Return to home page via logo click
    await navigation.clickLogo();
    await expect(page).toHaveURL(/.*\/$/);

    // 8. Verify browser back button works
    await navigation.goBack();
    await expect(page).toHaveURL(/.*\/contact/);

    // 9. Verify browser forward button works
    await navigation.goForward();
    await expect(page).toHaveURL(/.*\/$/);
  });
});

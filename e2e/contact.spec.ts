import { expect, test } from './fixtures';

test('contact CTA scrolls to contact section and shows contact info', async ({ page, testUtils }) => {
  await testUtils.initializeEnvironment();
  // The main CTA button "Entrar em contato" should navigate to contact
  await page.click('text=Entrar em contato');
  await expect(page).toHaveURL(/#contact/);
  await expect(page.locator('#contact')).toBeVisible();
  await expect(page.locator('#contact a[href^="mailto:"]')).toBeVisible();

  const violations = await testUtils.runA11yScan('#contact', 'axe-contact-violations');
  expect(violations).toHaveLength(0);
});

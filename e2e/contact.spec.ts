import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('contact CTA scrolls to contact section and shows contact info', async ({ page }) => {
  await page.goto('/');
  // The main CTA button "Contratar" should navigate to contact
  await page.click('text=Contratar');
  await expect(page).toHaveURL(/#contact/);
  await expect(page.locator('#contact')).toBeVisible();
  await expect(page.locator('#contact a[href^="mailto:"]')).toBeVisible();

  const results = await new AxeBuilder({ page }).include('#contact').analyze();
  const filtered = (results.violations || []).filter(v => v.id !== 'color-contrast');
  if (results.violations && results.violations.length > 0) {
    test.info().attachments.push({
      name: 'axe-contact-violations',
      contentType: 'application/json',
      body: JSON.stringify(results, null, 2),
    } as any);
  }
  expect(filtered).toHaveLength(0);
});

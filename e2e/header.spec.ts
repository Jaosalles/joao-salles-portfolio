import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('header navigation updates hash and shows sections', async ({ page }) => {
  await page.goto('/');
  const projetosButton = page.locator('header').locator('button', { hasText: 'Projetos' });
  await expect(projetosButton).toBeVisible();

  await projetosButton.click();
  await expect(page).toHaveURL(/#projects/);
  await expect(page.locator('#projects')).toBeVisible();

  // a11y scan limited to the projects section
  const results = await new AxeBuilder({ page }).include('#projects').analyze();
  const filtered = (results.violations || []).filter((v) => v.id !== 'color-contrast');
  if (results.violations && results.violations.length > 0) {
    test.info().attachments.push({
      name: 'axe-projects-violations',
      contentType: 'application/json',
      body: JSON.stringify(results, null, 2),
    } as any);
  }
  expect(filtered).toHaveLength(0);
});

test('mobile menu toggles and focuses back', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto('/');

  const toggle = page.locator('button[aria-label="Toggle menu"]');
  await toggle.click();
  const mobileMenu = page.locator('#mobile-menu');
  await expect(mobileMenu).toBeVisible();

  // Click first menu item (Sobre) inside the mobile menu
  const sobre = mobileMenu.locator('button', { hasText: 'Sobre' });
  await expect(sobre).toBeVisible();
  await sobre.click();
  await expect(page).toHaveURL(/#about/);
  await expect(mobileMenu).toHaveCount(0);

  // Focus should return to toggle button
  await expect(toggle).toBeFocused();
});

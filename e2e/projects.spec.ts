import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('projects section is visible and lists featured projects', async ({ page, context }) => {
  await context.addInitScript(() => {
    localStorage.setItem('language', 'pt');
  });
  await page.goto('/');
  await expect(page.locator('#projects')).toBeVisible();
  await expect(page.locator('text=Projetos em Destaque')).toBeVisible();
  // In PT, the first project is "Plataforma de E-commerce", not "E-commerce Platform"
  // Use a more specific selector to target the heading, not the description
  await expect(page.locator('h3:has-text("Plataforma de E-commerce")')).toBeVisible();

  const results = await new AxeBuilder({ page }).include('#projects').analyze();
  const filtered = (results.violations || []).filter(v => v.id !== 'color-contrast');
  if (results.violations && results.violations.length > 0) {
    test.info().attachments.push({
      name: 'axe-projects-violations',
      contentType: 'application/json',
      body: JSON.stringify(results, null, 2),
    } as any);
  }
  expect(filtered).toHaveLength(0);
});

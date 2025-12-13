import { checkA11y, injectAxe } from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('homepage renders and has no detected a11y violations', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Dev Portfolio|Senior Frontend Engineer/);
  await injectAxe(page);
  await checkA11y(page, undefined, { detailedReport: true });
});

import { expect, test } from './fixtures';

test('homepage renders and has no detected a11y violations', async ({ page, testUtils }) => {
  await testUtils.initializeEnvironment();
  await expect(page).toHaveTitle(/Dev Portfolio|Senior Frontend Engineer/);

  const violations = await testUtils.runA11yScan(undefined, 'axe-homepage-violations');
  expect(violations).toHaveLength(0);
});

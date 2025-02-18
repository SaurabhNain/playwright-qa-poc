import { test, expect } from '@playwright/test';

test('Verify checkboxes functionality', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkbox1 = page.locator('input[type="checkbox"]').nth(0);
  const checkbox2 = page.locator('input[type="checkbox"]').nth(1);

  await expect(checkbox1).not.toBeChecked();
  await expect(checkbox2).toBeChecked();

  await checkbox1.check();
  await expect(checkbox1).toBeChecked();
});

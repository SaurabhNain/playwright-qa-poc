import { test, expect } from '@playwright/test';
import { CheckboxPage } from '../pages/CheckboxPage';

test('Verify checkboxes functionality', async ({ page }) => {
  const checkboxPage = new CheckboxPage(page);
  await checkboxPage.goto();

  await expect(checkboxPage.checkbox1).not.toBeChecked();
  await expect(checkboxPage.checkbox2).toBeChecked();

  await checkboxPage.checkbox1.check();
  await expect(checkboxPage.checkbox1).toBeChecked();
});

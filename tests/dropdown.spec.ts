import { test, expect } from '@playwright/test';
import { DropdownPage } from '../pages/DropdownPage';

test('Verify dropdown selection', async ({ page }) => {
  const dropdownPage = new DropdownPage(page);
  await dropdownPage.goto();

  await dropdownPage.selectOption('1');
  expect(await dropdownPage.getSelectedValue()).toBe('1');

  await dropdownPage.selectOption('2');
  expect(await dropdownPage.getSelectedValue()).toBe('2');
});

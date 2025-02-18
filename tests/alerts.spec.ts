import { test, expect } from '@playwright/test';

test('Verify JavaScript alerts', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('I am a JS Alert');
    await dialog.accept();
  });
  await page.click('button:text("Click for JS Alert")');

  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('I am a JS Confirm');
    await dialog.dismiss();
  });
  await page.click('button:text("Click for JS Confirm")');

  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain('I am a JS Prompt');
    await dialog.accept('Test input');
  });
  await page.click('button:text("Click for JS Prompt")');
});

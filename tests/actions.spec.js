// @ts-check
import { test, expect } from '@playwright/test';

test('Click', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.click("//a[@class='getStarted_Sjon']");
});

// @ts-check
import { test, expect } from '@playwright/test';

test('Click', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(2000);
  await page.click("//a[@class='getStarted_Sjon']");
  await page.waitForTimeout(2000);
});

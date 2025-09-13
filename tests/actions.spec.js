// @ts-check
import { test, expect } from '@playwright/test';

test('click', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(2000);
  await page.click("//a[@class='getStarted_Sjon']");
  await page.waitForTimeout(2000);
});

test('doubleClick', async ({ page }) => {
  await page.goto('https://testkru.com/Elements/Buttons');
  await page.waitForTimeout(2000);
  await page.dblclick("//button[@id='doubleClick']");
  await page.waitForTimeout(2000);
});

test('rightClick', async ({ page }) => {
  await page.goto('https://testkru.com/Elements/Buttons');
  await page.waitForTimeout(2000);
  await page.click("//button[@id='rightClick']", {button: 'right'});
  await page.waitForTimeout(2000);
});

test('leftClick', async ({ page }) => {
  await page.goto('https://testkru.com/Elements/Buttons');
  await page.waitForTimeout(2000);
  await page.click("//button[@id='leftClick']");
  await page.waitForTimeout(2000);
});
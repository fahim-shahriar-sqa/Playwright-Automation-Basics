// @ts-check
import { test, expect } from '@playwright/test';
import path from 'path';

test('Login', async ({ page }) => {
  await page.goto('https://practice.qabrains.com/');
  await page.waitForTimeout(1000);
  await page.fill("//input[@id='email']", "qa_testers@qabrains.com");
  await page.waitForTimeout(1000);
  await page.fill("//input[@id='password']", "Password123");
  await page.waitForTimeout(1000);
  await page.click("//button[@type='submit']");
  await page.waitForTimeout(1000);

  const successMessage = page.locator("//span[@class='title text-black text-md']");
  await expect(successMessage).toHaveText('Login Successful');
});
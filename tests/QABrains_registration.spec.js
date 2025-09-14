// @ts-check
import { test, expect } from '@playwright/test';
import path from 'path';

test('UserAuthentication', async ({ page }) => {
  await page.goto('https://practice.qabrains.com/registration');
  await page.waitForTimeout(1000);

  await page.fill("//input[@id='name']", "Fahim"); //name
  await page.waitForTimeout(1000);

  await page.selectOption("//select[@id='country']", "Bangladesh"); //country
  await page.waitForTimeout(1000);

  await page.selectOption("//select[@id='account']", "Student"); //account type
  await page.waitForTimeout(1000);

  await page.fill("//input[@id='email']", "qa_testers@qabrains.com"); //email
  await page.waitForTimeout(1000);

  await page.fill("//input[@id='password']", "Password123"); //Password
  await page.waitForTimeout(1000);

  await page.fill("//input[@id='confirm_password']", "Password123"); //Confirm Password
  await page.waitForTimeout(1000);

  await page.click("//button[normalize-space()='Signup']");
  await page.waitForTimeout(1000);

  const successMessage = page.locator(".title.text-black.text-md");
  await expect(successMessage).toHaveText('Registration Successful');
});
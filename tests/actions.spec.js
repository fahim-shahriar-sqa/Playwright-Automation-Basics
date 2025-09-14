// @ts-check
import { test, expect } from '@playwright/test';

test('click', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.waitForTimeout(2000);
  await page.click("//a[@class='getStarted_Sjon']");
  await page.waitForTimeout(2000);
});

test('allClicks', async ({ page }) => {
  await page.goto('https://testkru.com/Elements/Buttons');
  await page.waitForTimeout(2000);
  await page.dblclick("//button[@id='doubleClick']");
  await page.waitForTimeout(2000);
  await page.click("//button[@id='rightClick']", {button: 'right'});
  await page.waitForTimeout(2000);
  await page.click("//button[@id='leftClick']");
  await page.waitForTimeout(2000);
});

test('checkboxes', async ({ page }) => {
  await page.goto('https://testkru.com/Elements/Checkboxes');
  await page.waitForTimeout(2000);
  await page.check("//input[@id='firstSelect1']");
  await page.waitForTimeout(2000);
  await page.check("//input[@id='secondSelect2']");
  await page.waitForTimeout(2000);
  await page.check("//input[@id='thirdSelect2']");
  await page.waitForTimeout(2000);
  await page.check("//input[@id='secondSelect5']");
  await page.waitForTimeout(2000);
  await page.check("//input[@id='secondSelect5']");
  await page.waitForTimeout(2000);
  await page.check("//body/div[@class='wrapper d-flex align-items-stretch']/div[@id='content']/div/div[@class='mt-2 row text-dark']/div[@class='col-6 form-group active']/form/ul[@id='myUL']/li[1]/input[1]");
  await page.waitForTimeout(2000);
  await page.check("//li[normalize-space()='Websites']//input[@type='checkbox']");
  await page.waitForTimeout(2000);
  await page.click("//div[@id='content']//div//ul[1]//li[3]//*[name()='svg']");
  await page.check("//li[normalize-space()='Selenium']//input[@type='checkbox']");
  await page.waitForTimeout(2000);
  await page.uncheck("//li[normalize-space()='Selenium']//input[@type='checkbox']");
  await page.waitForTimeout(2000);
  await page.uncheck("//li[normalize-space()='Websites']//input[@type='checkbox']");
  await page.waitForTimeout(2000);
  await page.uncheck("//li[normalize-space()='Websites']//input[@type='checkbox']");
});

test('typeAction', async ({ page }) => {
  await page.goto('https://testkru.com/Elements/TextFields');
  await page.waitForTimeout(2000);
  await page.type("//div[@class='mt-2 row text-dark font-weight-bold']//input[@id='firstName']", "My Demo Test", {delay: 2000});
  await page.waitForTimeout(2000);
  
});
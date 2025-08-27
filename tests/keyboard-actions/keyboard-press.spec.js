const {test, expect} = require('@playwright/test');

test("Keyboard Action Tests", async ({page}) => {

await page.goto("https://www.google.com/", {waitUntil:'domcontentloaded'});

await page.locator("//textarea[@name='q']").fill("Techtorial");

await page.locator("//textarea[@name='q']").press("Enter");

await expect(page).toHaveTitle('Techtorial- Google Search');

await page.pause();





})
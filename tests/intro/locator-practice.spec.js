const {test, expect} = require('@playwright/test');

test("Locator Practice", async({page}) => {

await page.goto("https://formy-project.herokuapp.com/form");



await page.locator("//input[@id='first-name']").fill("Gytis");

await page.locator("#last-name").fill("Hendrix");

await page.locator("#job-title").fill("Software Engineer");

await page.locator("//input[@id='radio-button-2']").check();

await page.locator("#checkbox-1").check();

await page.locator("//a[.='Submit']").click();

// let actual = await page.locator('[role="alert"]').textContent();

// console.log(actual);

await expect(page.locator('[role="alert"]')).toHaveText("The form was successfully submitted!");

await expect(page).toHaveURL("https://formy-project.herokuapp.com/thanks")

await expect(page).toHaveTitle("Formy");

await page.pause();



}
)
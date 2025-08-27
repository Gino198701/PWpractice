const {test, expect} = require('@playwright/test');

test("File Upload", async ({page}) => {

    await page.goto('https://demo.guru99.com/test/upload/');

    await page.locator("#uploadfile_0").setInputFiles("C:\Users\Gytis\Desktop\Playwright\techtorial.png");

    await page.locator("#submitbutton").click();

    await expect(page.locator("#res")).toHaveText("1 file\n" + "has been successfully uploaded.");

    await page.pause();


});
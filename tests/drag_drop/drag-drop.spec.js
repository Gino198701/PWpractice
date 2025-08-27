const { test, expect } = require("@playwright/test");

test("drag & drop practice", async ({ page }) => {
  await page.goto("https://demos.telerik.com/kendo-ui/dragdrop/area");

  const blueBox = await page.locator(".test1"); // target element

  await expect(blueBox).toHaveText("Drag the small circle here ...");

  await page.locator("#draggable").dragTo(blueBox);

  await expect(blueBox).toHaveText("You did great!");

  const bColor= blueBox.evaluate((el) => {
    return window.getComputedStyle(el).getPropertyValue('top');

  })
});
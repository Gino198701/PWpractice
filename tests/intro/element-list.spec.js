const { test, expect } = require("@playwright/test");
const { log } = require("console");

test("List Of elements", async ({ page }) => {
  await page.goto("https://formy-project.herokuapp.com/form");

  let elements = await page.locator("//label");

  console.log(await elements.first().textContent());
  console.log(await elements.last().textContent());

  let count = await elements.count(); // it returns number of elements
  for (let i = 0; i < count; i++) {
    // nth() method is used to get the element by index
    console.log(await elements.nth(i).textContent());
  }

  // all() : it returns array of elements

  let boxes = await page.locator("//input[@type='checkbox']").all();
  log(boxes.length);
  for (let box of boxes) {
    await box.click();
  }

  await page.pause();
});

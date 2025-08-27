const { test } = require("@playwright/test");

test("Select Options Test", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/dropdown");

  const dropDown = page.locator("#dropdown");

  await dropDown.selectOption("1"); // values or labels or index

  await dropDown.selectOption("Option 2"); // values or labels or index

  await dropDown.selectOption({ label: "Option 2" }); //labels

  await dropDown.selectOption({ index: 2 }); //index

  await page.pause();
});

const { test } = require("@playwright/test");

test("New Window", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/windows");

  const newPagePromises = page.context().waitForEvent("page"); // -->listens the new event. Until a new page is opened. Once new page is opened, it will resolve the promise.

  await page.getByText("Click Here").click(); // --> new page will be opened

  let newPage = await newPagePromises;

  let newWindowText = await newPage.getByText("New Window").textContent();

  console.log(newWindowText);

  let firstWindow = await newPage.getByText("New Window").textContent();

  console.log(firstWindow);

  

});

test("Multiple windows", async ({ page }) => {



})
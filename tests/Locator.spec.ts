import { expect, test } from "@playwright/test";

test("GetRole Program", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(
    "https://testautomationpractice.blogspot.com/p/playwrightpractice.html",
  );
  const visible1 = await page.getByRole("heading", {
    name: "PlaywrightPractice",
  });
  await expect(visible1).toBeVisible();

  const buttonclick = await page.getByRole("button", {
    name: "Primary Action",
  });

  buttonclick.click();

  const textfield = await page.getByRole("textbox", {
    name: "Username:",
  });
  await textfield.fill("Hello Amit");

  const textlabel = await page.getByRole("button", {
    name: "Div with button role",
  });

  await expect(textlabel).toBeEnabled();

  await page.getByLabel("Email Address:").fill("amitojha2111@gmail.com");
  const checked1 = await page.getByLabel(" Standard");
  checked1.check();
  await expect(checked1).toBeChecked();

  console.log("Text case is passed");
});

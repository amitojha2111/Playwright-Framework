import { expect, test } from "@playwright/test";

test("Verfiy checkbox", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://the-internet.herokuapp.com/checkboxes");

  const checkboxfield = page.locator('//input[@type="checkbox"]');

  //
  await expect(checkboxfield).toHaveCount(2); // To check total count of checkboxes present

  const checkbox1 = checkboxfield.nth(0);
  await expect(checkbox1).not.toBeChecked(); // To check if checkbox is checked or not

  await checkbox1.check(); // To check the checkbox
  await expect(checkbox1).toBeChecked();
  console.log("Checkbox is verified");

  const allcheckboxes = await checkboxfield.all();

  for (const checkbox of allcheckboxes) {
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }
});

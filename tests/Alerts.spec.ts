import { expect, test } from "@playwright/test";

test("Alert Message", async ({ page }) => {
  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    await dialog.accept("Amit Oza");
    console.log(dialog.type());
  });

  await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
  await page.getByRole("button", { name: "Click for JS Alert" }).click();
  await page.getByRole("button", { name: "Click for JS Confirm" }).click();
  await page.getByRole("button", { name: "Click for JS Prompt" }).click();
});

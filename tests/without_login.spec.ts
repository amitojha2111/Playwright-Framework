import { expect, test } from "@playwright/test";

test.use({ storageState: "auth/sauce-session.json" });

test("Witout Login", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");

  const headertitle1 = page.locator(".title");
  await expect(headertitle1).toHaveText("Products");
});

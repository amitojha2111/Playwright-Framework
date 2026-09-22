import { Page, test, expect } from "@playwright/test";

const BASE_URL = "https://www.saucedemo.com/";
const STORAGE_STATE_PATH = "auth/sauce-session.json";

test("First Automation", async ({ page }) => {
  await page.goto(BASE_URL);
  const usernameInput = page.locator("#user-name");
  await expect(usernameInput).toBeVisible();
  await usernameInput.fill("standard_user");

  const passwordInput = page.locator("#password");
  await expect(passwordInput).toBeVisible();
  await passwordInput.fill("secret_sauce");

  const button = page.locator("#login-button");

  await expect(button).toBeVisible();
  button.click();

  const headertitle = page.locator(".title");
  await expect(headertitle).toHaveText("Products");
  console.log("Header is verified");
  page.context().storageState({ path: STORAGE_STATE_PATH });

  await page.pause();
});

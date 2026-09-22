import { expect, test, Locator } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.spec";
import { Inventory } from "../pages/Inventory.spec";

test.describe("Sauce Demo login", () => {
  test("Login without entering details", async ({ page }) => {
    let loginPageObj = new LoginPage(page);
    await loginPageObj.navigateToLoginPage();
    await loginPageObj.clickLoginButton();
    await loginPageObj.checkErrorMessage("Epic sadface: Username is required");
  });

  test("Login with Invalid credentials", async ({ page }) => {
    let InvalidloginPageObj = new LoginPage(page);
    await InvalidloginPageObj.navigateToLoginPage();
    await InvalidloginPageObj.Login(
      "invalid_standard_user",
      "invalid_secret_sauce",
    );
    await InvalidloginPageObj.checkErrorMessage(
      "Epic sadface: Username and password do not match",
    );
  });

  test("Login with valid credentials", async ({ page }) => {
    let loginPageObj = new LoginPage(page);
    let inventoryPage = new Inventory(page);
    await loginPageObj.navigateToLoginPage();
    await loginPageObj.Login("standard_user", "secret_sauce");
    await inventoryPage.GetPageTitle();
    await inventoryPage.getProductCount();
    await inventoryPage.AddProductToCart("Sauce Labs Backpack");
    await inventoryPage.RemoveProductFromCart("Sauce Labs Backpack");
  });
});

import { expect, test, Locator } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.spec";
import { Inventory } from "../pages/Inventory.spec";

test.describe("Sauce Demo login", () => {
  test("Check error message", async ({ page }) => {
    let loginPageObj = new LoginPage(page);
    await loginPageObj.navigateToLoginPage();
    await loginPageObj.clickLoginButton();
    await loginPageObj.checkErrorMessage("Epic sadface: Username is required");
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

import { test as base, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.spec";
import { Inventory } from "../pages/Inventory.spec";
import { ProductDetails } from "../pages/ProductDetails.spec";

type SauceDemo = {
  loginPage: LoginPage;
  inventoryPage: Inventory;
  productdetails: ProductDetails;
};

export let test = base.extend<SauceDemo>({
  loginPage: async ({ page }, use) => {
    let loginPage = new LoginPage(page);
    await use(loginPage);
  },

  inventoryPage: async ({ page, loginPage }, use) => {
    let inventoryPage = new Inventory(page);
    await loginPage.navigateToLoginPage();
    await loginPage.Login("standard_user", "secret_sauce");
    await use(inventoryPage);
  },

  productdetails: async ({ page, loginPage }, use) => {
    let productdetails = new ProductDetails(page);
    await loginPage.navigateToLoginPage();
    await loginPage.Login("standard_user", "secret_sauce");
    await use(productdetails);
  },
});
export { expect };

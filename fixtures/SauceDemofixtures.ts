import { test as base, expect, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.spec";
import { Inventory } from "../pages/Inventory.spec";

type SauceDemo = {
  loginPage: LoginPage;
  inventoryPage: Inventory;
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
});
export { expect };

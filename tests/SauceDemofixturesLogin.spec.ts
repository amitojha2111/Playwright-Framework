import { test, expect } from "../fixtures/SauceDemofixtures";

test.describe("Sauce Demmo Describe", () => {
  test.beforeEach("Login with valid credentials", async ({ loginPage }) => {
    await loginPage.navigateToLoginPage();
    await loginPage.Login("standard_user", "secret_sauce");
  });

  test("Verify product count", async ({ inventoryPage }) => {
    const productcount = await inventoryPage.getProductCount();
    expect(productcount).toBe(6);
  });
});

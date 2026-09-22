import { expect, test, Locator } from "@playwright/test";

class checkboxutilsclasses {
  static async checkbox(locator: Locator): Promise<void> {
    await locator.check();
  }

  static async uncheckbox(locator: Locator): Promise<void> {
    await locator.uncheck();
  }

  static async tocheckstatus(locator: Locator): Promise<void> {
    await this.checkbox(locator);
    const ischecked = await locator.isChecked();
    await expect(locator).toBeChecked();
  }
}

test("Checkbox utilities", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const checkbox1 = page.locator("#sunday");
  await checkboxutilsclasses.checkbox(checkbox1);
  await checkboxutilsclasses.tocheckstatus(checkbox1);
  console.log("Test is passed");
});

import { expect, test, Locator } from "@playwright/test";

test("Dropdown generic code", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  const dropdownlocator: Locator = await page.locator(
    "#dropdown-class-example",
  );

  selectdropdownlabel(dropdownlocator, "option2");
  selectdropdownVisibletext(dropdownlocator, "Option3");
});

async function selectdropdownlabel(
  element: Locator,
  LabelValue: string,
): Promise<void> {
  await element.selectOption({ value: LabelValue });
  await expect(element).toHaveValue(LabelValue);
}

async function selectdropdownVisibletext(
  element: Locator,
  Visibletext: string,
): Promise<void> {
  await element.selectOption({ label: Visibletext });
  await expect(element).toContainText(Visibletext);
}

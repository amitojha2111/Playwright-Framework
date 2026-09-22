import { expect, test } from "@playwright/test";

test("Handling dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const countrydropdown = await page.locator("#country");

  await countrydropdown.selectOption("India");

  await page.waitForTimeout(2000);
  console.log("Option selected");

  await countrydropdown.selectOption({ value: "uk" });

  await expect(countrydropdown).toContainText("United Kingdom");
  //console.log(await countrydropdown.textContent());

  //---------------------------------------------------------------------------------------------

  const alloptions = await page.locator("#country > option").all(); // .all()- will be give you locator objects and not values
  console.log(alloptions);

  for (const options of alloptions) {
    const optiontext = await options.textContent(); //It will give you visible test Eg: US, Japan
    if (optiontext == "Japan") {
      console.log("Option is there");
      break;
    }
  }
});

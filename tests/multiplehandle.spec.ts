import { expect, test } from "@playwright/test";

test("Multiple Window handler", async ({ page, context }) => {
  page.goto("https://the-internet.herokuapp.com/windows");
  await expect(page.locator("h3")).toHaveText("Opening a new window");
  const parenttitle = await page.title();
  const parentUrl = page.url();
  console.log(parentUrl);
  console.log(parenttitle);

  const [childpage] = await Promise.all([
    context.waitForEvent("page"),
    await page.getByRole("link", { name: "Click Here" }).click(),
  ]);

  await childpage.waitForLoadState();

  expect(page.locator("h3")).toHaveText("New Window");
  console.log(childpage.url);
});

import { chromium, expect, test } from "@playwright/test";

test("window handles", async () => {
  const browser = await chromium.launch({ channel: "chrome", headless: false });
  const brcxt = await browser.newContext();
  const page = await brcxt.newPage();

  await page.goto("https://orangehrm.com/contact-sales");
  await page
    .locator("//a[contains(@href, 'https://www.facebook.com/')]")
    .click();

  await page
    .locator("//a[contains(@href, 'https://www.linkedin.com/')]")
    .click();

  await page.locator("//a[contains(@href, 'https://x.com/')]").click();

  const allpages = brcxt.pages(); // to check all pages open in isolates browser

  for (const pg of allpages) {
    if (pg !== page) {
      console.log(await pg.title());
      await pg.close();
    }
  }

  await page.bringToFront();
  console.log(await page.title());
});

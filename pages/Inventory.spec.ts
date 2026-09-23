import { expect, Locator, test, Page } from "@playwright/test";

InventoryURL: "https://www.saucedemo.com/inventory.html";
export class Inventory {
  //Locator
  readonly page: Page;
  readonly Pagetitle: Locator;
  readonly cartlink: Locator;
  readonly cartbadge: Locator;
  readonly filterlink: Locator;
  readonly InventoryItems: Locator;
  //readonly addtocart: Locator;
  readonly hamburgericon: Locator;
  readonly logoutlink: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.Pagetitle = page.locator(".title");
    this.cartlink = page.locator(".shopping_cart_link");
    this.cartbadge = page.locator(".shopping_cart_badge");
    this.filterlink = page.locator("[data-test = 'product-sort-container']");
    this.InventoryItems = page.locator("[data-test = 'inventory-item']");
    //this.addtocart = page.getByRole("button", { name: "Add to cart" });
    this.hamburgericon = page.locator(".bm-burger-button");
    this.logoutlink = page.locator("#logout_sidebar_link");
  }

  //methods
  async GetPageTitle(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory/);
    await expect(this.Pagetitle).toHaveText("Products");
  }

  async getProductCount(): Promise<number> {
    return await this.InventoryItems.count();
  }

  async AddProductToCart(productname: string): Promise<void> {
    const product = this.InventoryItems.filter({ hasText: productname });
    await product.getByRole("button", { name: "Add to cart" }).click();
  }

  async RemoveProductFromCart(productname: string): Promise<void> {
    const product = this.InventoryItems.filter({ hasText: productname });
    await product.getByRole("button", { name: "Remove" }).click();
  }

  async ApplyFilter(selectfilter: string): Promise<void> {
    await this.filterlink.selectOption({
      label: selectfilter,
    });
    await expect(this.filterlink).toContainText(selectfilter);
  }
}

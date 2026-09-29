import { expect, Locator, Page } from "@playwright/test";

export class ProductDetails {
  readonly page: Page;
  readonly pricedetail: Locator;
  readonly productname: Locator;
  readonly productdescription: Locator;
  readonly AddToCartbutton: Locator;
  readonly RemoveButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pricedetail = page.locator(".inventory_item_price");
    this.productname = page.locator(".inventory_item ");
    this.productdescription = page.locator(".inventory_item_desc");
    this.AddToCartbutton = page.getByRole("button", { name: "Add to cart" });
    this.RemoveButton = page.getByRole("button", { name: "Remove" });
  }

  async productprice(productname: string, productprice: string): Promise<void> {
    let product = this.productname.filter({ hasText: productname });
    await expect(product.locator(".inventory_item_price")).toContainText(
      productprice,
    );
  }

  async producttitle(
    productname: string,
    productdescription: string,
  ): Promise<void> {
    let product = this.productname.filter({ hasText: productname });
    await expect(product.locator(".inventory_item_desc")).toContainText(
      productdescription,
    );
  }
}

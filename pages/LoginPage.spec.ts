import { expect, Locator, test, Page } from "@playwright/test";

export class LoginPage {
  //readonly properties

  readonly page: Page;
  readonly usernameinput: Locator;
  readonly passwordinput: Locator;
  readonly loginbutton: Locator;
  readonly errormessage: Locator;

  //constructor
  constructor(page: Page) {
    this.page = page;
    this.usernameinput = page.getByPlaceholder("Username");
    this.passwordinput = page.getByPlaceholder("Password");
    this.loginbutton = page.getByRole("button", { name: "login" });
    //this.errormessage = page.locator("[data-test = 'error']");
    this.errormessage = page.getByText("Epic sadface: Username is required");
  }

  //methods
  async navigateToLoginPage(): Promise<void> {
    await this.page.goto("https://www.saucedemo.com/");
  }

  async enterUserName(username: string): Promise<void> {
    await this.usernameinput.fill(username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordinput.fill(password);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginbutton.click();
  }

  async checkErrorMessage(ExpectedMessage: string): Promise<void> {
    await expect(this.errormessage).toContainText(ExpectedMessage);
  }

  async Login(username: string, password: string): Promise<void> {
    await this.usernameinput.fill(username);
    await this.passwordinput.fill(password);
    await this.loginbutton.click();
  }
}

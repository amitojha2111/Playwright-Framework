import { test as base, expect } from "@playwright/test";

type Myfixture = {
  mycustomfixture: string;
};

export let test = base.extend<Myfixture>({
  mycustomfixture: async ({}, use) => {
    let value = "Amit";
    console.log("Hello World");
    await use(value);
    console.log("Code executed");
  },
});

export { expect };

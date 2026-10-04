import { test, expect } from "../fixtures/myCustomFixtures";

test("My Custom Fixtures", async ({ mycustomfixture }) => {
  console.log("Value of fixtures is:", +mycustomfixture);
});

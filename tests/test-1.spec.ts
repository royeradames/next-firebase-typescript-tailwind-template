import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://localhost:8080/");
  await page.getByRole("link", { name: "Sign in" }).click();
  const page1Promise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Google" }).click();
  const page1 = await page1Promise;
  await page1
    .getByRole("textbox", { name: "Email or phone" })
    .fill("royeraadames");
  await page1.getByRole("textbox", { name: "Email or phone" }).press("Enter");
  await page.goto("https://localhost:8080/");
  await page
    .getByRole("heading", { name: "Main Hero message to sell" })
    .click();
});

import { test, expect } from "@playwright/test";

test("home page test", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  //Ensure the sign-in link is present.
  await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
  //Check the title of the page
  await expect(page).toHaveTitle("Practice Software Testing");
  //Check the count of items displayed

  //Search for Thor Hammer and check the results
});

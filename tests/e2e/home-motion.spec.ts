import { test, expect } from "@playwright/test";

test("homepage entrance stays content-first and accessible", async ({ page }) => {
  await page.goto("/");
  const heading = page.getByRole("heading", { level: 1 });
  await expect(heading).toContainText("Engineering");
  await expect(page.getByRole("img", { name: /Portrait of Fayaj Ahamad/ })).toBeVisible();
  await expect(page.getByRole("link", { name: /Explore my projects/ })).toBeVisible();
  await expect.poll(() => heading.evaluate((el) => getComputedStyle(el).animationName)).toContain("home-content-enter");
});

test("reduced motion leaves hero content visible and animations disabled", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const heading = page.getByRole("heading", { level: 1 });
  await expect(heading).toBeVisible();
  await expect(page.getByRole("img", { name: /Portrait of Fayaj Ahamad/ })).toBeVisible();
  await expect.poll(() => heading.evaluate((el) => getComputedStyle(el).animationName)).toBe("none");
});

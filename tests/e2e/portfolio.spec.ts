import { test, expect } from "@playwright/test";

test("home navigation and theme toggle", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Engineering networks");
  const theme = page.getByRole("button", { name: "Toggle between light and dark theme" });
  await theme.click();
  await expect(page.locator("html")).toHaveClass(/dark/);
  await page.getByRole("link", { name: "Explore my work" }).click();
  await expect(page).toHaveURL(/\/projects$/);
});

test("projects and case study pages load", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByText("Showing 5 of 5 projects")).toBeVisible();
  await page.getByRole("button", { name: "Python", exact: true }).click();
  await expect(page.getByText("Showing 2 of 5 projects")).toBeVisible();
  await page.goto("/projects/asterisk-voip-lab");
  await expect(page.getByRole("heading", { name: "The problem" })).toBeVisible();
});

test("mobile menu exposes navigation", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile-only interaction");
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
});

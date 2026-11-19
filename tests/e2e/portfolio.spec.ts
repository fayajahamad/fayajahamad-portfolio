import { test, expect } from "@playwright/test";

test("homepage and experience navigation", async ({ page, isMobile }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Engineering");
  await expect(page.getByRole("link", { name: /Explore my projects/ })).toBeVisible();
  await expect(page.getByRole("button", { name: /Toggle between light and dark/ })).toHaveCount(0);
  await expect(page.locator("header.v4-site-header")).toHaveAttribute("data-hydrated", "true");
  if (isMobile) {
    await page.getByRole("button", { name: "Open menu" }).click();
    await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
    await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Experience" }).click();
  } else {
    await page.getByRole("navigation", { name: "Primary navigation" }).getByRole("link", { name: "Experience" }).click();
  }
  await expect(page).toHaveURL(/\/experience$/);
  await expect(page.getByText("Medifit Pharmacy")).toBeVisible();
  await expect(page.getByText("We Are Team Rocket")).toBeVisible();
  await expect(page.getByText("NSBM NForce Club")).toBeVisible();
});

test("projects and case study pages load", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByText("Showing 5 of 5 projects")).toBeVisible();
  await expect(page.locator(".m3-project-explorer")).toHaveAttribute("data-hydrated", "true");
  await page.getByRole("button", { name: "Python", exact: true }).click();
  await expect(page.getByText("Showing 2 of 5 projects")).toBeVisible();
  await page.goto("/projects/asterisk-voip-lab");
  await expect(page.getByRole("heading", { name: "The problem" })).toBeVisible();
});

test("mobile menu exposes navigation", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile-only interaction");
  await page.goto("/");
  await expect(page.locator("header.v4-site-header")).toHaveAttribute("data-hydrated", "true");
  await page.getByRole("button", { name: "Open menu" }).click();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", {name: "Experience"})).toBeVisible();
});

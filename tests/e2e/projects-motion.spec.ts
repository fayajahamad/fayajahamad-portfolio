import { test, expect } from "@playwright/test";

test("projects gallery highlights Zero Trust and preserves five cases", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("heading", { level: 1, name: /Selected work/ })).toBeVisible();
  await expect(page.getByText("Showing 5 of 5 projects")).toBeVisible();
  await expect(page.locator(".m3-project-item")).toHaveCount(5);
  await expect(page.locator(".m3-project-feature")).toHaveCount(1);
  await expect(page.locator(".m3-project-feature").getByText("Zero Trust Enterprise Resource Access")).toBeVisible();
});

test("filtering and searching preserve project links", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.locator(".m3-project-explorer")).toHaveAttribute("data-hydrated", "true");
  await page.getByRole("button", { name: "Python", exact: true }).click();
  await expect(page.getByText("Showing 2 of 5 projects")).toBeVisible();
  await expect(page.locator(".m3-project-feature")).toHaveCount(0);
  await page.getByRole("textbox", { name: "Search projects" }).fill("nonexistent-xyz");
  await expect(page.getByRole("heading", { name: "No matching projects" })).toBeVisible();
  await page.getByRole("button", { name: "Reset filters" }).click();
  await expect(page.getByText("Showing 5 of 5 projects")).toBeVisible();
  await expect(page.locator(".m3-project-feature")).toHaveCount(1);
});

test("reduced motion keeps project content visible", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/projects");
  await expect(page.locator(".m3-project-item")).toHaveCount(5);
  await expect(page.getByRole("link", { name: /Read case study: Zero Trust Enterprise Resource Access/ })).toBeVisible();
  await expect(page.locator(".m3-project-feature")).toHaveCount(1);
});

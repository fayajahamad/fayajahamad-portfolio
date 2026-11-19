import { expect, test } from "@playwright/test";

for (const route of ["/about", "/contact"]) {
  test(`${route} keeps its original text and working layout`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator(route === "/about" ? ".m5-about-section" : ".m5-contact-section")).toBeVisible();
    const horizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
    expect(horizontalOverflow).toBe(false);
  });
  test(`${route} has a visible heading with reduced motion`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(route);
    const heading = page.locator(route === "/about" ? ".m5-about-intro h1" : ".m5-contact-intro h1");
    await expect(heading).toBeVisible();
    await expect(heading).toHaveCSS("animation-name", "none");
  });
}

test("about portrait and existing links are preserved", async ({ page }) => {
  await page.goto("/about");
  await expect(page.getByRole("img", { name: /Fayaj Ahamad/i })).toBeVisible();
  await expect(page.getByRole("link", { name: /Explore the projects/i })).toHaveAttribute("href", "/projects");
  await expect(page.getByRole("link", { name: /See experience/i })).toHaveAttribute("href", "/experience");
});

test("contact shows actual links without adding a fake form", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.locator('.m5-contact-section a.contact-method[href="https://github.com/fayajahamad"]')).toHaveAttribute("href", /github\.com\/fayajahamad/);
  await expect(page.locator(".m5-contact-section form")).toHaveCount(0);
});

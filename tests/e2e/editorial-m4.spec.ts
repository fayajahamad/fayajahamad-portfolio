import { expect, test } from "@playwright/test";

const routes = [
  { url: "/experience", intro: ".m4-experience-intro", feature: ".m4-experience-section .v6-credential-panel" },
  { url: "/education", intro: ".m4-education-intro", feature: ".m4-education-section .education-panel" },
  { url: "/skills", intro: ".m4-skills-intro", feature: ".m4-skills-section .skills-category" },
];

for (const route of routes) {
  test(`${route.url} keeps original content visible with editorial layout`, async ({ page }) => {
    await page.goto(route.url);
    await expect(page.locator(`${route.intro} h1`)).toBeVisible();
    await expect(page.locator(route.feature).first()).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1);
    expect(overflow).toBe(false);
  });
  test(`${route.url} respects reduced motion`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(route.url);
    const heading = page.locator(`${route.intro} h1`);
    await expect(heading).toBeVisible();
    await expect(heading).toHaveCSS("animation-name", "none");
  });
}

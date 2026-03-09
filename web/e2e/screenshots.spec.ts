import { test } from "@playwright/test";

test.describe("Visual Screenshots", () => {
  test("capture homepage", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");
    await page.screenshot({
      path: "e2e/screenshots/homepage.png",
      fullPage: true,
    });
  });

  test("capture homepage mobile", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.screenshot({
      path: "e2e/screenshots/homepage-mobile.png",
      fullPage: true,
    });
  });

  test("capture category page", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/category/ai-coding-tools");
    await page.screenshot({
      path: "e2e/screenshots/category-ai-coding-tools.png",
      fullPage: true,
    });
  });

  test("capture stacks page", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/stacks");
    await page.screenshot({
      path: "e2e/screenshots/stacks.png",
      fullPage: true,
    });
  });

  test("capture search results", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto("/");
    await page.getByPlaceholder(/search/i).fill("agent");
    await page.waitForTimeout(300);
    await page.screenshot({
      path: "e2e/screenshots/search-results.png",
      fullPage: true,
    });
  });
});

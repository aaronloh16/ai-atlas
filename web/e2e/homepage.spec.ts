import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("renders hero section with title and tool count", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", { name: /Navigate the AI Ecosystem/i })
    ).toBeVisible();

    // Should show tool count badge
    await expect(page.getByText(/tools tracked across/i)).toBeVisible();
  });

  test("renders category grid with all categories", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText("Explore Categories")).toBeVisible();

    // Check a sample of known categories
    await expect(page.getByText("AI Coding Tools")).toBeVisible();
    await expect(page.getByText("Agent Frameworks")).toBeVisible();
    await expect(page.getByText("Voice AI")).toBeVisible();
    await expect(page.getByText("Stack Recipes")).toBeVisible();
  });

  test("search filters tools by name", async ({ page }) => {
    await page.goto("/");

    const searchInput = page.getByPlaceholder(/search/i);
    await searchInput.fill("Claude Code");

    // Should show matching tool
    await expect(page.getByText("Claude Code").first()).toBeVisible();
  });

  test("search filters categories", async ({ page }) => {
    await page.goto("/");

    const searchInput = page.getByPlaceholder(/search/i);
    await searchInput.fill("voice");

    // Should show Voice AI category
    await expect(page.getByText("Voice AI").first()).toBeVisible();
  });

  test("search shows no results message for gibberish", async ({ page }) => {
    await page.goto("/");

    const searchInput = page.getByPlaceholder(/search/i);
    await searchInput.fill("xyznonexistent123");

    await expect(page.getByText(/no results found/i)).toBeVisible();
  });

  test("navigation links are present", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "AI Atlas" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Explore" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Stacks" })).toBeVisible();
    await expect(page.getByRole("link", { name: "GitHub" })).toBeVisible();
  });

  test("category card links to correct page", async ({ page }) => {
    await page.goto("/");

    await page.getByText("AI Coding Tools").click();
    await expect(page).toHaveURL("/category/ai-coding-tools");
  });

  test("why AI Atlas section is visible", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText("Why AI Atlas?")).toBeVisible();
    await expect(page.getByText("Curated for signal")).toBeVisible();
  });
});

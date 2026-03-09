import { test, expect } from "@playwright/test";

test.describe("Category Page", () => {
  test("renders AI Coding Tools category with tools", async ({ page }) => {
    await page.goto("/category/ai-coding-tools");

    await expect(
      page.getByRole("heading", { name: "AI Coding Tools" })
    ).toBeVisible();

    // Should show tool cards
    await expect(page.getByText("Claude Code").first()).toBeVisible();
    await expect(page.getByText("GitHub Copilot").first()).toBeVisible();
  });

  test("shows confidence badges on tool cards", async ({ page }) => {
    await page.goto("/category/ai-coding-tools");

    // Should have High/Medium/Low badges
    const badges = page.locator(".badge-high, .badge-medium, .badge-low");
    await expect(badges.first()).toBeVisible();
  });

  test("shows how to choose section", async ({ page }) => {
    await page.goto("/category/ai-coding-tools");

    await expect(page.getByText("How to Choose")).toBeVisible();
    await expect(
      page.getByText(/Choose.*Claude Code.*when/i).first()
    ).toBeVisible();
  });

  test("shows related categories with links", async ({ page }) => {
    await page.goto("/category/ai-coding-tools");

    await expect(page.getByText("Related Categories")).toBeVisible();
  });

  test("back link navigates to homepage", async ({ page }) => {
    await page.goto("/category/ai-coding-tools");

    await page.getByText("Back to Atlas").click();
    await expect(page).toHaveURL("/");
  });

  test("tool cards show external links", async ({ page }) => {
    await page.goto("/category/ai-coding-tools");

    // Tool cards should have external link icons
    const externalLinks = page.locator('a[target="_blank"]');
    expect(await externalLinks.count()).toBeGreaterThan(0);
  });

  test("tool cards show best paired with tags", async ({ page }) => {
    await page.goto("/category/ai-coding-tools");

    // Should show pairing tags like "Promptfoo", "Langfuse", etc.
    await expect(page.getByText("Promptfoo").first()).toBeVisible();
  });

  test("renders Voice AI category", async ({ page }) => {
    await page.goto("/category/voice-ai");

    await expect(
      page.getByRole("heading", { name: "Voice AI" })
    ).toBeVisible();
    await expect(page.getByText("Pipecat").first()).toBeVisible();
  });

  test("renders Browser Agents category", async ({ page }) => {
    await page.goto("/category/browser-agents");

    await expect(
      page.getByRole("heading", { name: "Browser Agents" })
    ).toBeVisible();
  });

  test("returns 404 for invalid category", async ({ page }) => {
    const response = await page.goto("/category/nonexistent-category");
    expect(response?.status()).toBe(404);
  });
});

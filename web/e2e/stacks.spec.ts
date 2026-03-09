import { test, expect } from "@playwright/test";

test.describe("Stacks Page", () => {
  test("renders stacks page with title", async ({ page }) => {
    await page.goto("/stacks");

    await expect(
      page.getByRole("heading", { name: "Stack Recipes" })
    ).toBeVisible();
    await expect(page.getByText(/starter architectures/i)).toBeVisible();
  });

  test("shows all stack recipes", async ({ page }) => {
    await page.goto("/stacks");

    // Should show all available stacks
    const stackNames = [
      "AI Coding Stack",
      "Build an Agent",
      "Local AI Stack",
      "RAG Stack",
      "Voice AI Stack",
      "Eval Stack",
    ];

    for (const name of stackNames) {
      await expect(page.getByText(name).first()).toBeVisible();
    }
  });

  test("stack cards have section content", async ({ page }) => {
    await page.goto("/stacks");

    // Each stack should have sub-sections with content
    const sections = page.locator(".glass-card .bg-background\\/50");
    expect(await sections.count()).toBeGreaterThan(0);
  });

  test("back link navigates to homepage", async ({ page }) => {
    await page.goto("/stacks");

    await page.getByText("Back to Atlas").click();
    await expect(page).toHaveURL("/");
  });

  test("stacks page is reachable from nav", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Stacks" }).click();
    await expect(page).toHaveURL("/stacks");
  });
});

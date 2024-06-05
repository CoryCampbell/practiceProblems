const { test, expect } = require("@playwright/test");

test("correct site page", async ({ page }) => {
	await page.goto("https://news.ycombinator.com");

	await expect(page).toHaveTitle(/Hacker News/);
});

test("has articles for collecting", async ({ page }) => {
	await page.goto("https://news.ycombinator.com");

	await expect(page.locator('[class="athing"]')).toHaveValue();
});

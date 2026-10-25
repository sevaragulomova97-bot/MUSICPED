import { expect, test } from "@playwright/test";

/**
 * Sayt GitHub Pages'da `/MUSICPED/` ostida turadi, e2e testlar esa
 * ildizdan (`/`) xizmat qilinadigan build ustida ishlaydi. Ya'ni
 * `basePath` bilan qurilgan variant hech qachon sinalmagan.
 */
const BASE = "http://127.0.0.1:4181/MUSICPED";

test("basePath bilan qurilgan sayt ishlaydi", async ({ page }) => {
  test.slow();
  const xatolar: string[] = [];
  page.on("pageerror", (e) => xatolar.push(`pageerror: ${e.message}`));
  page.on("console", (m) => {
    if (m.type() === "error") xatolar.push(`konsol: ${m.text()}`);
  });
  const yomon: string[] = [];
  page.on("response", (r) => {
    if (r.status() >= 400) yomon.push(`${r.status()} ${r.url()}`);
  });

  await page.goto(`${BASE}/`, { waitUntil: "networkidle" });
  await expect(page.locator("h1").first()).toBeVisible();

  // Kirish sahifasiga o'tish — havolalar ham basePath bilan yozilishi kerak.
  await page.getByRole("link", { name: /Boshlash|Kirish/ }).first().click();
  await page.waitForURL(/\/MUSICPED\/kirish/, { timeout: 15_000 });
  await page.waitForLoadState("networkidle");

  await page.getByRole("radio", { name: /Bobur Akbarov/ }).click();
  await page.getByRole("button", { name: "Davom etish" }).click();
  await page.waitForURL(/\/MUSICPED\/bosh-sahifa/, { timeout: 15_000 });
  await page.waitForLoadState("networkidle");
  await expect(page.locator("main h1").first()).toBeVisible();

  // Cholg'u sahifasi — audio fayllar ham basePath ostidan yuklanadi.
  await page.goto(`${BASE}/asboblar/doira/`, { waitUntil: "networkidle" });
  await page.locator('[aria-label*="Doira"] button, main button').first().click();
  await page.waitForTimeout(2500);

  // Manifest va ikonka.
  const manifest = await page.request.get(`${BASE}/manifest.webmanifest`);
  expect(manifest.status()).toBe(200);
  const sw = await page.request.get(`${BASE}/sw.js`);
  expect(sw.status()).toBe(200);

  console.log("yomon javoblar:", yomon.length ? yomon.join("; ") : "yo'q");
  console.log("xatolar:", xatolar.length ? xatolar.join("; ") : "yo'q");
  expect(yomon.filter((y) => !y.includes("favicon")).join("\n")).toBe("");
  expect(xatolar.join("\n")).toBe("");
});

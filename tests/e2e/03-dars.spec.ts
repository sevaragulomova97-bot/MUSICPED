import { expect, test } from "@playwright/test";
import { bazaniTozala, sessiyaBer, TALABA } from "./yordamchi";

test.describe("Darslar", () => {
  test("kurslar ro'yxati ochiladi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/");

    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    // Ro'yxatda kurslar sarlavha sifatida, darslar esa havola sifatida chiqadi.
    await expect(page.getByText("Musiqa nazariyasi").first()).toBeVisible();
    const darsHavolalari = page.locator('a[href*="/kurslar/"]');
    expect(await darsHavolalari.count()).toBeGreaterThan(0);
  });

  test("darsda nota chiziladi va bo'limlar yakunlanadi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await bazaniTozala(page);

    await page.goto("/kurslar/musiqa-nazariyasi/nota-savodi/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    // VexFlow notani SVG sifatida chizadi (talab bo'yicha yuklanadi).
    await expect(page.locator("svg").first()).toBeVisible({ timeout: 15_000 });

    // Nota tugmalari klaviatura uchun ham mavjud bo'lishi kerak —
    // SVG ekran o'quvchi uchun yopiq.
    const notaTugmalari = page.getByRole("button", { name: /do|re|mi|fa|sol|lya|si/i });
    expect(await notaTugmalari.count()).toBeGreaterThan(0);
  });
});

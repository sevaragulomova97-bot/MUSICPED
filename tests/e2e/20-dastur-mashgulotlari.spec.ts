import { expect, test } from "@playwright/test";
import { sessiyaBer, TALABA } from "./yordamchi";

/**
 * Fan dasturidagi mashg'ulotlar (ma'ruza M1-M30 va amaliy A1-A30)
 * brauzerda ochilishini tekshiradi.
 *
 * Dars sahifasi mijoz komponenti: kontent statik HTML da emas, JS
 * to'plamida. Shuning uchun uni faqat brauzerda ko'rish mumkin —
 * build muvaffaqiyatli chiqqani kontent ko'rinishini isbotlamaydi.
 */

test.describe("Dastur mashg'ulotlari", () => {
  test("amaliy mashg'ulot sahifasi to'liq ochiladi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/musiqa-talimi-metodikasi/a1-davlat-madhiyasi/");
    await page.waitForURL(/a1-davlat-madhiyasi/);

    await expect(page.getByRole("heading", { level: 1 })).toContainText("A1");
    const asosiy = page.locator("main");
    // Olti qism: tayyorgarlik, asar, tahlil, ijro, o'rgatish, xulosa.
    await expect(asosiy).toContainText("Darsgacha tayyorgarlik");
    await expect(asosiy).toContainText("Flipped Classroom");
    await expect(asosiy).toContainText("Tahlil (olti band)");
    await expect(asosiy).toContainText("Sinfda o'rgatish rejasi");
    // Mualliflik huquqi eslatmasi har bir amaliy darsda turishi kerak.
    await expect(asosiy).toContainText("mualliflik huquqi");
  });

  test("xalq asari mashg'uloti ham ochiladi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/musiqa-talimi-metodikasi/a19-lazgi-yallama-yorim/");
    await page.waitForURL(/a19-lazgi/);

    await expect(page.getByRole("heading", { level: 1 })).toContainText("A19");
    await expect(page.locator("main")).toContainText("Xalq qo'shig'i");
  });

  test("fan dasturi sahifasida qoplov ko'rsatiladi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/dastur/");
    await page.waitForURL(/dastur/);

    const asosiy = page.locator("main");
    // Ma'ruza va amaliy to'liq, kurs ishi va mustaqil ta'lim hali yo'q.
    await expect(asosiy).toContainText(/30\/30 mavzu/);
    await expect(asosiy).toContainText(/0\/15 mavzu/);
  });
});

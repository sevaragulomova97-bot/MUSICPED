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
    // Ma'ruza va amaliy to'liq, kurs ishi hali yo'q.
    await expect(asosiy).toContainText(/30\/30 mavzu/);
    /*
      Kurs ishi va mustaqil ta'lim platformada bajarilmaydi — ular
      qatorida qizil nol emas, sabab turishi kerak.
    */
    await expect(asosiy).toContainText("topshiriq va asboblar orqali");
    await expect(asosiy).toContainText("alohida sahifa sifatida");
    await expect(asosiy).toContainText("rahbar bilan, platformadan tashqari");
    await expect(asosiy).toContainText("universitet tartibida himoya");
    // Qoplov nol bo'lgan qator endi qolmadi.
    await expect(asosiy).not.toContainText(/0\/1[25] mavzu/);
  });

  test("kurs sahifasi mashg'ulot turi bo'yicha guruhlangan", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/musiqa-talimi-metodikasi/");
    await page.waitForURL(/musiqa-talimi-metodikasi/);

    const asosiy = page.locator("main");
    await expect(asosiy).toContainText("Ma'ruza mashg'ulotlari");
    await expect(asosiy).toContainText("Amaliy mashg'ulotlar");
    await expect(asosiy).toContainText("Qo'shimcha mavzular");
    await expect(asosiy).toContainText("Topshiriqlar");
    // Guruhlar mavjudligi: har birida dars soni qavs ichida.
    await expect(asosiy).toContainText("(30)");
  });

  test("dasturga bog'lanmagan kursda guruhlash yo'q", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/musiqa-nazariyasi/");
    await page.waitForURL(/musiqa-nazariyasi/);

    const asosiy = page.locator("main");
    await expect(asosiy).toContainText("Darslar");
    await expect(asosiy).not.toContainText("Ma'ruza mashg'ulotlari");
  });

  test("ma'ruzada nazariy bayon va atamalar lug'ati bor", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/musiqa-talimi-metodikasi/m1-fan-predmeti/");
    await page.waitForURL(/m1-fan-predmeti/);

    const asosiy = page.locator("main");
    /*
      Ma'ruzalar qisqa edi; nazariy bayon, mavzuga xos bo'lim va
      atamalar lug'ati qo'shildi. Shu uch bo'lim yo'qolsa, dars
      yana qisqa holiga qaytgan bo'ladi.
    */
    await expect(asosiy).toContainText("Nazariy bayon");
    await expect(asosiy).toContainText("Asosiy atamalar");
    await expect(asosiy).toContainText("Qo'shni fanlar bilan aloqa");
  });

  test("sinf ma'ruzasida faoliyat taqsimoti va repertuar bo'limi bor", async ({
    page,
  }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/musiqa-talimi-metodikasi/m23-4-sinf-repertuari/");
    await page.waitForURL(/m23-4-sinf/);

    const asosiy = page.locator("main");
    await expect(asosiy).toContainText("Faoliyat turlarining taqsimoti");
    await expect(asosiy).toContainText("4-sinf repertuari bilan ishlash");
    await expect(asosiy).toContainText("Asosiy atamalar");
  });
});

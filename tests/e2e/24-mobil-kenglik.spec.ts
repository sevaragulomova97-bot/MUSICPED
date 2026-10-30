import { expect, test } from "@playwright/test";
import { sessiyaBer, TALABA } from "./yordamchi";

/**
 * Telefon ekranida sahifa yon tomonga surilmasligi kerak.
 *
 * Nota chizmasi 620 px kenglikda o'lchanadi. Uning atrofidagi grid
 * bandi `min-width: auto` bo'lib qolsa, chizma butun ustunni kengaytirib
 * yuboradi va 390 px li ekranda **butun sahifa** yon tomonga suriladi —
 * sarlavha va matn ham ekrandan chiqib ketadi. To'g'ri xulq: siljish
 * faqat chizmaning o'z qutichasida qolishi kerak.
 *
 * Bu nuqson uzoq vaqt sezilmay turgan edi, chunki u faqat tor ekranda
 * va faqat nota bor bo'limda ko'rinadi.
 */

test.use({ viewport: { width: 390, height: 844 } });

const siljish = (page: import("@playwright/test").Page) =>
  page.evaluate(
    () => document.documentElement.scrollWidth - document.documentElement.clientWidth,
  );

test.describe("Telefon ekranida gorizontal siljish", () => {
  test("nota bo'limi sahifani kengaytirmaydi", async ({ page }) => {
    test.slow();
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/musiqa-talimi-metodikasi/a9-doira-dum-dum/");
    await page.waitForURL(/a9-doira/);

    expect(await siljish(page), "nota bo'limiga o'tmasdan").toBe(0);

    await page.getByRole("button", { name: "Ovoz va diapazon" }).click();
    await expect(page.locator("figure svg").first()).toBeVisible({
      timeout: 20_000,
    });
    expect(await siljish(page), "nota bo'limida").toBe(0);

    // Chizmaning o'zi esa ichkarida suriladigan bo'lib qolishi kerak:
    // nota 620 px, quticha esa ekrandan tor.
    const quticha = page.locator("figure .overflow-x-auto").first();
    const olcham = await quticha.evaluate((el) => ({
      korinadigan: Math.round(el.getBoundingClientRect().width),
      ichki: el.scrollWidth,
    }));
    expect(olcham.korinadigan).toBeLessThan(390);
    expect(olcham.ichki).toBeGreaterThan(olcham.korinadigan);
  });

  test("eski nota darsi ham kengaytirmaydi", async ({ page }) => {
    test.slow();
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/musiqa-nazariyasi/nota-savodi/");
    await page.waitForURL(/nota-savodi/);

    await page.getByRole("button", { name: "Asosiy tushunchalar" }).click();
    await expect(page.locator("figure svg").first()).toBeVisible({
      timeout: 20_000,
    });
    expect(await siljish(page)).toBe(0);
  });

  test("keng jadvalli sahifalar ham kengaytirmaydi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    for (const yol of ["/dastur/", "/kurslar/", "/natijalar/", "/topshiriqlar/"]) {
      await page.goto(yol);
      await page.waitForURL(new RegExp(yol.replace(/\//g, "")));
      expect(await siljish(page), yol).toBe(0);
    }
  });
});

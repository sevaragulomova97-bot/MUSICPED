import { expect, test } from "@playwright/test";
import { bazaniTozala, sessiyaBer, TALABA } from "./yordamchi";

/**
 * Virtual cholg'uning ikki asosiy oqimi: **yozib olish** va **mashq**.
 *
 * Ikkalasi ham dissertatsiya ma'lumotining manbayi — mashq natijasi
 * baholashga, yozuv esa portfolioga tushadi. Shunga qaramay ular e2e
 * bilan qoplanmagan edi: oqim uzilsa, sahifa baribir ishlab turgandek
 * ko'rinadi va yo'qotish faqat ma'lumot yig'ilgandan keyin bilinadi.
 */

const KLAVIATURA = '[aria-label="Virtual pianino klaviaturasi"] button';

test.describe("Yozib olish", () => {
  test("nota yoziladi, qayta eshitiladi va portfolioga tushadi", async ({ page }) => {
    test.slow();
    await sessiyaBer(page, TALABA);
    await bazaniTozala(page);
    await page.goto("/asboblar/pianino/");
    await page.waitForLoadState("networkidle");

    const holat = page
      .locator('[aria-live="polite"]')
      .filter({ hasText: /Yozuv yo'q|nota|Yozilmoqda/ })
      .first();
    await expect(holat).toHaveText("Yozuv yo'q");

    // Birinchi bosish audio dvigatelini ishga tushiradi.
    await page.locator(KLAVIATURA).first().click();
    await page.waitForTimeout(1200);

    await page.getByRole("button", { name: "Yozib olish" }).click();
    await expect(holat).toHaveText("Yozilmoqda…");
    for (let i = 0; i < 4; i += 1) {
      await page.locator(KLAVIATURA).nth(i).click();
      await page.waitForTimeout(220);
    }
    await page.getByRole("button", { name: "To'xtatish" }).first().click();

    // Yozuvda aynan to'rtta nota bo'lishi kerak.
    await expect(holat).toHaveText(/^4 nota · \d+\.\d s$/);

    await page.getByRole("button", { name: "O'ynatish" }).click();
    await page.getByRole("button", { name: "Portfolioga saqlash" }).click();
    await expect(page.getByRole("button", { name: "Saqlandi" })).toBeVisible({
      timeout: 15_000,
    });

    await page.goto("/portfolio/");
    await page.waitForLoadState("networkidle");
    // Hisoblagich bitta bo'lishi kerak: matn bo'laklarga bo'lingani
    // uchun butun sohaning matni bo'yicha tekshiramiz.
    await expect(page.locator("main")).toContainText(/Ijodiy ishlar\s*1/, {
      timeout: 15_000,
    });
  });
});

test.describe("Mashq", () => {
  test("ketma-ket mashq yakunlanadi, natija saqlanadi va baholashga tushadi", async ({
    page,
  }) => {
    test.slow();
    await sessiyaBer(page, TALABA);
    await bazaniTozala(page);
    await page.goto("/asboblar/pianino/");
    await page.waitForLoadState("networkidle");

    await page.getByRole("button", { name: "Mashqni boshlash" }).first().click();

    /*
      Nishon klavish oq bo'lsa `bg-warning-soft`, qora bo'lsa `bg-warning`
      rangiga kiradi. To'g'ri javobdan keyingi ~320 ms ichida esa yangi
      nishon «to'g'ri» rangida turadi — ya'ni nishon sinfi vaqtincha
      yo'qoladi. Shuning uchun qat'iy kutish bilan bosamiz, aks holda
      ketma-ketlik yarim yo'lda to'xtaydi.
    */
    const nishon = page.locator(
      `${KLAVIATURA}:is(.bg-warning-soft, .bg-warning)`,
    );
    const yakun = page.getByText("Mashq yakunlandi");
    for (let i = 0; i < 16; i += 1) {
      if (await yakun.count()) break;
      await nishon.first().waitFor({ state: "visible", timeout: 10_000 });
      await nishon.first().click();
    }

    await expect(yakun).toBeVisible({ timeout: 15_000 });
    // Matn bo'laklarga bo'lingani uchun butun sohaning matnini tekshiramiz.
    await expect(page.locator("main")).toContainText(/Aniqlik\s*100%/);
    await expect(page.locator("main")).toContainText(
      /8 ta to'g'ri, 0 ta xato/,
    );

    await page.getByRole("button", { name: "Natijani saqlash" }).click();
    await expect(
      page.getByRole("button", { name: "Natija saqlandi" }),
    ).toBeVisible({ timeout: 15_000 });

    // Natija baholash sahifasiga tushishi kerak.
    await page.goto("/natijalar/");
    await page.waitForLoadState("networkidle");
    await expect(page.getByText("Bajarilgan topshiriqlar")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.locator("main")).toContainText(/O'rtacha natija\s*100%/);

    /*
      Ilgari shu yerda yo'nalishlar bo'yicha to'rtta nol foiz chizig'i
      chiqardi — yuqorida «O'rtacha natija 100%» turgan holda bu
      qarama-qarshilikdek ko'rinardi. Daraja diagnostikadan hisoblanadi,
      shuning uchun endi sabab aytiladi.
    */
    await expect(page.locator("main")).toContainText(
      /diagnostika natijasidan hisoblanadi/,
    );
    await expect(
      page.getByRole("link", { name: "Diagnostikadan o'tish" }),
    ).toBeVisible();
    await expect(
      page.locator('[role="progressbar"][aria-valuenow="0"]'),
    ).toHaveCount(0);
  });
});

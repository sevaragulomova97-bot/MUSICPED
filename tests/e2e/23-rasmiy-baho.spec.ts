import { expect, test } from "@playwright/test";
import { bazaniTozala, OQITUVCHI, sessiyaBer } from "./yordamchi";

/**
 * O'qituvchi kabinetidagi rasmiy baho va dastur qoplovi.
 *
 * Fan dasturi bo'yicha baho uch nazoratdan yig'iladi (JN 30, ON 20,
 * YaN 50). Platformada faqat JN uchun dalil bor, qolgan ikkisi qo'lda
 * kiritiladi — shuning uchun bu oqim e2e bilan tekshiriladi: arifmetika
 * va saralash chegarasi aynan shu yerda xato qilinadi.
 */

async function talabaOch(page: import("@playwright/test").Page) {
  await sessiyaBer(page, OQITUVCHI);
  await bazaniTozala(page);

  // Namunaviy ma'lumot o'qituvchining bosh sahifasidan yuklanadi.
  await page.goto("/oqituvchi/");
  await page.waitForURL(/oqituvchi/);
  await page.getByRole("button", { name: /namunaviy ma'lumot/i }).click();
  await expect(page.getByText(/namunaviy talaba/i).first()).toBeVisible({
    timeout: 20_000,
  });

  await page.goto("/oqituvchi/talabalar/");
  await page.waitForURL(/talabalar/);

  // Ro'yxatdagi birinchi talabani ochamiz.
  await page.locator("[aria-expanded]").first().click();
}

test.describe("Rasmiy baho", () => {
  test("dastur qoplovi ma'ruza va amaliy bo'yicha ajratilgan", async ({
    page,
  }) => {
    test.slow();
    await talabaOch(page);

    const asosiy = page.locator("main");
    await expect(asosiy).toContainText("Ma'ruza (M1-M30)");
    await expect(asosiy).toContainText("Amaliy (A1-A30)");
    await expect(asosiy).toContainText("Qolgan:");
  });

  test("ballar kiritiladi, jami va baho hisoblanadi, saqlanadi", async ({
    page,
  }) => {
    test.slow();
    await talabaOch(page);

    const asosiy = page.locator("main");
    await expect(asosiy).toContainText("Rasmiy baho");
    // Hali hech narsa qo'yilmagan.
    await expect(asosiy).toContainText("Qo'yilmagan nazorat");

    await page.getByLabel(/Joriy nazorat bali/).fill("27");
    await page.getByLabel(/Oraliq nazorat bali/).fill("18");
    await page.getByLabel(/Yakuniy nazorat bali/).fill("45");

    // 27 + 18 + 45 = 90 -> A'lo
    await expect(asosiy).toContainText("90 / 100");
    await expect(page.getByLabel("Yakuniy baho")).toHaveText("A'lo");
    await expect(asosiy).not.toContainText("Qo'yilmagan nazorat");

    await page.getByRole("button", { name: /Ballarni saqlash/ }).click();
    await expect(page.getByText("Saqlandi")).toBeVisible({ timeout: 15_000 });

    // Sahifa yangilangandan keyin ham joyida.
    await page.reload();
    await page.waitForLoadState("networkidle");
    await page.locator("[aria-expanded]").first().click();
    await expect(page.locator("main")).toContainText("90 / 100");
  });

  test("saralashdan past ball ogohlantiradi", async ({ page }) => {
    test.slow();
    await talabaOch(page);

    // JN saralashi 18; 10 ball past.
    await page.getByLabel(/Joriy nazorat bali/).fill("10");
    await page.getByLabel(/Oraliq nazorat bali/).fill("20");
    await page.getByLabel(/Yakuniy nazorat bali/).fill("50");

    const asosiy = page.locator("main");
    // Jami 80 — «Yaxshi» ga yetadi, lekin saralash o'tilmagan.
    await expect(asosiy).toContainText("80 / 100");
    await expect(asosiy).toContainText("Saralashdan o'tmagan: JN");

    /*
      Bahoni butun sahifa matnidan qidirib bo'lmaydi: pastdagi shkala
      qatorida «Yaxshi» so'zi baribir turadi. Shuning uchun aynan
      nishon tekshiriladi.
    */
    const baho = page.getByLabel("Yakuniy baho");
    await expect(baho).toHaveText("Yakunlanmagan");
  });
});

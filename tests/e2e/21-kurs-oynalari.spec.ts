import { expect, test } from "@playwright/test";
import { sessiyaBer, TALABA } from "./yordamchi";

/**
 * `/kurslar` sahifasi — to'rtburchak oynachalar.
 *
 * Sahifa ilgari beshala kursning barcha darslarini chiqarardi. Endi
 * har bir kurs bitta oynacha va u shu kursning mavzulari sahifasiga
 * olib boradi. Oynachalar sekin qalqib turadi, lekin harakat
 * foydalanuvchi sozlamasiga va tizim sozlamasiga bo'ysunadi.
 */

const OYNA = "ul > li.mp-float";

test.describe("Kurs oynachalari", () => {
  test("beshta kurs oynacha ko'rinishida chiqadi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/");
    await page.waitForURL(/kurslar/);

    await expect(page.locator(OYNA)).toHaveCount(5);
    const asosiy = page.locator("main");
    await expect(asosiy).toContainText("Musiqa ta'limi metodikasi");
    await expect(asosiy).toContainText("Mavzularni ko'rish");

    /*
      Ilgari bu sahifada har bir darsning nomi turardi. Oynachaga
      o'tgandan keyin dars nomlari faqat kurs sahifasida bo'lishi
      kerak — aks holda sahifa yana 110 bandga cho'ziladi.
    */
    await expect(asosiy).not.toContainText("M1: Fanning predmeti");
  });

  test("oynachaga bosilsa kurs mavzulariga o'tiladi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/");
    await page.waitForURL(/kurslar/);

    await page
      .getByRole("link", { name: /Musiqa ta'limi metodikasi/ })
      .first()
      .click();
    await page.waitForURL(/kurslar\/musiqa-talimi-metodikasi/);

    // Kurs sahifasidagi guruhlar joyida.
    await expect(page.locator("main")).toContainText("Ma'ruza mashg'ulotlari");
  });

  test("oynacha qalqib turadi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/");
    await page.waitForURL(/kurslar/);

    const birinchi = page.locator(OYNA).first();
    await expect(birinchi).toBeVisible();

    const nom = await birinchi.evaluate(
      (el) => getComputedStyle(el).animationName,
    );
    expect(nom).toBe("mp-float");

    // Har bir oynacha boshqa vaqtda boshlanadi — ular bir-biriga
    // qo'shilib ketmasligi kerak.
    const kechikishlar = await page
      .locator(OYNA)
      .evaluateAll((els) =>
        els.map((el) => getComputedStyle(el).animationDelay),
      );
    expect(new Set(kechikishlar).size).toBeGreaterThan(1);
  });

  test("sichqoncha ustiga kelganda harakat to'xtaydi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/");
    await page.waitForURL(/kurslar/);

    /*
      Doimiy qalqib turgan nishonni bosish qiyin. Shuning uchun
      sichqoncha ustiga kelganda harakat to'xtaydi — aks holda
      bosish nuqtasi qo'l ostidan siljib ketadi.
    */
    const oyna = page.locator(OYNA).first();
    expect(
      await oyna.evaluate((el) => getComputedStyle(el).animationPlayState),
    ).toBe("running");

    await oyna.hover();
    expect(
      await oyna.evaluate((el) => getComputedStyle(el).animationPlayState),
    ).toBe("paused");
  });

  test("bezak o'chirilsa qalqish to'xtaydi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/sozlamalar/");
    await page.getByRole("button", { name: /^yoqilgan$/i }).click();
    await expect(page.locator("html")).toHaveAttribute("data-effects", "off");

    await page.goto("/kurslar/");
    await page.waitForURL(/kurslar/);

    const nom = await page
      .locator(OYNA)
      .first()
      .evaluate((el) => getComputedStyle(el).animationName);
    expect(nom).toBe("none");
  });
});

test.describe("Harakatni kamaytirish rejimida kurs oynachalari", () => {
  test.use({ reducedMotion: "reduce" });

  test("tizim sozlamasi harakatni to'xtatadi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/");
    await page.waitForURL(/kurslar/);

    const nom = await page
      .locator(OYNA)
      .first()
      .evaluate((el) => getComputedStyle(el).animationName);
    expect(nom).toBe("none");
  });
});

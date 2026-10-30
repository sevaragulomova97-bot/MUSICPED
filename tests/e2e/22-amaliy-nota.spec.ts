import { expect, test } from "@playwright/test";
import { sessiyaBer, TALABA } from "./yordamchi";

/**
 * Amaliy mashg'ulotdagi nota misollari brauzerda chizilishi.
 *
 * VexFlow faqat brauzerda ishlaydi va talab bo'yicha yuklanadi, shuning
 * uchun uni statik HTML dan ko'rib bo'lmaydi: build muvaffaqiyatli
 * chiqqani nota chizilganini isbotlamaydi.
 *
 * Dars sahifasi bo'limlarni birma-bir ko'rsatadi, shuning uchun har bir
 * nota bo'limiga yon paneldan o'tiladi.
 */

test.describe("Amaliy mashg'ulotdagi notalar", () => {
  test("uchala nota bo'limi chiziladi", async ({ page }) => {
    test.slow();
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/musiqa-talimi-metodikasi/a9-doira-dum-dum/");
    await page.waitForURL(/a9-doira/);

    const nota = page.locator("figure svg");

    // 1. Ovoz va diapazon — ikkita misol: oraliq va qizdirish.
    await page.getByRole("button", { name: "Ovoz va diapazon" }).click();
    await expect(nota.first()).toBeVisible({ timeout: 20_000 });
    await expect(nota).toHaveCount(2, { timeout: 20_000 });
    await expect(page.locator("main")).toContainText("ishchi oraliq");

    // 2. Ritmik asos — bitta misol, bitta balandlikda.
    await page.getByRole("button", { name: "Ritmik asos" }).click();
    await expect(nota).toHaveCount(1, { timeout: 20_000 });
    await expect(page.locator("main")).toContainText("bu ohang emas, zarb mashqi");

    // 3. Qiyin joy — bitta maqsadli mashq.
    await page.getByRole("button", { name: "Qiyin joy ustida mashq" }).click();
    await expect(nota).toHaveCount(1, { timeout: 20_000 });
  });

  test("mualliflik eslatmasi birinchi bo'limda turadi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/musiqa-talimi-metodikasi/a5-alla/");
    await page.waitForURL(/a5-alla/);

    await expect(page.locator("main")).toContainText("qo'shiqning ohangi emas");
  });

  test("notani bosganda u yoritiladi", async ({ page }) => {
    test.slow();
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/musiqa-talimi-metodikasi/a5-alla/");
    await page.waitForURL(/a5-alla/);

    await page.getByRole("button", { name: "Ovoz va diapazon" }).click();
    await expect(page.locator("figure svg").first()).toBeVisible({
      timeout: 20_000,
    });

    const tugma = page.getByRole("button", { name: /eshitish$/ }).first();
    await tugma.click();
    await expect(tugma).toHaveClass(/bg-primary-solid/, { timeout: 10_000 });
  });
});

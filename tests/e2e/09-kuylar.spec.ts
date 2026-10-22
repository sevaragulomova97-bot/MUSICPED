import { expect, test } from "@playwright/test";
import { sessiyaBer, TALABA } from "./yordamchi";

/**
 * Mashhur kuylar: klavishlar yonib o'chishi bilan o'rganish.
 *
 * Ikki narsa qo'riqlanadi:
 *  • klaviatura **gorizontal surishsiz** sig'adi (ijro uzilmasligi uchun);
 *  • demo paytida klavishlar **audio holatidan qat'i nazar** yonadi —
 *    yoritish darsning o'zi, namunalar yuklanmasa ham ishlashi kerak.
 */

const KLAVIATURA = '[aria-label="Virtual pianino klaviaturasi"]';

test.describe("Klaviatura o'lchami", () => {
  for (const kenglik of [390, 1280]) {
    test(`pianino ${kenglik}px ekranga surishsiz sig'adi`, async ({ page }) => {
      await page.setViewportSize({ width: kenglik, height: 900 });
      await sessiyaBer(page, TALABA);
      await page.goto("/asboblar/pianino/");
      await expect(page.locator(KLAVIATURA)).toBeVisible();

      const olchov = await page.locator(KLAVIATURA).evaluate((el) => ({
        surish: el.scrollWidth > el.clientWidth + 1,
        sahifa:
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth + 1,
      }));
      expect(olchov.surish, "klaviatura surilmasligi kerak").toBe(false);
      expect(olchov.sahifa, "sahifa gorizontal surilmasligi kerak").toBe(false);
    });
  }
});

test.describe("Mashhur kuylar", () => {
  test("eshitish rejimida klavishlar yonib o'chadi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/asboblar/pianino/");

    await expect(page.getByText("Mashhur kuylar")).toBeVisible();
    await page.getByRole("button", { name: /^Eshitish$/ }).click();

    const yongan = () => page.locator(`${KLAVIATURA} button[aria-pressed="true"]`);

    // Kamida bitta klavish yonadi…
    await expect(yongan().first()).toBeVisible({ timeout: 5_000 });

    // …va kuy davomida yonish o'zgarib turadi (ya'ni «o'chadi» ham).
    //
    // Namuna tez-tez va shart bajarilishi bilanoq to'xtab olinadi:
    // kam sonli uzoq oraliqlar bilan o'lchaganda, boshqa testlar bilan
    // bir vaqtda yurgizilsa, o'chgan lahzalar orasidan o'tib ketardi.
    const kuzatuv: number[] = [];
    let yondi = false;
    let ochdi = false;
    for (let i = 0; i < 80 && !(yondi && ochdi); i += 1) {
      await page.waitForTimeout(100);
      const n = await yongan().count();
      kuzatuv.push(n);
      if (n > 0) yondi = true;
      else if (yondi) ochdi = true;
    }
    expect(yondi, `yonmadi: ${JSON.stringify(kuzatuv)}`).toBe(true);
    expect(ochdi, `o'chmadi: ${JSON.stringify(kuzatuv)}`).toBe(true);
  });

  test("o'rganish rejimida nishon klavish ko'rsatiladi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/asboblar/pianino/");

    await page.getByRole("button", { name: /^O'rganish$/ }).click();
    await expect(page.getByText(/0 \/ \d+ nota/)).toBeVisible();

    // Nishon klavish boshqa rangda yonadi.
    const nishon = page.locator(`${KLAVIATURA} button.bg-warning-soft`);
    await expect(nishon).toHaveCount(1);
  });

  test("har bir cholg'uda kamida uchta kuy bor", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    for (const asbob of ["pianino", "nay", "dutor", "rubob", "gitara", "doira"]) {
      await page.goto(`/asboblar/${asbob}/`);
      const royxat = page.getByRole("listbox", { name: /kuylar ro'yxati/i });
      await expect(royxat, asbob).toBeVisible();
      expect(
        await royxat.getByRole("option").count(),
        asbob,
      ).toBeGreaterThanOrEqual(3);
      // Manba har doim ko'rsatiladi — mualliflik huquqi talabi.
      await expect(page.getByText("Manba:", { exact: false }), asbob).toBeVisible();
    }
  });
});

test.describe("Temp boshqaruvi", () => {
  test("sekin tempda kuy sezilarli uzoqroq chalinadi", async ({ page }) => {
    test.slow();
    await sessiyaBer(page, TALABA);
    await page.goto("/asboblar/pianino/");
    await expect(page.getByText("Mashhur kuylar")).toBeVisible();

    const yongan = () => page.locator(`${KLAVIATURA} button[aria-pressed="true"]`);

    /** Kuy boshlanib, so'ng butunlay to'xtaguncha o'tgan vaqt. */
    async function olcha() {
      const boshlandi = Date.now();
      await page.getByRole("button", { name: /^Eshitish$/ }).click();
      await expect.poll(() => yongan().count(), { timeout: 15_000 }).toBeGreaterThan(0);
      await expect
        .poll(() => page.getByRole("button", { name: /^Eshitish$/ }).count(), {
          timeout: 60_000,
          intervals: [200],
        })
        .toBe(1);
      return Date.now() - boshlandi;
    }

    const toliq = await olcha();
    await page.locator('[aria-label="Temp"] button').first().click();
    const sekin = await olcha();

    // Yarim temp — taxminan ikki barobar uzoq. Chegara keng olingan:
    // brauzerdagi taymerlar aniq emas, lekin farq shubhasiz bo'lishi kerak.
    expect(sekin, `to'liq ${toliq} ms, sekin ${sekin} ms`).toBeGreaterThan(toliq * 1.6);
  });
});

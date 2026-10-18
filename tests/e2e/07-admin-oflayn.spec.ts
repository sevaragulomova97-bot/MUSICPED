import { expect, test } from "@playwright/test";
import { MODULLAR } from "@/content/modules";
import { ADMIN, sessiyaBer } from "./yordamchi";

// Natijalar soni kontentdan olinadi: dastur kengayganda testni qo'lda
// tuzatish kerak emas, ammo jadval hamma natijani ko'rsatishi shart.
const NATIJA_SONI = MODULLAR.reduce((s, m) => s + m.outcomes.length, 0);

test.describe("Admin paneli", () => {
  test("kontent auditi dasturning holatini ko'rsatadi", async ({ page }) => {
    await sessiyaBer(page, ADMIN);

    await page.goto("/admin/");
    await expect(page.getByRole("heading", { name: /admin paneli/i })).toBeVisible();
    // Dastur to'liq: har bir o'quv natijasining darsi va topshirig'i bor.
    await expect(page.getByText(/muammo topilmadi/i)).toBeVisible();

    await page.goto("/admin/kontent/");
    const qatorlar = page.locator("table").first().locator("tbody tr");
    await expect(qatorlar).toHaveCount(NATIJA_SONI);

    // Hammasi «To'liq» holatida; filtr shuni tasdiqlaydi.
    await page
      .getByRole("button", { name: new RegExp(`to'liq \\(${NATIJA_SONI}\\)`, "i") })
      .click();
    await expect(qatorlar).toHaveCount(NATIJA_SONI);

    // Uzilish filtri bo'sh ro'yxat beradi — qoplanmagan natija qolmagan.
    await page.getByRole("button", { name: /ikkalasi yo'q/i }).click();
    await expect(qatorlar).toHaveCount(0);
  });
});

test.describe("Oflayn rejim", () => {
  test("xizmat ishchisi ro'yxatdan o'tadi va oflayn sahifa ko'rsatiladi", async ({
    page,
    context,
  }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Ro'yxatdan o'tish `load` hodisasidan keyin bo'ladi.
    await page.waitForFunction(
      async () => {
        const r = await navigator.serviceWorker.getRegistration();
        return r?.active?.state === "activated";
      },
      undefined,
      { timeout: 20_000 },
    );

    await context.setOffline(true);
    // Keshlanmagan sahifa — zaxira sahifa chiqishi kerak.
    await page.goto("/bunday-sahifa-yoq/").catch(() => {});
    await expect(page.getByRole("heading", { name: /internet aloqasi yo'q/i })).toBeVisible();
    await context.setOffline(false);
  });
});

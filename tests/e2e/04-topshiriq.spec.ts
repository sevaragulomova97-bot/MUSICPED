import { expect, test } from "@playwright/test";
import { bazaniTozala, sessiyaBer, TALABA } from "./yordamchi";

/**
 * Test tipidagi topshiriq avtomatik baholanadi; rubrikali topshiriq esa
 * o'qituvchini kutadi. Ikkala holat ham bu yerda tekshiriladi, chunki
 * ularning farqi platformaning baholash modelining asosi.
 */
test.describe("Topshiriqlar", () => {
  test("test avtomatik baholanadi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await bazaniTozala(page);

    await page.goto("/topshiriqlar/nota-savodi-test/");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    const radiolar = page.getByRole("radio");
    const soni = await radiolar.count();
    const korilgan = new Set<string>();
    for (let i = 0; i < soni; i += 1) {
      const el = radiolar.nth(i);
      const nomi = await el.getAttribute("name");
      if (!nomi || korilgan.has(nomi)) continue;
      korilgan.add(nomi);
      // `force` ishlatilmaydi: u yopishqoq sarlavha ostidagi elementga
      // "ko'r" klik yuborishi mumkin. Playwright kutib, to'g'ri joyga suradi.
      await el.check();
    }

    const checkboxlar = page.getByRole("checkbox");
    if ((await checkboxlar.count()) > 0) {
      await checkboxlar.first().check();
    }

    await page.getByRole("button", { name: /^topshirish$/i }).click();
    await expect(page.getByText(/natija:/i)).toBeVisible({ timeout: 10_000 });
  });

  test("rubrikali topshiriq o'qituvchi bahosini kutadi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await bazaniTozala(page);

    await page.goto("/topshiriqlar/musiqa-asarlari-tahlili/");
    // Rubrika topshirishdan oldin ko'rinishi kerak: talaba qanday
    // baholanishini bilishi shart.
    await expect(page.getByText(/baholash mezonlari/i)).toBeVisible();

    const maydon = page.getByRole("textbox").first();
    await maydon.fill(
      "Asar uch qismli shaklda yozilgan. Birinchi qism do majorda, o'rta qism " +
        "parallel lya minorga o'tadi va repriza asosiy tonallikka qaytadi. " +
        "Garmonik til asosan asosiy uch funksiyaga tayanadi.",
    );

    await page.getByRole("button", { name: /^topshirish$/i }).click();
    await expect(page.getByText(/baholashini kutmoqda/i)).toBeVisible({ timeout: 10_000 });
  });
});

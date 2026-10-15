import { expect, test } from "@playwright/test";
import { bazaniTozala, sessiyaBer, TALABA } from "./yordamchi";

/**
 * Diagnostika → individual o'quv yo'nalishi.
 *
 * Bu platformaning markaziy oqimi: diagnostikasiz individual reja
 * qurilmaydi, reja esa butun o'quv jarayonini belgilaydi.
 */
test("diagnostikadan o'tilsa individual reja quriladi", async ({ page }) => {
  await sessiyaBer(page, TALABA);
  await bazaniTozala(page);

  await page.goto("/diagnostika/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  // Har bir bosqichdagi barcha savollarga javob beramiz.
  for (let bosqich = 0; bosqich < 10; bosqich += 1) {
    // Har bir savol guruhidan birinchi variantni tanlaymiz.
    //
    // Bosiladigan joy — `<label>`, `<input>` emas: Likert shkalasida input
    // `sr-only` (ko'rinmas) va uni to'g'ridan-to'g'ri bosib bo'lmaydi.
    // Foydalanuvchi ham yorliqni bosadi, shuning uchun test haqiqiy
    // harakatni takrorlaydi.
    const radiolar = page.getByRole("radio");
    const soni = await radiolar.count();
    const korilgan = new Set<string>();

    for (let i = 0; i < soni; i += 1) {
      const el = radiolar.nth(i);
      const nomi = await el.getAttribute("name");
      if (!nomi || korilgan.has(nomi)) continue;
      korilgan.add(nomi);
      await el.locator("xpath=ancestor::label[1]").click();
    }

    const yakuniy = page.getByRole("button", { name: /yakunlash va rejani olish/i });
    if (await yakuniy.isVisible().catch(() => false)) {
      await yakuniy.click();
      break;
    }
    await page.getByRole("button", { name: /^keyingi$/i }).click();
  }

  await expect(page).toHaveURL(/\/yolnalish\/?$/, { timeout: 15_000 });

  // Reja sahifasida kamida bitta tavsiya va kuchli/kuchsiz tomon ko'rinadi.
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.getByText(/tavsiya|yo'nalish|zona/i).first()).toBeVisible();
});

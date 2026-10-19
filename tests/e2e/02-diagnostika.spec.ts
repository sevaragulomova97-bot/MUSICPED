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

/** Diagnostikani boshidan oxirigacha to'ldiradi. */
async function diagnostikaniToldir(page: import("@playwright/test").Page) {
  for (let bosqich = 0; bosqich < 10; bosqich += 1) {
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
      return;
    }
    await page.getByRole("button", { name: /^keyingi$/i }).click();
  }
}

/**
 * Ikkinchi o'lchov yakuniy diagnostika sifatida saqlanadi.
 *
 * Ilgari sahifa har doim `"boshlangich"` yozardi — ya'ni talaba yakuniy
 * diagnostikani umuman topshira olmasdi va tadqiqot bo'limi faqat
 * import qilingan yoki namunaviy ma'lumot bilan ishlardi.
 */
test("ikkinchi o'lchov yakuniy diagnostika bo'lib saqlanadi", async ({ page }) => {
  await sessiyaBer(page, TALABA);
  await bazaniTozala(page);

  await page.goto("/diagnostika/");
  await expect(
    page.getByRole("heading", { name: /boshlang'ich diagnostika/i }),
  ).toBeVisible();
  const birinchiSavollar = await page.locator("ol li p").allInnerTexts();
  await diagnostikaniToldir(page);
  await expect(page).toHaveURL(/\/yolnalish\/?$/, { timeout: 15_000 });

  // Ikkinchi marta kirilganda avval tur tanlanadi.
  await page.goto("/diagnostika/");
  await expect(
    page.getByRole("heading", { name: /qaysi o'lchovni topshirasiz/i }),
  ).toBeVisible({ timeout: 10_000 });
  await expect(page.getByRole("heading", { name: /oraliq nazorat/i })).toBeVisible();

  await page
    .getByRole("button", { name: /yakuniy diagnostikani boshlash/i })
    .click();

  await expect(
    page.getByRole("heading", { level: 1, name: /yakuniy diagnostika/i }),
  ).toBeVisible();

  // Parallel shakl: ikkinchi o'lchovdagi savollar birinchisidan boshqa.
  const ikkinchiSavollar = await page.locator("ol li p").allInnerTexts();
  const kesishma = ikkinchiSavollar.filter((x) => birinchiSavollar.includes(x));
  expect(kesishma, JSON.stringify(kesishma)).toEqual([]);

  await diagnostikaniToldir(page);
  await expect(page).toHaveURL(/\/yolnalish\/?$/, { timeout: 15_000 });

  // Bazada ikkita o'lchov bor va ularning turlari har xil.
  const turlar = await page.evaluate(async () => {
    const ochish = () =>
      new Promise<IDBDatabase>((resolve, reject) => {
        const req = indexedDB.open("musicped");
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    const db = await ochish();
    return await new Promise<string[]>((resolve) => {
      const tx = db.transaction("diagnostics", "readonly");
      const req = tx.objectStore("diagnostics").getAll();
      req.onsuccess = () =>
        resolve((req.result as Array<{ kind: string }>).map((r) => r.kind));
      req.onerror = () => resolve([]);
    });
  });

  expect(turlar).toHaveLength(2);
  expect(turlar).toContain("boshlangich");
  expect(turlar).toContain("yakuniy");
});

/**
 * Oraliq nazorat alohida tur sifatida saqlanadi.
 *
 * `lib/research.ts` yakuniy bo'lmasa oraliqni yakuniy o'rnida ishlatadi,
 * shuning uchun u ham boshlang'ichdan boshqa shaklda bo'lishi kerak.
 */
test("uchala o'lchov ham alohida tur va mustaqil shakl bilan saqlanadi", async ({ page }) => {
  await sessiyaBer(page, TALABA);
  await bazaniTozala(page);

  await page.goto("/diagnostika/");
  const birinchiSavollar = await page.locator("ol li p").allInnerTexts();
  await diagnostikaniToldir(page);
  await expect(page).toHaveURL(/\/yolnalish\/?$/, { timeout: 15_000 });

  await page.goto("/diagnostika/");
  await page.getByRole("button", { name: /oraliq nazoratni boshlash/i }).click();

  await expect(
    page.getByRole("heading", { level: 1, name: /oraliq nazorat/i }),
  ).toBeVisible();

  // Oraliq ham boshlang'ichdan boshqa savollarni beradi.
  const oraliqSavollar = await page.locator("ol li p").allInnerTexts();
  const kesishma = oraliqSavollar.filter((x) => birinchiSavollar.includes(x));
  expect(kesishma, JSON.stringify(kesishma)).toEqual([]);

  await diagnostikaniToldir(page);
  await expect(page).toHaveURL(/\/yolnalish\/?$/, { timeout: 15_000 });

  // Uchinchi o'lchov — yakuniy. Uchala shakl ham bir-biridan mustaqil.
  await page.goto("/diagnostika/");
  await page
    .getByRole("button", { name: /yakuniy diagnostikani boshlash/i })
    .click();
  await expect(
    page.getByRole("heading", { level: 1, name: /yakuniy diagnostika/i }),
  ).toBeVisible();

  const yakuniySavollar = await page.locator("ol li p").allInnerTexts();
  expect(
    yakuniySavollar.filter((x) => birinchiSavollar.includes(x)),
    "yakuniy ↔ boshlang'ich",
  ).toEqual([]);
  expect(
    yakuniySavollar.filter((x) => oraliqSavollar.includes(x)),
    "yakuniy ↔ oraliq",
  ).toEqual([]);

  await diagnostikaniToldir(page);
  await expect(page).toHaveURL(/\/yolnalish\/?$/, { timeout: 15_000 });

  const turlar = await page.evaluate(async () => {
    const db = await new Promise<IDBDatabase>((resolve, reject) => {
      const req = indexedDB.open("musicped");
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    return await new Promise<string[]>((resolve) => {
      const tx = db.transaction("diagnostics", "readonly");
      const req = tx.objectStore("diagnostics").getAll();
      req.onsuccess = () =>
        resolve((req.result as Array<{ kind: string }>).map((r) => r.kind));
      req.onerror = () => resolve([]);
    });
  });

  expect(turlar.sort()).toEqual(["boshlangich", "oraliq", "yakuniy"]);
});

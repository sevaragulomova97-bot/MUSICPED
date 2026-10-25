import { expect, test } from "@playwright/test";
import { KURSLAR } from "@/content/courses";
import { bazaniTozala, sessiyaBer, TALABA } from "./yordamchi";

/**
 * Oraliq va yakuniy sertifikatlar.
 *
 * Sertifikat — talaba uchun rasmiy hujjat, shuning uchun test faqat
 * tugma ko'rinishini emas, **PDF haqiqatan yaratilishini** ham
 * tekshiradi.
 */

/** Berilgan kurslarning barcha darslarini yakunlangan qilib yozadi. */
async function darslarniYakunla(
  page: import("@playwright/test").Page,
  userId: string,
  kurslar: Array<{ slug: string; lessons: Array<{ id: string }> }>,
) {
  await page.evaluate(
    async ({ userId, kurslar }) => {
      const db = await new Promise<IDBDatabase>((resolve, reject) => {
        const req = indexedDB.open("musicped");
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
      const hozir = new Date().toISOString();
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction("progress", "readwrite");
        const store = tx.objectStore("progress");
        for (const kurs of kurslar) {
          for (const dars of kurs.lessons) {
            store.put({
              id: `${userId}:${dars.id}`,
              userId,
              lessonId: dars.id,
              courseSlug: kurs.slug,
              percent: 100,
              completedAt: hozir,
              updatedAt: hozir,
            });
          }
        }
        tx.oncomplete = () => resolve();
        tx.onerror = () => reject(tx.error);
      });
    },
    { userId, kurslar },
  );
}

const KURS_MAʼLUMOTI = KURSLAR.map((k) => ({
  slug: k.slug,
  lessons: k.lessons.map((l) => ({ id: l.id })),
}));

test.describe("Sertifikatlar", () => {
  test("hech narsa qilinmaganda yakuniy sertifikat berilmaydi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await bazaniTozala(page);
    await page.goto("/portfolio/");
    await page.getByText("Sertifikatlar", { exact: false }).first().click();

    await expect(page.getByText("Yakuniy sertifikat")).toBeVisible();
    await expect(page.getByText(/0 \/ \d+ kurs yakunlandi/)).toBeVisible();
    await expect(page.getByText("Yakunlanmagan kurslar:")).toBeVisible();
    await expect(
      page.getByRole("button", { name: /yakuniy sertifikatni olish/i }),
    ).toHaveCount(0);
  });

  test("bitta kurs yakunlansa oraliq sertifikat PDF beradi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await bazaniTozala(page);
    // Baza yaratilishi uchun avval ilovani ochamiz.
    await page.goto("/portfolio/");
    await page.waitForTimeout(500);
    await darslarniYakunla(page, TALABA.id, [KURS_MAʼLUMOTI[0]]);

    await page.goto("/portfolio/");
    await page.getByText("Sertifikatlar", { exact: false }).first().click();

    const tugma = page.getByRole("button", { name: /oraliq sertifikat/i }).first();
    await expect(tugma).toBeVisible();

    const yuklanma = page.waitForEvent("download");
    await tugma.click();
    const fayl = await yuklanma;
    expect(fayl.suggestedFilename()).toMatch(/^oraliq-sertifikat-.*\.pdf$/);
  });

  test("barcha kurslar yakunlansa yakuniy sertifikat PDF beradi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await bazaniTozala(page);
    await page.goto("/portfolio/");
    await page.waitForTimeout(500);
    await darslarniYakunla(page, TALABA.id, KURS_MAʼLUMOTI);

    await page.goto("/portfolio/");
    await page.getByText("Sertifikatlar", { exact: false }).first().click();

    await expect(
      page.getByText(`${KURS_MAʼLUMOTI.length} / ${KURS_MAʼLUMOTI.length} kurs yakunlandi`),
    ).toBeVisible();
    await expect(page.getByText("Yakunlanmagan kurslar:")).toHaveCount(0);

    const yuklanma = page.waitForEvent("download");
    await page.getByRole("button", { name: /yakuniy sertifikatni olish/i }).click();
    const fayl = await yuklanma;
    expect(fayl.suggestedFilename()).toBe("yakuniy-sertifikat.pdf");

    // Hujjat haqiqiy PDF bo'lishi kerak.
    const yol = await fayl.path();
    const { readFileSync } = await import("node:fs");
    const bosh = readFileSync(yol).subarray(0, 5).toString("latin1");
    expect(bosh).toBe("%PDF-");
  });

  /*
    Sertifikat portfolioda bitta bo'lib qolishi kerak.

    Avval har bosilishda yangi nusxa qo'shilardi: tugmani uch marta
    bosgan talabada uchta bir xil PDF yotardi. Qayta yaratish o'zi
    ma'noli (kursni yaxshiroq natija bilan qayta yakunlash mumkin),
    shuning uchun eskisi o'chiriladi, o'rniga yangisi qo'yiladi.
  */
  test("uch marta olingan sertifikat portfolioda bitta bo'lib qoladi", async ({
    page,
  }) => {
    test.slow();
    await sessiyaBer(page, TALABA);
    await bazaniTozala(page);
    await page.goto("/portfolio/");
    await page.waitForTimeout(500);
    await darslarniYakunla(page, TALABA.id, KURS_MAʼLUMOTI);

    await page.goto("/portfolio/");
    await page.getByText("Sertifikatlar", { exact: false }).first().click();

    for (let i = 0; i < 3; i += 1) {
      const yuklanma = page.waitForEvent("download");
      await page
        .getByRole("button", { name: /yakuniy sertifikatni olish/i })
        .click();
      await yuklanma;
      await page.waitForTimeout(800);
    }

    const soni = await page.evaluate(async (uid) => {
      const db = await new Promise<IDBDatabase>((resolve, reject) => {
        const req = indexedDB.open("musicped");
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
      const hammasi = await new Promise<unknown[]>((resolve) => {
        const tx = db.transaction("portfolio", "readonly");
        const req = tx.objectStore("portfolio").getAll();
        req.onsuccess = () => resolve(req.result as unknown[]);
        req.onerror = () => resolve([]);
      });
      db.close();
      return (hammasi as Array<{ userId: string; category: string }>).filter(
        (p) => p.userId === uid && p.category === "sertifikat",
      ).length;
    }, TALABA.id);

    expect(soni).toBe(1);
  });
});

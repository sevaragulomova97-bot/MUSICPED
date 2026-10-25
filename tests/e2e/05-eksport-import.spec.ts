import { expect, test } from "@playwright/test";
import { readFileSync } from "node:fs";
import { bazaniTozala, OQITUVCHI, sessiyaBer, TALABA } from "./yordamchi";

/**
 * Serversiz platformaning eng muhim oqimi:
 *
 *   talaba → natijalar.json → o'qituvchi → baho → baholar.json → talaba
 *
 * Bu zanjir uzilsa, o'qituvchi talabaning ishini umuman ko'ra olmaydi.
 * Shuning uchun u to'liq, uchdan-uchiga sinaladi.
 */
test("natijalar o'qituvchiga boradi, baho talabaga qaytadi", async ({ page }) => {
  /* 1. Talaba ish topshiradi */
  await sessiyaBer(page, TALABA);
  await bazaniTozala(page);

  await page.goto("/topshiriqlar/musiqa-asarlari-tahlili/");
  await page
    .getByRole("textbox")
    .first()
    .fill(
      "Asar ikki qismli shaklda. Birinchi qism asosiy tonallikda, ikkinchisi " +
        "dominantaga o'tadi va qaytadi. Kadanslar aniq ajralib turadi.",
    );
  await page.getByRole("button", { name: /^topshirish$/i }).click();
  await expect(page.getByText(/baholashini kutmoqda/i)).toBeVisible({ timeout: 10_000 });

  /* 2. Talaba eksport qiladi */
  await page.goto("/sozlamalar/");
  const [natijalarFayli] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button", { name: /natijalarimni saqlash/i }).click(),
  ]);
  const natijalarYoli = await natijalarFayli.path();
  expect(natijalarFayli.suggestedFilename()).toMatch(/^natijalar-.*\.json$/);

  /*
    Xabar faylning nomini va keyingi qadamni aytishi kerak. Talaba
    fayl turini (JSON) bilmaydi va bilishi ham shart emas — u faqat
    faylni qayerdan topishni va kimga yuborishni bilishi kerak.
  */
  const xabar = page.locator("main").getByRole("status");
  await expect(xabar).toContainText(natijalarFayli.suggestedFilename());
  await expect(xabar).toContainText(/o'qituvchingizga/i);

  const paket = JSON.parse(readFileSync(natijalarYoli, "utf8"));
  expect(paket.app).toBe("musicped");
  expect(paket.kind).toBe("natijalar");
  expect(paket.submissions.length).toBeGreaterThan(0);
  // Baholanmagan ish faylda ballsiz chiqadi: na `-1`, na `0`.
  // Aks holda o'qituvchi uni «nol ball olgan ish» deb ko'rardi.
  expect(paket.submissions[0].score).toBeUndefined();

  /* 3. O'qituvchi qabul qiladi */
  await sessiyaBer(page, OQITUVCHI);
  await page.goto("/oqituvchi/");
  await page.setInputFiles("#talaba-fayllari", natijalarYoli);
  await expect(page.getByText(TALABA.fullName).first()).toBeVisible({ timeout: 10_000 });

  /* 4. O'qituvchi rubrika bo'yicha baholaydi */
  await page.goto("/oqituvchi/topshiriqlar/");
  await expect(page.getByText(/baho kutmoqda/i).first()).toBeVisible({ timeout: 10_000 });

  const slayderlar = page.locator('input[type="range"]');
  const soni = await slayderlar.count();
  expect(soni).toBeGreaterThan(0);
  for (let i = 0; i < soni; i += 1) {
    const max = await slayderlar.nth(i).getAttribute("max");
    await slayderlar.nth(i).fill(String(Math.round(Number(max) * 0.8)));
  }
  await page.getByRole("textbox").first().fill("Shakl to'g'ri aniqlangan, garmoniya qisqa yozilgan.");
  await page.getByRole("button", { name: /bahoni saqlash/i }).click();
  // Karta ro'yxatdan chiqib ketadi, shuning uchun tasdiq xabari ro'yxat
  // ustida ko'rsatiladi.
  await expect(page.getByRole("status")).toContainText(/qo'yildi\. Saqlandi\./, {
    timeout: 10_000,
  });

  /* 5. O'qituvchi baholar faylini yuklab oladi */
  const [baholarFayli] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button", { name: /yuklab olish/i }).first().click(),
  ]);
  const baholarYoli = await baholarFayli.path();
  expect(baholarFayli.suggestedFilename()).toMatch(/^baholar-.*\.json$/);

  const baholar = JSON.parse(readFileSync(baholarYoli, "utf8"));
  expect(baholar.kind).toBe("baholar");
  expect(baholar.grades).toHaveLength(1);
  expect(baholar.grades[0].score).toBeGreaterThan(0);

  /* 6. Talaba bahoni import qiladi */
  await sessiyaBer(page, TALABA);
  await page.goto("/sozlamalar/");
  await page.setInputFiles("#import-fayl", baholarYoli);
  await expect(page.getByText(/ta baho qo'shildi/i)).toBeVisible({ timeout: 10_000 });

  /* 7. Baho va izoh natijalarda ko'rinadi */
  await page.goto("/natijalar/");
  await expect(page.getByText(/o'qituvchi izohlari/i)).toBeVisible({ timeout: 10_000 });
  await expect(page.getByText(/shakl to'g'ri aniqlangan/i)).toBeVisible();
});

/**
 * Import takroriy bajarilganda dublikat yaratmasligi kerak.
 *
 * Sozlamalar sahifasi buni ochiq va'da qiladi («bir xil faylni ikki
 * marta yuklash dublikat yaratmaydi»), va bu real holat: talaba
 * zaxira nusxani qayta yuklaydi yoki ikki marta bosib yuboradi.
 * Dublikat paydo bo'lsa, natijalar sahifasidagi barcha hisoblar
 * buziladi va buni payqash qiyin.
 */
test("bir xil faylni ikki marta import qilish dublikat yaratmaydi", async ({
  page,
}) => {
  test.slow();
  await sessiyaBer(page, TALABA);
  await bazaniTozala(page);

  // Bir nechta yozuv hosil qilamiz: topshiriq va dars progressi.
  await page.goto("/topshiriqlar/musiqa-asarlari-tahlili/");
  await page
    .getByRole("textbox")
    .first()
    .fill(
      "Asar uch qismli shaklda; o'rta qism parallel tonallikda, " +
        "repriza asosiy mavzuni qaytaradi.",
    );
  await page.getByRole("button", { name: /^topshirish$/i }).click();
  await expect(page.getByText(/baholashini kutmoqda/i)).toBeVisible({ timeout: 10_000 });

  await page.goto("/sozlamalar/");
  const [fayl] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("button", { name: /natijalarimni saqlash/i }).click(),
  ]);
  const yol = await fayl.path();

  /** Bazadagi yozuvlar soni. */
  const sanoq = () =>
    page.evaluate(async () => {
      const ochil = () =>
        new Promise<IDBDatabase>((res, rej) => {
          const r = indexedDB.open("musicped");
          r.onsuccess = () => res(r.result);
          r.onerror = () => rej(r.error);
        });
      const db = await ochil();
      const sana = (nom: string) =>
        new Promise<number>((res) => {
          const r = db.transaction(nom).objectStore(nom).count();
          r.onsuccess = () => res(r.result);
          r.onerror = () => res(-1);
        });
      const natija = {
        submissions: await sana("submissions"),
        progress: await sana("progress"),
        diagnostics: await sana("diagnostics"),
      };
      db.close();
      return natija;
    });

  const oldin = await sanoq();
  expect(oldin.submissions).toBeGreaterThan(0);

  // Ikki marta ketma-ket import qilamiz.
  for (let i = 0; i < 2; i += 1) {
    await page.setInputFiles("#import-fayl", yol);
    await expect(page.getByText(/import qilindi|qo'shildi|yangilandi/i).first()).toBeVisible({
      timeout: 15_000,
    });
    await page.waitForTimeout(500);
  }

  const keyin = await sanoq();
  expect(keyin, JSON.stringify({ oldin, keyin })).toEqual(oldin);
});

import { expect, test } from "@playwright/test";
import { bazaniTozala, OQITUVCHI, sessiyaBer, TALABA } from "../e2e/yordamchi";

/**
 * Yig'uvchi server oqimi: talaba yuboradi → o'qituvchi yuklaydi.
 *
 * Bu platformaning eng zaif bo'g'inini — natijani o'qituvchiga
 * yetkazishni — avtomatlashtiradi, shuning uchun u haqiqiy tarmoq
 * bilan sinaladi (soxta server Supabase ning shu qismini
 * takrorlaydi).
 */

const SOXTA = `http://127.0.0.1:${process.env.PW_SOXTA_PORT ?? 4182}/`;

/** Soxta serverdagi barcha yozuvlarni qaytaradi. */
async function serverYozuvlari(request: import("@playwright/test").APIRequestContext) {
  const javob = await request.get(`${SOXTA}?select=*`, {
    headers: { apikey: "oqish-kaliti" },
  });
  expect(javob.status()).toBe(200);
  return (await javob.json()) as Array<{ talaba_id: string; ism: string }>;
}

test("talaba yuboradi, o'qituvchi serverdan yuklaydi", async ({
  page,
  request,
}) => {
  test.slow();

  /* 1. Talaba biror ish bajaradi (darsni yakunlangan qilib yozamiz —
     oqimning o'zi sinalyapti, dars sahifasi emas) */
  await sessiyaBer(page, TALABA);
  await bazaniTozala(page);
  await page.goto("/bosh-sahifa/");
  await page.waitForLoadState("networkidle");
  await page.evaluate(async (uid) => {
    const db = await new Promise<IDBDatabase>((res, rej) => {
      const r = indexedDB.open("musicped");
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
    const hozir = new Date().toISOString();
    await new Promise<void>((res) => {
      const tx = db.transaction("progress", "readwrite");
      tx.objectStore("progress").put({
        id: `${uid}:nota-savodi`,
        userId: uid,
        lessonId: "nota-savodi",
        courseSlug: "musiqa-nazariyasi",
        percent: 100,
        completedAt: hozir,
        updatedAt: hozir,
      });
      tx.oncomplete = () => res();
      tx.onerror = () => res();
    });
    db.close();
  }, TALABA.id);

  /* 2. Yuboradi */
  await page.goto("/sozlamalar/");
  await page.waitForLoadState("networkidle");
  await page.getByRole("button", { name: "O'qituvchiga yuborish" }).click();
  await expect(page.locator("main").getByRole("status")).toContainText(
    /o'qituvchiga yuborildi/i,
    { timeout: 15_000 },
  );

  const yozuvlar = await serverYozuvlari(request);
  expect(yozuvlar.length).toBeGreaterThan(0);
  expect(yozuvlar.some((y) => y.talaba_id === TALABA.id)).toBe(true);

  /* 3. O'qituvchi serverdan yuklaydi */
  await sessiyaBer(page, OQITUVCHI);
  await bazaniTozala(page);
  await page.goto("/oqituvchi/");
  await page.waitForLoadState("networkidle");

  await page.getByLabel("O'qish kaliti").fill("oqish-kaliti");
  await page.getByRole("button", { name: "Serverdan yuklash" }).click();
  await expect(page.locator("main").getByRole("status")).toContainText(
    /talaba natijasi yuklandi/i,
    { timeout: 20_000 },
  );

  /* 4. Talaba kabinetda ko'rinadi */
  await page.goto("/oqituvchi/talabalar/");
  await page.waitForLoadState("networkidle");
  await expect(page.locator("main")).toContainText(TALABA.fullName);
});

test("noto'g'ri kalit bilan yuklashda sabab aytiladi", async ({ page }) => {
  await sessiyaBer(page, OQITUVCHI);
  await page.goto("/oqituvchi/");
  await page.waitForLoadState("networkidle");
  await page.getByLabel("O'qish kaliti").fill("buzuq-kalit");
  await page.getByRole("button", { name: "Serverdan yuklash" }).click();
  await expect(page.locator("main").getByRole("status")).toContainText(
    /Kalit noto'g'ri yoki o'qishga ruxsat yo'q/,
    { timeout: 15_000 },
  );
});

test("internet yo'q bo'lsa paket navbatda qoladi", async ({ page, context }) => {
  test.slow();
  await sessiyaBer(page, TALABA);
  await bazaniTozala(page);
  await page.goto("/sozlamalar/");
  await page.waitForLoadState("networkidle");

  // Serverga chiqishni to'sib qo'yamiz.
  await context.route(`${SOXTA}**`, (route) => route.abort());
  await page.getByRole("button", { name: "O'qituvchiga yuborish" }).click();
  await expect(page.locator("main").getByRole("status")).toContainText(
    /navbatga qo'yildi/,
    { timeout: 15_000 },
  );

  // Paket brauzerda saqlanib qolishi kerak — ish yo'qolmaydi.
  const navbat = await page.evaluate(() =>
    JSON.parse(localStorage.getItem("musicped.yiguvchi.navbat.v1") ?? "[]"),
  );
  expect(navbat).toHaveLength(1);
  expect(navbat[0].talabaId).toBe(TALABA.id);
});

import { readFileSync } from "node:fs";
import { expect, test, type Page } from "@playwright/test";
import { ADMIN, bazaniTozala, OQITUVCHI, sessiyaBer, TALABA } from "./yordamchi";

/**
 * Nosoz muhit va nosoz ma'lumotda ilovaning xatti-harakati.
 *
 * Bu holatlar kamdan-kam uchraydi, lekin uchraganda **jim** kechadi:
 * sahifa ochiladi, interfeys ko'rinadi, faqat hech narsa ishlamaydi.
 * Aynan shunday nosozlikni foydalanuvchi tushuna olmaydi, shuning uchun
 * ular alohida tekshiriladi.
 */

test.describe("Saqlash bloklangan muhit", () => {
  test.beforeEach(async ({ page }) => {
    // Ayrim brauzerlar shaxsiy rejimda IndexedDB ga murojaatni
    // DOMException bilan rad etadi.
    await page.addInitScript(() => {
      Object.defineProperty(window, "indexedDB", {
        get() {
          throw new DOMException("bloklangan", "SecurityError");
        },
      });
    });
  });

  test("kirish sahifasi baribir ochiladi", async ({ page }) => {
    await page.goto("/kirish/");
    await expect(page.getByRole("heading", { name: "Platformaga kirish" })).toBeVisible();
  });

  test("ilova «Yuklanmoqda…» da osilib qolmaydi, sabab ko'rsatiladi", async ({
    page,
  }) => {
    await page.goto("/kirish/");
    await page.getByRole("radio", { name: /Bobur Akbarov/ }).click();
    await page.getByRole("button", { name: "Davom etish" }).click();

    await expect(
      page.getByRole("heading", { name: /ma'lumot saqlashga ruxsat bermayapti/i }),
    ).toBeVisible({ timeout: 20_000 });
    // Nima qilish kerakligi ham yoziladi — xato xabari o'zi yetarli emas.
    await expect(page.getByText(/inkognito/i)).toBeVisible();
    await expect(page.getByText(/Yuklanmoqda/)).toHaveCount(0);
  });
});

test.describe("Nosoz fayl import qilish", () => {
  test("o'qituvchi kabineti buzuq JSON ga tushunarli xato beradi", async ({
    page,
  }) => {
    await sessiyaBer(page, OQITUVCHI);
    await page.goto("/oqituvchi/");

    await page.setInputFiles("#talaba-fayllari", {
      name: "buzuq.json",
      mimeType: "application/json",
      buffer: Buffer.from("{ bu JSON emas"),
    });

    // Sahifa qulamasligi va sababni aytishi kerak.
    await expect(
      page.getByText("Fayl JSON formatida emas yoki buzilgan."),
    ).toBeVisible({ timeout: 15_000 });
  });

  test("talaba sozlamalarida ham buzuq fayl qulatmaydi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/sozlamalar/");

    await page.setInputFiles("#import-fayl", {
      name: "buzuq.json",
      mimeType: "application/json",
      buffer: Buffer.from('{"versiya": 999}'),
    });

    await expect(page.getByText("Bu fayl MusicPed eksporti emas.")).toBeVisible({
      timeout: 15_000,
    });
  });
});

test.describe("Bildirishnomalar", () => {
  test("yangi foydalanuvchiga diagnostika eslatiladi va qo'ng'iroqda raqam chiqadi", async ({
    page,
  }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/bosh-sahifa/");

    // Qo'ng'iroq yonidagi raqam — muhim eslatmalar soni.
    const qongiroq = page.getByRole("link", { name: /Bildirishnomalar/ });
    await expect(qongiroq).toHaveAttribute("aria-label", /muhim eslatma/, {
      timeout: 15_000,
    });

    await qongiroq.click();
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Bildirishnomalar",
    );
    // «Hali tayyor emas» o'rniga haqiqiy eslatma bo'lishi kerak.
    await expect(page.getByText(/tayyor emas/i)).toHaveCount(0);
    const eslatma = page.getByRole("link", { name: /Diagnostikadan o'ting/ });
    await expect(eslatma).toBeVisible();
    await eslatma.click();
    await expect(page).toHaveURL(/\/diagnostika\/?$/);
  });
});

test.describe("Kurs sahifasi", () => {
  test("ro'yxatdan kursga, kursdan darsga va orqaga o'tiladi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/kurslar/");

    // Kurs sarlavhasi — kurs sahifasiga havola.
    await page.getByRole("link", { name: "Musiqa nazariyasi", exact: true }).click();
    await expect(page).toHaveURL(/\/kurslar\/musiqa-nazariyasi\/?$/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Musiqa nazariyasi",
    );
    // Kurs sahifasida o'quv natijalari ham bo'lishi kerak.
    await expect(page.getByText("O'quv natijalari")).toBeVisible();

    // Darsga o'tish.
    await page.getByRole("link", { name: /Nota savodi/ }).first().click();
    await expect(page).toHaveURL(/\/kurslar\/musiqa-nazariyasi\/[a-z-]+\/?$/);

    // Yo'l ko'rsatkichi orqali kursga qaytish.
    await page
      .getByRole("navigation", { name: "Yo'l" })
      .getByRole("link", { name: "Musiqa nazariyasi" })
      .click();
    await expect(page).toHaveURL(/\/kurslar\/musiqa-nazariyasi\/?$/);
  });

  test("beshala kursning sahifasi ochiladi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    for (const slug of [
      "musiqa-nazariyasi",
      "ijro-amaliyoti",
      "musiqa-talimi-metodikasi",
      "musiqa-texnologiyalari",
      "pedagogik-amaliyot",
    ]) {
      const javob = await page.goto(`/kurslar/${slug}/`);
      expect(javob?.status(), slug).toBeLessThan(400);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    }
  });
});

/**
 * Ishlamaydigan havolalar.
 *
 * Statik eksportda yo'q marshrutga havola **jim** kechadi: Next.js
 * yo'naltiruvchisi uni oldindan yuklashga urinib xato oladi, qo'lda
 * kirilganda esa 404 chiqadi. Aynan shunday kamchilik `/kurslar/<kurs>/`
 * da bor edi — ro'yxatdan to'g'ridan-to'g'ri darsga o'tilardi va oraliq
 * sahifa umuman yaratilmagandi.
 */
const INDEKSLAR = [
  "/bosh-sahifa/",
  "/kurslar/",
  "/kurslar/musiqa-nazariyasi/",
  "/kurslar/ijro-amaliyoti/",
  "/kurslar/musiqa-talimi-metodikasi/",
  "/kurslar/musiqa-texnologiyalari/",
  "/kurslar/pedagogik-amaliyot/",
  "/asboblar/",
  "/topshiriqlar/",
  "/natijalar/",
  "/portfolio/",
  "/profil/",
  "/sozlamalar/",
  "/qollanma/",
  "/bildirishnomalar/",
  "/yolnalish/",
  "/diagnostika/",
];
const OQITUVCHI_INDEKSLARI = [
  "/oqituvchi/",
  "/oqituvchi/talabalar/",
  "/oqituvchi/topshiriqlar/",
  "/oqituvchi/tadqiqot/",
  "/oqituvchi/mentorlik/",
];
const ADMIN_INDEKSLARI = [
  "/admin/",
  "/admin/kontent/",
  "/admin/foydalanuvchilar/",
  "/admin/jurnal/",
];

/** Berilgan sahifalardagi barcha ichki havolalarni yig'adi. */
async function havolalar(page: Page, yollar: string[]) {
  const set = new Set<string>();
  for (const y of yollar) {
    await page.goto(y, { waitUntil: "networkidle" });
    const topildi = await page
      .locator('a[href^="/"]')
      .evaluateAll((els) =>
        els.map((e) => (e as HTMLAnchorElement).getAttribute("href") ?? ""),
      );
    for (const l of topildi) {
      const c = l.split("#")[0].split("?")[0];
      if (c) set.add(c.endsWith("/") ? c : `${c}/`);
    }
  }
  return set;
}

test.describe("Havolalar", () => {
  test("uchala rolda ham ishlamaydigan havola yo'q", async ({ page }) => {
    test.slow();
    await sessiyaBer(page, TALABA);
    const hammasi = await havolalar(page, INDEKSLAR);
    await sessiyaBer(page, OQITUVCHI);
    for (const h of await havolalar(page, OQITUVCHI_INDEKSLARI)) hammasi.add(h);
    await sessiyaBer(page, ADMIN);
    for (const h of await havolalar(page, ADMIN_INDEKSLARI)) hammasi.add(h);

    // Havolalar soni kutilganidan kam bo'lsa, test o'zi ishlamay
    // qolgan degani — bo'sh ro'yxatni tekshirish hech narsa bermaydi.
    expect(hammasi.size).toBeGreaterThan(100);

    const yoq: string[] = [];
    for (const h of hammasi) {
      const r = await page.request.get(h);
      if (r.status() >= 400) yoq.push(`${h} -> ${r.status()}`);
    }
    expect(yoq.join("\n")).toBe("");
  });
});

/**
 * Dasturni to'liq tamomlagan talabaning ma'lumoti.
 *
 * Platforma serversiz: barcha hisoblar brauzerda, har bir sahifa
 * ochilganda qaytadan bajariladi. Ma'lumot o'sganda sahifa sekinlashsa
 * yoki eksport bir qismini tushirib qoldirsa, buni faqat shunday
 * o'lchov ko'rsatadi — bo'sh bazada hamma narsa tez va to'g'ri.
 */
async function toliqMalumot(page: Page, userId: string) {
  return page.evaluate(async (uid) => {
    const db = await new Promise<IDBDatabase>((res, rej) => {
      const r = indexedDB.open("musicped");
      r.onsuccess = () => res(r.result);
      r.onerror = () => rej(r.error);
    });
    const yoz = (nom: string, rows: unknown[]) =>
      new Promise<void>((res) => {
        const tx = db.transaction(nom, "readwrite");
        const st = tx.objectStore(nom);
        for (const r of rows) st.put(r);
        tx.oncomplete = () => res();
        tx.onerror = () => res();
      });
    const now = new Date().toISOString();
    await yoz(
      "progress",
      Array.from({ length: 52 }, (_, i) => ({
        id: `${uid}:dars-${i}`, userId: uid, lessonId: `dars-${i}`,
        courseSlug: "musiqa-nazariyasi", percent: 100,
        completedAt: now, updatedAt: now,
      })),
    );
    await yoz(
      "submissions",
      Array.from({ length: 52 }, (_, i) => ({
        id: `sub-${i}`, userId: uid, taskId: `task-${i}`, taskType: "test",
        area: "nazariya", bloom: "bilish", score: 70 + (i % 30),
        submittedAt: now, gradedAt: now, answers: { matn: "x".repeat(400) },
      })),
    );
    await yoz(
      "reflections",
      Array.from({ length: 100 }, (_, i) => ({
        id: `${uid}:ctx-${i}:0`, userId: uid, contextId: `ctx-${i}`,
        question: "Nimani o'rgandingiz?", answer: "y".repeat(300), createdAt: now,
      })),
    );
    db.close();
  }, userId);
}

test.describe("To'liq ma'lumot", () => {
  test("sahifalar sekinlashmaydi va eksport hech narsani tushirib qoldirmaydi", async ({
    page,
  }) => {
    test.slow();
    await sessiyaBer(page, TALABA);
    await bazaniTozala(page);
    await page.goto("/bosh-sahifa/");
    await page.waitForLoadState("networkidle");
    await toliqMalumot(page, TALABA.id);

    for (const yol of ["/bosh-sahifa/", "/natijalar/", "/topshiriqlar/", "/yolnalish/"]) {
      const t0 = Date.now();
      await page.goto(yol, { waitUntil: "networkidle" });
      await page
        .waitForFunction(() => !document.body.innerText.includes("Yuklanmoqda…"), undefined, {
          timeout: 20_000,
        })
        .catch(() => {});
      const ms = Date.now() - t0;
      // Chegara keng: maqsad — sekinlashuvni emas, **qotib qolishni**
      // ushlash (masalan har bir yozuv uchun alohida so'rov).
      expect(ms, `${yol}: ${ms} ms`).toBeLessThan(8000);
    }

    await page.goto("/sozlamalar/");
    const [fayl] = await Promise.all([
      page.waitForEvent("download"),
      page.getByRole("button", { name: /natijalarimni saqlash/i }).click(),
    ]);
    const paket = JSON.parse(readFileSync(await fayl.path(), "utf8"));
    expect(paket.progress).toHaveLength(52);
    expect(paket.submissions).toHaveLength(52);
    expect(paket.reflections).toHaveLength(100);
  });
});

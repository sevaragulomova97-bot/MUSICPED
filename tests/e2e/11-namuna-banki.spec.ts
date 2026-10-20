import { expect, test, type Page } from "@playwright/test";
import { sessiyaBer, TALABA } from "./yordamchi";

/**
 * Namuna banki dvigateli — **o'lchov bilan** tekshiriladi.
 *
 * Tovushni quloq bilan tekshirib bo'lmaydigan joyda sinov yagona
 * ishonchli yo'l: brauzerda `AudioBufferSourceNode.start` ushlanadi va
 * qaysi fayl, qanday tezlikda chalingani yozib boriladi. Shu sababli
 * «ovoz chiqdi» emas, **aynan qaysi namuna** chalingani tasdiqlanadi.
 *
 * Shunga arzigulik sabab bor: ijro kuchi qatlamlari va zarb variantlari
 * ko'z bilan ko'rinmaydi. Ular ishlamay qolsa, sahifa baribir «ishlab
 * turganday» ko'rinadi va kamchilik faqat quloqqa bilinadi.
 */

type Chalingan = { url: string; rate: number };

/** Chalingan namunalarni yozib boradigan kuzatuvni o'rnatadi. */
async function kuzatuvOrnat(page: Page) {
  await page.addInitScript(() => {
    const urlOf = new WeakMap<ArrayBuffer, string>();
    const bufUrl = new WeakMap<AudioBuffer, string>();
    const w = window as unknown as {
      __audio: { played: Chalingan[]; tirik: number; engKop: number };
    };
    w.__audio = { played: [], tirik: 0, engKop: 0 };

    const origFetch = window.fetch.bind(window);
    window.fetch = async (...args: Parameters<typeof fetch>) => {
      const res = await origFetch(...args);
      const url = typeof args[0] === "string" ? args[0] : String(args[0]);
      if (url.endsWith(".mp3")) {
        const origAB = res.arrayBuffer.bind(res);
        res.arrayBuffer = async () => {
          const ab = await origAB();
          urlOf.set(ab, url);
          return ab;
        };
      }
      return res;
    };

    const proto = BaseAudioContext.prototype;
    const origDecode = proto.decodeAudioData;
    proto.decodeAudioData = function (ab: ArrayBuffer, ...rest: unknown[]) {
      const url = urlOf.get(ab);
      const out = origDecode.call(
        this,
        ab,
        ...(rest as [never, never]),
      ) as Promise<AudioBuffer>;
      if (out?.then) {
        void out.then((buf) => {
          if (url) bufUrl.set(buf, url);
        });
      }
      return out;
    };

    const origStart = AudioBufferSourceNode.prototype.start;
    AudioBufferSourceNode.prototype.start = function (
      this: AudioBufferSourceNode,
      ...a: Parameters<AudioBufferSourceNode["start"]>
    ) {
      const url = this.buffer ? bufUrl.get(this.buffer) : undefined;
      if (url) {
        w.__audio.played.push({
          url: url.split("/").slice(-2).join("/"),
          rate: this.playbackRate.value,
        });
      }
      w.__audio.tirik += 1;
      w.__audio.engKop = Math.max(w.__audio.engKop, w.__audio.tirik);
      this.addEventListener("ended", () => {
        w.__audio.tirik -= 1;
      });
      return origStart.apply(this, a);
    };
  });
}

async function chalinganlar(page: Page): Promise<Chalingan[]> {
  return page.evaluate(
    () => (window as unknown as { __audio: { played: Chalingan[] } }).__audio.played,
  );
}

async function tozala(page: Page) {
  await page.evaluate(() => {
    (window as unknown as { __audio: { played: Chalingan[] } }).__audio.played = [];
  });
}

test.describe("Namuna banki", () => {
  test("doira zarblari navbat bilan boshqa namunadan chalinadi", async ({ page }) => {
    await kuzatuvOrnat(page);
    await sessiyaBer(page, TALABA);
    await page.goto("/asboblar/doira/");

    const bum = page.getByRole("button", { name: /^Bum/ });
    await expect(bum).toBeVisible();

    // Birinchi bosish audio kontekstni ochadi va bankni yuklaydi.
    await bum.click();
    await expect(page.locator("[data-bank-tur]")).toBeVisible({ timeout: 15_000 });
    await tozala(page);

    for (let i = 0; i < 4; i += 1) {
      await bum.click();
      await page.waitForTimeout(120);
    }

    const chalindi = await chalinganlar(page);
    expect(chalindi.length, "to'rt bosishda to'rt namuna").toBe(4);

    const fayllar = chalindi.map((c) => c.url);
    for (const f of fayllar) expect(f).toMatch(/doira-yozuv\/bum-/);

    // Ketma-ket ikki zarb bir xil fayldan bo'lmasligi kerak — aks holda
    // takror mexanik eshitiladi.
    for (let i = 1; i < fayllar.length; i += 1) {
      expect(fayllar[i], `${i}-zarb oldingisidan farq qilsin`).not.toBe(
        fayllar[i - 1],
      );
    }
    // Variantlar aylanib boshiga qaytadi, shuning uchun to'rt zarbda
    // takrorlanish bo'ladi — lekin ketma-ket emas.
    expect(new Set(fayllar).size).toBeGreaterThanOrEqual(2);
  });

  test("to'rt zarbning har biri o'z namunasidan chalinadi", async ({ page }) => {
    await kuzatuvOrnat(page);
    await sessiyaBer(page, TALABA);
    await page.goto("/asboblar/doira/");

    await page.getByRole("button", { name: /^Bum/ }).click();
    await expect(page.locator("[data-bank-tur]")).toBeVisible({ timeout: 15_000 });
    await tozala(page);

    const zarblar = page.locator('[aria-label="Doira zarblari"] button');
    for (let i = 0; i < 4; i += 1) {
      await zarblar.nth(i).click();
      await page.waitForTimeout(100);
    }

    const fayllar = (await chalinganlar(page)).map((c) => c.url);
    expect(fayllar.length).toBe(4);
    expect(fayllar[0]).toMatch(/\/bum-/);
    expect(fayllar[1]).toMatch(/\/bosiq-/);
    expect(fayllar[2]).toMatch(/\/tak-/);
    expect(fayllar[3]).toMatch(/\/qarsak-/);
  });

  test("rubob notalari cho'zilmasdan, o'z namunasidan chalinadi", async ({ page }) => {
    await kuzatuvOrnat(page);
    await sessiyaBer(page, TALABA);
    await page.goto("/asboblar/rubob/");

    // Bo'sh tor — uning notasi uchun bankda aniq namuna bor.
    const notalar = page.locator('[aria-label="Grif — pardalar"] button[aria-label*="bo\'sh tor"]');
    await expect(notalar.first()).toBeVisible();
    await notalar.first().click();
    await expect(page.locator("[data-bank-tur]")).toBeVisible({ timeout: 20_000 });
    await tozala(page);

    await notalar.first().click();
    await page.waitForTimeout(150);

    const chalindi = await chalinganlar(page);
    expect(chalindi.length).toBeGreaterThan(0);
    // Har bir nota uchun alohida namuna bor, shuning uchun cho'zish
    // koeffitsiyenti aniq 1 bo'lishi kerak.
    expect(chalindi[0].rate).toBeCloseTo(1, 5);
    expect(chalindi[0].url).toMatch(/rubob-yozuv\//);
  });

  test("ijro kuchi tanlovi boshqa qatlamdagi namunani chaladi", async ({ page }) => {
    await kuzatuvOrnat(page);
    await sessiyaBer(page, TALABA);
    await page.goto("/asboblar/doira/");

    const bum = page.locator('[aria-label="Doira zarblari"] button').first();
    await bum.click();
    await expect(page.locator("[data-bank-tur]")).toBeVisible({ timeout: 15_000 });

    const kuchlar = page.locator('[aria-label="Ijro kuchi"] button');
    await expect(kuchlar).toHaveCount(3);

    const qatlamlar: string[] = [];
    for (let i = 0; i < 3; i += 1) {
      await kuchlar.nth(i).click();
      await tozala(page);
      await bum.click();
      await page.waitForTimeout(150);
      const chalindi = await chalinganlar(page);
      expect(chalindi.length, "zarb chalinishi kerak").toBeGreaterThan(0);
      qatlamlar.push(chalindi[0].url.replace(/-\d+\.mp3$/, ""));
    }

    // Uchala tanlov uchta boshqa-boshqa qatlamdan namuna olishi kerak.
    expect(new Set(qatlamlar).size, qatlamlar.join(", ")).toBe(3);
  });

  test("standart tembr haqiqiy yozuvga asoslanadi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/asboblar/dutor/");
    await page
      .locator('[aria-label="Grif — pardalar"] button')
      .first()
      .click();

    const belgi = page.locator("[data-bank-tur]");
    await expect(belgi).toBeVisible({ timeout: 20_000 });
    // Qarindosh cholg'u yozuvi «haqiqiy dutor yozuvi» deb
    // ko'rsatilmaydi — bu eng muhim shart.
    await expect(belgi).toHaveAttribute("data-bank-tur", "qarindosh");
    await expect(belgi).toContainText("Qarindosh cholg'u yozuvi");
    await expect(belgi).toContainText("60 namuna");
  });

  test("fizik modelga o'tilganda buni interfeys aytadi", async ({ page }) => {
    await sessiyaBer(page, TALABA);
    await page.goto("/asboblar/dutor/");
    await page.locator('[aria-label="Grif — pardalar"] button').first().click();
    await expect(page.locator("[data-bank-tur]")).toBeVisible({ timeout: 20_000 });

    await page.getByLabel("Tovush turi").selectOption("model");
    await page.locator('[aria-label="Grif — pardalar"] button').first().click();

    const belgi = page.locator("[data-bank-tur]");
    await expect(belgi).toHaveAttribute("data-bank-tur", "model", {
      timeout: 20_000,
    });
    await expect(belgi).toContainText("Fizik model");
  });
});

/**
 * Dvigatelning chidamliligi.
 *
 * Ikki holat tekshiriladi: fayllar umuman kelmaganda cholg'u jim
 * qolmasligi, va tez ijroda ovozlar nazoratsiz yig'ilib ketmasligi.
 */

/**
 * Berilgan bankning audio fayllarini «yo'q» qilib qo'yadi.
 *
 * To'siq sahifaning ichida qo'yiladi (`fetch` ustidan), chunki
 * `page.route` bu yerda shu papkaga mos naqshni ushlamadi — tekshirib
 * ko'rildi: so'rovlar ketyapti, lekin yo'naltiruvchi ishlamayapti.
 * Ichkaridan to'sish esa aynan dvigatel ko'radigan xatoni beradi.
 */
async function bankniTos(page: Page, papka: string) {
  await page.addInitScript((p: string) => {
    const orig = window.fetch.bind(window);
    window.fetch = (...args: Parameters<typeof fetch>) => {
      const url = typeof args[0] === "string" ? args[0] : String(args[0]);
      if (url.includes(`/${p}/`) && url.endsWith(".mp3")) {
        return Promise.reject(new Error("sinov: fayl yo'q"));
      }
      return orig(...args);
    };
  }, papka);
}

test.describe("Dvigatel chidamliligi", () => {
  test("namunalar yuklanmasa, cholg'u sintezga tushadi va ogohlantiradi", async ({
    page,
  }) => {
    // Faqat doira bankining fayllari to'siladi — qolgan cholg'ular
    // ta'sirlanmasligi kerak.
    await bankniTos(page, "doira-yozuv");
    await sessiyaBer(page, TALABA);
    await page.goto("/asboblar/doira/");

    await page.locator('[aria-label="Doira zarblari"] button').first().click();

    await expect(
      page.getByText(/soddalashtirilgan\s+sintez/i),
    ).toBeVisible({ timeout: 20_000 });
    // Bank belgisi ko'rsatilmaydi — bank yuklanmadi.
    await expect(page.locator("[data-bank-tur]")).toHaveCount(0);
  });

  test("bitta bank ishlamasa, boshqa cholg'u ishlayveradi", async ({ page }) => {
    await bankniTos(page, "doira-yozuv");
    await sessiyaBer(page, TALABA);
    await page.goto("/asboblar/rubob/");

    await page.locator('[aria-label="Grif — pardalar"] button').first().click();
    const belgi = page.locator("[data-bank-tur]");
    await expect(belgi).toBeVisible({ timeout: 20_000 });
    await expect(belgi).toContainText("81 namuna");
  });

  test("tez ijroda ovozlar soni chegarada qoladi", async ({ page }) => {
    await kuzatuvOrnat(page);
    await sessiyaBer(page, TALABA);
    await page.goto("/asboblar/rubob/");

    const pardalar = page.locator('[aria-label="Grif — pardalar"] button');
    await pardalar.first().click();
    await expect(page.locator("[data-bank-tur]")).toBeVisible({ timeout: 20_000 });

    // 60 ta tez zarba — bitta namuna 3,4 soniya jaranglaydi, ya'ni
    // chegara bo'lmasa hammasi bir vaqtda eshitilardi.
    const soni = Math.min(60, await pardalar.count());
    for (let i = 0; i < 60; i += 1) {
      await pardalar.nth(i % soni).dispatchEvent("pointerdown");
    }
    await page.waitForTimeout(400);

    const engKop = await page.evaluate(
      () => (window as unknown as { __audio: { engKop: number } }).__audio.engKop,
    );
    expect(engKop, "ovozlar nazoratsiz yig'ilmasligi kerak").toBeLessThanOrEqual(26);
    expect(engKop, "ijro to'xtab qolmasligi kerak").toBeGreaterThan(1);
  });
});

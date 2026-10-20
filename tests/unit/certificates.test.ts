import { describe, expect, it } from "vitest";
import { buildCertificatePdf } from "@/lib/export/certificate";
import {
  finalStatus,
  moduleStatuses,
  OTISH_BALI,
  type ProgressRow,
  type SubmissionRow,
} from "@/lib/certificates";
import { certificateSerial } from "@/lib/export/certificate";
import { KURSLAR } from "@/content/courses";
import { MODULLAR } from "@/content/modules";

/**
 * Sertifikat — talaba uchun rasmiy hujjat, shuning uchun «qachon
 * beriladi» degan savolga aniq javob kerak. Bu testlar ikkala shartni
 * ham qo'riqlaydi: darslar yakunlanishi va o'tish bali.
 */

/** Berilgan modullar kurslarining barcha darslarini yakunlangan qiladi. */
function darslarYakunlandi(moduleIds: string[]): ProgressRow[] {
  return KURSLAR.filter((k) => moduleIds.includes(k.moduleId)).flatMap((k) =>
    k.lessons.map((l) => ({ lessonId: l.id, percent: 100 })),
  );
}

const HAMMA = MODULLAR.map((m) => m.id);

describe("moduleStatuses", () => {
  it("hech narsa qilinmaganda birorta modul tayyor emas", () => {
    const holat = moduleStatuses([], []);
    expect(holat).toHaveLength(MODULLAR.length);
    expect(holat.every((m) => !m.tayyor)).toBe(true);
    expect(holat[0].sabab).toMatch(/dars qoldi/);
  });

  it("barcha darslar yakunlansa va baho bo'lmasa — tayyor", () => {
    // Baholangan topshiriq yo'q bo'lsa, ball sharti qo'llanmaydi.
    const holat = moduleStatuses(darslarYakunlandi([MODULLAR[0].id]), []);
    expect(holat[0].tayyor).toBe(true);
    expect(holat[0].tugagan).toBe(holat[0].darslar);
    expect(holat[1].tayyor).toBe(false);
  });

  it("o'rtacha o'tish balidan past bo'lsa — tayyor emas", () => {
    const modul = MODULLAR[0];
    const past: SubmissionRow[] = [{ score: OTISH_BALI - 20, area: modul.areas[0] }];
    const holat = moduleStatuses(darslarYakunlandi([modul.id]), past);
    expect(holat[0].tayyor).toBe(false);
    expect(holat[0].sabab).toMatch(new RegExp(`${OTISH_BALI}`));
  });

  it("baholanmagan ish o'rtachani pasaytirmaydi", () => {
    // O'qituvchi hali baholamagan ish `score` siz yoki manfiy keladi.
    const modul = MODULLAR[0];
    const subs: SubmissionRow[] = [
      { score: 90, area: modul.areas[0] },
      { score: -1, area: modul.areas[0] },
      { area: modul.areas[0] },
    ];
    const holat = moduleStatuses(darslarYakunlandi([modul.id]), subs);
    expect(holat[0].soni).toBe(1);
    expect(holat[0].ortacha).toBe(90);
    expect(holat[0].tayyor).toBe(true);
  });
});

describe("finalStatus", () => {
  it("bitta kurs qolsa ham yakuniy sertifikat berilmaydi", () => {
    const qolgan = MODULLAR[MODULLAR.length - 1];
    const ids = HAMMA.filter((id) => id !== qolgan.id);
    const yakun = finalStatus(moduleStatuses(darslarYakunlandi(ids), []));

    expect(yakun.tayyor).toBe(false);
    expect(yakun.qolgan).toEqual([qolgan.title]);
    expect(yakun.tugagan).toBe(MODULLAR.length - 1);
  });

  it("barcha kurslar yakunlanganda beriladi", () => {
    const yakun = finalStatus(moduleStatuses(darslarYakunlandi(HAMMA), []));
    expect(yakun.tayyor).toBe(true);
    expect(yakun.qolgan).toEqual([]);
    expect(yakun.jami).toBe(MODULLAR.length);
  });

  it("jami kredit modullar yig'indisiga teng", () => {
    const yakun = finalStatus(moduleStatuses([], []));
    expect(yakun.jamiKredit).toBe(
      MODULLAR.reduce((s, m) => s + m.credits, 0),
    );
  });

  it("o'rtacha faqat baholangan modullar bo'yicha hisoblanadi", () => {
    // Bitta modulda 80%, qolganlarida baho yo'q: natija 80 bo'lishi kerak,
    // 80/5 = 16 emas.
    const modul = MODULLAR[0];
    const holat = moduleStatuses(darslarYakunlandi(HAMMA), [
      { score: 80, area: modul.areas[0] },
    ]);
    const yakun = finalStatus(holat);
    expect(yakun.ortacha).toBe(80);
  });
});

describe("certificateSerial", () => {
  it("bir xil ma'lumotda bir xil raqam beradi", () => {
    const sana = new Date("2026-05-01T10:00:00Z");
    expect(certificateSerial("Bobur Akbarov", "mod-nazariya", sana)).toBe(
      certificateSerial("Bobur Akbarov", "mod-nazariya", sana),
    );
  });

  it("oraliq va yakuniy sertifikat raqamlari farq qiladi", () => {
    const sana = new Date("2026-05-01T10:00:00Z");
    const oraliq = certificateSerial("Bobur Akbarov", "mod-nazariya", sana);
    const yakuniy = certificateSerial("Bobur Akbarov", "yakuniy", sana);
    expect(yakuniy).not.toBe(oraliq);
  });

  it("formati barqaror", () => {
    const s = certificateSerial("Bobur Akbarov", "yakuniy", new Date());
    expect(s).toMatch(/^MP-[0-9A-Z]{7}$/);
  });
});

/* ───────────────────────── PDF chizilishi ───────────────────────── */

describe("sertifikat PDF", () => {
  const sana = new Date("2026-10-20T00:00:00Z");

  it("oraliq va yakuniy sertifikat PDF hosil qiladi", async () => {
    const oraliq = await buildCertificatePdf({
      kind: "oraliq",
      fullName: "Bobur Akbarov",
      moduleTitle: "Musiqa nazariyasi va solfedjio",
      credits: 5,
      score: 92,
      issuedAt: sana,
      serial: "MP-TEST01",
    });
    const yakuniy = await buildCertificatePdf({
      kind: "yakuniy",
      fullName: "Bobur Akbarov",
      modules: [
        { title: "Musiqa nazariyasi", credits: 5 },
        { title: "Ijro amaliyoti", credits: 7 },
      ],
      totalCredits: 12,
      score: 88,
      issuedAt: sana,
      serial: "MP-TEST02",
    });

    for (const [nom, blob] of [["oraliq", oraliq], ["yakuniy", yakuniy]] as const) {
      const bosh = new TextDecoder().decode(
        (await blob.arrayBuffer()).slice(0, 5) as ArrayBuffer,
      );
      expect(bosh, nom).toBe("%PDF-");
      expect(blob.size, nom).toBeGreaterThan(1000);
    }
    // Yakuniy sertifikatda kurslar ro'yxati va qo'shimcha ramka bor,
    // shuning uchun u kattaroq chiqishi kerak.
    expect(yakuniy.size).toBeGreaterThan(oraliq.size);
  }, 30_000);

  it("uzun ism va ko'p kurs bilan ham chiziladi", async () => {
    // Chizma hisob-kitobi (ism ostidagi chiziq, ro'yxat kengligi,
    // bezakning joyi) chegaraviy qiymatlarda ham buzilmasligi kerak.
    const blob = await buildCertificatePdf({
      kind: "yakuniy",
      fullName: "Abdurahmonov Abdusamadjon Abdurashidovich",
      modules: Array.from({ length: 8 }, (_, i) => ({
        title: `Juda uzun nomli o'quv kursi raqami ${i + 1}`,
        credits: 6,
      })),
      totalCredits: 48,
      score: 75,
      issuedAt: sana,
      serial: "MP-TEST03",
    });
    expect(blob.size).toBeGreaterThan(1000);
  }, 30_000);
});

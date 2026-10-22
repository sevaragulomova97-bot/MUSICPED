import { describe, expect, it } from "vitest";
import { KURSLAR } from "@/content/courses";
import { MODULLAR } from "@/content/modules";
import { TOPSHIRIQLAR } from "@/content/tasks";
import { EKSPORT_KUNLARI, muhimlar, xabarlar, type XabarKirishi } from "@/lib/notifications";
import type { StoredDiagnostic, StoredProgress, StoredSubmission } from "@/lib/db/schema";

/**
 * Bildirishnoma qoidalari.
 *
 * Qoidalar sof funksiyada bo'lgani uchun ular to'liq tekshiriladi.
 * Eng muhimi — **yolg'on eslatma bo'lmasligi**: hech narsa qilmagan
 * talabaga «ishingiz baholandi» deb yozish yoki aksincha, kurs
 * yakunlanganda sertifikat haqida indamaslik — ikkalasi ham ishonchni
 * yo'qotadi.
 */

const HOZIR = new Date("2026-10-20T12:00:00Z");

function kirish(qism: Partial<XabarKirishi> = {}): XabarKirishi {
  return {
    diagnostics: [],
    progress: [],
    submissions: [],
    now: HOZIR,
    ...qism,
  };
}

function diag(kind: StoredDiagnostic["kind"], sana: string): StoredDiagnostic {
  return {
    id: `d-${sana}`,
    userId: "u",
    kind,
    scores: {} as StoredDiagnostic["scores"],
    profileType: "nazariyotchi",
    overall: 70,
    completedAt: sana,
  };
}

function topshiriq(i = 0) {
  return TOPSHIRIQLAR[i];
}

function sub(qism: Partial<StoredSubmission> = {}): StoredSubmission {
  const t = topshiriq();
  return {
    id: "s1",
    userId: "u",
    taskId: t.id,
    taskType: t.type,
    area: t.area,
    bloom: t.bloom,
    submittedAt: "2026-10-01T10:00:00.000Z",
    ...qism,
  };
}

describe("bo'sh holat", () => {
  it("yangi foydalanuvchiga faqat diagnostika eslatiladi", () => {
    const x = xabarlar(kirish());
    expect(x.map((n) => n.id)).toEqual(["diagnostika:yoq"]);
    expect(muhimlar(x)).toBe(1);
  });

  it("hech narsa qilmaganga eksport eslatilmaydi", () => {
    // Eksport qiladigan ma'lumot yo'q — eslatma ortiqcha bo'lardi.
    expect(xabarlar(kirish()).some((n) => n.id === "eksport")).toBe(false);
  });
});

describe("baholangan ishlar", () => {
  it("baho kelganda muhim xabar chiqadi va topshiriqqa olib boradi", () => {
    const t = topshiriq();
    const x = xabarlar(
      kirish({
        diagnostics: [diag("boshlangich", "2026-10-10T10:00:00.000Z")],
        submissions: [sub({ score: 88, gradedAt: "2026-10-18T10:00:00.000Z" })],
      }),
    );
    const baho = x.find((n) => n.id.startsWith("baho:"));
    expect(baho?.daraja).toBe("muhim");
    expect(baho?.matn).toContain("88");
    expect(baho?.href).toBe(`/topshiriqlar/${t.slug}`);
  });

  it("baholanmagan ish «kutilmoqda» bo'ladi, «baholandi» emas", () => {
    const x = xabarlar(
      kirish({
        diagnostics: [diag("boshlangich", "2026-10-10T10:00:00.000Z")],
        submissions: [sub()],
      }),
    );
    expect(x.some((n) => n.id.startsWith("baho:"))).toBe(false);
    expect(x.some((n) => n.id === "kutilmoqda")).toBe(true);
  });
});

describe("eksport eslatmasi", () => {
  const asos = {
    diagnostics: [diag("boshlangich", "2026-10-10T10:00:00.000Z")],
  };

  it("hech qachon eksport qilinmagan bo'lsa — muhim", () => {
    const x = xabarlar(kirish(asos));
    const e = x.find((n) => n.id === "eksport");
    expect(e?.daraja).toBe("muhim");
  });

  it("yaqinda eksport qilingan bo'lsa — eslatma yo'q", () => {
    const x = xabarlar(
      kirish({ ...asos, lastExport: "2026-10-19T10:00:00.000Z" }),
    );
    expect(x.some((n) => n.id === "eksport")).toBe(false);
  });

  it("chegaradan oshganda qaytadan eslatiladi", () => {
    const eski = new Date(HOZIR);
    eski.setDate(eski.getDate() - EKSPORT_KUNLARI - 1);
    const x = xabarlar(kirish({ ...asos, lastExport: eski.toISOString() }));
    expect(x.some((n) => n.id === "eksport")).toBe(true);
  });
});

describe("kurs yakuni", () => {
  it("barcha darslar tugaganda sertifikat haqida xabar beradi", () => {
    const kurs = KURSLAR[0];
    const modul = MODULLAR.find((m) => m.id === kurs.moduleId)!;
    const progress: StoredProgress[] = kurs.lessons.map((l) => ({
      id: `u:${l.id}`,
      userId: "u",
      lessonId: l.id,
      courseSlug: kurs.slug,
      percent: 100,
      updatedAt: "2026-10-15T10:00:00.000Z",
    }));
    const x = xabarlar(
      kirish({ diagnostics: [diag("boshlangich", "2026-10-10T10:00:00.000Z")], progress }),
    );
    const s = x.find((n) => n.id === `sertifikat:${modul.id}`);
    expect(s).toBeDefined();
    expect(s?.matn).toContain(modul.title);
  });

  it("darslar yarim qolganda sertifikat emas, eslatma chiqadi", () => {
    const kurs = KURSLAR[0];
    const progress: StoredProgress[] = [
      {
        id: `u:${kurs.lessons[0].id}`,
        userId: "u",
        lessonId: kurs.lessons[0].id,
        courseSlug: kurs.slug,
        percent: 40,
        updatedAt: "2026-10-15T10:00:00.000Z",
      },
    ];
    const x = xabarlar(
      kirish({ diagnostics: [diag("boshlangich", "2026-10-10T10:00:00.000Z")], progress }),
    );
    expect(x.some((n) => n.id.startsWith("sertifikat:"))).toBe(false);
    expect(x.find((n) => n.id === "dars:yarim")?.matn).toContain("40%");
  });
});

describe("diagnostikani takrorlash", () => {
  it("bir oydan keyin eslatiladi", () => {
    const x = xabarlar(kirish({ diagnostics: [diag("boshlangich", "2026-09-01T10:00:00.000Z")] }));
    expect(x.some((n) => n.id === "diagnostika:takror")).toBe(true);
  });

  it("yakuniy o'lchov bo'lsa, boshqa eslatilmaydi", () => {
    const x = xabarlar(
      kirish({
        diagnostics: [
          diag("boshlangich", "2026-01-01T10:00:00.000Z"),
          diag("yakuniy", "2026-02-01T10:00:00.000Z"),
        ],
      }),
    );
    expect(x.some((n) => n.id === "diagnostika:takror")).toBe(false);
  });
});

describe("tartib", () => {
  it("muhim xabarlar yuqorida turadi", () => {
    const x = xabarlar(
      kirish({
        diagnostics: [diag("boshlangich", "2026-10-10T10:00:00.000Z")],
        submissions: [
          sub({ id: "s1" }),
          sub({ id: "s2", score: 90, gradedAt: "2026-10-18T10:00:00.000Z" }),
        ],
      }),
    );
    const darajalar = x.map((n) => n.daraja);
    const birinchiMaʼlumot = darajalar.indexOf("maʼlumot");
    const oxirgiMuhim = darajalar.lastIndexOf("muhim");
    if (birinchiMaʼlumot >= 0 && oxirgiMuhim >= 0) {
      expect(oxirgiMuhim).toBeLessThan(birinchiMaʼlumot);
    }
  });

  it("har bir xabarning identifikatori takrorlanmaydi", () => {
    const kurs = KURSLAR[0];
    const x = xabarlar(
      kirish({
        diagnostics: [diag("boshlangich", "2026-01-10T10:00:00.000Z")],
        progress: kurs.lessons.map((l) => ({
          id: `u:${l.id}`,
          userId: "u",
          lessonId: l.id,
          courseSlug: kurs.slug,
          percent: 100,
          updatedAt: "2026-10-15T10:00:00.000Z",
        })),
        submissions: [sub({ score: 80, gradedAt: "2026-10-18T10:00:00.000Z" })],
      }),
    );
    expect(new Set(x.map((n) => n.id)).size).toBe(x.length);
  });
});

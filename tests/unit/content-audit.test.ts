import { describe, expect, it } from "vitest";
import {
  areaCoverage,
  auditIssues,
  bloomDistribution,
  inventory,
  moduleRows,
  orphanReferences,
  outcomeCoverage,
} from "@/lib/content-audit";
import { MODULLAR } from "@/content/modules";
import { DIAGNOSTIKA_YONALISHLARI } from "@/lib/domain/types";

/**
 * Bu testlar faqat funksiyalarni emas, **kontentning o'zini** ham
 * tekshiradi: kurs yoki topshiriq qo'shilganda aloqa uzilsa, test yiqiladi.
 */

describe("inventar", () => {
  const inv = inventory();

  it("barcha sanoqlar musbat", () => {
    for (const [kalit, qiymat] of Object.entries(inv)) {
      expect(qiymat, kalit).toBeGreaterThan(0);
    }
  });

  it("o'quv natijalari soni modullardagi bilan mos", () => {
    expect(inv.oquvNatijalari).toBe(
      MODULLAR.reduce((s, m) => s + m.outcomes.length, 0),
    );
  });
});

describe("konstruktiv moslashuv", () => {
  const coverage = outcomeCoverage();

  it("har bir o'quv natijasi uchun bitta qator bor", () => {
    expect(coverage).toHaveLength(inventory().oquvNatijalari);
  });

  it("dasturdan tashqarida qolgan dars yoki topshiriq yo'q", () => {
    // Bu — eng xavfli xato: kontent «bor», lekin dasturga ulanmagan.
    expect(orphanReferences()).toEqual([]);
  });

  it("uzilish turlari to'g'ri ajratiladi", () => {
    for (const row of coverage) {
      if (row.lessons.length && row.tasks.length) expect(row.gap).toBe("yoq");
      else if (!row.lessons.length && !row.tasks.length) expect(row.gap).toBe("ikkalasi");
      else if (!row.lessons.length) expect(row.gap).toBe("darssiz");
      else expect(row.gap).toBe("baholanmaydi");
    }
  });

  it("har bir o'quv natijasi dars va topshiriq bilan qoplangan", () => {
    // Bu — ta'lim dasturining asosiy sharti. Test yiqilsa, qaysi natija
    // ochiq qolgani xabarda ko'rinadi: unga dars yoki topshiriq yozish kerak
    // (yoki natijaning o'zi modulda ortiqcha).
    const uzilgan = coverage.filter((c) => c.gap !== "yoq");
    expect(
      uzilgan,
      uzilgan.map((c) => `${c.outcomeId}: ${c.gap} — ${c.text}`).join("\n"),
    ).toEqual([]);
  });

  it("har bir qatorda modul nomi bor", () => {
    expect(coverage.every((c) => c.moduleTitle.length > 0)).toBe(true);
  });
});

describe("taqsimotlar", () => {
  it("Blum taqsimoti olti darajani qamraydi", () => {
    const d = bloomDistribution();
    expect(d.outcomes).toHaveLength(6);
    expect(d.lessons).toHaveLength(6);
    expect(d.tasks).toHaveLength(6);
  });

  it("Blum taqsimotidagi yig'indi umumiy songa teng", () => {
    const d = bloomDistribution();
    const inv = inventory();
    expect(d.outcomes.reduce((s, r) => s + r.count, 0)).toBe(inv.oquvNatijalari);
    expect(d.lessons.reduce((s, r) => s + r.count, 0)).toBe(inv.darslar);
    expect(d.tasks.reduce((s, r) => s + r.count, 0)).toBe(inv.topshiriqlar);
  });

  it("topshiriqlar faqat quyi darajalarda to'planmagan", () => {
    // Shaxsga yo'naltirilgan ta'lim ijodiy topshiriqni talab qiladi:
    // «bilish» va «tushunish» darajasidan yuqorida ham ish bo'lishi kerak.
    const d = bloomDistribution();
    const yuqori = d.tasks
      .filter((r) => !["bilish", "tushunish"].includes(r.key))
      .reduce((s, r) => s + r.count, 0);
    expect(yuqori).toBeGreaterThan(0);
  });

  it("har bir diagnostika yo'nalishi savollar bilan qoplangan", () => {
    const rows = areaCoverage();
    expect(rows).toHaveLength(DIAGNOSTIKA_YONALISHLARI.length);
    for (const row of rows) {
      expect(row.savollar, `${row.area} yo'nalishi`).toBeGreaterThan(0);
    }
  });
});

describe("audit xulosasi", () => {
  const issues = auditIssues();

  it("xato darajasidagi muammo yo'q", () => {
    const xatolar = issues.filter((i) => i.level === "xato");
    expect(xatolar, JSON.stringify(xatolar, null, 2)).toEqual([]);
  });

  it("ogohlantirish ham qolmagan — dastur to'liq", () => {
    // Yangi o'quv natijasi qo'shilsa va unga dars yoki topshiriq
    // yozilmasa, aynan shu test ogohlantiradi.
    expect(issues, JSON.stringify(issues, null, 2)).toEqual([]);
  });

  it("har bir xabar odam o'qiydigan matn", () => {
    for (const i of issues) {
      expect(i.message.length).toBeGreaterThan(10);
      expect(i.message).toMatch(/[.!]$/);
    }
  });
});

describe("modul jadvali", () => {
  const rows = moduleRows();

  it("har bir modul uchun qator bor", () => {
    expect(rows).toHaveLength(MODULLAR.length);
  });

  it("qoplangan natijalar soni modul natijalaridan oshmaydi", () => {
    for (const r of rows) {
      expect(r.qoplangan).toBeLessThanOrEqual(r.module.outcomes.length);
    }
  });
});

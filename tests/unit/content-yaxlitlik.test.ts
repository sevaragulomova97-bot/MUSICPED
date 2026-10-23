import { describe, expect, it } from "vitest";
import { BARCHA_DARSLAR, KURSLAR } from "@/content/courses";
import { DIAGNOSTIKA_SAVOLLARI } from "@/content/diagnostic";
import type { Question } from "@/content/diagnostic";
import { MODULLAR } from "@/content/modules";
import { MASHQLAR } from "@/content/practice";
import { TOPSHIRIQLAR } from "@/content/tasks";
import { KUYLAR } from "@/content/tunes";

/**
 * Kontentning ichki yaxlitligi.
 *
 * `lib/content-audit.ts` konstruktiv moslashuvni tekshiradi — dars,
 * natija va topshiriq bir-biriga bog'langanmi. Bu test esa kontentning
 * **o'zini** tekshiradi: takrorlangan identifikatorlar, bo'sh bo'limlar,
 * javobi yo'q savollar, nosoz nota yozuvi va shunga o'xshash narsalar.
 *
 * Bunday xatolar jim kechadi: sahifa ochiladi, dars ham «ishlaydi»,
 * faqat talaba javob bera olmaydigan savol yoki bo'sh bo'lim chiqadi.
 * Kontent 52 dars va 52 topshiriqqa o'sgan — qo'lda tekshirib bo'lmaydi.
 */

/** Barcha savollar: diagnostika + darslar ichidagi + topshiriqlardagi. */
function barchaSavollar(): Array<{ q: Question; qayer: string }> {
  const out: Array<{ q: Question; qayer: string }> = [];
  for (const q of DIAGNOSTIKA_SAVOLLARI) out.push({ q, qayer: "diagnostika" });
  for (const dars of BARCHA_DARSLAR) {
    for (const bolim of dars.sections) {
      for (const blok of bolim.blocks) {
        if (blok.kind === "test") {
          for (const q of blok.questions) out.push({ q, qayer: `dars ${dars.id}` });
        }
      }
    }
  }
  for (const t of TOPSHIRIQLAR) {
    for (const q of t.questions ?? []) out.push({ q, qayer: `topshiriq ${t.id}` });
  }
  return out;
}

function takrorlar(list: string[]) {
  const sanoq = new Map<string, number>();
  for (const x of list) sanoq.set(x, (sanoq.get(x) ?? 0) + 1);
  return [...sanoq].filter(([, n]) => n > 1).map(([k]) => k);
}

/* ─────────────────── Takrorlanmaydigan identifikatorlar ─────────────────── */

describe("identifikatorlar takrorlanmaydi", () => {
  it("dars identifikatorlari", () => {
    expect(takrorlar(BARCHA_DARSLAR.map((d) => d.id))).toEqual([]);
  });

  it("dars manzillari kurs ichida", () => {
    for (const kurs of KURSLAR) {
      expect(takrorlar(kurs.lessons.map((l) => l.slug)), kurs.slug).toEqual([]);
    }
  });

  it("bo'lim identifikatorlari dars ichida", () => {
    for (const dars of BARCHA_DARSLAR) {
      expect(takrorlar(dars.sections.map((s) => s.id)), dars.id).toEqual([]);
    }
  });

  it("topshiriq identifikatorlari va manzillari", () => {
    expect(takrorlar(TOPSHIRIQLAR.map((t) => t.id))).toEqual([]);
    expect(takrorlar(TOPSHIRIQLAR.map((t) => t.slug))).toEqual([]);
  });

  it("modul va o'quv natijasi identifikatorlari", () => {
    expect(takrorlar(MODULLAR.map((m) => m.id))).toEqual([]);
    expect(takrorlar(MODULLAR.map((m) => m.slug))).toEqual([]);
    expect(takrorlar(MODULLAR.flatMap((m) => m.outcomes.map((o) => o.id)))).toEqual([]);
  });

  it("savol identifikatorlari — butun loyiha bo'yicha", () => {
    // Bir xil `id` ikki joyda bo'lsa, javoblar xaritasi (`AnswerMap`)
    // ularni bir-biriga aralashtirib yuboradi.
    expect(takrorlar(barchaSavollar().map((x) => x.q.id))).toEqual([]);
  });

  it("mashq va kuy identifikatorlari", () => {
    expect(takrorlar(MASHQLAR.map((m) => m.id))).toEqual([]);
    expect(takrorlar(KUYLAR.map((k) => k.id))).toEqual([]);
  });
});

/* ─────────────────────────── Savollar ─────────────────────────── */

describe("savollar to'g'ri tuzilgan", () => {
  const savollar = barchaSavollar();

  it("har bir savolda matn bor", () => {
    for (const { q, qayer } of savollar) {
      expect(q.prompt.trim().length, `${qayer} / ${q.id}`).toBeGreaterThan(5);
    }
  });

  it("variantli savollarda kamida ikkita variant bor", () => {
    for (const { q, qayer } of savollar) {
      if (q.kind === "single" || q.kind === "multiple") {
        expect(q.options.length, `${qayer} / ${q.id}`).toBeGreaterThanOrEqual(2);
      }
    }
  });

  it("variant identifikatorlari savol ichida takrorlanmaydi", () => {
    for (const { q, qayer } of savollar) {
      if (q.kind === "single" || q.kind === "multiple") {
        expect(takrorlar(q.options.map((o) => o.id)), `${qayer} / ${q.id}`).toEqual([]);
      }
    }
  });

  it("variant matnlari bo'sh emas va takrorlanmaydi", () => {
    for (const { q, qayer } of savollar) {
      if (q.kind === "single" || q.kind === "multiple") {
        for (const o of q.options) {
          expect(o.text.trim().length, `${qayer} / ${q.id} / ${o.id}`).toBeGreaterThan(0);
        }
        expect(
          takrorlar(q.options.map((o) => o.text.trim().toLowerCase())),
          `${qayer} / ${q.id}`,
        ).toEqual([]);
      }
    }
  });

  it("to'g'ri javob variantlar ichida bo'ladi", () => {
    for (const { q, qayer } of savollar) {
      if (q.kind === "single") {
        const ids = new Set(q.options.map((o) => o.id));
        expect(ids.has(q.correctId), `${qayer} / ${q.id}: ${q.correctId}`).toBe(true);
      } else if (q.kind === "multiple") {
        const ids = new Set(q.options.map((o) => o.id));
        expect(q.correctIds.length, `${qayer} / ${q.id}`).toBeGreaterThan(0);
        for (const c of q.correctIds) {
          expect(ids.has(c), `${qayer} / ${q.id}: ${c}`).toBe(true);
        }
        // Hamma variant to'g'ri bo'lsa, savol hech narsani o'lchamaydi:
        // har bir talaba 100% oladi va bilim farqi ko'rinmaydi.
        expect(q.correctIds.length, `${qayer} / ${q.id}`).toBeLessThan(q.options.length);
      }
    }
  });

  it("likert savollarida to'g'ri javob yo'q", () => {
    for (const { q, qayer } of savollar) {
      if (q.kind !== "likert") continue;
      expect("correctId" in q, `${qayer} / ${q.id}`).toBe(false);
    }
  });
});

/* ─────────────────────────── Darslar ─────────────────────────── */

describe("darslar to'liq", () => {
  it("har bir darsda kamida bitta bo'lim va har bo'limda blok bor", () => {
    for (const dars of BARCHA_DARSLAR) {
      expect(dars.sections.length, dars.id).toBeGreaterThan(0);
      for (const s of dars.sections) {
        expect(s.blocks.length, `${dars.id} / ${s.id}`).toBeGreaterThan(0);
        expect(s.title.trim().length, `${dars.id} / ${s.id}`).toBeGreaterThan(0);
      }
    }
  });

  it("matn bloklari bo'sh emas", () => {
    for (const dars of BARCHA_DARSLAR) {
      for (const s of dars.sections) {
        for (const b of s.blocks) {
          if (b.kind === "matn" || b.kind === "eslatma" || b.kind === "mashq") {
            expect(b.text.trim().length, `${dars.id} / ${s.id}`).toBeGreaterThan(10);
          }
          if (b.kind === "royxat") {
            expect(b.items.length, `${dars.id} / ${s.id}`).toBeGreaterThan(0);
            for (const i of b.items) {
              expect(i.trim().length, `${dars.id} / ${s.id}`).toBeGreaterThan(0);
            }
          }
        }
      }
    }
  });

  it("har bir darsda refleksiya savollari bor", () => {
    // D. Schön modeli bo'yicha dars refleksiyasiz yakunlanmaydi.
    for (const dars of BARCHA_DARSLAR) {
      expect(dars.reflection.length, dars.id).toBeGreaterThan(0);
      for (const r of dars.reflection) {
        expect(r.trim().length, dars.id).toBeGreaterThan(10);
      }
    }
  });

  it("davomiylik mantiqan to'g'ri", () => {
    for (const dars of BARCHA_DARSLAR) {
      expect(dars.durationMin, dars.id).toBeGreaterThanOrEqual(5);
      expect(dars.durationMin, dars.id).toBeLessThanOrEqual(180);
    }
  });

  it("mashq bloklari mavjud mashqqa ishora qiladi", () => {
    const bor = new Set(MASHQLAR.map((m) => m.id));
    for (const dars of BARCHA_DARSLAR) {
      for (const s of dars.sections) {
        for (const b of s.blocks) {
          if (b.kind === "mashq" && b.exerciseId) {
            expect(bor.has(b.exerciseId), `${dars.id}: ${b.exerciseId}`).toBe(true);
          }
        }
      }
    }
  });
});

/* ─────────────────────────── Nota yozuvi ─────────────────────────── */

describe("nota bloklari chizilishi mumkin", () => {
  const NOTA = /^[a-g](#{1,2}|b{1,2}|n)?\/-?\d$/i;
  // VexFlow ikki shaklni ham qabul qiladi: harfli («w», «h», «q») va
  // raqamli («8», «16»). Ikkalasida ham «d» — nuqtali, «r» — pauza.
  const DAVOMIYLIK = /^(w|h|q|\d+)(d{1,2})?r?$/;

  it("kalit va o'lchov to'g'ri", () => {
    for (const dars of BARCHA_DARSLAR) {
      for (const s of dars.sections) {
        for (const b of s.blocks) {
          if (b.kind !== "nota") continue;
          expect(["treble", "bass"], `${dars.id} / ${s.id}`).toContain(b.spec.clef);
          if (b.spec.timeSignature) {
            expect(b.spec.timeSignature, `${dars.id} / ${s.id}`).toMatch(/^\d+\/\d+$/);
          }
          expect(b.spec.notes.length, `${dars.id} / ${s.id}`).toBeGreaterThan(0);
        }
      }
    }
  });

  it("har bir notaning kaliti va davomiyligi VexFlow formatida", () => {
    for (const dars of BARCHA_DARSLAR) {
      for (const s of dars.sections) {
        for (const b of s.blocks) {
          if (b.kind !== "nota") continue;
          for (const n of b.spec.notes) {
            expect(n.keys.length, `${dars.id} / ${s.id}`).toBeGreaterThan(0);
            for (const k of n.keys) {
              expect(k, `${dars.id} / ${s.id}: ${k}`).toMatch(NOTA);
            }
            expect(n.duration, `${dars.id} / ${s.id}: ${n.duration}`).toMatch(DAVOMIYLIK);
          }
        }
      }
    }
  });
});

/* ─────────────────────────── Topshiriqlar ─────────────────────────── */

describe("topshiriqlar to'liq", () => {
  it("test topshirig'ida savollar, rubrikalida mezonlar bor", () => {
    for (const t of TOPSHIRIQLAR) {
      if (t.submission === "test") {
        expect(t.questions?.length, t.id).toBeGreaterThan(0);
      } else if (t.submission === "fayl" || t.submission === "matn") {
        // Avtomatik baholanmaydigan ish rubrikasiz baholanmaydi —
        // talaba nima bo'yicha baholanishini bilmay qoladi.
        expect(t.rubric?.criteria.length, t.id).toBeGreaterThan(0);
      }
    }
  });

  it("rubrika mezonlari to'g'ri", () => {
    for (const t of TOPSHIRIQLAR) {
      for (const c of t.rubric?.criteria ?? []) {
        expect(c.title.trim().length, `${t.id} / ${c.id}`).toBeGreaterThan(0);
        expect(c.description.trim().length, `${t.id} / ${c.id}`).toBeGreaterThan(10);
        expect(c.maxPoints, `${t.id} / ${c.id}`).toBeGreaterThan(0);
      }
      if (t.rubric) {
        expect(takrorlar(t.rubric.criteria.map((c) => c.id)), t.id).toEqual([]);
      }
    }
  });

  it("ijro topshirig'ida cholg'u va mashq ko'rsatilgan", () => {
    const bor = new Set(MASHQLAR.map((m) => m.id));
    for (const t of TOPSHIRIQLAR) {
      if (t.submission !== "ijro") continue;
      expect(t.instrument, t.id).toBeTruthy();
      expect(t.exerciseId, t.id).toBeTruthy();
      expect(bor.has(t.exerciseId as string), `${t.id}: ${t.exerciseId}`).toBe(true);
    }
  });

  it("fayl topshirig'ida qabul qilinadigan turlar ko'rsatilgan", () => {
    for (const t of TOPSHIRIQLAR) {
      if (t.submission !== "fayl") continue;
      expect(t.accept, t.id).toBeTruthy();
      expect(t.accept, t.id).toMatch(/\./);
    }
  });

  it("taymer mantiqan to'g'ri", () => {
    for (const t of TOPSHIRIQLAR) {
      if (t.timerMin === undefined) continue;
      expect(t.timerMin, t.id).toBeGreaterThan(0);
      expect(t.timerMin, t.id).toBeLessThanOrEqual(180);
    }
  });
});

/* ─────────────────────────── Matnlar ─────────────────────────── */

describe("ko'rinadigan matnlar", () => {
  it("sarlavhalar bo'sh emas va juda uzun emas", () => {
    const uzun: string[] = [];
    for (const d of BARCHA_DARSLAR) {
      expect(d.title.trim().length, d.id).toBeGreaterThan(3);
      if (d.title.length > 80) uzun.push(`dars ${d.id}: ${d.title.length}`);
    }
    for (const t of TOPSHIRIQLAR) {
      expect(t.title.trim().length, t.id).toBeGreaterThan(3);
      if (t.title.length > 80) uzun.push(`topshiriq ${t.id}: ${t.title.length}`);
    }
    expect(uzun).toEqual([]);
  });

  it("manzillarda faqat ruxsat etilgan belgilar bor", () => {
    for (const d of BARCHA_DARSLAR) {
      expect(d.slug, d.id).toMatch(/^[a-z0-9-]+$/);
    }
    for (const t of TOPSHIRIQLAR) {
      expect(t.slug, t.id).toMatch(/^[a-z0-9-]+$/);
    }
    for (const k of KURSLAR) {
      expect(k.slug, k.title).toMatch(/^[a-z0-9-]+$/);
    }
  });
});

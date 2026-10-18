/**
 * Kontent auditi — konstruktiv moslashuvni tekshiradi.
 *
 * J. Biggsning konstruktiv moslashuvi (constructive alignment) bitta
 * talabni qo'yadi: har bir **o'quv natijasi** uchun uni o'rgatadigan dars
 * ham, uni baholaydigan topshiriq ham bo'lishi kerak. Qog'ozda bu oson
 * yoziladi, amalda esa kontent o'sgani sari aloqa uziladi va buni ko'z
 * bilan payqab bo'lmaydi.
 *
 * Shuning uchun tekshiruv kodda bajariladi: quyidagi funksiyalar kontentni
 * o'qib, «qaysi natija darssiz qolgan», «qaysi natija baholanmaydi»,
 * «Blum darajalari qanday taqsimlangan» degan savollarga javob beradi.
 *
 * Bu — admin panelining asosiy ma'nosi. Serversiz platformada admin
 * foydalanuvchilarni boshqarmaydi (ular yo'q), lekin kontentning
 * yaxlitligini tekshirishi mumkin va kerak.
 */

import { KURSLAR } from "@/content/courses";
import { MODULLAR, type Module } from "@/content/modules";
import { TOPSHIRIQLAR } from "@/content/tasks";
import { DIAGNOSTIKA_SAVOLLARI } from "@/content/diagnostic";
import { MASHQLAR } from "@/content/practice";
import { MENTORLIK_BOSQICHLARI } from "@/content/mentorship";
import {
  BLOOM_DARAJALARI,
  type BloomLevel,
  type DiagnosticArea,
  DIAGNOSTIKA_YONALISHLARI,
} from "@/lib/domain/types";

/* ───────────────────────── Inventar ───────────────────────── */

export type Inventory = {
  modullar: number;
  oquvNatijalari: number;
  kurslar: number;
  darslar: number;
  topshiriqlar: number;
  rubrikalar: number;
  diagnostikaSavollari: number;
  mashqlar: number;
  mentorlikBosqichlari: number;
  jamiKredit: number;
};

export function inventory(): Inventory {
  const darslar = KURSLAR.reduce((s, k) => s + k.lessons.length, 0);
  const rubrikalar = new Set(
    TOPSHIRIQLAR.filter((t) => t.rubric).map((t) =>
      t.rubric!.criteria.map((c) => c.id).join("|"),
    ),
  ).size;

  return {
    modullar: MODULLAR.length,
    oquvNatijalari: MODULLAR.reduce((s, m) => s + m.outcomes.length, 0),
    kurslar: KURSLAR.length,
    darslar,
    topshiriqlar: TOPSHIRIQLAR.length,
    rubrikalar,
    diagnostikaSavollari: DIAGNOSTIKA_SAVOLLARI.length,
    mashqlar: MASHQLAR.length,
    mentorlikBosqichlari: MENTORLIK_BOSQICHLARI.length,
    jamiKredit: MODULLAR.reduce((s, m) => s + m.credits, 0),
  };
}

/* ─────────────────── Konstruktiv moslashuv ─────────────────── */

export type OutcomeCoverage = {
  outcomeId: string;
  text: string;
  bloom: BloomLevel;
  moduleTitle: string;
  /** Shu natijaga bog'langan darslar */
  lessons: string[];
  /** Shu natijani baholaydigan topshiriqlar */
  tasks: string[];
  /** Ikkisidan biri ham yo'q bo'lsa — uzilish */
  gap: "yoq" | "darssiz" | "baholanmaydi" | "ikkalasi";
};

/**
 * Har bir o'quv natijasi uchun dars va topshiriq bog'lanishini tekshiradi.
 *
 * `gap` qiymatlari ataylab ajratilgan: «darssiz» va «baholanmaydi» —
 * bular boshqa-boshqa muammolar. Birinchisi talabaga material bermaydi,
 * ikkinchisi esa natijaga erishilganini tekshirmaydi.
 */
export function outcomeCoverage(): OutcomeCoverage[] {
  const darsBoyicha = new Map<string, string[]>();
  for (const kurs of KURSLAR) {
    for (const dars of kurs.lessons) {
      const royxat = darsBoyicha.get(dars.outcomeId) ?? [];
      royxat.push(dars.title);
      darsBoyicha.set(dars.outcomeId, royxat);
    }
  }

  const topshiriqBoyicha = new Map<string, string[]>();
  for (const t of TOPSHIRIQLAR) {
    const royxat = topshiriqBoyicha.get(t.outcomeId) ?? [];
    royxat.push(t.title);
    topshiriqBoyicha.set(t.outcomeId, royxat);
  }

  const natija: OutcomeCoverage[] = [];
  for (const modul of MODULLAR) {
    for (const outcome of modul.outcomes) {
      const lessons = darsBoyicha.get(outcome.id) ?? [];
      const tasks = topshiriqBoyicha.get(outcome.id) ?? [];
      natija.push({
        outcomeId: outcome.id,
        text: outcome.text,
        bloom: outcome.bloom,
        moduleTitle: modul.title,
        lessons,
        tasks,
        gap:
          lessons.length === 0 && tasks.length === 0
            ? "ikkalasi"
            : lessons.length === 0
              ? "darssiz"
              : tasks.length === 0
                ? "baholanmaydi"
                : "yoq",
      });
    }
  }

  return natija;
}

/**
 * Kontentda mavjud bo'lmagan o'quv natijasiga ishora qiluvchi yozuvlar.
 *
 * Bu — eng xavfli xato turi: dars «bor», lekin u hech qanday modulga
 * ulanmagan, ya'ni ta'lim dasturidan tashqarida qolgan.
 */
export function orphanReferences(): Array<{ kind: "dars" | "topshiriq"; title: string; outcomeId: string }> {
  const mavjud = new Set(MODULLAR.flatMap((m) => m.outcomes.map((o) => o.id)));
  const natija: Array<{ kind: "dars" | "topshiriq"; title: string; outcomeId: string }> = [];

  for (const kurs of KURSLAR) {
    for (const dars of kurs.lessons) {
      if (!mavjud.has(dars.outcomeId)) {
        natija.push({ kind: "dars", title: dars.title, outcomeId: dars.outcomeId });
      }
    }
  }
  for (const t of TOPSHIRIQLAR) {
    if (!mavjud.has(t.outcomeId)) {
      natija.push({ kind: "topshiriq", title: t.title, outcomeId: t.outcomeId });
    }
  }

  return natija;
}

/**
 * Modulning `areas` ro'yxati o'z darslari va topshiriqlari yo'nalishlarini
 * qamrab oladimi.
 *
 * Bu shunchaki yorliq emas. Portfolio topshiriqni modulga aynan shu ro'yxat
 * orqali bog'laydi (`modul.areas.includes(s.area)`), shuning uchun ro'yxatga
 * kirmagan yo'nalishdagi ish modulga umuman tushmaydi — talaba uni bajargan
 * bo'lsa ham, portfolioda ko'rinmaydi.
 *
 * Xato jim kechadi: hech narsa yiqilmaydi, faqat ish yo'qoladi. Shuning
 * uchun u kodda tekshiriladi.
 */
export function areaMismatches(): Array<{
  moduleTitle: string;
  kind: "dars" | "topshiriq";
  title: string;
  area: DiagnosticArea;
}> {
  const natija: Array<{
    moduleTitle: string;
    kind: "dars" | "topshiriq";
    title: string;
    area: DiagnosticArea;
  }> = [];

  for (const modul of MODULLAR) {
    const ruxsat = new Set<DiagnosticArea>(modul.areas);

    for (const kurs of KURSLAR) {
      if (kurs.moduleId !== modul.id) continue;
      for (const dars of kurs.lessons) {
        if (!ruxsat.has(dars.area)) {
          natija.push({
            moduleTitle: modul.title,
            kind: "dars",
            title: dars.title,
            area: dars.area,
          });
        }
      }
    }

    for (const t of TOPSHIRIQLAR) {
      if (t.moduleId !== modul.id) continue;
      if (!ruxsat.has(t.area)) {
        natija.push({
          moduleTitle: modul.title,
          kind: "topshiriq",
          title: t.title,
          area: t.area,
        });
      }
    }
  }

  return natija;
}

/**
 * Natijani baholaydigan topshiriq uning Blum darajasiga yetadimi.
 *
 * Konstruktiv moslashuvning ikkinchi sharti shu. Birinchisi — bog'lanish
 * bor-yo'qligi (`outcomeCoverage`), ikkinchisi esa **daraja mosligi**:
 * «dars ishlanmasi tuza oladi» (sintez) degan natijani test savoli bilan
 * tekshirib bo'lmaydi, chunki test eng ko'pi bilan tanib olishni o'lchaydi.
 *
 * Tekshiruv natijaga bog'langan topshiriqlarning **eng yuqorisini** oladi:
 * bitta natija bir nechta topshiriq bilan baholanishi mumkin va ulardan
 * biri qisqa test bo'lsa, bu xato emas — toki ularning orasida natija
 * darajasiga yetadigani bo'lsa.
 */
export function bloomMismatches(): Array<{
  outcomeId: string;
  text: string;
  outcomeBloom: BloomLevel;
  bestTaskBloom: BloomLevel | null;
  moduleTitle: string;
}> {
  const daraja = (b: BloomLevel) => BLOOM_DARAJALARI.indexOf(b);
  const natija: Array<{
    outcomeId: string;
    text: string;
    outcomeBloom: BloomLevel;
    bestTaskBloom: BloomLevel | null;
    moduleTitle: string;
  }> = [];

  for (const modul of MODULLAR) {
    for (const o of modul.outcomes) {
      const tasks = TOPSHIRIQLAR.filter((t) => t.outcomeId === o.id);
      if (!tasks.length) continue; // bu holatni `outcomeCoverage` xabar qiladi
      const eng = tasks.reduce((a, b) => (daraja(b.bloom) > daraja(a.bloom) ? b : a));
      if (daraja(eng.bloom) < daraja(o.bloom)) {
        natija.push({
          outcomeId: o.id,
          text: o.text,
          outcomeBloom: o.bloom,
          bestTaskBloom: eng.bloom,
          moduleTitle: modul.title,
        });
      }
    }
  }

  return natija;
}

/* ──────────────────────── Taqsimotlar ──────────────────────── */

export type Distribution<K extends string> = Array<{ key: K; label: string; count: number }>;

/** Blum darajalari bo'yicha taqsimot — nazariy bilim bilan amaliyot nisbati. */
export function bloomDistribution(): {
  outcomes: Distribution<BloomLevel>;
  lessons: Distribution<BloomLevel>;
  tasks: Distribution<BloomLevel>;
} {
  const bosh = () =>
    Object.fromEntries(BLOOM_DARAJALARI.map((b) => [b, 0])) as Record<BloomLevel, number>;

  const outcomes = bosh();
  const lessons = bosh();
  const tasks = bosh();

  for (const m of MODULLAR) for (const o of m.outcomes) outcomes[o.bloom] += 1;
  for (const k of KURSLAR) for (const d of k.lessons) lessons[d.bloom] += 1;
  for (const t of TOPSHIRIQLAR) tasks[t.bloom] += 1;

  const toList = (r: Record<BloomLevel, number>): Distribution<BloomLevel> =>
    BLOOM_DARAJALARI.map((b) => ({ key: b, label: b, count: r[b] }));

  return { outcomes: toList(outcomes), lessons: toList(lessons), tasks: toList(tasks) };
}

/** Diagnostika yo'nalishlari bo'yicha qamrov. */
export function areaCoverage(): Array<{
  area: DiagnosticArea;
  savollar: number;
  darslar: number;
  topshiriqlar: number;
  mashqlar: number;
}> {
  return DIAGNOSTIKA_YONALISHLARI.map((area) => ({
    area,
    savollar: DIAGNOSTIKA_SAVOLLARI.filter((q) => q.area === area).length,
    darslar: KURSLAR.flatMap((k) => k.lessons).filter((d) => d.area === area).length,
    topshiriqlar: TOPSHIRIQLAR.filter((t) => t.area === area).length,
    mashqlar: MASHQLAR.filter((m) => m.area === area).length,
  }));
}

/* ──────────────────────── Umumiy xulosa ──────────────────────── */

export type AuditIssue = {
  level: "xato" | "ogohlantirish";
  message: string;
};

/**
 * Audit xulosasi.
 *
 * «Xato» — ta'lim dasturining yaxlitligi buzilgan (masalan dasturdan
 * tashqaridagi dars). «Ogohlantirish» — e'tibor talab qiladigan, lekin
 * o'z-o'zidan noto'g'ri bo'lmagan holat (masalan bitta natija ikki emas,
 * bitta dars bilan qoplangan).
 */
export function auditIssues(): AuditIssue[] {
  const issues: AuditIssue[] = [];

  for (const orphan of orphanReferences()) {
    issues.push({
      level: "xato",
      message: `${orphan.kind === "dars" ? "Dars" : "Topshiriq"} «${orphan.title}» mavjud bo'lmagan o'quv natijasiga ishora qiladi (${orphan.outcomeId}).`,
    });
  }

  const coverage = outcomeCoverage();
  const ikkalasi = coverage.filter((c) => c.gap === "ikkalasi");
  const darssiz = coverage.filter((c) => c.gap === "darssiz");
  const baholanmaydi = coverage.filter((c) => c.gap === "baholanmaydi");

  if (ikkalasi.length) {
    issues.push({
      level: "ogohlantirish",
      message: `${ikkalasi.length} ta o'quv natijasi uchun na dars, na topshiriq bor.`,
    });
  }
  if (darssiz.length) {
    issues.push({
      level: "ogohlantirish",
      message: `${darssiz.length} ta o'quv natijasi baholanadi, lekin uni o'rgatadigan dars yo'q.`,
    });
  }
  if (baholanmaydi.length) {
    issues.push({
      level: "ogohlantirish",
      message: `${baholanmaydi.length} ta o'quv natijasi o'rgatiladi, lekin baholanmaydi.`,
    });
  }

  for (const m of areaMismatches()) {
    issues.push({
      level: "xato",
      message: `«${m.moduleTitle}» moduli ${m.kind === "dars" ? "darsi" : "topshirig'i"} «${m.title}» «${m.area}» yo'nalishida, ammo modulning \`areas\` ro'yxatida bu yo'nalish yo'q — ish portfolioda modulga bog'lanmaydi.`,
    });
  }

  for (const m of bloomMismatches()) {
    issues.push({
      level: "xato",
      message: `«${m.moduleTitle}» moduli natijasi «${m.outcomeId}» ${m.outcomeBloom} darajasida, uni baholaydigan eng yuqori topshiriq esa ${m.bestTaskBloom} darajasida — baholash natijaga yetmaydi.`,
    });
  }

  for (const row of areaCoverage()) {
    if (row.savollar === 0) {
      issues.push({
        level: "xato",
        message: `«${row.area}» yo'nalishi bo'yicha diagnostika savoli yo'q — ball hisoblab bo'lmaydi.`,
      });
    }
  }

  return issues;
}

/** Modulni qisqa ko'rinishda — admin jadvali uchun. */
export function moduleRows(): Array<{
  module: Module;
  darslar: number;
  topshiriqlar: number;
  qoplangan: number;
}> {
  const coverage = outcomeCoverage();
  return MODULLAR.map((module) => {
    const ids = new Set(module.outcomes.map((o) => o.id));
    const rows = coverage.filter((c) => ids.has(c.outcomeId));
    return {
      module,
      darslar: rows.reduce((s, r) => s + r.lessons.length, 0),
      topshiriqlar: rows.reduce((s, r) => s + r.tasks.length, 0),
      qoplangan: rows.filter((r) => r.gap === "yoq").length,
    };
  });
}

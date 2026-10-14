/**
 * Platformaning umumiy lug'ati.
 *
 * Bu yerda hech qanday ma'lumotlar bazasiga bog'liqlik yo'q — turlar koddan
 * kelib chiqadi, bazadan emas. Shuning uchun saqlash qatlami almashtirilsa ham
 * (IndexedDB -> boshqa narsa) bu fayl o'zgarmaydi.
 */

/* ─────────────────────────── Rollar ─────────────────────────── */

export const ROLLAR = ["TALABA", "OQITUVCHI", "ADMIN"] as const;
export type Role = (typeof ROLLAR)[number];

/* ──────────────────── Blum taksonomiyasi ───────────────────── */

export const BLOOM_DARAJALARI = [
  "bilish",
  "tushunish",
  "qollash",
  "tahlil",
  "sintez",
  "baholash",
] as const;
export type BloomLevel = (typeof BLOOM_DARAJALARI)[number];

export const BLOOM_NOMI: Record<BloomLevel, string> = {
  bilish: "Bilish",
  tushunish: "Tushunish",
  qollash: "Qo'llash",
  tahlil: "Tahlil",
  sintez: "Sintez",
  baholash: "Baholash",
};

/** Blum darajasining tartib raqami (1 — eng quyi). */
export function bloomOrder(level: BloomLevel): number {
  return BLOOM_DARAJALARI.indexOf(level) + 1;
}

/* ─────────────── Diagnostika yo'nalishlari (8 ta) ─────────────── */

/**
 * Dissertatsiyada 6 ta asosiy yo'nalish ko'rsatilgan (eshituv, ritm, texnika,
 * sahna, ijodkorlik, motivatsiya); ularga nazariy bilim va pedagogik metodika
 * qo'shiladi — jami 8 o'lchov.
 */
export const DIAGNOSTIKA_YONALISHLARI = [
  "eshituv",
  "ritm",
  "texnika",
  "sahna",
  "ijodkorlik",
  "motivatsiya",
  "nazariya",
  "metodika",
] as const;
export type DiagnosticArea = (typeof DIAGNOSTIKA_YONALISHLARI)[number];

export const YONALISH_NOMI: Record<DiagnosticArea, string> = {
  eshituv: "Musiqiy eshituv",
  ritm: "Ritm hissi",
  texnika: "Ijro texnikasi",
  sahna: "Sahna madaniyati",
  ijodkorlik: "Ijodkorlik va improvizatsiya",
  motivatsiya: "Motivatsiya",
  nazariya: "Nazariy bilim",
  metodika: "Pedagogik metodika",
};

export const YONALISH_TAVSIFI: Record<DiagnosticArea, string> = {
  eshituv: "Interval, akkord va ohangni eshitib aniqlash qobiliyati",
  ritm: "Ritmik naqshni idrok etish va aniq takrorlash",
  texnika: "Cholg'uda ijro etish texnikasi va barmoq mahorati",
  sahna: "Tomoshabin oldida ishonchli va madaniy ijro etish",
  ijodkorlik: "Improvizatsiya va o'z musiqiy g'oyasini yaratish",
  motivatsiya: "Kasbga qiziqish, mustaqil ishlashga intilish",
  nazariya: "Nota savodi, garmoniya va musiqa nazariyasi bilimi",
  metodika: "Dars loyihalash va o'qitish metodikasini qo'llash",
};

/* ───────── Dashboard yo'nalishlari (maketdagi 4 ta karta) ───────── */

export const ASOSIY_YONALISHLAR = [
  "nazariya",
  "ijro",
  "metodika",
  "kasbiy",
] as const;
export type MainDirection = (typeof ASOSIY_YONALISHLAR)[number];

export const ASOSIY_YONALISH_NOMI: Record<MainDirection, string> = {
  nazariya: "Musiqa nazariyasi",
  ijro: "Cholg'u ijrochiligi",
  metodika: "Pedagogik metodika",
  kasbiy: "Kasbiy tayyorgarlik",
};

/** Grafiklar va kartalar uchun CSS rang o'zgaruvchisi. */
export const ASOSIY_YONALISH_RANGI: Record<MainDirection, string> = {
  nazariya: "var(--mp-dir-nazariya)",
  ijro: "var(--mp-dir-ijro)",
  metodika: "var(--mp-dir-metodika)",
  kasbiy: "var(--mp-dir-kasbiy)",
};

/**
 * 8 ta diagnostika yo'nalishi 4 ta asosiy yo'nalishga qanday taqsimlanadi.
 * Bosh sahifadagi kartalar va o'sish dinamikasi grafigi shu xaritaga tayanadi.
 */
export const YONALISH_GURUHI: Record<DiagnosticArea, MainDirection> = {
  nazariya: "nazariya",
  eshituv: "nazariya",
  texnika: "ijro",
  ritm: "ijro",
  metodika: "metodika",
  sahna: "kasbiy",
  ijodkorlik: "kasbiy",
  motivatsiya: "kasbiy",
};

/* ───────────────── Yaqin rivojlanish zonasi (ZPD) ───────────────── */

export const ZPD_ZONALARI = ["asosiy", "zpd", "mustaqil"] as const;
export type ZpdZone = (typeof ZPD_ZONALARI)[number];

export const ZPD_NOMI: Record<ZpdZone, string> = {
  asosiy: "Asosiy daraja",
  zpd: "Yaqin rivojlanish zonasi",
  mustaqil: "Mustaqil daraja",
};

export const ZPD_TAVSIFI: Record<ZpdZone, string> = {
  asosiy:
    "Tushunchalarni mustahkamlash bosqichi — topshiriqlar bosqichma-bosqich ko'rsatma bilan beriladi",
  zpd: "Yordam bilan bajarish bosqichi — o'rta qiyinlik, maslahatlar mavjud",
  mustaqil: "Mustaqil ishlash bosqichi — ijodiy va murakkab topshiriqlar",
};

/** ZPD zonasi chegaralari (foizda). Vigotskiy modeliga mos uch zona. */
export const ZPD_CHEGARA = { asosiy: 50, zpd: 80 } as const;

export function zpdZone(score: number): ZpdZone {
  if (score < ZPD_CHEGARA.asosiy) return "asosiy";
  if (score <= ZPD_CHEGARA.zpd) return "zpd";
  return "mustaqil";
}

/* ────────────────────── Talaba profil turi ────────────────────── */

export const PROFIL_TURLARI = [
  "ijrochi",
  "nazariyotchi",
  "ijodkor",
  "mehnatkash",
  "muvozanatli",
] as const;
export type StudentProfileType = (typeof PROFIL_TURLARI)[number];

export const PROFIL_NOMI: Record<StudentProfileType, string> = {
  ijrochi: "Ijrochilikda kuchli, nazariyada sust",
  nazariyotchi: "Nazariyasi mustahkam, ijroda o'rtacha",
  ijodkor: "Ijodkor, lekin tartibsiz",
  mehnatkash: "Mehnatkash, tabiiy qobiliyat o'rtacha",
  muvozanatli: "Muvozanatli rivojlangan",
};

/* ───────────────────────── Topshiriqlar ───────────────────────── */

export const TOPSHIRIQ_TURLARI = ["mashq", "test", "loyiha", "ijro"] as const;
export type TaskType = (typeof TOPSHIRIQ_TURLARI)[number];

export const TOPSHIRIQ_TURI_NOMI: Record<TaskType, string> = {
  mashq: "Mashq",
  test: "Test",
  loyiha: "Loyiha",
  ijro: "Ijro",
};

export const DIAGNOSTIKA_TURLARI = ["boshlangich", "oraliq", "yakuniy"] as const;
export type DiagnosticKind = (typeof DIAGNOSTIKA_TURLARI)[number];

export const DIAGNOSTIKA_TURI_NOMI: Record<DiagnosticKind, string> = {
  boshlangich: "Boshlang'ich diagnostika",
  oraliq: "Oraliq diagnostika",
  yakuniy: "Yakuniy diagnostika",
};

/* ──────────────────── Tajriba-sinov (3-bob) ──────────────────── */

export const EKSPERIMENT_GURUHLARI = ["tajriba", "nazorat"] as const;
export type ExperimentGroup = (typeof EKSPERIMENT_GURUHLARI)[number];

export const EKSPERIMENT_GURUH_NOMI: Record<ExperimentGroup, string> = {
  tajriba: "Tajriba guruhi",
  nazorat: "Nazorat guruhi",
};

/** Daraja taqsimoti — χ² tahlili uchun uch kategoriya. */
export const DARAJALAR = ["past", "orta", "yuqori"] as const;
export type Level = (typeof DARAJALAR)[number];

export const DARAJA_NOMI: Record<Level, string> = {
  past: "Past",
  orta: "O'rta",
  yuqori: "Yuqori",
};

export function levelOf(score: number): Level {
  if (score < 56) return "past";
  if (score < 71) return "orta";
  return "yuqori";
}

/* ───────────────────────── Yordamchilar ───────────────────────── */

/** `Record<DiagnosticArea, number>` — barcha yo'nalishlar bo'yicha ball. */
export type AreaScores = Record<DiagnosticArea, number>;

export function emptyAreaScores(fill = 0): AreaScores {
  return Object.fromEntries(
    DIAGNOSTIKA_YONALISHLARI.map((a) => [a, fill]),
  ) as AreaScores;
}

/** 8 yo'nalish ballidan 4 asosiy yo'nalish o'rtachasini hisoblaydi. */
export function groupScores(scores: AreaScores): Record<MainDirection, number> {
  const sums = { nazariya: 0, ijro: 0, metodika: 0, kasbiy: 0 };
  const counts = { nazariya: 0, ijro: 0, metodika: 0, kasbiy: 0 };

  for (const area of DIAGNOSTIKA_YONALISHLARI) {
    const group = YONALISH_GURUHI[area];
    sums[group] += scores[area];
    counts[group] += 1;
  }

  return {
    nazariya: counts.nazariya ? Math.round(sums.nazariya / counts.nazariya) : 0,
    ijro: counts.ijro ? Math.round(sums.ijro / counts.ijro) : 0,
    metodika: counts.metodika ? Math.round(sums.metodika / counts.metodika) : 0,
    kasbiy: counts.kasbiy ? Math.round(sums.kasbiy / counts.kasbiy) : 0,
  };
}

/** Barcha yo'nalishlar bo'yicha umumiy o'rtacha ball. */
export function overallScore(scores: AreaScores): number {
  const values = DIAGNOSTIKA_YONALISHLARI.map((a) => scores[a]);
  if (!values.length) return 0;
  return Math.round(values.reduce((s, v) => s + v, 0) / values.length);
}

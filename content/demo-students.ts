import {
  type AreaScores,
  type DiagnosticArea,
  DIAGNOSTIKA_YONALISHLARI,
  type ExperimentGroup,
} from "@/lib/domain/types";

/**
 * Namunaviy (demo) talabalar — tajriba va nazorat guruhlari.
 *
 * DIQQAT: bu ma'lumot **to'liq o'ylab topilgan**. Ismlar haqiqiy shaxslarga
 * tegishli emas, ballar esa quyidagi generator bilan hosil qilinadi.
 * Ular platformaning (ayniqsa tadqiqot bo'limining) ishlashini ko'rsatish
 * uchun xizmat qiladi va ilmiy xulosa uchun asos bo'la olmaydi.
 *
 * Generator **deterministik**: urug' (seed) qat'iy, shuning uchun sahifa har
 * safar ochilganda bir xil raqamlar chiqadi va grafiklar «sakramaydi».
 */

/** Mulberry32 — kichik va tez deterministik tasodifiy sonlar generatori. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const ISMLAR = [
  "Sevaraxon Egamnazarova",
  "Aziza Karimova",
  "Bobomurod Sattorov",
  "Dilnoza Yo'ldosheva",
  "Jasur Qodirov",
  "Kamola Rashidova",
  "Lola Normurodova",
  "Muhammadali Tursunov",
  "Nilufar Abdullayeva",
  "Oybek Ergashev",
  "Parvina Sodiqova",
  "Qudrat Ismoilov",
  "Ravshan Olimov",
  "Sabina Mahmudova",
  "Temur Nazarov",
  "Umida Xolmatova",
  "Vohid Rustamov",
  "Yulduz Saidova",
  "Zafar Hamroyev",
  "Aziz Mirzayev",
  "Barno To'xtayeva",
  "Diyor Shomurodov",
  "Gulnora Qosimova",
  "Hasan Yusupov",
] as const;

export type DemoStudent = {
  id: string;
  fullName: string;
  group: string;
  experimentGroup: ExperimentGroup;
  /** Boshlang'ich diagnostika (tajriba boshida) */
  baseline: AreaScores;
  /** Yakuniy diagnostika (tajriba oxirida) */
  final: AreaScores;
};

/**
 * Guruhlar bo'yicha o'sish parametrlari.
 *
 * Tajriba guruhida individual ta'lim yo'nalishi qo'llanilgani uchun o'sish
 * kattaroq; nazorat guruhida an'anaviy o'qitish — o'sish bor, lekin kichikroq.
 * `spread` — talabalar orasidagi tabiiy tarqoqlik.
 */
const OSISH = {
  tajriba: { min: 11, max: 22, spread: 5 },
  nazorat: { min: 3, max: 10, spread: 5 },
} as const;

function buildScores(rand: () => number, markaz: number, tarqoqlik: number): AreaScores {
  const scores = {} as AreaScores;
  for (const area of DIAGNOSTIKA_YONALISHLARI) {
    const ogish = (rand() - 0.5) * 2 * tarqoqlik;
    scores[area] = Math.max(5, Math.min(100, Math.round(markaz + ogish)));
  }
  return scores;
}

function grow(
  rand: () => number,
  baseline: AreaScores,
  group: ExperimentGroup,
): AreaScores {
  const { min, max } = OSISH[group];
  const scores = {} as AreaScores;
  for (const area of DIAGNOSTIKA_YONALISHLARI) {
    const osish = min + rand() * (max - min);
    scores[area] = Math.max(5, Math.min(100, Math.round(baseline[area] + osish)));
  }
  return scores;
}

function buildStudents(): DemoStudent[] {
  // Urug' qat'iy — natija har doim bir xil.
  const rand = mulberry32(20250901);

  return ISMLAR.map((fullName, index) => {
    const experimentGroup: ExperimentGroup = index % 2 === 0 ? "tajriba" : "nazorat";
    // Boshlang'ich daraja ikkala guruhda ham o'xshash bo'lishi kerak — bu
    // tajriba-sinovning to'g'ri qo'yilganini bildiradi.
    const markaz = 48 + rand() * 14;
    const baseline = buildScores(rand, markaz, OSISH[experimentGroup].spread);

    return {
      id: `talaba-${String(index + 1).padStart(2, "0")}`,
      fullName,
      group: index % 2 === 0 ? "MT-24" : "MT-24B",
      experimentGroup,
      baseline,
      final: grow(rand, baseline, experimentGroup),
    };
  });
}

export const DEMO_TALABALAR: DemoStudent[] = buildStudents();

/** Asosiy demo talaba — maketdagi shaxs. */
export const ASOSIY_TALABA = DEMO_TALABALAR[0];

export function studentsByGroup(group: ExperimentGroup): DemoStudent[] {
  return DEMO_TALABALAR.filter((s) => s.experimentGroup === group);
}

/** Bitta yo'nalish bo'yicha guruhdagi barcha ballar — statistik tahlil uchun. */
export function areaSeries(
  group: ExperimentGroup,
  area: DiagnosticArea,
  phase: "baseline" | "final",
): number[] {
  return studentsByGroup(group).map((s) => s[phase][area]);
}

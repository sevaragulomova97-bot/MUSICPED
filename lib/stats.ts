/**
 * Statistik tahlil — tadqiqot bo'limi uchun.
 *
 * Bu fayl **sof matematika**: hech qanday React, brauzer yoki ma'lumotlar
 * bazasi bog'liqligi yo'q. Shu sababli har bir funksiya unit test bilan
 * tekshirilgan va natijalari mustaqil statistik paket (SciPy) bilan
 * solishtirilgan.
 *
 * Nega tashqi kutubxona ishlatilmadi? Platforma serversiz va umumiy hajmi
 * muhim; kerakli funksiyalar esa sanoqli. Taqsimotlar uchun klassik
 * algoritmlar yozildi (to'liqsiz beta va gamma funksiyalari) — ular
 * `p` qiymatini jadvalga qaramasdan, taqribsiz hisoblaydi.
 *
 * MUHIM. Statistik dastur xulosa chiqarmaydi — u faqat sonni beradi.
 * `p < 0,05` «farq bor» degani emas, «tasodif bilan tushuntirish qiyin»
 * degani. Namuna kichik bo'lsa (bizda guruhda 12 kishi), parametrik
 * mezonning sharti buzilishi mumkin — shuning uchun yonida
 * parametrik bo'lmagan Mann–Uitni mezoni ham hisoblanadi.
 */

import { DARAJALAR, type Level, levelOf } from "@/lib/domain/types";

/* ══════════════════ Maxsus funksiyalar ══════════════════ */

/** Lanczos yaqinlashuvi koeffitsiyentlari (g = 7, n = 9). */
const LANCZOS = [
  0.99999999999980993, 676.5203681218851, -1259.1392167224028,
  771.32342877765313, -176.61502916214059, 12.507343278686905,
  -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
];

/**
 * ln Γ(z) — gamma funksiyasining logarifmi.
 *
 * Logarifm ishlatiladi, chunki Γ(z) ning o'zi kattalashganda son chegarasidan
 * chiqib ketadi (`Infinity`), logarifmi esa bemalol sig'adi.
 */
export function lnGamma(z: number): number {
  if (z <= 0 && Number.isInteger(z)) return Infinity;
  // Aks ettirish formulasi: kichik argumentlarda aniqlik yo'qolmasligi uchun.
  if (z < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * z)) - lnGamma(1 - z);

  const x = z - 1;
  let sum = LANCZOS[0];
  for (let i = 1; i < LANCZOS.length; i += 1) sum += LANCZOS[i] / (x + i);
  const t = x + 7.5;
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(sum);
}

const EPS = 3e-16;
const FPMIN = 1e-300;

/** To'liqsiz beta funksiyasining uzluksiz kasri (Lentz usuli). */
function betaContinuedFraction(a: number, b: number, x: number): number {
  const qab = a + b;
  const qap = a + 1;
  const qam = a - 1;

  let c = 1;
  let d = 1 - (qab * x) / qap;
  if (Math.abs(d) < FPMIN) d = FPMIN;
  d = 1 / d;
  let h = d;

  for (let m = 1; m <= 300; m += 1) {
    const m2 = 2 * m;

    let aa = (m * (b - m) * x) / ((qam + m2) * (a + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    c = 1 + aa / c;
    if (Math.abs(c) < FPMIN) c = FPMIN;
    d = 1 / d;
    h *= d * c;

    aa = (-(a + m) * (qab + m) * x) / ((a + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    c = 1 + aa / c;
    if (Math.abs(c) < FPMIN) c = FPMIN;
    d = 1 / d;

    const delta = d * c;
    h *= delta;
    if (Math.abs(delta - 1) <= EPS) break;
  }

  return h;
}

/**
 * Regulyarlangan to'liqsiz beta funksiyasi Iₓ(a, b).
 *
 * Styudent taqsimotining integrali shu funksiya orqali yopiq ko'rinishda
 * yoziladi — shuning uchun `t` dan `p` ga o'tish jadvalsiz bajariladi.
 */
export function incompleteBeta(a: number, b: number, x: number): number {
  if (x <= 0) return 0;
  if (x >= 1) return 1;

  const front = Math.exp(
    lnGamma(a + b) - lnGamma(a) - lnGamma(b) + a * Math.log(x) + b * Math.log(1 - x),
  );

  // Uzluksiz kasr faqat x kichik bo'lganda tez yig'iladi; aks holda
  // simmetriya Iₓ(a,b) = 1 − I₁₋ₓ(b,a) bilan almashtiriladi.
  return x < (a + 1) / (a + b + 2)
    ? (front * betaContinuedFraction(a, b, x)) / a
    : 1 - (front * betaContinuedFraction(b, a, 1 - x)) / b;
}

/** To'liqsiz gamma funksiyasining qatori — x < a+1 bo'lganda tez yig'iladi. */
function gammaSeries(a: number, x: number): number {
  let ap = a;
  let sum = 1 / a;
  let delta = sum;

  for (let n = 1; n <= 1000; n += 1) {
    ap += 1;
    delta *= x / ap;
    sum += delta;
    if (Math.abs(delta) < Math.abs(sum) * EPS) break;
  }

  return sum * Math.exp(-x + a * Math.log(x) - lnGamma(a));
}

/** To'liqsiz gamma funksiyasining uzluksiz kasri — x ≥ a+1 uchun. */
function gammaContinuedFraction(a: number, x: number): number {
  let b = x + 1 - a;
  let c = 1 / FPMIN;
  let d = 1 / b;
  let h = d;

  for (let i = 1; i <= 1000; i += 1) {
    const an = -i * (i - a);
    b += 2;
    d = an * d + b;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    c = b + an / c;
    if (Math.abs(c) < FPMIN) c = FPMIN;
    d = 1 / d;
    const delta = d * c;
    h *= delta;
    if (Math.abs(delta - 1) <= EPS) break;
  }

  return Math.exp(-x + a * Math.log(x) - lnGamma(a)) * h;
}

/** Regulyarlangan to'liqsiz gamma funksiyasi P(a, x) — pastdan. */
export function regularizedGammaP(a: number, x: number): number {
  if (x <= 0) return 0;
  return x < a + 1 ? gammaSeries(a, x) : 1 - gammaContinuedFraction(a, x);
}

/** Regulyarlangan to'liqsiz gamma funksiyasi Q(a, x) = 1 − P(a, x). */
export function regularizedGammaQ(a: number, x: number): number {
  if (x <= 0) return 1;
  return x < a + 1 ? 1 - gammaSeries(a, x) : gammaContinuedFraction(a, x);
}

/* ══════════════════ Taqsimotlar ══════════════════ */

/** Standart normal taqsimotning integral funksiyasi Φ(z). */
export function normalCdf(z: number): number {
  if (z === 0) return 0.5;
  // erf(x) = P(½, x²) — yuqoridagi gamma mashinasi qayta ishlatiladi.
  const p = regularizedGammaP(0.5, (z * z) / 2);
  return z > 0 ? 0.5 * (1 + p) : 0.5 * (1 - p);
}

/** Styudent `t` taqsimoti bo'yicha ikki tomonlama `p` qiymati. */
export function tTestPValue(t: number, df: number): number {
  if (!Number.isFinite(t) || df <= 0) return NaN;
  return incompleteBeta(df / 2, 0.5, df / (df + t * t));
}

/** χ² taqsimoti bo'yicha `p` qiymati (o'ng dum). */
export function chiSquarePValue(chi2: number, df: number): number {
  if (!Number.isFinite(chi2) || df <= 0) return NaN;
  if (chi2 <= 0) return 1;
  return regularizedGammaQ(df / 2, chi2 / 2);
}

/* ══════════════════ Tavsiflovchi statistika ══════════════════ */

export type Descriptive = {
  n: number;
  mean: number;
  /** Tanlanma standart chetlanishi (n−1 bilan) */
  sd: number;
  variance: number;
  /** O'rtachaning standart xatosi */
  se: number;
  min: number;
  max: number;
  median: number;
};

export function describe(values: readonly number[]): Descriptive {
  const n = values.length;
  if (n === 0) {
    return { n: 0, mean: NaN, sd: NaN, variance: NaN, se: NaN, min: NaN, max: NaN, median: NaN };
  }

  const mean = values.reduce((s, v) => s + v, 0) / n;
  // n−1 bilan bo'linadi: tanlanma populyatsiya emas, shuning uchun
  // siljimagan (unbiased) baho kerak.
  const variance = n > 1 ? values.reduce((s, v) => s + (v - mean) ** 2, 0) / (n - 1) : 0;
  const sd = Math.sqrt(variance);

  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(n / 2);
  const median = n % 2 === 1 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;

  return {
    n,
    mean,
    sd,
    variance,
    se: n > 1 ? sd / Math.sqrt(n) : 0,
    min: sorted[0],
    max: sorted[n - 1],
    median,
  };
}

/* ══════════════════ t-mezon ══════════════════ */

export type TTestResult = {
  t: number;
  df: number;
  p: number;
  /** Birinchi guruh o'rtachasi minus ikkinchisi */
  meanDifference: number;
  first: Descriptive;
  second: Descriptive;
  /** Qaysi variant ishlatilgani — hisobotda ko'rsatiladi */
  method: "welch" | "student" | "paired";
};

/**
 * Bog'liq bo'lmagan ikki tanlanma uchun t-mezon.
 *
 * Standart holatda **Uelch** varianti ishlatiladi: u guruhlar dispersiyasi
 * teng bo'lishini talab qilmaydi. Klassik (Styudent) variant dispersiyalar
 * tengligiga tayanadi va bu shart buzilganda `p` ni asossiz kichik
 * ko'rsatishi mumkin, shuning uchun u faqat talab bo'yicha hisoblanadi.
 */
export function independentTTest(
  first: readonly number[],
  second: readonly number[],
  options: { equalVariance?: boolean } = {},
): TTestResult {
  const a = describe(first);
  const b = describe(second);
  const meanDifference = a.mean - b.mean;

  if (a.n < 2 || b.n < 2) {
    return { t: NaN, df: NaN, p: NaN, meanDifference, first: a, second: b, method: "welch" };
  }

  if (options.equalVariance) {
    const pooled = ((a.n - 1) * a.variance + (b.n - 1) * b.variance) / (a.n + b.n - 2);
    const se = Math.sqrt(pooled * (1 / a.n + 1 / b.n));
    const df = a.n + b.n - 2;
    const t = se === 0 ? NaN : meanDifference / se;
    return { t, df, p: tTestPValue(t, df), meanDifference, first: a, second: b, method: "student" };
  }

  const va = a.variance / a.n;
  const vb = b.variance / b.n;
  const se = Math.sqrt(va + vb);
  // Uelch–Satterthwaite: erkinlik darajasi butun son bo'lmasligi mumkin.
  const df = (va + vb) ** 2 / (va ** 2 / (a.n - 1) + vb ** 2 / (b.n - 1));
  const t = se === 0 ? NaN : meanDifference / se;

  return { t, df, p: tTestPValue(t, df), meanDifference, first: a, second: b, method: "welch" };
}

/**
 * Bog'liq (juftlashgan) tanlanmalar uchun t-mezon.
 *
 * Bir xil talabalarning tajriba boshidagi va oxiridagi natijasini
 * solishtirishda aynan shu mezon kerak: kuzatuvlar mustaqil emas.
 */
export function pairedTTest(
  before: readonly number[],
  after: readonly number[],
): TTestResult {
  if (before.length !== after.length) {
    throw new Error("Juftlashgan mezon uchun ikki qatorning uzunligi teng bo'lishi kerak");
  }

  const diffs = after.map((v, i) => v - before[i]);
  const d = describe(diffs);
  const a = describe(after);
  const b = describe(before);

  if (d.n < 2 || d.se === 0) {
    return { t: NaN, df: d.n - 1, p: NaN, meanDifference: d.mean, first: a, second: b, method: "paired" };
  }

  const t = d.mean / d.se;
  const df = d.n - 1;
  return { t, df, p: tTestPValue(t, df), meanDifference: d.mean, first: a, second: b, method: "paired" };
}

/* ══════════════════ Effekt kattaligi ══════════════════ */

export const EFFEKT_DARAJALARI = ["juda kichik", "kichik", "o'rta", "katta"] as const;
export type EffectMagnitude = (typeof EFFEKT_DARAJALARI)[number];

export type EffectSize = {
  /** Koen d — birlashtirilgan standart chetlanishga nisbatan farq */
  d: number;
  /** Xedjes g — kichik tanlanma uchun tuzatilgan d */
  g: number;
  magnitude: EffectMagnitude;
};

/** Koen shkalasi: 0,2 — kichik, 0,5 — o'rta, 0,8 — katta. */
export function effectMagnitude(d: number): EffectMagnitude {
  const abs = Math.abs(d);
  if (abs < 0.2) return "juda kichik";
  if (abs < 0.5) return "kichik";
  if (abs < 0.8) return "o'rta";
  return "katta";
}

/**
 * Koen d — amaliy ahamiyat ko'rsatkichi.
 *
 * Nega `p` yetarli emas? `p` tanlanma hajmiga bog'liq: juda katta guruhda
 * mazmunsiz kichik farq ham «statistik ahamiyatli» chiqadi. `d` esa farqni
 * tarqoqlik birligida o'lchaydi va tanlanma hajmidan mustaqil.
 */
export function cohenD(first: readonly number[], second: readonly number[]): EffectSize {
  const a = describe(first);
  const b = describe(second);

  if (a.n < 2 || b.n < 2) return { d: NaN, g: NaN, magnitude: "juda kichik" };

  const pooledSd = Math.sqrt(
    ((a.n - 1) * a.variance + (b.n - 1) * b.variance) / (a.n + b.n - 2),
  );
  const d = pooledSd === 0 ? NaN : (a.mean - b.mean) / pooledSd;
  // Xedjes tuzatmasi: kichik tanlanmada d effektni bo'rttirib ko'rsatadi.
  const g = d * (1 - 3 / (4 * (a.n + b.n) - 9));

  return { d, g, magnitude: effectMagnitude(d) };
}

/* ══════════════════ χ² mezoni ══════════════════ */

export type ChiSquareResult = {
  chi2: number;
  df: number;
  p: number;
  /** Kutilgan chastotalar jadvali */
  expected: number[][];
  /** Kramer V — bog'liqlik kuchi (0…1) */
  cramersV: number;
  /** Kutilgan chastotasi 5 dan kichik bo'lgan katakchalar soni */
  lowExpectedCells: number;
  total: number;
};

/**
 * Pirson χ² mezoni — bog'liqlikning mavjudligini tekshiradi.
 *
 * Kirish — kuzatilgan chastotalar jadvali (qatorlar: guruhlar, ustunlar:
 * darajalar). Masalan tajriba va nazorat guruhlarida past/o'rta/yuqori
 * daraja talabalari soni.
 *
 * `lowExpectedCells` > 0 bo'lsa mezon sharti buzilgan (kutilgan chastota
 * kamida 5 bo'lishi kerak) — bu holda natija ehtiyotkorlik bilan o'qiladi.
 * Shuning uchun u yashirilmaydi, balki qaytariladi va interfeysda
 * ogohlantirish sifatida ko'rsatiladi.
 */
export function chiSquareIndependence(observed: readonly (readonly number[])[]): ChiSquareResult {
  const rows = observed.length;
  const cols = rows > 0 ? observed[0].length : 0;
  if (rows < 2 || cols < 2) {
    throw new Error("χ² uchun jadval kamida 2×2 bo'lishi kerak");
  }
  if (observed.some((r) => r.length !== cols)) {
    throw new Error("χ² jadvalining barcha qatorlari teng uzunlikda bo'lishi kerak");
  }

  const rowSums = observed.map((r) => r.reduce((s, v) => s + v, 0));
  const colSums = Array.from({ length: cols }, (_, j) =>
    observed.reduce((s, r) => s + r[j], 0),
  );
  const total = rowSums.reduce((s, v) => s + v, 0);

  if (total === 0) {
    return {
      chi2: NaN, df: (rows - 1) * (cols - 1), p: NaN,
      expected: observed.map((r) => r.map(() => 0)),
      cramersV: NaN, lowExpectedCells: rows * cols, total: 0,
    };
  }

  const expected = rowSums.map((rs) => colSums.map((cs) => (rs * cs) / total));

  let chi2 = 0;
  let lowExpectedCells = 0;
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < cols; j += 1) {
      const e = expected[i][j];
      if (e < 5) lowExpectedCells += 1;
      // Kutilgan chastota nol bo'lsa, katakcha hissa qo'shmaydi (0/0 emas).
      if (e > 0) chi2 += (observed[i][j] - e) ** 2 / e;
    }
  }

  const df = (rows - 1) * (cols - 1);
  const cramersV = Math.sqrt(chi2 / (total * Math.min(rows - 1, cols - 1)));

  return { chi2, df, p: chiSquarePValue(chi2, df), expected, cramersV, lowExpectedCells, total };
}

/** Ballar qatoridan past/o'rta/yuqori daraja chastotalarini hisoblaydi. */
export function levelCounts(scores: readonly number[]): Record<Level, number> {
  const counts = { past: 0, orta: 0, yuqori: 0 } satisfies Record<Level, number>;
  for (const s of scores) counts[levelOf(s)] += 1;
  return counts;
}

/** `levelCounts` natijasini χ² jadvalining qatoriga aylantiradi. */
export function levelRow(scores: readonly number[]): number[] {
  const counts = levelCounts(scores);
  return DARAJALAR.map((l) => counts[l]);
}

/* ══════════════════ Parametrik bo'lmagan mezon ══════════════════ */

export type MannWhitneyResult = {
  /** Kichikroq U statistikasi */
  u: number;
  u1: number;
  u2: number;
  z: number;
  p: number;
  /** Teng qiymatlar (ties) uchun tuzatma qo'llanganmi */
  tieCorrection: boolean;
};

/**
 * Mann–Uitni U mezoni — t-mezonning parametrik bo'lmagan hamkori.
 *
 * Nega kerak? Guruhda 12 kishi bor; bunday hajmda taqsimotning normalligini
 * ishonchli tekshirib bo'lmaydi. Agar ikki mezon bir xil xulosaga olib kelsa,
 * natija taqsimot shakliga bog'liq emas degan ishonch paydo bo'ladi — bu
 * dissertatsiya uchun muhim.
 *
 * `p` normal yaqinlashuv bilan, uzluksizlik tuzatmasi va teng qiymatlar
 * tuzatmasi qo'shib hisoblanadi.
 */
export function mannWhitneyU(
  first: readonly number[],
  second: readonly number[],
): MannWhitneyResult {
  const n1 = first.length;
  const n2 = second.length;
  if (n1 === 0 || n2 === 0) {
    return { u: NaN, u1: NaN, u2: NaN, z: NaN, p: NaN, tieCorrection: false };
  }

  const all = [
    ...first.map((v) => ({ v, group: 0 })),
    ...second.map((v) => ({ v, group: 1 })),
  ].sort((a, b) => a.v - b.v);

  // Teng qiymatlarga o'rtacha rang beriladi.
  const ranks = new Array<number>(all.length);
  const tieGroups: number[] = [];
  let i = 0;
  while (i < all.length) {
    let j = i;
    while (j + 1 < all.length && all[j + 1].v === all[i].v) j += 1;
    const averageRank = (i + j + 2) / 2; // ranglar 1 dan boshlanadi
    for (let k = i; k <= j; k += 1) ranks[k] = averageRank;
    if (j > i) tieGroups.push(j - i + 1);
    i = j + 1;
  }

  let r1 = 0;
  for (let k = 0; k < all.length; k += 1) if (all[k].group === 0) r1 += ranks[k];

  const u1 = r1 - (n1 * (n1 + 1)) / 2;
  const u2 = n1 * n2 - u1;
  const u = Math.min(u1, u2);

  const n = n1 + n2;
  const mean = (n1 * n2) / 2;
  const tieSum = tieGroups.reduce((s, t) => s + (t ** 3 - t), 0);
  const variance =
    ((n1 * n2) / 12) * (n + 1 - tieSum / (n * (n - 1)));

  if (variance <= 0) {
    return { u, u1, u2, z: NaN, p: NaN, tieCorrection: tieGroups.length > 0 };
  }

  // Uzluksizlik tuzatmasi: U diskret, normal taqsimot uzluksiz.
  const numerator = Math.abs(u1 - mean) - 0.5;
  const z = (numerator > 0 ? numerator : 0) / Math.sqrt(variance);
  const p = 2 * (1 - normalCdf(z));

  return { u, u1, u2, z: u1 < mean ? -z : z, p: Math.min(1, p), tieCorrection: tieGroups.length > 0 };
}

/* ══════════════════ Natijani o'qish ══════════════════ */

/**
 * `p` qiymatini maqolada qabul qilingan ko'rinishda yozadi.
 *
 * Juda kichik qiymatlar `0,000` deb yozilmaydi — bu «nol» degan noto'g'ri
 * taassurot qoldiradi; o'rniga `p < 0,001` yoziladi.
 */
export function formatP(p: number): string {
  if (!Number.isFinite(p)) return "—";
  if (p < 0.001) return "p < 0,001";
  return `p = ${p.toFixed(3).replace(".", ",")}`;
}

/** O'zbek tilida o'nlik kasr vergul bilan yoziladi. */
export function formatNumber(value: number, digits = 2): string {
  if (!Number.isFinite(value)) return "—";
  return value.toFixed(digits).replace(".", ",");
}

export type Significance = "ahamiyatsiz" | "p<0,05" | "p<0,01" | "p<0,001";

export function significance(p: number): Significance {
  if (!Number.isFinite(p)) return "ahamiyatsiz";
  if (p < 0.001) return "p<0,001";
  if (p < 0.01) return "p<0,01";
  if (p < 0.05) return "p<0,05";
  return "ahamiyatsiz";
}

/**
 * Natijani odam o'qiydigan xulosaga aylantiradi.
 *
 * Ataylab ehtiyotkor til ishlatiladi: «isbotlandi» emas, «statistik
 * ahamiyatli farq topildi». Statistika isbot bermaydi.
 */
export function interpretTTest(result: TTestResult, effect?: EffectSize): string {
  if (!Number.isFinite(result.p)) return "Ma'lumot tahlil uchun yetarli emas.";

  const yonalish = result.meanDifference > 0 ? "yuqori" : "past";
  const farq = formatNumber(Math.abs(result.meanDifference), 1);

  if (result.p >= 0.05) {
    return `Guruhlar o'rtasidagi farq ${farq} ball, lekin ${formatP(result.p)} — bu farqni tasodif bilan ham tushuntirish mumkin. Statistik ahamiyatli farq topilmadi.`;
  }

  const effektMatni = effect && Number.isFinite(effect.d)
    ? ` Effekt kattaligi d = ${formatNumber(effect.d)} (${effect.magnitude}).`
    : "";

  return `Birinchi guruh natijasi ${farq} ballga ${yonalish}; ${formatP(result.p)} — farq statistik ahamiyatli.${effektMatni}`;
}

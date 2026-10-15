import { describe as suite, expect, it } from "vitest";
import {
  chiSquareIndependence,
  chiSquarePValue,
  cohenD,
  describe as summarize,
  effectMagnitude,
  formatNumber,
  formatP,
  incompleteBeta,
  independentTTest,
  interpretTTest,
  levelCounts,
  levelRow,
  lnGamma,
  mannWhitneyU,
  normalCdf,
  pairedTTest,
  regularizedGammaP,
  regularizedGammaQ,
  significance,
  tTestPValue,
} from "@/lib/stats";

/**
 * Kutilgan qiymatlar SciPy 1.18 bilan hisoblangan (`scipy.stats`,
 * `scipy.special`) va shu yerga qo'lda ko'chirilgan. Ya'ni test o'z
 * kodimizni o'zimiz bilan emas, **mustaqil statistik paket** bilan
 * solishtiradi — xato bo'lsa ko'rinadi.
 */

/** Guruh A — tajriba, guruh B — nazorat (o'ylab topilgan, 12+12 kishi). */
const A = [62, 71, 58, 80, 66, 74, 69, 85, 60, 77, 72, 68];
const B = [55, 61, 59, 64, 52, 66, 58, 70, 57, 63, 60, 54];
const BEFORE = [48, 52, 55, 50, 47, 60, 53, 49, 58, 51, 56, 54];
const AFTER = [63, 70, 68, 66, 59, 78, 71, 64, 75, 69, 72, 70];

suite("maxsus funksiyalar", () => {
  it("lnGamma SciPy bilan mos", () => {
    const kutilgan: Array<[number, number]> = [
      [0.5, 0.5723649429247],
      [1, 0.0],
      [1.5, -0.12078223763524526],
      [2, 0.0],
      [3.7, 1.428072326665388],
      [10, 12.801827480081469],
      [50.5, 146.51925549072064],
      [120, 453.0248962384961],
    ];
    for (const [x, v] of kutilgan) {
      expect(lnGamma(x)).toBeCloseTo(v, 10);
    }
  });

  it("to'liqsiz beta funksiyasi SciPy bilan mos", () => {
    expect(incompleteBeta(2, 3, 0.4)).toBeCloseTo(0.5248, 12);
    expect(incompleteBeta(5, 0.5, 0.9)).toBeCloseTo(0.3166429150200122, 12);
    expect(incompleteBeta(11, 0.5, 0.73)).toBeCloseTo(0.009258735916656312, 12);
    expect(incompleteBeta(0.5, 0.5, 0.25)).toBeCloseTo(1 / 3, 12);
  });

  it("chegaralarda beta funksiyasi 0 va 1 beradi", () => {
    expect(incompleteBeta(2, 3, 0)).toBe(0);
    expect(incompleteBeta(2, 3, 1)).toBe(1);
  });

  it("to'liqsiz gamma funksiyasi SciPy bilan mos", () => {
    expect(regularizedGammaP(1.5, 0.8)).toBeCloseTo(0.3406101802880152, 12);
    expect(regularizedGammaP(1, 3)).toBeCloseTo(0.950212931632136, 12);
    expect(regularizedGammaP(5, 2)).toBeCloseTo(0.052653017343711125, 12);
  });

  it("P va Q bir-birini to'ldiradi", () => {
    for (const [a, x] of [[1.5, 0.8], [5, 2], [3, 10], [0.5, 0.1]] as const) {
      expect(regularizedGammaP(a, x) + regularizedGammaQ(a, x)).toBeCloseTo(1, 14);
    }
  });

  it("normal taqsimot funksiyasi SciPy bilan mos", () => {
    const kutilgan: Array<[number, number]> = [
      [-3, 0.0013498980316300933],
      [-1.96, 0.024997895148220435],
      [-0.5, 0.3085375387259869],
      [0, 0.5],
      [0.5, 0.6914624612740131],
      [1.96, 0.9750021048517795],
      [3, 0.9986501019683699],
      [4.5, 0.9999966023268753],
    ];
    for (const [z, v] of kutilgan) {
      expect(normalCdf(z)).toBeCloseTo(v, 12);
    }
  });
});

suite("taqsimotlar", () => {
  it("t taqsimoti bo'yicha p SciPy bilan mos", () => {
    expect(tTestPValue(2.5, 10)).toBeCloseTo(0.03144684423660882, 12);
    expect(tTestPValue(1, 1)).toBeCloseTo(0.5, 12);
    // Butun bo'lmagan erkinlik darajasi — Uelch varianti uchun zarur.
    expect(tTestPValue(6.2, 21.37)).toBeCloseTo(3.485492583657509e-6, 15);
    expect(tTestPValue(0, 5)).toBeCloseTo(1, 14);
    expect(tTestPValue(12, 22)).toBeCloseTo(3.975601809892169e-11, 18);
  });

  it("t taqsimoti ishorasiga bog'liq emas (ikki tomonlama)", () => {
    expect(tTestPValue(-2.5, 10)).toBeCloseTo(tTestPValue(2.5, 10), 14);
  });

  it("χ² taqsimoti bo'yicha p SciPy bilan mos", () => {
    expect(chiSquarePValue(3.84, 1)).toBeCloseTo(0.05004352124870519, 12);
    expect(chiSquarePValue(7.81, 3)).toBeCloseTo(0.05010605635000589, 12);
    expect(chiSquarePValue(0.5, 2)).toBeCloseTo(0.7788007830714049, 12);
    expect(chiSquarePValue(25, 2)).toBeCloseTo(3.7266531720786718e-6, 15);
  });

  it("χ² nolda p = 1", () => {
    expect(chiSquarePValue(0, 2)).toBe(1);
  });
});

suite("tavsiflovchi statistika", () => {
  it("o'rtacha, standart chetlanish va mediana to'g'ri", () => {
    const a = summarize(A);
    expect(a.n).toBe(12);
    expect(a.mean).toBeCloseTo(70.16666666666667, 12);
    // n−1 bilan: tanlanma standart chetlanishi
    expect(a.sd).toBeCloseTo(8.110972739929457, 12);
    expect(a.median).toBe(70);
    expect(a.min).toBe(58);
    expect(a.max).toBe(85);
  });

  it("juft sonli qatorda mediana ikki o'rta qiymatning o'rtachasi", () => {
    expect(summarize(B).median).toBeCloseTo(59.5, 12);
    expect(summarize([1, 2, 3, 4]).median).toBe(2.5);
  });

  it("bo'sh va bitta elementli qatorda yiqilmaydi", () => {
    expect(summarize([]).n).toBe(0);
    expect(Number.isNaN(summarize([]).mean)).toBe(true);
    const bitta = summarize([42]);
    expect(bitta.mean).toBe(42);
    expect(bitta.sd).toBe(0);
    expect(bitta.se).toBe(0);
  });
});

suite("t-mezon", () => {
  it("Uelch varianti SciPy bilan mos", () => {
    const r = independentTTest(A, B);
    expect(r.method).toBe("welch");
    expect(r.t).toBeCloseTo(3.6790626845273513, 12);
    expect(r.df).toBeCloseTo(18.79949291121361, 10);
    expect(r.p).toBeCloseTo(0.0016171931857316586, 14);
  });

  it("Styudent (klassik) varianti SciPy bilan mos", () => {
    const r = independentTTest(A, B, { equalVariance: true });
    expect(r.method).toBe("student");
    expect(r.t).toBeCloseTo(3.6790626845273513, 12);
    expect(r.df).toBe(22);
    expect(r.p).toBeCloseTo(0.0013149969038423605, 14);
  });

  it("juftlashgan mezon SciPy bilan mos", () => {
    const r = pairedTTest(BEFORE, AFTER);
    expect(r.method).toBe("paired");
    expect(r.t).toBeCloseTo(27.71281292110204, 10);
    expect(r.df).toBe(11);
    expect(r.p).toBeCloseTo(1.5783428121186688e-11, 18);
    expect(r.meanDifference).toBeCloseTo(16, 12);
  });

  it("juftlashgan mezon teng bo'lmagan uzunlikda xato beradi", () => {
    expect(() => pairedTTest([1, 2], [1, 2, 3])).toThrow(/uzunligi/);
  });

  it("bir xil guruhlarda t = 0 va p = 1", () => {
    const r = independentTTest(A, A);
    expect(r.t).toBeCloseTo(0, 12);
    expect(r.p).toBeCloseTo(1, 12);
  });

  it("ma'lumot yetmasa NaN qaytaradi, yiqilmaydi", () => {
    const r = independentTTest([5], [7]);
    expect(Number.isNaN(r.p)).toBe(true);
    expect(r.meanDifference).toBe(-2);
  });
});

suite("effekt kattaligi", () => {
  it("Koen d va Xedjes g to'g'ri", () => {
    const e = cohenD(A, B);
    expect(e.d).toBeCloseTo(1.5019710514676818, 12);
    expect(e.g).toBeCloseTo(1.4501789462446584, 12);
    expect(e.magnitude).toBe("katta");
  });

  it("Xedjes tuzatmasi effektni kamaytiradi", () => {
    const e = cohenD(A, B);
    expect(Math.abs(e.g)).toBeLessThan(Math.abs(e.d));
  });

  it("Koen shkalasi chegaralari", () => {
    expect(effectMagnitude(0.1)).toBe("juda kichik");
    expect(effectMagnitude(0.2)).toBe("kichik");
    expect(effectMagnitude(0.49)).toBe("kichik");
    expect(effectMagnitude(0.5)).toBe("o'rta");
    expect(effectMagnitude(0.8)).toBe("katta");
    // Ishora emas, kattalik muhim
    expect(effectMagnitude(-1.2)).toBe("katta");
  });
});

suite("χ² mezoni", () => {
  const JADVAL = [
    [2, 4, 6],
    [7, 4, 1],
  ];

  it("natija SciPy bilan mos", () => {
    const r = chiSquareIndependence(JADVAL);
    expect(r.chi2).toBeCloseTo(6.349206349206349, 12);
    expect(r.df).toBe(2);
    expect(r.p).toBeCloseTo(0.04181069233796076, 12);
    expect(r.cramersV).toBeCloseTo(0.5143444998736397, 12);
    expect(r.total).toBe(24);
  });

  it("kutilgan chastotalar jadvali to'g'ri", () => {
    const r = chiSquareIndependence(JADVAL);
    expect(r.expected).toEqual([
      [4.5, 4, 3.5],
      [4.5, 4, 3.5],
    ]);
  });

  it("kutilgan chastotasi 5 dan kichik katakchalarni sanaydi", () => {
    // Bu jadvalda kutilgan chastotalar 4,5 · 4 · 3,5 — oltitasi ham 5 dan
    // kichik, ya'ni mezon sharti butunlay buzilgan.
    expect(chiSquareIndependence(JADVAL).lowExpectedCells).toBe(6);
    // Kattaroq namunada shart bajariladi.
    expect(
      chiSquareIndependence([
        [20, 30, 25],
        [25, 28, 22],
      ]).lowExpectedCells,
    ).toBe(0);
  });

  it("taqsimot bir xil bo'lsa χ² ≈ 0 va p ≈ 1", () => {
    const r = chiSquareIndependence([
      [10, 10, 10],
      [10, 10, 10],
    ]);
    expect(r.chi2).toBeCloseTo(0, 12);
    expect(r.p).toBeCloseTo(1, 12);
    expect(r.cramersV).toBeCloseTo(0, 12);
  });

  it("noto'g'ri jadval shaklida aniq xato beradi", () => {
    expect(() => chiSquareIndependence([[1, 2]])).toThrow(/2×2/);
    expect(() => chiSquareIndependence([[1, 2], [1]])).toThrow(/teng uzunlikda/);
  });

  it("bo'sh jadvalda yiqilmaydi", () => {
    const r = chiSquareIndependence([
      [0, 0],
      [0, 0],
    ]);
    expect(Number.isNaN(r.p)).toBe(true);
    expect(r.total).toBe(0);
  });
});

suite("daraja taqsimoti", () => {
  it("chegaralar 56 va 71 ballda", () => {
    expect(levelCounts([55, 56, 70, 71, 100])).toEqual({ past: 1, orta: 2, yuqori: 2 });
  });

  it("qator DARAJALAR tartibida chiqadi: past, o'rta, yuqori", () => {
    expect(levelRow([40, 60, 60, 90])).toEqual([1, 2, 1]);
  });

  it("tajriba va nazorat qatorlari χ² ga tayyor jadval beradi", () => {
    const jadval = [levelRow(A), levelRow(B)];
    expect(jadval).toHaveLength(2);
    expect(jadval[0]).toHaveLength(3);
    expect(() => chiSquareIndependence(jadval)).not.toThrow();
  });
});

suite("Mann–Uitni mezoni", () => {
  it("U va p SciPy bilan mos (asimptotik, uzluksizlik tuzatmasi bilan)", () => {
    const r = mannWhitneyU(A, B);
    // SciPy birinchi tanlanmaning statistikasini qaytaradi — u bizda `u1`.
    expect(r.u1).toBeCloseTo(123.5, 12);
    expect(r.p).toBeCloseTo(0.0032148744487272784, 12);
  });

  it("teng qiymatlar tuzatmasi qo'llanadi", () => {
    const tieA = [5, 5, 6, 7, 7, 7, 8, 9];
    const tieB = [5, 6, 6, 7, 8, 8, 9, 10];
    const r = mannWhitneyU(tieA, tieB);
    expect(r.tieCorrection).toBe(true);
    expect(r.u1).toBeCloseTo(25, 12);
    expect(r.p).toBeCloseTo(0.48737967480145106, 10);
  });

  it("U1 + U2 = n1 · n2", () => {
    const r = mannWhitneyU(A, B);
    expect(r.u1 + r.u2).toBe(A.length * B.length);
    expect(r.u).toBe(Math.min(r.u1, r.u2));
  });

  it("bo'sh qatorda NaN qaytaradi", () => {
    expect(Number.isNaN(mannWhitneyU([], B).p)).toBe(true);
  });

  it("t-mezon bilan bir xil xulosaga olib keladi", () => {
    // Ikki mezon bir xil yo'nalishni ko'rsatsa, natija taqsimot shakliga
    // bog'liq emas degan ishonch paydo bo'ladi.
    expect(mannWhitneyU(A, B).p < 0.05).toBe(independentTTest(A, B).p < 0.05);
  });
});

suite("natijani o'qish", () => {
  it("juda kichik p «0,000» deb yozilmaydi", () => {
    expect(formatP(0.0000001)).toBe("p < 0,001");
    expect(formatP(0.0321)).toBe("p = 0,032");
    expect(formatP(NaN)).toBe("—");
  });

  it("o'nlik kasr vergul bilan yoziladi", () => {
    expect(formatNumber(1.5019)).toBe("1,50");
    expect(formatNumber(70.1666, 1)).toBe("70,2");
    expect(formatNumber(Infinity)).toBe("—");
  });

  it("ahamiyatlilik darajasi to'g'ri aniqlanadi", () => {
    expect(significance(0.2)).toBe("ahamiyatsiz");
    expect(significance(0.04)).toBe("p<0,05");
    expect(significance(0.005)).toBe("p<0,01");
    expect(significance(0.0001)).toBe("p<0,001");
  });

  it("xulosa ehtiyotkor tilda yoziladi", () => {
    const yaxshi = interpretTTest(independentTTest(A, B), cohenD(A, B));
    expect(yaxshi).toContain("statistik ahamiyatli");
    expect(yaxshi).not.toMatch(/isbot/i);

    const ahamiyatsiz = interpretTTest(independentTTest(B, B));
    expect(ahamiyatsiz).toContain("topilmadi");

    expect(interpretTTest(independentTTest([1], [2]))).toContain("yetarli emas");
  });
});

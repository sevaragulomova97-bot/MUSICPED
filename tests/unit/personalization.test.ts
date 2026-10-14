import { describe, expect, it } from "vitest";
import {
  applyResult,
  BLOOM_MIN_URINISH,
  buildLearningPath,
  detectProfileType,
  resolveBloom,
  type TaskResult,
  YANGI_NATIJA_VAZNI,
} from "@/lib/personalization";
import {
  type AreaScores,
  emptyAreaScores,
  groupScores,
  overallScore,
  zpdZone,
} from "@/lib/domain/types";

/** Testlarni o'qishni osonlashtirish uchun qisqa yordamchi. */
function ballar(patch: Partial<AreaScores> = {}): AreaScores {
  return { ...emptyAreaScores(60), ...patch };
}

describe("zpdZone — Vigotskiy uch zonasi", () => {
  it("50% dan past — asosiy zona", () => {
    expect(zpdZone(0)).toBe("asosiy");
    expect(zpdZone(49)).toBe("asosiy");
  });

  it("50–80% — yaqin rivojlanish zonasi (chegaralar ichida)", () => {
    expect(zpdZone(50)).toBe("zpd");
    expect(zpdZone(65)).toBe("zpd");
    expect(zpdZone(80)).toBe("zpd");
  });

  it("80% dan yuqori — mustaqil zona", () => {
    expect(zpdZone(81)).toBe("mustaqil");
    expect(zpdZone(100)).toBe("mustaqil");
  });
});

describe("resolveBloom — Blum darajasini bosqichma-bosqich ko'tarish", () => {
  it("tarix bo'lmasa, zona bergan boshlang'ich darajadan boshlanadi", () => {
    expect(resolveBloom("nazariya", "asosiy")).toBe("bilish");
    expect(resolveBloom("nazariya", "zpd")).toBe("qollash");
    expect(resolveBloom("nazariya", "mustaqil")).toBe("tahlil");
  });

  it("bitta urinish yetarli emas — daraja ko'tarilmaydi", () => {
    const history: TaskResult[] = [
      { area: "nazariya", bloom: "bilish", score: 95, completedAt: "2025-09-10" },
    ];
    expect(BLOOM_MIN_URINISH).toBe(2);
    expect(resolveBloom("nazariya", "asosiy", history)).toBe("bilish");
  });

  it("80% dan past o'rtacha bilan daraja ko'tarilmaydi", () => {
    const history: TaskResult[] = [
      { area: "nazariya", bloom: "bilish", score: 85, completedAt: "2025-09-10" },
      { area: "nazariya", bloom: "bilish", score: 70, completedAt: "2025-09-12" },
    ];
    // o'rtacha 77.5 < 80
    expect(resolveBloom("nazariya", "asosiy", history)).toBe("bilish");
  });

  it("80%+ o'rtacha bilan keyingi darajaga o'tadi", () => {
    const history: TaskResult[] = [
      { area: "nazariya", bloom: "bilish", score: 80, completedAt: "2025-09-10" },
      { area: "nazariya", bloom: "bilish", score: 90, completedAt: "2025-09-12" },
    ];
    expect(resolveBloom("nazariya", "asosiy", history)).toBe("tushunish");
  });

  it("ketma-ket bir necha darajani bosib o'tadi", () => {
    const history: TaskResult[] = [
      { area: "nazariya", bloom: "bilish", score: 90, completedAt: "2025-09-10" },
      { area: "nazariya", bloom: "bilish", score: 90, completedAt: "2025-09-11" },
      { area: "nazariya", bloom: "tushunish", score: 85, completedAt: "2025-09-12" },
      { area: "nazariya", bloom: "tushunish", score: 95, completedAt: "2025-09-13" },
    ];
    expect(resolveBloom("nazariya", "asosiy", history)).toBe("qollash");
  });

  it("boshqa yo'nalishning tarixi hisobga olinmaydi", () => {
    const history: TaskResult[] = [
      { area: "ritm", bloom: "bilish", score: 100, completedAt: "2025-09-10" },
      { area: "ritm", bloom: "bilish", score: 100, completedAt: "2025-09-11" },
    ];
    expect(resolveBloom("nazariya", "asosiy", history)).toBe("bilish");
  });

  it("eng yuqori darajadan tashqariga chiqmaydi", () => {
    const history: TaskResult[] = ["tahlil", "sintez", "baholash"].flatMap(
      (bloom) =>
        [0, 1].map((i) => ({
          area: "nazariya" as const,
          bloom: bloom as TaskResult["bloom"],
          score: 100,
          completedAt: `2025-09-1${i}`,
        })),
    );
    expect(resolveBloom("nazariya", "mustaqil", history)).toBe("baholash");
  });
});

describe("detectProfileType — tipik talaba profillari", () => {
  it("ijrochilikda kuchli, nazariyada sust", () => {
    const scores = ballar({
      texnika: 88,
      ritm: 85,
      nazariya: 45,
      eshituv: 50,
      ijodkorlik: 60,
      metodika: 62,
    });
    // ijro guruhi (86) nazariya guruhidan (47) ancha yuqori
    expect(detectProfileType(scores)).toBe("ijrochi");
  });

  it("nazariyasi mustahkam, ijroda o'rtacha", () => {
    const scores = ballar({
      nazariya: 92,
      eshituv: 88,
      texnika: 60,
      ritm: 58,
      ijodkorlik: 55,
      metodika: 70,
    });
    expect(detectProfileType(scores)).toBe("nazariyotchi");
  });

  it("ijodkor, lekin tartibsiz", () => {
    const scores = ballar({
      ijodkorlik: 90,
      nazariya: 48,
      metodika: 52,
      texnika: 65,
      ritm: 62,
      motivatsiya: 70,
    });
    expect(detectProfileType(scores)).toBe("ijodkor");
  });

  it("mehnatkash, tabiiy qobiliyat o'rtacha", () => {
    const scores = ballar({
      motivatsiya: 90,
      nazariya: 62,
      eshituv: 60,
      texnika: 61,
      ritm: 59,
      ijodkorlik: 58,
      metodika: 63,
      sahna: 60,
    });
    expect(detectProfileType(scores)).toBe("mehnatkash");
  });

  it("yo'nalishlar tekis bo'lsa — muvozanatli", () => {
    expect(detectProfileType(ballar({ motivatsiya: 60 }))).toBe("muvozanatli");
  });

  it("ijodkorlik qoidasi ijro/nazariya farqidan ustun turadi", () => {
    // Ham ijodkor, ham ijrochi belgilariga mos keladi — tartib bo'yicha ijodkor g'olib.
    const scores = ballar({
      ijodkorlik: 85,
      nazariya: 40,
      metodika: 45,
      texnika: 88,
      ritm: 86,
      eshituv: 42,
    });
    expect(detectProfileType(scores)).toBe("ijodkor");
  });
});

describe("buildLearningPath — individual reja", () => {
  const scores = ballar({
    nazariya: 35,
    metodika: 42,
    eshituv: 55,
    ritm: 60,
    texnika: 72,
    sahna: 70,
    ijodkorlik: 88,
    motivatsiya: 80,
  });

  it("eng zaif ikki yo'nalishni birinchi o'ringa qo'yadi", () => {
    const path = buildLearningPath({ scores });
    expect(path.weaknesses).toEqual(["nazariya", "metodika"]);
    expect(path.items[0].area).toBe("nazariya");
    expect(path.items[0].priority).toBe(1);
    expect(path.items[1].area).toBe("metodika");
    expect(path.items[1].priority).toBe(2);
  });

  it("eng kuchli yo'nalishni aniqlaydi", () => {
    const path = buildLearningPath({ scores });
    expect(path.strengths[0]).toBe("ijodkorlik");
  });

  it("eng kuchli yo'nalishga ijodiy topshiriq qo'shadi", () => {
    const path = buildLearningPath({ scores });
    const ijodiy = path.items.at(-1);
    expect(ijodiy?.area).toBe("ijodkorlik");
    expect(ijodiy?.taskType).toBe("loyiha");
    expect(ijodiy?.bloom).toBe("sintez");
  });

  it("reja uzunligi maxItems + 1 ta ijodiy topshiriq", () => {
    expect(buildLearningPath({ scores, maxItems: 3 }).items).toHaveLength(4);
    expect(buildLearningPath({ scores, maxItems: 5 }).items).toHaveLength(6);
  });

  it("past zonada yordam qadamlari ko'proq bo'ladi", () => {
    const path = buildLearningPath({ scores });
    const asosiy = path.items.find((i) => i.zone === "asosiy");
    const mustaqil = path.items.find((i) => i.zone === "mustaqil");
    expect(asosiy).toBeDefined();
    expect(mustaqil).toBeDefined();
    expect(asosiy!.scaffolding.length).toBeGreaterThan(mustaqil!.scaffolding.length);
  });

  it("har bir element refleksiya savoli bilan keladi", () => {
    const path = buildLearningPath({ scores });
    for (const item of path.items) {
      expect(item.reflection.length).toBeGreaterThan(0);
    }
  });

  it("tavsiyalar profil turi va zaif yo'nalishlarni qamrab oladi", () => {
    const path = buildLearningPath({ scores });
    expect(path.recommendations).toHaveLength(3);
    expect(path.recommendations[1]).toContain("Nota savodida");
  });

  it("bir xil kirishda natija har doim bir xil (determinizm)", () => {
    expect(buildLearningPath({ scores })).toEqual(buildLearningPath({ scores }));
  });

  it("ballar teng bo'lganda tartib barqaror qoladi", () => {
    const tekis = emptyAreaScores(60);
    const a = buildLearningPath({ scores: tekis });
    const b = buildLearningPath({ scores: tekis });
    expect(a.items.map((i) => i.area)).toEqual(b.items.map((i) => i.area));
    // Qat'iy ro'yxat tartibi: eshituv birinchi
    expect(a.items[0].area).toBe("eshituv");
  });

  it("tarix berilsa, Blum darajasi ko'tariladi", () => {
    const history: TaskResult[] = [
      { area: "nazariya", bloom: "bilish", score: 95, completedAt: "2025-09-10" },
      { area: "nazariya", bloom: "bilish", score: 90, completedAt: "2025-09-11" },
    ];
    const tarixsiz = buildLearningPath({ scores });
    const tarixli = buildLearningPath({ scores, history });
    expect(tarixsiz.items[0].bloom).toBe("bilish");
    expect(tarixli.items[0].bloom).toBe("tushunish");
  });

  it("maxItems 0 bo'lsa ham ijodiy topshiriq qoladi", () => {
    const path = buildLearningPath({ scores, maxItems: 0 });
    expect(path.items).toHaveLength(1);
    expect(path.items[0].area).toBe("ijodkorlik");
  });
});

describe("applyResult — adaptiv qayta hisoblash", () => {
  it("yangi natija ballni belgilangan vazn bilan siljitadi", () => {
    const scores = ballar({ ritm: 50 });
    const next = applyResult(scores, {
      area: "ritm",
      bloom: "qollash",
      score: 100,
      completedAt: "2025-10-01",
    });
    // 50 * 0.6 + 100 * 0.4 = 70
    expect(YANGI_NATIJA_VAZNI).toBe(0.4);
    expect(next.ritm).toBe(70);
  });

  it("bitta muvaffaqiyatsizlik ballni nolga tushirmaydi", () => {
    const scores = ballar({ ritm: 80 });
    const next = applyResult(scores, {
      area: "ritm",
      bloom: "qollash",
      score: 0,
      completedAt: "2025-10-01",
    });
    expect(next.ritm).toBe(48);
  });

  it("boshqa yo'nalishlarga tegmaydi", () => {
    const scores = ballar({ ritm: 50, nazariya: 90 });
    const next = applyResult(scores, {
      area: "ritm",
      bloom: "qollash",
      score: 100,
      completedAt: "2025-10-01",
    });
    expect(next.nazariya).toBe(90);
    expect(scores.ritm).toBe(50); // asl obyekt o'zgarmaydi
  });

  it("natija 0–100 oralig'idan chiqmaydi", () => {
    const yuqori = applyResult(ballar({ ritm: 100 }), {
      area: "ritm",
      bloom: "qollash",
      score: 100,
      completedAt: "2025-10-01",
    });
    expect(yuqori.ritm).toBe(100);
  });
});

describe("groupScores / overallScore — 8 yo'nalishdan 4 guruhga", () => {
  it("guruh o'rtachasini to'g'ri hisoblaydi", () => {
    const scores = ballar({ nazariya: 80, eshituv: 60 });
    expect(groupScores(scores).nazariya).toBe(70);
  });

  it("umumiy ball barcha yo'nalishlar o'rtachasi", () => {
    expect(overallScore(emptyAreaScores(75))).toBe(75);
  });
});

import { describe, expect, it } from "vitest";
import {
  type AnswerMap,
  answeredCount,
  groupQuestionsByArea,
  LIKERT_MAX,
  LIKERT_MIN,
  questionsOfVariant,
  scoreDiagnostic,
  variantForAttempt,
  scoreQuestion,
} from "@/lib/scoring";
import { DIAGNOSTIKA_SAVOLLARI, type Question } from "@/content/diagnostic";
import { DIAGNOSTIKA_YONALISHLARI } from "@/lib/domain/types";

const single: Question = {
  id: "s1",
  area: "nazariya",
  bloom: "bilish",
  kind: "single",
  prompt: "?",
  options: [
    { id: "a", text: "A" },
    { id: "b", text: "B" },
  ],
  correctId: "a",
};

const multiple: Question = {
  id: "m1",
  area: "metodika",
  bloom: "qollash",
  kind: "multiple",
  prompt: "?",
  options: [
    { id: "a", text: "A" },
    { id: "b", text: "B" },
    { id: "c", text: "C" },
    { id: "d", text: "D" },
  ],
  correctIds: ["a", "b"],
};

const likert: Question = {
  id: "l1",
  area: "motivatsiya",
  bloom: "bilish",
  kind: "likert",
  prompt: "?",
  lowLabel: "past",
  highLabel: "yuqori",
};

describe("scoreQuestion", () => {
  it("javob berilmagan savol 0 ball", () => {
    expect(scoreQuestion(single, undefined)).toBe(0);
    expect(scoreQuestion(multiple, undefined)).toBe(0);
    expect(scoreQuestion(likert, undefined)).toBe(0);
  });

  it("bitta to'g'ri javob — 1 yoki 0", () => {
    expect(scoreQuestion(single, "a")).toBe(1);
    expect(scoreQuestion(single, "b")).toBe(0);
  });

  it("ko'p javobli savolda to'liq to'g'ri — 1", () => {
    expect(scoreQuestion(multiple, ["a", "b"])).toBe(1);
  });

  it("ko'p javobli savolda qisman ball beriladi", () => {
    expect(scoreQuestion(multiple, ["a"])).toBe(0.5);
  });

  it("noto'g'ri belgilangan variant ballni kamaytiradi", () => {
    // 2 to'g'ri - 1 noto'g'ri = 1; 1/2 = 0.5
    expect(scoreQuestion(multiple, ["a", "b", "c"])).toBe(0.5);
  });

  it("hammasini belgilash foyda bermaydi", () => {
    // 2 to'g'ri - 2 noto'g'ri = 0
    expect(scoreQuestion(multiple, ["a", "b", "c", "d"])).toBe(0);
  });

  it("ball hech qachon manfiy bo'lmaydi", () => {
    expect(scoreQuestion(multiple, ["c", "d"])).toBe(0);
  });

  it("likert shkalasi 0–1 ga keltiriladi", () => {
    expect(scoreQuestion(likert, 1)).toBe(0);
    expect(scoreQuestion(likert, 3)).toBe(0.5);
    expect(scoreQuestion(likert, LIKERT_MAX)).toBe(1);
  });

  it("shkaladan tashqaridagi qiymat chegaralanadi", () => {
    expect(scoreQuestion(likert, 0)).toBe(0);
    expect(scoreQuestion(likert, 99)).toBe(1);
  });

  it("javob turi mos kelmasa 0 beriladi", () => {
    expect(scoreQuestion(multiple, "a")).toBe(0);
    expect(scoreQuestion(likert, "3")).toBe(0);
  });
});

describe("scoreDiagnostic", () => {
  const questions = [single, multiple, likert];

  it("yo'nalish bo'yicha foiz hisoblaydi", () => {
    const answers: AnswerMap = { s1: "a", m1: ["a"], l1: 5 };
    const scores = scoreDiagnostic(answers, questions);
    expect(scores.nazariya).toBe(100);
    expect(scores.metodika).toBe(50);
    expect(scores.motivatsiya).toBe(100);
  });

  it("savoli yo'q yo'nalish fallback qiymatini oladi", () => {
    const scores = scoreDiagnostic({}, questions, 50);
    expect(scores.eshituv).toBe(50);
    expect(scores.nazariya).toBe(0); // savoli bor, lekin javob yo'q
  });

  it("savol og'irligi (points) hisobga olinadi", () => {
    const ogir: Question = { ...single, id: "s2", points: 3 };
    const scores = scoreDiagnostic({ s1: "a", s2: "b" }, [single, ogir]);
    // 1*1 + 0*3 = 1 ball, 4 ballik imkoniyatdan => 25%
    expect(scores.nazariya).toBe(25);
  });

  it("haqiqiy savol bankida barcha yo'nalish qamrab olingan", () => {
    const scores = scoreDiagnostic({});
    for (const area of DIAGNOSTIKA_YONALISHLARI) {
      expect(scores[area]).toBe(0);
    }
  });

  it("haqiqiy bankda to'liq to'g'ri javob 100% beradi", () => {
    const answers: AnswerMap = {};
    for (const q of DIAGNOSTIKA_SAVOLLARI) {
      if (q.kind === "single") answers[q.id] = q.correctId;
      else if (q.kind === "multiple") answers[q.id] = q.correctIds;
      // Likertda «eng yuqori motivatsiya» teskari bandda past ballga
      // to'g'ri keladi — shkalaning mohiyati shunda.
      else answers[q.id] = q.reverse ? LIKERT_MIN : LIKERT_MAX;
    }
    const scores = scoreDiagnostic(answers);
    for (const area of DIAGNOSTIKA_YONALISHLARI) {
      expect(scores[area], area).toBe(100);
    }
  });

  it("hamma Likert bandiga «5» qo'yish 100% bermaydi", () => {
    // Rozilik moyiligiga qarshi himoya: o'ylamay to'ldirilgan varaqa
    // o'rtacha natija beradi va bu ko'rinib qoladi.
    const answers: AnswerMap = {};
    for (const q of DIAGNOSTIKA_SAVOLLARI) {
      if (q.kind === "likert") answers[q.id] = LIKERT_MAX;
    }
    const scores = scoreDiagnostic(answers);
    expect(scores.motivatsiya).toBeLessThan(100);
    expect(scores.motivatsiya).toBeGreaterThan(0);
  });

  it("bankda kamida bitta teskari Likert bandi bor", () => {
    // Yuqoridagi test bo'sh yurmasligi uchun.
    const teskari = DIAGNOSTIKA_SAVOLLARI.filter(
      (q) => q.kind === "likert" && q.reverse,
    );
    expect(teskari.length).toBeGreaterThan(0);
  });
});

describe("parallel shakllar", () => {
  it("A va B shakllari teng hajmda", () => {
    const a = questionsOfVariant("A");
    const b = questionsOfVariant("B");
    expect(a.length).toBe(b.length);
    expect(a.length + b.length).toBe(DIAGNOSTIKA_SAVOLLARI.length);
  });

  it("har bir yo'nalish ikkala shaklda ham bor va teng", () => {
    for (const area of DIAGNOSTIKA_YONALISHLARI) {
      const a = questionsOfVariant("A").filter((q) => q.area === area).length;
      const b = questionsOfVariant("B").filter((q) => q.area === area).length;
      expect(a, `${area} / A`).toBeGreaterThan(0);
      expect(b, `${area} / B`).toBe(a);
    }
  });

  it("savol identifikatorlari takrorlanmaydi", () => {
    const ids = DIAGNOSTIKA_SAVOLLARI.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("navbatdagi o'lchov shakli almashib turadi", () => {
    expect(variantForAttempt(0)).toBe("A");
    expect(variantForAttempt(1)).toBe("B");
    expect(variantForAttempt(2)).toBe("A");
  });

  it("bitta shakl ham barcha yo'nalishni qamrab oladi", () => {
    // Aks holda o'lchovda yo'nalish tushib qolardi va uning bali
    // `fallback` qiymatiga tushib, rejani buzardi.
    for (const v of ["A", "B"] as const) {
      const qamrov = new Set(questionsOfVariant(v).map((q) => q.area));
      expect(qamrov.size, v).toBe(DIAGNOSTIKA_YONALISHLARI.length);
    }
  });
});

describe("groupQuestionsByArea / answeredCount", () => {
  it("savol banki 8 ta yo'nalishga bo'linadi", () => {
    const groups = groupQuestionsByArea();
    expect(groups).toHaveLength(8);
    expect(groups.reduce((s, g) => s + g.questions.length, 0)).toBe(
      DIAGNOSTIKA_SAVOLLARI.length,
    );
  });

  it("guruhlar tartibi qat'iy ro'yxatga mos", () => {
    expect(groupQuestionsByArea().map((g) => g.area)).toEqual([
      ...DIAGNOSTIKA_YONALISHLARI,
    ]);
  });

  it("javob berilganlar sanaladi", () => {
    expect(answeredCount({ s1: "a", m1: undefined }, [single, multiple])).toBe(1);
  });
});

"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { ChoiceCard, LikertScale } from "@/components/ui/radio-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useSession } from "@/components/session-provider";
import { allDiagnostics, saveDiagnostic, upsertProfile } from "@/lib/db/repo";
import {
  BLOOM_NOMI,
  type DiagnosticKind,
  YONALISH_NOMI,
  YONALISH_TAVSIFI,
} from "@/lib/domain/types";
import {
  type AnswerMap,
  answeredCount,
  groupQuestionsByArea,
  questionsOfVariant,
  scoreDiagnostic,
  variantForKind,
} from "@/lib/scoring";

/**
 * O'lchov turi va u haqidagi matnlar.
 *
 * Ilgari bu sahifa har doim `"boshlangich"` yozardi — ya'ni talaba yakuniy
 * diagnostikani umuman topshira olmasdi va dissertatsiyaning asosiy
 * tajribasi (boshlang'ich → yakuniy) platformada o'tkazilmas edi.
 *
 * Birinchi o'lchov har doim boshlang'ich. Keyingilarida talaba o'zi
 * tanlaydi: oraliq nazorat (o'quv jarayonining o'rtasida, reja uchun) yoki
 * yakuniy diagnostika (tajribaning oxirgi o'lchovi).
 */
const TUR_MATNI: Record<
  DiagnosticKind,
  { sarlavha: string; qisqa: string; tavsif: string }
> = {
  boshlangich: {
    sarlavha: "Boshlang'ich diagnostika",
    qisqa: "Birinchi o'lchov",
    tavsif:
      "Natijalar asosida sizning individual o'quv rejangiz shakllantiriladi.",
  },
  oraliq: {
    sarlavha: "Oraliq nazorat",
    qisqa: "Oraliq nazorat",
    tavsif:
      "O'quv jarayonining o'rtasidagi o'lchov: rejani yangilash va qaysi yo'nalish orqada qolayotganini ko'rish uchun.",
  },
  yakuniy: {
    sarlavha: "Yakuniy diagnostika",
    qisqa: "Yakuniy diagnostika",
    tavsif:
      "Tajribaning oxirgi o'lchovi. Natija boshlang'ich diagnostika bilan solishtiriladi.",
  },
};

export function DiagnostikaTest() {
  const { profile } = useSession();
  const router = useRouter();
  const [step, setStep] = React.useState(0);
  const [answers, setAnswers] = React.useState<AnswerMap>({});
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  // Oldingi o'lchovlar soni; `null` — hali o'qilmagan.
  const [oldingilar, setOldingilar] = React.useState<number | null>(null);

  const userId = profile?.id;
  React.useEffect(() => {
    if (!userId) return;
    let bekor = false;
    void allDiagnostics(userId)
      .then((rows) => {
        if (!bekor) setOldingilar(rows.length);
      })
      .catch(() => {
        // Baza o'qilmasa birinchi o'lchov deb hisoblaymiz: test baribir
        // o'tkazilishi kerak, saqlash bosqichida xato ko'rsatiladi.
        if (!bekor) setOldingilar(0);
      });
    return () => {
      bekor = true;
    };
  }, [userId]);

  // Keyingi o'lchovlarda tur foydalanuvchi tanlovi bilan belgilanadi.
  const [tanlanganTur, setTanlanganTur] = React.useState<DiagnosticKind | null>(null);
  const birinchi = oldingilar === 0;
  const tur: DiagnosticKind | null = birinchi ? "boshlangich" : tanlanganTur;

  const variant = variantForKind(tur ?? "boshlangich");
  const SAVOLLAR = React.useMemo(() => questionsOfVariant(variant), [variant]);
  const BOSQICHLAR = React.useMemo(() => groupQuestionsByArea(SAVOLLAR), [SAVOLLAR]);

  const bosqich = BOSQICHLAR[step];
  const oxirgi = step === BOSQICHLAR.length - 1;
  const javobBerilgan = answeredCount(answers, SAVOLLAR);
  const umumiyFoiz = Math.round((javobBerilgan / SAVOLLAR.length) * 100);

  const bosqichToliq = bosqich.questions.every((q) => answers[q.id] !== undefined);

  function setAnswer(id: string, value: AnswerMap[string]) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  function toggleMultiple(id: string, value: string) {
    setAnswers((prev) => {
      const joriy = Array.isArray(prev[id]) ? (prev[id] as string[]) : [];
      const yangi = joriy.includes(value)
        ? joriy.filter((v) => v !== value)
        : [...joriy, value];
      return { ...prev, [id]: yangi };
    });
  }

  async function finish() {
    if (!profile) return;
    setSaving(true);
    setError(null);
    try {
      const scores = scoreDiagnostic(answers, SAVOLLAR);
      // Profil bazada ham bo'lishi kerak — diagnostika unga bog'lanadi.
      await upsertProfile({
        id: profile.id,
        fullName: profile.fullName,
        role: profile.role,
        group: profile.group,
        startedAt: profile.startedAt,
        direction: profile.direction,
      });
      await saveDiagnostic(profile.id, tur ?? "boshlangich", scores);
      router.push("/yolnalish");
    } catch (cause) {
      console.error(cause);
      setError(
        "Natijani saqlab bo'lmadi. Brauzeringiz shaxsiy rejimda bo'lsa yoki saqlash o'chirilgan bo'lsa shunday bo'ladi.",
      );
      setSaving(false);
    }
  }

  // Baza hali o'qilmagan — tur ham, savollar ham noma'lum.
  if (oldingilar === null) {
    return (
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-ink-muted" role="status">
          Yuklanmoqda…
        </p>
      </div>
    );
  }

  // Takroriy o'lchovda turni foydalanuvchi tanlaydi.
  if (tur === null) {
    return (
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          Qaysi o&apos;lchovni topshirasiz?
        </h1>
        <p className="mt-1.5 text-sm text-ink-muted">
          Boshlang&apos;ich diagnostikangiz allaqachon saqlangan. Bu safargi
          o&apos;lchov qaysi turga kirishini tanlang — tahlilda ular turlicha
          ishlatiladi.
        </p>

        <div className="mt-5 flex flex-col gap-3">
          {(["oraliq", "yakuniy"] as const).map((k) => (
            <Card key={k}>
              <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="min-w-0">
                  <h2 className="font-display text-base font-semibold text-ink">
                    {TUR_MATNI[k].sarlavha}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                    {TUR_MATNI[k].tavsif}
                  </p>
                </div>
                <Button
                  className="shrink-0"
                  // Ikkala tugma ham «Boshlash» deb yozilgan: ekran o'quvchi
                  // ularni farqlay olishi uchun to'liq nom beriladi.
                  aria-label={`${TUR_MATNI[k].sarlavha}ni boshlash`}
                  onClick={() => {
                    setTanlanganTur(k);
                    setStep(0);
                    setAnswers({});
                  }}
                >
                  Boshlash
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-5 text-xs leading-relaxed text-ink-muted">
          Har bir o&apos;lchovning o&apos;z savollar to&apos;plami bor:
          boshlang&apos;ich, oraliq va yakuniy o&apos;lchovda bir savol ikki
          marta uchramaydi. Shuning uchun natija savollarni eslab qolish
          hisobiga emas, haqiqiy o&apos;zgarish hisobiga solishtiriladi.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
        {TUR_MATNI[tur].sarlavha}
      </h1>
      <p className="mt-1.5 text-sm text-ink-muted">{TUR_MATNI[tur].tavsif}</p>

      <div className="mt-5">
        <Progress
          value={umumiyFoiz}
          label={`${javobBerilgan} / ${SAVOLLAR.length} savolga javob berildi`}
        />
      </div>

      {/* Bosqichlar ko'rsatkichi */}
      <ol className="mt-5 flex flex-wrap gap-1.5" aria-label="Diagnostika bosqichlari">
        {BOSQICHLAR.map((b, i) => {
          const toliq = b.questions.every((q) => answers[q.id] !== undefined);
          return (
            <li key={b.area}>
              <button
                type="button"
                onClick={() => setStep(i)}
                aria-current={i === step ? "step" : undefined}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors ${
                  i === step
                    ? "bg-primary text-white"
                    : toliq
                      ? "bg-success-soft text-success"
                      : "bg-surface-muted text-ink-muted hover:text-ink"
                }`}
              >
                {toliq && i !== step && (
                  <CheckCircle2 className="size-3.5" aria-hidden="true" />
                )}
                {YONALISH_NOMI[b.area]}
              </button>
            </li>
          );
        })}
      </ol>

      <Card className="mt-5">
        <CardContent className="p-5 lg:p-6">
          <div className="mb-5 border-b border-border-subtle pb-4">
            <h2 className="font-display text-lg font-semibold text-ink">
              {YONALISH_NOMI[bosqich.area]}
            </h2>
            <p className="mt-1 text-sm text-ink-muted">
              {YONALISH_TAVSIFI[bosqich.area]}
            </p>
          </div>

          <ol className="flex flex-col gap-7">
            {bosqich.questions.map((q, index) => (
              <li key={q.id}>
                <div className="mb-3 flex items-start gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-surface-muted text-xs font-semibold text-ink-muted">
                    {index + 1}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-medium leading-relaxed text-ink">
                      {q.prompt}
                    </p>
                    <Badge variant="neutral" className="mt-1.5">
                      {BLOOM_NOMI[q.bloom]}
                    </Badge>
                  </div>
                </div>

                <div className="ml-9 flex flex-col gap-2">
                  {q.kind === "single" &&
                    q.options.map((o) => (
                      <ChoiceCard
                        key={o.id}
                        name={q.id}
                        value={o.id}
                        checked={answers[q.id] === o.id}
                        onChange={(v) => setAnswer(q.id, v)}
                      >
                        {o.text}
                      </ChoiceCard>
                    ))}

                  {q.kind === "multiple" && (
                    <>
                      <p className="text-xs text-ink-muted">
                        Bir nechta javobni belgilashingiz mumkin
                      </p>
                      {q.options.map((o) => (
                        <ChoiceCard
                          key={o.id}
                          name={q.id}
                          value={o.id}
                          multiple
                          checked={
                            Array.isArray(answers[q.id]) &&
                            (answers[q.id] as string[]).includes(o.id)
                          }
                          onChange={(v) => toggleMultiple(q.id, v)}
                        >
                          {o.text}
                        </ChoiceCard>
                      ))}
                    </>
                  )}

                  {q.kind === "likert" && (
                    <LikertScale
                      name={q.id}
                      value={typeof answers[q.id] === "number" ? (answers[q.id] as number) : undefined}
                      onChange={(v) => setAnswer(q.id, v)}
                      lowLabel={q.lowLabel}
                      highLabel={q.highLabel}
                    />
                  )}
                </div>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {error && (
        <p
          role="alert"
          className="mt-4 rounded-xl bg-danger-soft px-4 py-3 text-sm text-danger"
        >
          {error}
        </p>
      )}

      <div className="mt-5 flex items-center justify-between gap-3">
        <Button
          variant="outline"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
        >
          <ArrowLeft aria-hidden="true" />
          Oldingi
        </Button>

        {oxirgi ? (
          <Button onClick={finish} disabled={saving || javobBerilgan === 0}>
            {saving ? "Saqlanmoqda…" : "Yakunlash va rejani olish"}
          </Button>
        ) : (
          <Button
            onClick={() => setStep((s) => Math.min(BOSQICHLAR.length - 1, s + 1))}
            variant={bosqichToliq ? "primary" : "soft"}
          >
            Keyingi
            <ArrowRight aria-hidden="true" />
          </Button>
        )}
      </div>
    </div>
  );
}

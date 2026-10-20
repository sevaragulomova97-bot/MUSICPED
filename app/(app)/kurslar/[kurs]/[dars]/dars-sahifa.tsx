"use client";

import * as React from "react";
import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Info,
  Music4,
} from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Notation } from "@/components/music/notation";
import { useInstrument } from "@/components/music/use-instrument";
import { ChoiceCard } from "@/components/ui/radio-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { findLesson, KURS_BY_SLUG, lessonNeighbours } from "@/content/courses";
import type { Block, Course, Lesson, Section } from "@/content/lesson-types";
import { OQUV_NATIJALARI } from "@/content/modules";
import { reflectionsFor, saveReflections, setProgress } from "@/lib/db/repo";
import { allProgress } from "@/lib/db/repo";
import { BLOOM_NOMI } from "@/lib/domain/types";
import { type AnswerMap, scoreQuestion } from "@/lib/scoring";
import { cn } from "@/lib/utils";

/**
 * Qidiruv qobig'i.
 *
 * Dars topilmasa darhol qaytadi — shunda asosiy komponent ichida `dars`
 * doim mavjud bo'ladi va hook lar shartli chaqirilmaydi.
 */
export function DarsSahifa({
  courseSlug,
  lessonSlug,
}: {
  courseSlug: string;
  lessonSlug: string;
}) {
  const kurs = KURS_BY_SLUG.get(courseSlug);
  const dars = findLesson(courseSlug, lessonSlug);

  if (!kurs || !dars) {
    return <p className="text-sm text-ink-muted">Dars topilmadi.</p>;
  }
  return <DarsKontent kurs={kurs} dars={dars} courseSlug={courseSlug} lessonSlug={lessonSlug} />;
}

function DarsKontent({
  kurs,
  dars,
  courseSlug,
  lessonSlug,
}: {
  kurs: Course;
  dars: Lesson;
  courseSlug: string;
  lessonSlug: string;
}) {
  const { profile } = useSession();
  const userId = profile?.id;
  const { prev, next, index, total } = lessonNeighbours(courseSlug, lessonSlug);

  const [visited, setVisited] = React.useState<Set<string>>(
    () => new Set([dars.sections[0].id]),
  );
  const [current, setCurrent] = React.useState(0);
  const [answers, setAnswers] = React.useState<AnswerMap>({});
  const [checked, setChecked] = React.useState(false);
  const [reflectionText, setReflectionText] = React.useState<string[]>([]);
  const [saving, setSaving] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  const piano = useInstrument("pianino");
  const [activeNote, setActiveNote] = React.useState<number | null>(null);

  const stored = useLiveQuery(async () => {
    if (!userId || !dars) return null;
    const [refl, prog] = await Promise.all([
      reflectionsFor(userId, dars.id),
      allProgress(userId),
    ]);
    return { refl, percent: prog.find((p) => p.lessonId === dars.id)?.percent ?? 0 };
  }, [userId, dars.id]);

  const section = dars.sections[current];
  const percent = Math.round((visited.size / dars.sections.length) * 100);
  const outcome = OQUV_NATIJALARI.get(dars.outcomeId);

  function goto(i: number) {
    const target = dars.sections[i];
    if (!target) return;
    setCurrent(i);
    setVisited((prev) => {
      const next = new Set(prev);
      next.add(target.id);
      return next;
    });
  }

  // Bo'lim o'zgarganda progress yoziladi
  React.useEffect(() => {
    if (!userId) return;
    const pct = Math.round((visited.size / dars.sections.length) * 100);
    void setProgress(userId, dars.id, courseSlug, pct);
  }, [userId, dars, visited, courseSlug]);

  async function playNote(tones: string[], i: number) {
    setActiveNote(i);
    for (const tone of tones) await piano.attack(tone, 0.85);
    window.setTimeout(() => {
      for (const tone of tones) piano.release(tone);
      setActiveNote(null);
    }, 900);
  }

  async function submitReflection() {
    if (!userId) return;
    setSaving(true);
    try {
      await saveReflections(
        userId,
        dars.id,
        dars.reflection.map((q, i) => ({ question: q, answer: reflectionText[i] ?? "" })),
      );
      await setProgress(userId, dars.id, courseSlug, 100);
      setSaved(true);
    } catch (cause) {
      console.error(cause);
    } finally {
      setSaving(false);
    }
  }

  function renderBlock(block: Block, key: string) {
    switch (block.kind) {
      case "matn":
        return (
          <p key={key} className="text-sm leading-relaxed text-ink">
            {block.text}
          </p>
        );

      case "royxat":
        return (
          <ul key={key} className="flex flex-col gap-2">
            {block.items.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink">
                <span
                  aria-hidden="true"
                  className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                />
                {item}
              </li>
            ))}
          </ul>
        );

      case "eslatma":
        return (
          <div
            key={key}
            className="flex gap-3 rounded-xl border border-primary/25 bg-primary-soft p-4"
          >
            <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-ink">
              <strong className="font-semibold">Eslatma: </strong>
              {block.text}
            </p>
          </div>
        );

      case "nota":
        return (
          <Notation
            key={key}
            spec={block.spec}
            caption={block.caption}
            activeIndex={activeNote}
            onNoteClick={block.playable ? (t, i) => void playNote(t, i) : undefined}
          />
        );

      case "mashq":
        return (
          <div key={key} className="rounded-xl border border-border-subtle p-4">
            <p className="text-sm leading-relaxed text-ink">{block.text}</p>
            {block.instrument && (
              <Link
                href={`/asboblar/${block.instrument}`}
                className="mt-3 inline-flex h-9 items-center gap-2 rounded-lg bg-primary-solid px-3.5 text-sm font-medium text-white transition-colors hover:opacity-90"
              >
                <Music4 className="size-4" aria-hidden="true" />
                Cholg&apos;uni ochish
              </Link>
            )}
          </div>
        );

      case "test": {
        const total = block.questions.length;
        const score = block.questions.reduce(
          (sum, q) => sum + scoreQuestion(q, answers[q.id]),
          0,
        );
        const pct = Math.round((score / total) * 100);
        const allAnswered = block.questions.every((q) => answers[q.id] !== undefined);

        return (
          <div key={key} className="flex flex-col gap-6">
            {block.questions.map((q, qi) => (
              <div key={q.id}>
                <div className="mb-3 flex items-start gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-surface-muted text-xs font-semibold text-ink-muted">
                    {qi + 1}
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-ink">
                    {q.prompt}
                  </p>
                </div>

                <div className="ml-9 flex flex-col gap-2">
                  {q.kind === "single" &&
                    q.options.map((o) => (
                      <ChoiceCard
                        key={o.id}
                        name={q.id}
                        value={o.id}
                        checked={answers[q.id] === o.id}
                        onChange={(v) => {
                          setChecked(false);
                          setAnswers((p) => ({ ...p, [q.id]: v }));
                        }}
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
                          onChange={(v) => {
                            setChecked(false);
                            setAnswers((p) => {
                              const cur = Array.isArray(p[q.id]) ? (p[q.id] as string[]) : [];
                              return {
                                ...p,
                                [q.id]: cur.includes(v)
                                  ? cur.filter((x) => x !== v)
                                  : [...cur, v],
                              };
                            });
                          }}
                        >
                          {o.text}
                        </ChoiceCard>
                      ))}
                    </>
                  )}
                </div>

                {checked && q.explanation && (
                  <p
                    className={cn(
                      "ml-9 mt-2.5 rounded-lg px-3.5 py-2.5 text-sm leading-relaxed",
                      scoreQuestion(q, answers[q.id]) >= 1
                        ? "bg-success-soft text-ink"
                        : "bg-warning-soft text-ink",
                    )}
                  >
                    {q.explanation}
                  </p>
                )}
              </div>
            ))}

            <div className="flex flex-wrap items-center gap-3 border-t border-border-subtle pt-4">
              <Button onClick={() => setChecked(true)} disabled={!allAnswered}>
                Javoblarni tekshirish
              </Button>
              {checked && (
                <Badge variant={pct >= 70 ? "success" : "warning"}>
                  Natija: {pct}%
                </Badge>
              )}
              {!allAnswered && (
                <span className="text-xs text-ink-muted">
                  Barcha savolga javob bering
                </span>
              )}
            </div>
          </div>
        );
      }
    }
  }

  const oxirgi = current === dars.sections.length - 1;

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-5">
      {/* Breadcrumb */}
      <nav aria-label="Yo'l" className="flex items-center gap-1.5 text-sm text-ink-muted">
        <Link href="/kurslar" className="rounded hover:text-ink">
          O&apos;quv kurslari
        </Link>
        <ChevronRight className="size-3.5" aria-hidden="true" />
        <span className="text-ink">{kurs.title}</span>
      </nav>

      <div>
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          {dars.title}
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <Badge variant="primary">{BLOOM_NOMI[dars.bloom]}</Badge>
          <Badge variant="neutral">{dars.durationMin} daqiqa</Badge>
          <span className="text-xs text-ink-muted">
            Dars {index + 1} / {total}
          </span>
        </div>
        {outcome && (
          <p className="mt-2.5 rounded-xl bg-surface-muted px-4 py-3 text-sm text-ink-muted">
            <strong className="font-medium text-ink">O&apos;quv natijasi: </strong>
            {outcome.text}
          </p>
        )}
      </div>

      <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">
        {/* Dars tuzilishi */}
        <Card className="h-fit">
          <CardContent className="p-4">
            <Progress value={percent} label="Dars bo'yicha" className="mb-4" />
            <ol className="flex flex-col gap-1">
              {dars.sections.map((s: Section, i) => {
                const seen = visited.has(s.id);
                return (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => goto(i)}
                      aria-current={i === current ? "step" : undefined}
                      className={cn(
                        "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                        i === current
                          ? "bg-primary-solid text-white"
                          : seen
                            ? "text-success-ink hover:bg-surface-muted"
                            : "text-ink-muted hover:bg-surface-muted hover:text-ink",
                      )}
                    >
                      {seen && i !== current ? (
                        <CheckCircle2 className="size-3.5 shrink-0" aria-hidden="true" />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="size-1.5 shrink-0 rounded-full bg-current"
                        />
                      )}
                      {s.title}
                    </button>
                  </li>
                );
              })}
            </ol>
          </CardContent>
        </Card>

        {/* Kontent */}
        <div className="flex flex-col gap-5">
          <Card>
            <CardContent className="flex flex-col gap-5 p-5 lg:p-6">
              <h2 className="font-display text-lg font-semibold text-ink">
                {section.title}
              </h2>
              {section.blocks.map((b, i) => renderBlock(b, `${section.id}-${i}`))}
            </CardContent>
          </Card>

          {/* Refleksiya — oxirgi bo'limda */}
          {oxirgi && (
            <Card>
              <CardContent className="flex flex-col gap-4 p-5 lg:p-6">
                <div>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    Refleksiya
                  </h2>
                  <p className="mt-1 text-sm text-ink-muted">
                    Qisqa javob bering — bu dars natijangizni mustahkamlaydi.
                  </p>
                </div>

                {dars.reflection.map((q, i) => (
                  <label key={q} className="flex flex-col gap-1.5">
                    <span className="text-sm text-ink">{q}</span>
                    <textarea
                      rows={2}
                      defaultValue={stored?.refl?.[i]?.answer ?? ""}
                      onChange={(e) =>
                        setReflectionText((p) => {
                          const next = [...p];
                          next[i] = e.target.value;
                          return next;
                        })
                      }
                      className="rounded-xl border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink"
                    />
                  </label>
                ))}

                <div className="flex flex-wrap items-center gap-3">
                  <Button onClick={() => void submitReflection()} disabled={saving || !userId}>
                    {saving ? "Saqlanmoqda…" : saved ? "Saqlandi" : "Refleksiyani saqlash va darsni yakunlash"}
                  </Button>
                  {(saved || stored?.percent === 100) && (
                    <Badge variant="success">Dars yakunlandi</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigatsiya */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Button
              variant="outline"
              onClick={() => goto(current - 1)}
              disabled={current === 0}
            >
              <ArrowLeft aria-hidden="true" />
              Oldingi
            </Button>

            {oxirgi ? (
              next ? (
                <Link
                  href={`/kurslar/${courseSlug}/${next.slug}`}
                  className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary-solid px-4 text-sm font-medium text-white transition-colors hover:opacity-90"
                >
                  Keyingi dars
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              ) : (
                <Link
                  href="/kurslar"
                  className="inline-flex h-10 items-center rounded-xl border border-border-subtle px-4 text-sm font-medium text-ink transition-colors hover:bg-surface-muted"
                >
                  Kurslarga qaytish
                </Link>
              )
            ) : (
              <Button onClick={() => goto(current + 1)}>
                Keyingi
                <ArrowRight aria-hidden="true" />
              </Button>
            )}
          </div>

          {prev && current === 0 && (
            <Link
              href={`/kurslar/${courseSlug}/${prev.slug}`}
              className="text-sm text-ink-muted underline-offset-4 hover:text-ink hover:underline"
            >
              ← Oldingi dars: {prev.title}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import * as React from "react";
import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import { AlertTriangle, CheckCircle2, ChevronRight, Clock3, Music4, Upload } from "lucide-react";
import { useSession } from "@/components/session-provider";
import { ChoiceCard } from "@/components/ui/radio-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { MODUL_BY_ID, OQUV_NATIJALARI } from "@/content/modules";
import { rubricMax, type Task, TOPSHIRIQ_BY_SLUG } from "@/content/tasks";
import { addPortfolioFile, listSubmissions, savePracticeResult } from "@/lib/db/repo";
import { BLOOM_NOMI, TOPSHIRIQ_TURI_NOMI } from "@/lib/domain/types";
import { type AnswerMap, scoreQuestion } from "@/lib/scoring";
import { formatDate } from "@/lib/utils";

const MAX_FILE_MB = 25;

export function TopshiriqSahifa({ slug }: { slug: string }) {
  const task = TOPSHIRIQ_BY_SLUG.get(slug);
  if (!task) return <p className="text-sm text-ink-muted">Topshiriq topilmadi.</p>;
  return <TopshiriqKontent task={task} />;
}

function TopshiriqKontent({ task }: { task: Task }) {
  const { profile } = useSession();
  const userId = profile?.id;

  const [answers, setAnswers] = React.useState<AnswerMap>({});
  const [text, setText] = React.useState("");
  const [file, setFile] = React.useState<File | null>(null);
  const [saving, setSaving] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [result, setResult] = React.useState<number | null>(null);
  const [startedAt] = React.useState(() => Date.now());
  const [now, setNow] = React.useState(() => Date.now());

  const submissions = useLiveQuery(async () => {
    if (!userId) return [];
    return (await listSubmissions(userId)).filter((s) => s.taskId === task.id);
  }, [userId, task.id]);

  // Taymer — faqat vaqt chegarasi bor topshiriqlarda
  React.useEffect(() => {
    if (!task.timerMin) return;
    const id = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, [task.timerMin]);

  const qoldi = task.timerMin
    ? Math.max(0, task.timerMin * 60 - Math.floor((now - startedAt) / 1000))
    : null;
  const vaqtTugadi = qoldi === 0;

  const modul = MODUL_BY_ID.get(task.moduleId);
  const outcome = OQUV_NATIJALARI.get(task.outcomeId);

  async function topshir() {
    if (!userId) return;
    setSaving(true);
    setError(null);
    try {
      let score: number | undefined;
      const details: Record<string, unknown> = {};

      if (task.submission === "test" && task.questions) {
        const earned = task.questions.reduce(
          (s, q) => s + scoreQuestion(q, answers[q.id]),
          0,
        );
        score = Math.round((earned / task.questions.length) * 100);
        details.javoblar = answers;
      } else if (task.submission === "matn") {
        details.matn = text;
      } else if (task.submission === "fayl" && file) {
        await addPortfolioFile(userId, "ishlanmalar", task.title, file);
        details.fayl = file.name;
      }

      await savePracticeResult({
        userId,
        exerciseId: task.id,
        area: task.area,
        bloom: task.bloom,
        taskType: task.type,
        // Rubrikali topshiriq o'qituvchi baholaguncha ballsiz qoladi
        score: score ?? -1,
        title: task.title,
        details,
      });
      setResult(score ?? null);
    } catch (cause) {
      console.error(cause);
      setError("Topshirib bo'lmadi — brauzer xotirasi ishlamayapti.");
    } finally {
      setSaving(false);
    }
  }

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0] ?? null;
    if (f && f.size > MAX_FILE_MB * 1024 * 1024) {
      setError(`Fayl ${MAX_FILE_MB} MB dan katta bo'lmasligi kerak.`);
      setFile(null);
      return;
    }
    setError(null);
    setFile(f);
  }

  const toliq =
    task.submission === "test"
      ? (task.questions ?? []).every((q) => answers[q.id] !== undefined)
      : task.submission === "matn"
        ? text.trim().length > 30
        : task.submission === "fayl"
          ? file !== null
          : true;

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-5">
      <nav aria-label="Yo'l" className="flex items-center gap-1.5 text-sm text-ink-muted">
        <Link href="/topshiriqlar" className="rounded hover:text-ink">
          Topshiriqlar
        </Link>
        <ChevronRight className="size-3.5" aria-hidden="true" />
        <span className="text-ink">{TOPSHIRIQ_TURI_NOMI[task.type]}</span>
      </nav>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
            {task.title}
          </h1>
          <p className="mt-1.5 text-sm text-ink-muted">{task.description}</p>
          <div className="mt-2.5 flex flex-wrap items-center gap-2">
            <Badge variant="primary">{TOPSHIRIQ_TURI_NOMI[task.type]}</Badge>
            <Badge variant="neutral">{BLOOM_NOMI[task.bloom]}</Badge>
            {modul && <Badge variant="neutral">{modul.title}</Badge>}
            <span className="text-xs text-ink-muted">{task.duration}</span>
          </div>
        </div>

        {qoldi !== null && (
          <div
            className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium tabular-nums ${
              vaqtTugadi ? "bg-danger-soft text-danger-ink" : "bg-surface-muted text-ink"
            }`}
            aria-live="polite"
          >
            <Clock3 className="size-4" aria-hidden="true" />
            {String(Math.floor(qoldi / 60)).padStart(2, "0")}:
            {String(qoldi % 60).padStart(2, "0")}
          </div>
        )}
      </div>

      {outcome && (
        <p className="rounded-xl bg-surface-muted px-4 py-3 text-sm text-ink-muted">
          <strong className="font-medium text-ink">O&apos;quv natijasi: </strong>
          {outcome.text}
        </p>
      )}

      {error && (
        <p role="alert" className="flex items-start gap-2.5 rounded-xl bg-danger-soft px-4 py-3 text-sm text-danger-ink">
          <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}

      {/* Rubrika — talaba qanday baholanishini oldindan ko'radi */}
      {task.rubric && (
        <Card>
          <CardHeader>
            <CardTitle>Baholash mezonlari (rubrika)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-3">
              {task.rubric.criteria.map((c) => (
                <li key={c.id} className="flex gap-3 rounded-xl bg-surface-muted p-3.5">
                  <span className="shrink-0 rounded-lg bg-surface px-2.5 py-1 text-sm font-semibold tabular-nums text-primary">
                    {c.maxPoints}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-ink">{c.title}</span>
                    <span className="block text-sm text-ink-muted">{c.description}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-ink-muted">
              Jami: {rubricMax(task.rubric)} ball. Bu topshiriqni o&apos;qituvchi
              baholaydi.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Topshirish */}
      <Card>
        <CardHeader>
          <CardTitle>
            {task.submission === "test" ? "Test savollari" : "Ishingizni topshiring"}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          {task.submission === "test" &&
            task.questions?.map((q, i) => (
              <div key={q.id}>
                <div className="mb-3 flex items-start gap-3">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-surface-muted text-xs font-semibold text-ink-muted">
                    {i + 1}
                  </span>
                  <p className="text-sm font-medium leading-relaxed text-ink">{q.prompt}</p>
                </div>
                <div className="ml-9 flex flex-col gap-2">
                  {q.kind === "single" &&
                    q.options.map((o) => (
                      <ChoiceCard
                        key={o.id}
                        name={q.id}
                        value={o.id}
                        checked={answers[q.id] === o.id}
                        onChange={(v) => setAnswers((p) => ({ ...p, [q.id]: v }))}
                      >
                        {o.text}
                      </ChoiceCard>
                    ))}
                  {q.kind === "multiple" && (
                    <>
                      <p className="text-xs text-ink-muted">Bir nechta javob bo&apos;lishi mumkin</p>
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
                          onChange={(v) =>
                            setAnswers((p) => {
                              const cur = Array.isArray(p[q.id]) ? (p[q.id] as string[]) : [];
                              return {
                                ...p,
                                [q.id]: cur.includes(v)
                                  ? cur.filter((x) => x !== v)
                                  : [...cur, v],
                              };
                            })
                          }
                        >
                          {o.text}
                        </ChoiceCard>
                      ))}
                    </>
                  )}
                </div>
              </div>
            ))}

          {task.submission === "matn" && (
            <label className="flex flex-col gap-1.5">
              <span className="text-sm text-ink">Tahlilingizni yozing</span>
              <textarea
                rows={10}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Asarning shakli, ladi va garmonik tuzilishi haqida yozing…"
                className="rounded-xl border border-border-subtle bg-surface px-3.5 py-2.5 text-sm text-ink"
              />
              <span className="text-xs text-ink-muted">{text.trim().length} belgi</span>
            </label>
          )}

          {task.submission === "fayl" && (
            <div className="flex flex-col gap-2">
              <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed border-border-subtle p-8 text-center transition-colors hover:border-primary/50 hover:bg-primary-soft/30">
                <Upload className="size-6 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-ink">
                  {file ? file.name : "Faylni tanlang"}
                </span>
                <span className="text-xs text-ink-muted">
                  {task.accept} · eng ko&apos;pi {MAX_FILE_MB} MB
                </span>
                <input type="file" accept={task.accept} onChange={onFile} className="sr-only" />
              </label>
              <p className="text-xs text-ink-muted">
                Fayl brauzeringizda saqlanadi va portfolioga tushadi.
              </p>
            </div>
          )}

          {task.submission === "ijro" && (
            <div className="flex flex-col gap-3">
              <p className="text-sm leading-relaxed text-ink-muted">
                Ijroni virtual cholg&apos;uda bajaring va yozib oling. Yozuv
                portfolioga tushadi, mashq natijasi esa avtomatik saqlanadi.
              </p>
              {task.instrument && (
                <Link
                  href={`/asboblar/${task.instrument}`}
                  className="inline-flex h-10 w-fit items-center gap-2 rounded-xl bg-primary-solid px-4 text-sm font-medium text-white transition-colors hover:opacity-90"
                >
                  <Music4 className="size-4" aria-hidden="true" />
                  Cholg&apos;uni ochish
                </Link>
              )}
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 border-t border-border-subtle pt-4">
            <Button
              onClick={() => void topshir()}
              disabled={saving || !userId || !toliq}
            >
              {saving ? "Topshirilmoqda…" : "Topshirish"}
            </Button>
            {!toliq && (
              <span className="text-xs text-ink-muted">
                {task.submission === "test"
                  ? "Barcha savolga javob bering"
                  : task.submission === "matn"
                    ? "Kamida bir necha jumla yozing"
                    : "Fayl tanlang"}
              </span>
            )}
            {result !== null && (
              <Badge variant={result >= 70 ? "success" : "warning"}>
                Natija: {result}%
              </Badge>
            )}
            {result === null && task.rubric && submissions && submissions.length > 0 && (
              <Badge variant="neutral">O&apos;qituvchi baholashini kutmoqda</Badge>
            )}
          </div>

          {result !== null && (
            <Progress value={result} label="Avtomatik baholangan natija" />
          )}
        </CardContent>
      </Card>

      {/* Oldingi urinishlar */}
      {submissions && submissions.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Oldingi urinishlar</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-2">
              {submissions.map((s) => (
                <li
                  key={s.id}
                  className="flex items-center gap-3 rounded-xl bg-surface-muted p-3.5 text-sm"
                >
                  <CheckCircle2 className="size-4 shrink-0 text-success-ink" aria-hidden="true" />
                  <span className="flex-1 text-ink-muted">
                    {formatDate(s.submittedAt)}
                  </span>
                  {s.score !== undefined && s.score >= 0 ? (
                    <Badge variant={s.score >= 70 ? "success" : "warning"}>{s.score}%</Badge>
                  ) : (
                    <Badge variant="neutral">Baholanmagan</Badge>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

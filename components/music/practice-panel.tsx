"use client";

import * as React from "react";
import { CheckCircle2, RotateCcw, Volume2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  DARAJA_NOMI,
  type Exercise,
  RITM_MAX_OGISH_MS,
  scoreRhythm,
} from "@/content/practice";

export type PracticeFeedback = "togri" | "xato" | null;

export type SequenceRun = {
  /** Hozir kutilayotgan nota */
  target: string | null;
  feedback: PracticeFeedback;
  index: number;
  correct: number;
  wrong: number;
  finished: boolean;
};

/**
 * `ketma-ket` rejimidagi mashq holati.
 *
 * Talaba to'g'ri nota bossa — keyingisiga o'tadi; xato bossa — xato sanaladi,
 * lekin nishon o'zgarmaydi (qayta urinib ko'rish mumkin).
 */
export function useSequencePractice(sequence: string[] | undefined) {
  const [index, setIndex] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const [wrong, setWrong] = React.useState(0);
  const [feedback, setFeedback] = React.useState<PracticeFeedback>(null);
  const [running, setRunning] = React.useState(false);

  const total = sequence?.length ?? 0;
  const finished = running && total > 0 && index >= total;

  const reset = React.useCallback(() => {
    setIndex(0);
    setCorrect(0);
    setWrong(0);
    setFeedback(null);
  }, []);

  const start = React.useCallback(() => {
    reset();
    setRunning(true);
  }, [reset]);

  const stop = React.useCallback(() => {
    setRunning(false);
    reset();
  }, [reset]);

  /** Chalingan notani tekshiradi. */
  const submit = React.useCallback(
    (note: string) => {
      if (!running || !sequence || index >= sequence.length) return;
      if (note === sequence[index]) {
        setFeedback("togri");
        setCorrect((c) => c + 1);
        setIndex((i) => i + 1);
      } else {
        setFeedback("xato");
        setWrong((w) => w + 1);
      }
    },
    [running, sequence, index],
  );

  // Rangli javob qisqa vaqtdan keyin o'chadi.
  React.useEffect(() => {
    if (!feedback) return;
    const timer = window.setTimeout(() => setFeedback(null), 320);
    return () => window.clearTimeout(timer);
  }, [feedback, index, wrong]);

  const accuracy =
    correct + wrong === 0 ? 0 : Math.round((correct / (correct + wrong)) * 100);

  return {
    running,
    index,
    total,
    correct,
    wrong,
    accuracy,
    finished,
    target: running && sequence ? (sequence[index] ?? null) : null,
    feedback,
    start,
    stop,
    reset,
    submit,
  };
}

/* ───────────────────────── Ritm mashqi ───────────────────────── */

export function useRhythmPractice(exercise: Exercise) {
  const [running, setRunning] = React.useState(false);
  const [result, setResult] = React.useState<ReturnType<typeof scoreRhythm> | null>(
    null,
  );
  const startedAt = React.useRef<number | null>(null);
  const played = React.useRef<Array<{ stroke: string; timeMs: number }>>([]);

  const start = React.useCallback(() => {
    played.current = [];
    startedAt.current = performance.now();
    setResult(null);
    setRunning(true);
  }, []);

  const record = React.useCallback((stroke: string) => {
    if (startedAt.current === null) return;
    played.current.push({
      stroke,
      timeMs: performance.now() - startedAt.current,
    });
  }, []);

  const finish = React.useCallback(() => {
    if (!exercise.pattern) return null;
    const scored = scoreRhythm(exercise.pattern, played.current);
    setResult(scored);
    setRunning(false);
    startedAt.current = null;
    return scored;
  }, [exercise.pattern]);

  const reset = React.useCallback(() => {
    played.current = [];
    startedAt.current = null;
    setResult(null);
    setRunning(false);
  }, []);

  return { running, result, start, record, finish, reset };
}

/* ───────────────────────── Mashq kartasi ───────────────────────── */

export function ExerciseCard({
  exercise,
  selected,
  bestScore,
  onSelect,
}: {
  exercise: Exercise;
  selected: boolean;
  bestScore?: number;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={`w-full rounded-xl border p-4 text-left transition-colors ${
        selected
          ? "border-primary bg-primary-soft"
          : "border-border-subtle bg-surface hover:border-primary/40"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="font-display text-sm font-semibold text-ink">
            {exercise.title}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-ink-muted">
            {exercise.description}
          </p>
        </div>
        {bestScore !== undefined && (
          <Badge variant={bestScore >= 80 ? "success" : "warning"}>
            {bestScore}%
          </Badge>
        )}
      </div>
      <div className="mt-2.5 flex items-center gap-2">
        <Badge variant="neutral">{DARAJA_NOMI[exercise.level]}</Badge>
        <span className="text-xs text-ink-muted">{exercise.durationMin} daqiqa</span>
      </div>
    </button>
  );
}

/* ───────────────────── Natija va boshqaruv paneli ───────────────────── */

export function SequenceStatus({
  run,
  onStart,
  onStop,
  onSave,
  saving,
  saved,
}: {
  run: ReturnType<typeof useSequencePractice>;
  onStart: () => void;
  onStop: () => void;
  onSave: () => void;
  saving: boolean;
  saved: boolean;
}) {
  if (!run.running && !run.finished) {
    return (
      <Button onClick={onStart}>
        <Volume2 aria-hidden="true" />
        Mashqni boshlash
      </Button>
    );
  }

  if (run.finished) {
    return (
      <Card className="border-success">
        <CardContent className="flex flex-col gap-3 p-5">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="size-5 text-success" aria-hidden="true" />
            <p className="font-display font-semibold text-ink">Mashq yakunlandi</p>
          </div>
          <Progress value={run.accuracy} label="Aniqlik" />
          <p className="text-sm text-ink-muted">
            {run.correct} ta to&apos;g&apos;ri, {run.wrong} ta xato
          </p>
          <div className="flex flex-wrap gap-2">
            <Button onClick={onSave} disabled={saving || saved}>
              {saving ? "Saqlanmoqda…" : saved ? "Natija saqlandi" : "Natijani saqlash"}
            </Button>
            <Button variant="outline" onClick={onStart}>
              <RotateCcw aria-hidden="true" />
              Qaytadan
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <Progress
        value={(run.index / Math.max(1, run.total)) * 100}
        label={`${run.index} / ${run.total} nota`}
      />
      <div className="flex flex-wrap items-center gap-3">
        <p className="text-sm text-ink" aria-live="polite">
          Chalinishi kerak:{" "}
          <strong className="font-display text-base">{run.target}</strong>
        </p>
        <Badge variant="success">{run.correct} to&apos;g&apos;ri</Badge>
        {run.wrong > 0 && <Badge variant="danger">{run.wrong} xato</Badge>}
        <Button variant="ghost" size="sm" onClick={onStop} className="ml-auto">
          Bekor qilish
        </Button>
      </div>
    </div>
  );
}

export function RhythmStatus({
  practice,
  onStart,
  onFinish,
  onDemo,
  onSave,
  saving,
  saved,
  demoPlaying,
}: {
  practice: ReturnType<typeof useRhythmPractice>;
  onStart: () => void;
  onFinish: () => void;
  onDemo: () => void;
  onSave: () => void;
  saving: boolean;
  saved: boolean;
  demoPlaying: boolean;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" onClick={onDemo} disabled={demoPlaying || practice.running}>
          <Volume2 aria-hidden="true" />
          {demoPlaying ? "Chalinmoqda…" : "Namunani eshitish"}
        </Button>
        {practice.running ? (
          <Button variant="danger" onClick={onFinish}>
            Yakunlash
          </Button>
        ) : (
          <Button onClick={onStart} disabled={demoPlaying}>
            Takrorlashni boshlash
          </Button>
        )}
      </div>

      {practice.running && (
        <p className="text-sm text-ink-muted" aria-live="polite">
          Namunani doirada takrorlang, so&apos;ng &laquo;Yakunlash&raquo; tugmasini bosing.
        </p>
      )}

      {practice.result && (
        <Card className="border-success">
          <CardContent className="flex flex-col gap-3 p-5">
            <p className="font-display font-semibold text-ink">Ritm natijasi</p>
            <Progress value={practice.result.accuracy} label="Aniqlik" />
            <p className="text-sm text-ink-muted">
              O&apos;rtacha chetlanish: {practice.result.averageOffsetMs} ms ·{" "}
              {practice.result.matched} ta zarb mos keldi
              <br />
              <span className="text-xs">
                {RITM_MAX_OGISH_MS} ms dan katta chetlanish hisobga olinmaydi.
              </span>
            </p>
            <div className="flex flex-wrap gap-2">
              <Button onClick={onSave} disabled={saving || saved}>
                {saving ? "Saqlanmoqda…" : saved ? "Natija saqlandi" : "Natijani saqlash"}
              </Button>
              <Button variant="outline" onClick={onStart}>
                <RotateCcw aria-hidden="true" />
                Qaytadan
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

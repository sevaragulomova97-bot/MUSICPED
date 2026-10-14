"use client";

import * as React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { AlertTriangle } from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RecorderControls } from "@/components/music/recorder-controls";
import {
  ExerciseCard,
  RhythmStatus,
  SequenceStatus,
  useRhythmPractice,
  useSequencePractice,
} from "@/components/music/practice-panel";
import { useInstrument } from "@/components/music/use-instrument";
import { exercisesFor, type Exercise } from "@/content/practice";
import type { InstrumentKind } from "@/lib/audio/instruments";
import { bestScoreFor, savePracticeResult, saveRecording } from "@/lib/db/repo";

export type InstrumentRenderProps = {
  active: ReadonlySet<string>;
  play: (note: string) => void;
  stop: (note: string) => void;
  targetNote: string | null;
  feedback: "togri" | "xato" | null;
};

/**
 * Uchala cholg'u sahifasining umumiy qobig'i: mashq tanlash, chalish,
 * yozib olish, natijani saqlash. Cholg'uning o'ziga xos ko'rinishi
 * `render` orqali beriladi.
 */
export function InstrumentPage({
  kind,
  title,
  description,
  render,
  settings,
}: {
  kind: InstrumentKind;
  title: string;
  description: string;
  render: (props: InstrumentRenderProps) => React.ReactNode;
  settings?: (api: {
    setVolume: (db: number) => void;
    setReverb: (wet: number) => void;
  }) => React.ReactNode;
}) {
  const { profile } = useSession();
  const userId = profile?.id;
  const mashqlar = React.useMemo(() => exercisesFor(kind), [kind]);
  const [selected, setSelected] = React.useState<Exercise>(mashqlar[0]);
  const [saving, setSaving] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const [saveError, setSaveError] = React.useState<string | null>(null);
  const [demoPlaying, setDemoPlaying] = React.useState(false);

  const instrument = useInstrument(kind);
  const sequence = useSequencePractice(selected.sequence);
  const rhythm = useRhythmPractice(selected);

  const bestScores = useLiveQuery(async () => {
    if (!userId) return {};
    const entries = await Promise.all(
      mashqlar.map(async (m) => [m.id, await bestScoreFor(userId, m.id)] as const),
    );
    return Object.fromEntries(entries);
  }, [userId, mashqlar]);

  function selectExercise(exercise: Exercise) {
    sequence.stop();
    rhythm.reset();
    setSelected(exercise);
    setSaved(false);
    setSaveError(null);
  }

  /* ── Chalish: mashq rejimi bo'lsa, javob ham tekshiriladi ── */

  /**
   * Pianino klavishi bosilib turiladi (attack/release), dutor va doira esa
   * chertiladi/uriladi — ularda «qo'yib yuborish» yo'q, shuning uchun
   * `hit` ishlatiladi va belgilangan holat o'zi so'nadi. Aks holda zona
   * doimo yoqilgan bo'lib qolardi.
   */
  const perkussiya = kind !== "pianino";

  const play = React.useCallback(
    (note: string) => {
      if (perkussiya) {
        void instrument.hit(note);
      } else {
        void instrument.attack(note);
      }
      if (selected.mode === "ketma-ket") sequence.submit(note);
      if (selected.mode === "ritm") rhythm.record(note);
    },
    [instrument, perkussiya, selected.mode, sequence, rhythm],
  );

  const stop = React.useCallback(
    (note: string) => instrument.release(note),
    [instrument],
  );

  /* ── Namunaviy ritmni chalib berish ── */

  async function playDemo() {
    if (!selected.pattern) return;
    setDemoPlaying(true);
    await instrument.ensure();
    for (const beat of selected.pattern) {
      window.setTimeout(() => void instrument.hit(beat.stroke), beat.timeMs);
    }
    const total = Math.max(...selected.pattern.map((p) => p.timeMs)) + 600;
    window.setTimeout(() => setDemoPlaying(false), total);
  }

  /* ── Natijani saqlash ── */

  async function saveScore(score: number, details?: Record<string, unknown>) {
    if (!userId) return;
    setSaving(true);
    setSaveError(null);
    try {
      await savePracticeResult({
        userId,
        exerciseId: selected.id,
        area: selected.area,
        bloom: selected.level === "erkin" ? "sintez" : "qollash",
        taskType: selected.mode === "erkin" ? "ijro" : "mashq",
        score,
        title: selected.title,
        details,
      });
      setSaved(true);
    } catch (cause) {
      console.error(cause);
      setSaveError("Natijani saqlab bo'lmadi — brauzer xotirasi ishlamayapti.");
    } finally {
      setSaving(false);
    }
  }

  async function saveToPortfolio() {
    if (!userId || !instrument.events.length) return;
    setSaving(true);
    setSaveError(null);
    try {
      const durationMs = Math.max(
        ...instrument.events.map((e) => e.timeMs + e.durationMs),
      );
      await saveRecording(
        userId,
        kind,
        `${selected.title} — yozuv`,
        instrument.events,
        durationMs,
      );
      setSaved(true);
    } catch (cause) {
      console.error(cause);
      setSaveError("Yozuvni saqlab bo'lmadi — brauzer xotirasi ishlamayapti.");
    } finally {
      setSaving(false);
    }
  }

  const xato = instrument.error ?? saveError;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      <div>
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          {title}
        </h1>
        <p className="mt-1.5 text-sm text-ink-muted">{description}</p>
      </div>

      {xato && (
        <p
          role="alert"
          className="flex items-start gap-2.5 rounded-xl bg-danger-soft px-4 py-3 text-sm text-danger"
        >
          <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {xato}
        </p>
      )}

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* Cholg'u */}
        <div className="flex flex-col gap-5">
          <Card>
            <CardContent className="p-4 lg:p-5">
              {render({
                active: instrument.active,
                play,
                stop,
                targetNote: sequence.target,
                feedback: sequence.feedback,
              })}
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex flex-col gap-4 p-5">
              <RecorderControls
                recording={instrument.recording}
                playing={instrument.playing}
                events={instrument.events}
                onStart={() => {
                  setSaved(false);
                  void instrument.startRecording();
                }}
                onStop={() => instrument.stopRecording()}
                onPlay={() => void instrument.play()}
                onStopPlayback={instrument.stopPlayback}
                onClear={instrument.clear}
                onSave={userId ? () => void saveToPortfolio() : undefined}
                saving={saving}
                saved={saved}
              />
              {!instrument.ready && (
                <p className="text-xs text-ink-muted">
                  Ovoz birinchi bosishda ishga tushadi — brauzer qoidasi shunday.
                </p>
              )}
            </CardContent>
          </Card>

          {settings && (
            <Card>
              <CardHeader>
                <CardTitle>Sozlamalar</CardTitle>
              </CardHeader>
              <CardContent>
                {settings({
                  setVolume: instrument.setVolume,
                  setReverb: instrument.setReverb,
                })}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Mashqlar */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle>Mashqlar</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {mashqlar.map((m) => (
              <ExerciseCard
                key={m.id}
                exercise={m}
                selected={selected.id === m.id}
                bestScore={bestScores?.[m.id]}
                onSelect={() => selectExercise(m)}
              />
            ))}

            <div className="mt-2 border-t border-border-subtle pt-4">
              {selected.mode === "ketma-ket" && (
                <SequenceStatus
                  run={sequence}
                  onStart={sequence.start}
                  onStop={sequence.stop}
                  onSave={() => void saveScore(sequence.accuracy, {
                    togri: sequence.correct,
                    xato: sequence.wrong,
                  })}
                  saving={saving}
                  saved={saved}
                />
              )}

              {selected.mode === "ritm" && (
                <RhythmStatus
                  practice={rhythm}
                  onStart={rhythm.start}
                  onFinish={() => {
                    const r = rhythm.finish();
                    if (r) setSaved(false);
                  }}
                  onDemo={() => void playDemo()}
                  onSave={() =>
                    rhythm.result &&
                    void saveScore(rhythm.result.accuracy, {
                      ortachaOgishMs: rhythm.result.averageOffsetMs,
                      mosZarblar: rhythm.result.matched,
                    })
                  }
                  saving={saving}
                  saved={saved}
                  demoPlaying={demoPlaying}
                />
              )}

              {selected.mode === "erkin" && (
                <p className="text-sm leading-relaxed text-ink-muted">
                  Bu mashq baholanmaydi. Erkin chaling, yozib oling va yoqqanini
                  portfolioga saqlang.
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

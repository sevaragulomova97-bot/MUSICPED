"use client";

import * as React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { AlertTriangle } from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RecorderControls } from "@/components/music/recorder-controls";
import { TunePanel } from "@/components/music/tune-panel";
import { useTunePractice } from "@/components/music/use-tune";
import { type Tune, tunesFor } from "@/content/tunes";
import {
  ExerciseCard,
  RhythmStatus,
  SequenceStatus,
  useRhythmPractice,
  useSequencePractice,
} from "@/components/music/practice-panel";
import { useInstrument } from "@/components/music/use-instrument";
import { exercisesFor, type Exercise } from "@/content/practice";
import { type InstrumentKind, isOneShot } from "@/lib/domain/instruments";
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
  /**
   * Ijro kuchi.
   *
   * Sichqoncha va klaviatura bosish kuchini o'lchamaydi, shuning uchun
   * namuna bankidagi kuch qatlamlariga boshqa yo'l bilan yetib
   * bo'lmasdi — cholg'u doim bitta kuchda chalinardi va uchta qatlam
   * amalda ikkitasi ishlatilmay qolardi.
   *
   * Qiymatlar bank qatlamlarining nominal kuchiga teng; oraliq
   * qiymatlarni dvigatel o'zi hisoblaydi.
   */
  const [kuch, setKuch] = React.useState(0.7);
  /** Kuy demosining tezligi — 1 kuyning o'z tempi. */
  const [tempo, setTempo] = React.useState(1);

  const instrument = useInstrument(kind);
  const sequence = useSequencePractice(selected.sequence);
  const rhythm = useRhythmPractice(selected);

  /* ── Mashhur kuylar ── */
  const kuylar = React.useMemo(() => tunesFor(kind), [kind]);
  const [kuy, setKuy] = React.useState<Tune | null>(() => tunesFor(kind)[0] ?? null);

  const birZarbliKuy = isOneShot(kind);
  // `instrument` obyekti har renderda yangi bo'ladi; barqaror bo'lgani —
  // uning ichidagi funksiyalar. Aks holda kuy ilgagi taymerlarini har
  // renderda qaytadan tozalardi.
  const { attack: instAttack, hit: instHit, release: instRelease } = instrument;

  const tuneAttack = React.useCallback(
    (note: string) => {
      if (birZarbliKuy) void instHit(note, kuch);
      else void instAttack(note, kuch);
    },
    [birZarbliKuy, instHit, instAttack, kuch],
  );
  const tuneRelease = React.useCallback(
    (note: string) => instRelease(note),
    [instRelease],
  );

  const tune = useTunePractice(kuy, {
    oneShot: birZarbliKuy,
    attack: tuneAttack,
    release: tuneRelease,
    tempo,
  });

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
   * Pianino va nayda klavish bosilib turiladi (attack/release); gitara,
   * dutor, rubob va doirada esa bitta harakat yetadi va namuna o'zi so'nadi.
   */
  const birZarbli = isOneShot(kind);

  const play = React.useCallback(
    (note: string) => {
      if (birZarbli) {
        void instrument.hit(note, kuch);
      } else {
        void instrument.attack(note, kuch);
      }
      if (selected.mode === "ketma-ket") sequence.submit(note);
      if (selected.mode === "ritm") rhythm.record(note);
      tune.submit(note);
    },
    [instrument, birZarbli, kuch, selected.mode, sequence, rhythm, tune],
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
      window.setTimeout(() => void instrument.hit(beat.stroke, kuch), beat.timeMs);
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
          className="flex items-start gap-2.5 rounded-xl bg-danger-soft px-4 py-3 text-sm text-danger-ink"
        >
          <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {xato}
        </p>
      )}

      {/* Cholg'u — to'liq kenglikda.
          Ilgari u yon panel bilan bitta gridda turardi va 1024 px
          ekranda ustun atigi ~330 px qolardi: klavishlar siqilib,
          klaviaturani surish kerak bo'lardi. Chalish yuzasi sahifaning
          butun kengligini oladi. */}
      <Card>
        <CardContent className="p-4 lg:p-5">
          {render({
            // Demo paytida yonadigan nota audio holatidan mustaqil
            // qo'shiladi: namunalar yuklanmasa ham kuy ko'rinadi.
            active: tune.demoNote
              ? new Set([...instrument.active, tune.demoNote])
              : instrument.active,
            play,
            stop,
            // Kuy rejimi faol bo'lsa, nishonni u belgilaydi.
            targetNote: tune.target ?? sequence.target,
            feedback: tune.mode === "organish" ? tune.feedback : sequence.feedback,
          })}
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="flex flex-col gap-5">
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
              {instrument.loading && (
                <p className="text-xs text-ink-muted" aria-live="polite">
                  Cholg&apos;u namunalari yuklanmoqda…
                </p>
              )}
              {!instrument.ready && !instrument.loading && (
                <p className="text-xs text-ink-muted">
                  Ovoz birinchi bosishda ishga tushadi — brauzer qoidasi shunday.
                </p>
              )}
              {instrument.usingFallback && (
                <p className="text-xs text-warning-ink">
                  Namunalarni yuklab bo&apos;lmadi — vaqtincha soddalashtirilgan
                  sintez ovozi ishlatilmoqda.
                </p>
              )}
              {/*
                Ovozning kelib chiqishi yashirilmaydi: bu fizik modelmi
                yoki haqiqiy cholg'u yozuvimi — musiqa o'qituvchisi uchun
                muhim farq. Model yozuv deb ko'rsatilsa, talaba noto'g'ri
                tembrni «haqiqiy dutor» deb o'rganib qolardi.
              */}
              {instrument.bank && (
                <p
                  className="text-xs text-ink-muted"
                  data-bank-tur={instrument.bank.tur}
                >
                  <span
                    className={
                      instrument.bank.tur === "model"
                        ? "font-medium text-warning-ink"
                        : "font-medium text-success-ink"
                    }
                  >
                    {
                      {
                        yozuv: "Haqiqiy yozuv",
                        qarindosh: "Qarindosh cholg'u yozuvi",
                        model: "Fizik model",
                      }[instrument.bank.tur]
                    }
                  </span>
                  {" — "}
                  {instrument.bank.turiIzoh}. {instrument.bank.namunalar.length}{" "}
                  namuna, {instrument.bank.kuchlar.length} ijro kuchi.
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sozlamalar</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              {instrument.timbres.length > 1 && (
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="tembr" className="text-sm text-ink-muted">
                    Tovush turi
                  </label>
                  <select
                    id="tembr"
                    value={instrument.timbre.id}
                    onChange={(e) => {
                      const next = instrument.timbres.find(
                        (t) => t.id === e.target.value,
                      );
                      if (next) instrument.setTimbre(next);
                    }}
                    className="h-10 rounded-lg border border-border-subtle bg-surface px-3 text-sm text-ink"
                  >
                    {instrument.timbres.map((t) => (
                      <option key={t.id} value={t.id}>
                        {t.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-ink-muted">
                    Qaysi variant haqiqiyroq eshitilsa, o&apos;shani tanlang —
                    tanlovingiz eslab qolinadi.
                  </p>
                </div>
              )}

              {instrument.bank && instrument.bank.kuchlar.length > 1 && (
                <div className="flex flex-col gap-1.5">
                  <span className="text-sm text-ink-muted">Ijro kuchi</span>
                  <div
                    className="flex flex-wrap gap-2"
                    role="group"
                    aria-label="Ijro kuchi"
                  >
                    {instrument.bank.kuchlar.map((k) => (
                      <button
                        key={k.id}
                        type="button"
                        aria-pressed={kuch === k.velocity}
                        onClick={() => setKuch(k.velocity)}
                        className={
                          kuch === k.velocity
                            ? "rounded-xl border border-primary bg-primary-solid px-3 py-1.5 text-sm font-medium text-white"
                            : "rounded-xl border border-border-subtle bg-surface px-3 py-1.5 text-sm text-ink hover:bg-surface-muted"
                        }
                      >
                        {k.nom}
                      </button>
                    ))}
                  </div>
                  <p className="text-xs text-ink-muted">
                    Har bir kuch uchun alohida namuna yozilgan — kuchli ijro
                    balandroq emas, <strong>yorqinroq</strong> ham eshitiladi.
                  </p>
                </div>
              )}

              {settings?.({
                setVolume: instrument.setVolume,
                setReverb: instrument.setReverb,
              })}
            </CardContent>
          </Card>
        </div>

        {/* Mashhur kuylar + mashqlar */}
        <div className="flex h-fit flex-col gap-6">
        {kuy && (
          <TunePanel
            tunes={kuylar}
            selected={kuy}
            onSelect={(yangi) => {
              // Oldingi kuyning taymerlari va osilgan notalari tozalanadi.
              tune.reset();
              setKuy(yangi);
            }}
            mode={tune.mode}
            index={tune.index}
            total={tune.total}
            correct={tune.correct}
            wrong={tune.wrong}
            finished={tune.finished}
            onListen={tune.listen}
            onLearn={tune.learn}
            onStop={tune.stop}
            tempo={tempo}
            onTempo={setTempo}
          />
        )}

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
    </div>
  );
}

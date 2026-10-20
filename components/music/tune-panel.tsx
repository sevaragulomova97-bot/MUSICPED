"use client";

import * as React from "react";
import { CheckCircle2, Music4, Play, Square } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { type Tune } from "@/content/tunes";
import { cn } from "@/lib/utils";

export type TunePanelProps = {
  tunes: Tune[];
  selected: Tune;
  onSelect: (tune: Tune) => void;
  mode: "yoq" | "eshitish" | "organish";
  index: number;
  total: number;
  correct: number;
  wrong: number;
  finished: boolean;
  onListen: () => void;
  onLearn: () => void;
  onStop: () => void;
  /** Temp koeffitsiyenti (1 — kuyning o'z tezligi) */
  tempo: number;
  onTempo: (qiymat: number) => void;
};

/**
 * Mashhur kuylar paneli.
 *
 * Ikki tugma — «Eshitish» va «O'rganish». Ikkalasida ham klavishlar
 * cholg'uning o'z yoritilishi bilan yonadi: demo va jonli ijro bir xil
 * ko'rinadi, shuning uchun talaba nimani takrorlashini aniq ko'radi.
 */
export function TunePanel({
  tunes,
  selected,
  onSelect,
  mode,
  index,
  total,
  correct,
  wrong,
  finished,
  onListen,
  onLearn,
  onStop,
  tempo,
  onTempo,
}: TunePanelProps) {
  const ishlayapti = mode !== "yoq";
  const foiz = total > 0 ? Math.round((index / total) * 100) : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mashhur kuylar</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-sm leading-relaxed text-ink-muted">
          Kuyni avval tinglang — klavishlar o&apos;zi yonib chiqadi. So&apos;ng
          «O&apos;rganish» ni bosing: yonayotgan klavishni bosib, kuyni
          o&apos;zingiz chaling.
        </p>

        {/* Tanlov ro'yxati: ekran o'quvchi «4 tadan 1-si» deb e'lon qiladi. */}
        <div className="flex flex-col gap-2" role="listbox" aria-label="Kuylar ro'yxati">
          {tunes.map((t) => {
            const tanlangan = t.id === selected.id;
            return (
              <button
                key={t.id}
                type="button"
                role="option"
                aria-selected={tanlangan}
                onClick={() => onSelect(t)}
                className={cn(
                  "rounded-xl border px-3.5 py-3 text-left transition-colors",
                  tanlangan
                    ? "border-primary bg-primary-soft"
                    : "border-border-subtle bg-surface hover:border-primary/40",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex min-w-0 items-center gap-2 text-sm font-medium text-ink">
                    <Music4 className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="truncate">{t.title}</span>
                  </span>
                  <Badge variant="neutral">{t.level === "oson" ? "Oson" : "O'rta"}</Badge>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  {t.description}
                </p>
              </button>
            );
          })}
        </div>

        {/*
          Temp tanlovi. Yangi kuyni sekin tempda boshlash — ijro
          pedagogikasining asosiy qoidasi; kuy faqat o'z tezligida
          chalinsa, boshlovchi talaba uni ko'rib ham, eshitib ham
          ulgurmaydi.
        */}
        <div className="flex flex-col gap-1.5 border-t border-border-subtle pt-4">
          <span className="text-sm text-ink-muted">
            Temp — {selected.bpm} dan {Math.round(selected.bpm * tempo)} zarb/daqiqa
          </span>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Temp">
            {[
              { v: 0.5, nom: "Sekin" },
              { v: 0.75, nom: "O'rtacha" },
              { v: 1, nom: "To'liq" },
            ].map((t) => (
              <button
                key={t.v}
                type="button"
                aria-pressed={tempo === t.v}
                onClick={() => onTempo(t.v)}
                className={cn(
                  "rounded-xl border px-3 py-1.5 text-sm transition-colors",
                  tempo === t.v
                    ? "border-primary bg-primary-solid font-medium text-white"
                    : "border-border-subtle bg-surface text-ink hover:bg-surface-muted",
                )}
              >
                {t.nom}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 border-t border-border-subtle pt-4">
          {!ishlayapti && (
            <>
              <Button onClick={onListen}>
                <Play className="size-4" aria-hidden="true" />
                Eshitish
              </Button>
              <Button variant="secondary" onClick={onLearn}>
                O&apos;rganish
              </Button>
            </>
          )}
          {ishlayapti && (
            <Button variant="secondary" onClick={onStop}>
              <Square className="size-4" aria-hidden="true" />
              To&apos;xtatish
            </Button>
          )}
        </div>

        {mode === "eshitish" && (
          <p className="text-xs text-ink-muted" aria-live="polite">
            Chalinmoqda — klavishlarni kuzating.
          </p>
        )}

        {mode === "organish" && !finished && (
          <div className="flex flex-col gap-2">
            <Progress value={foiz} label={`${index} / ${total} nota`} />
            <p className="text-xs text-ink-muted" aria-live="polite">
              Yonayotgan klavishni bosing. Xato: {wrong}
            </p>
          </div>
        )}

        {finished && (
          <div className="flex items-start gap-2.5 rounded-xl bg-success-soft px-3.5 py-3 text-sm text-success-ink">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>
              Kuy tugadi: {correct} ta nota to&apos;g&apos;ri, {wrong} ta xato.
            </span>
          </div>
        )}

        <p className="text-[11px] leading-relaxed text-ink-muted">
          Manba: {selected.manba}
        </p>
      </CardContent>
    </Card>
  );
}

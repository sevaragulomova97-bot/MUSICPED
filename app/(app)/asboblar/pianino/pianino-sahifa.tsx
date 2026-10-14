"use client";

import * as React from "react";
import { InstrumentPage } from "@/components/music/instrument-page";
import { Piano } from "@/components/music/piano";
import { Slider } from "@/components/ui/slider";

export function PianinoSahifa() {
  const [startOctave, setStartOctave] = React.useState(4);

  return (
    <InstrumentPage
      kind="pianino"
      title="Virtual pianino"
      description="Sichqoncha, sensorli ekran yoki kompyuter klaviaturasi (A–K qatori) bilan chaling."
      render={({ active, play, stop, targetNote, feedback }) => (
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <label htmlFor="oktava" className="text-sm text-ink-muted">
              Oktava
            </label>
            <select
              id="oktava"
              value={startOctave}
              onChange={(e) => setStartOctave(Number(e.target.value))}
              className="h-9 rounded-lg border border-border-subtle bg-surface px-3 text-sm text-ink"
            >
              {[2, 3, 4, 5].map((o) => (
                <option key={o} value={o}>
                  {o}–{o + 1}
                </option>
              ))}
            </select>
            <p className="text-xs text-ink-muted">
              Klaviatura: A S D F G H J — oq, W E T Y U — qora
            </p>
          </div>

          <Piano
            startOctave={startOctave}
            octaveCount={2}
            active={active}
            onAttack={play}
            onRelease={stop}
            targetNote={targetNote ?? undefined}
            feedback={feedback}
          />
        </div>
      )}
      settings={({ setVolume, setReverb }) => (
        <div className="flex flex-col gap-4">
          <Slider
            label="Ovoz balandligi"
            min={-30}
            max={0}
            defaultValue={-8}
            onChange={setVolume}
          />
          <Slider
            label="Reverb"
            min={0}
            max={100}
            defaultValue={18}
            onChange={(v) => setReverb(v / 100)}
          />
        </div>
      )}
    />
  );
}

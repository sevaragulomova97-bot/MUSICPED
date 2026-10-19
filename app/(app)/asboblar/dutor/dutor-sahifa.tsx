"use client";

import { DutorSvg, Fretboard } from "@/components/music/fretboard";
import { InstrumentPage } from "@/components/music/instrument-page";
import { Slider } from "@/components/ui/slider";
import { DUTOR_TORLARI } from "@/content/instrument-range";

/** Dutor — ikki tor, an'anaviy sozlashga yaqin. */
export function DutorSahifa() {
  return (
    <InstrumentPage
      kind="dutor"
      title="Virtual dutor"
      description="Ikki torli an'anaviy cholg'u. Pardani bosib torni cherting."
      render={({ active, play, targetNote, feedback }) => (
        <Fretboard
          strings={DUTOR_TORLARI}
          active={active}
          onPluck={play}
          targetNote={targetNote ?? undefined}
          feedback={feedback}
          illustration={<DutorSvg />}
        />
      )}
      settings={({ setVolume, setReverb }) => (
        <div className="flex flex-col gap-4">
          <Slider label="Ovoz balandligi" min={-30} max={0} defaultValue={-3} onChange={setVolume} />
          <Slider label="Reverb" min={0} max={100} defaultValue={24} onChange={(v) => setReverb(v / 100)} />
        </div>
      )}
    />
  );
}

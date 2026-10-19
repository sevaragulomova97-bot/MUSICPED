"use client";

import { Fretboard, RubobSvg } from "@/components/music/fretboard";
import { InstrumentPage } from "@/components/music/instrument-page";
import { Slider } from "@/components/ui/slider";
import { RUBOB_TORLARI } from "@/content/instrument-range";

/** Rubob — metall torli, yorqin tovushli; uch asosiy tor. */
export function RubobSahifa() {
  return (
    <InstrumentPage
      kind="rubob"
      title="Virtual rubob"
      description="Metall torli an'anaviy cholg'u — yorqin, jarangdor tovush."
      render={({ active, play, targetNote, feedback }) => (
        <Fretboard
          strings={RUBOB_TORLARI}
          active={active}
          onPluck={play}
          targetNote={targetNote ?? undefined}
          feedback={feedback}
          illustration={<RubobSvg />}
        />
      )}
      settings={({ setVolume, setReverb }) => (
        <div className="flex flex-col gap-4">
          <Slider label="Ovoz balandligi" min={-30} max={0} defaultValue={-5} onChange={setVolume} />
          <Slider label="Reverb" min={0} max={100} defaultValue={28} onChange={(v) => setReverb(v / 100)} />
        </div>
      )}
    />
  );
}

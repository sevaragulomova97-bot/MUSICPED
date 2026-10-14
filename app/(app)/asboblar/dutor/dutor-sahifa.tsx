"use client";

import { Dutor } from "@/components/music/dutor";
import { InstrumentPage } from "@/components/music/instrument-page";
import { Slider } from "@/components/ui/slider";

export function DutorSahifa() {
  return (
    <InstrumentPage
      kind="dutor"
      title="Virtual dutor"
      description="Ikki torli an'anaviy cholg'u. Pardani bosib torni cherting."
      render={({ active, play, targetNote, feedback }) => (
        <Dutor
          active={active}
          onPluck={play}
          targetNote={targetNote ?? undefined}
          feedback={feedback}
        />
      )}
      settings={({ setVolume, setReverb }) => (
        <div className="flex flex-col gap-4">
          <Slider
            label="Ovoz balandligi"
            min={-30}
            max={0}
            defaultValue={-4}
            onChange={setVolume}
          />
          <Slider
            label="Reverb"
            min={0}
            max={100}
            defaultValue={25}
            onChange={(v) => setReverb(v / 100)}
          />
        </div>
      )}
    />
  );
}

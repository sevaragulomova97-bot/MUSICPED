"use client";

import { Fretboard, GitaraSvg } from "@/components/music/fretboard";
import { InstrumentPage } from "@/components/music/instrument-page";
import { Slider } from "@/components/ui/slider";
import { GITARA_TORLARI } from "@/content/instrument-range";

/** Klassik gitara standart sozlanishi: E A D G B E. */
export function GitaraSahifa() {
  return (
    <InstrumentPage
      kind="gitara"
      title="Virtual gitara"
      description="Klassik (nayloniy torli) gitara, standart sozlanish: Mi–Lya–Re–Sol–Si–Mi."
      render={({ active, play, targetNote, feedback }) => (
        <Fretboard
          strings={GITARA_TORLARI}
          active={active}
          onPluck={play}
          targetNote={targetNote ?? undefined}
          feedback={feedback}
          illustration={<GitaraSvg />}
        />
      )}
      settings={({ setVolume, setReverb }) => (
        <div className="flex flex-col gap-4">
          <Slider label="Ovoz balandligi" min={-30} max={0} defaultValue={-4} onChange={setVolume} />
          <Slider label="Reverb" min={0} max={100} defaultValue={18} onChange={(v) => setReverb(v / 100)} />
        </div>
      )}
    />
  );
}

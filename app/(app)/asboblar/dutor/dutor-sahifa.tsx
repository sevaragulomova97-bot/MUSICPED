"use client";

import { DutorSvg, Fretboard, type StringSpec } from "@/components/music/fretboard";
import { InstrumentPage } from "@/components/music/instrument-page";
import { Slider } from "@/components/ui/slider";

/** Dutor — ikki tor, an'anaviy sozlashga yaqin. */
const TORLAR: StringSpec[] = [
  { nom: "Past tor", notalar: ["G3", "A3", "B3", "C4", "D4", "E4", "F4", "G4"] },
  { nom: "Baland tor", notalar: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"] },
];

export function DutorSahifa() {
  return (
    <InstrumentPage
      kind="dutor"
      title="Virtual dutor"
      description="Ikki torli an'anaviy cholg'u. Pardani bosib torni cherting."
      render={({ active, play, targetNote, feedback }) => (
        <Fretboard
          strings={TORLAR}
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

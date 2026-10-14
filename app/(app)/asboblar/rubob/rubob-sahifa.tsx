"use client";

import { Fretboard, RubobSvg, type StringSpec } from "@/components/music/fretboard";
import { InstrumentPage } from "@/components/music/instrument-page";
import { Slider } from "@/components/ui/slider";

/** Rubob — metall torli, yorqin tovushli; uch asosiy tor. */
const TORLAR: StringSpec[] = [
  { nom: "Baland tor", notalar: ["D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5"] },
  { nom: "O'rta tor", notalar: ["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4"] },
  { nom: "Past tor", notalar: ["D3", "E3", "F3", "G3", "A3", "B3", "C4", "D4"] },
];

export function RubobSahifa() {
  return (
    <InstrumentPage
      kind="rubob"
      title="Virtual rubob"
      description="Metall torli an'anaviy cholg'u — yorqin, jarangdor tovush."
      render={({ active, play, targetNote, feedback }) => (
        <Fretboard
          strings={TORLAR}
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

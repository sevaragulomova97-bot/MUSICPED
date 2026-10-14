"use client";

import { Fretboard, GitaraSvg, type StringSpec } from "@/components/music/fretboard";
import { InstrumentPage } from "@/components/music/instrument-page";
import { Slider } from "@/components/ui/slider";

/** Klassik gitara standart sozlanishi: E A D G B E. */
const TORLAR: StringSpec[] = [
  { nom: "1 — Mi (yuqori)", notalar: ["E4", "F4", "Gb4", "G4", "Ab4", "A4"] },
  { nom: "2 — Si", notalar: ["B3", "C4", "Db4", "D4", "Eb4", "E4"] },
  { nom: "3 — Sol", notalar: ["G3", "Ab3", "A3", "Bb3", "B3", "C4"] },
  { nom: "4 — Re", notalar: ["D3", "Eb3", "E3", "F3", "Gb3", "G3"] },
  { nom: "5 — Lya", notalar: ["A2", "Bb2", "B2", "C3", "Db3", "D3"] },
  { nom: "6 — Mi (past)", notalar: ["E2", "F2", "Gb2", "G2", "Ab2", "A2"] },
];

export function GitaraSahifa() {
  return (
    <InstrumentPage
      kind="gitara"
      title="Virtual gitara"
      description="Klassik (nayloniy torli) gitara, standart sozlanish: Mi–Lya–Re–Sol–Si–Mi."
      render={({ active, play, targetNote, feedback }) => (
        <Fretboard
          strings={TORLAR}
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

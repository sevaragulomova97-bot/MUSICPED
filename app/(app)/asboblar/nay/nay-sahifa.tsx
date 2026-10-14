"use client";

import { NaySvg } from "@/components/music/fretboard";
import { InstrumentPage } from "@/components/music/instrument-page";
import { Piano } from "@/components/music/piano";
import { Slider } from "@/components/ui/slider";

export function NaySahifa() {
  return (
    <InstrumentPage
      kind="nay"
      title="Virtual nay"
      description="Puflama cholg'u. Notani bosib turganingizcha tovush davom etadi — nafasni tejashni mashq qiling."
      render={({ active, play, stop, targetNote, feedback }) => (
        <div className="flex flex-col gap-5">
          <div className="flex justify-center">
            <NaySvg />
          </div>
          <Piano
            startOctave={4}
            octaveCount={2}
            active={active}
            onAttack={play}
            onRelease={stop}
            targetNote={targetNote ?? undefined}
            feedback={feedback}
          />
          <p className="text-xs text-ink-muted">
            Nay tovush balandligini tanlash uchun klaviatura ko&apos;rinishi
            ishlatiladi — kompyuter klaviaturasi (A–K) ham ishlaydi.
          </p>
        </div>
      )}
      settings={({ setVolume, setReverb }) => (
        <div className="flex flex-col gap-4">
          <Slider label="Ovoz balandligi" min={-30} max={0} defaultValue={-8} onChange={setVolume} />
          <Slider label="Reverb" min={0} max={100} defaultValue={22} onChange={(v) => setReverb(v / 100)} />
        </div>
      )}
    />
  );
}

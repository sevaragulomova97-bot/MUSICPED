"use client";

import { Doira } from "@/components/music/doira";
import { InstrumentPage } from "@/components/music/instrument-page";
import { Slider } from "@/components/ui/slider";

export function DoiraSahifa() {
  return (
    <InstrumentPage
      kind="doira"
      title="Virtual doira"
      description="Markazga bossangiz «bum», uning atrofiga «bosiq» (kaft bilan bo'g'ilgan o'sha tovush), chetiga «tak», gardishga «qarsak» tovushi chiqadi."
      render={({ active, play }) => (
        <Doira active={active} onHit={(stroke) => play(stroke)} />
      )}
      settings={({ setVolume, setReverb }) => (
        <div className="flex flex-col gap-4">
          <Slider
            label="Ovoz balandligi"
            min={-30}
            max={0}
            defaultValue={-6}
            onChange={setVolume}
          />
          <Slider
            label="Reverb"
            min={0}
            max={100}
            defaultValue={12}
            onChange={(v) => setReverb(v / 100)}
          />
        </div>
      )}
    />
  );
}

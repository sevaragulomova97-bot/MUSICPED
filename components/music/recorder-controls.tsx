"use client";

import { Circle, Play, Save, Square, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { NoteEvent } from "@/lib/audio/engine";

export function RecorderControls({
  recording,
  playing,
  events,
  onStart,
  onStop,
  onPlay,
  onStopPlayback,
  onClear,
  onSave,
  saving,
  saved,
}: {
  recording: boolean;
  playing: boolean;
  events: NoteEvent[];
  onStart: () => void;
  onStop: () => void;
  onPlay: () => void;
  onStopPlayback: () => void;
  onClear: () => void;
  onSave?: () => void;
  saving?: boolean;
  saved?: boolean;
}) {
  const davomiylik = events.length
    ? Math.max(...events.map((e) => e.timeMs + e.durationMs)) / 1000
    : 0;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {recording ? (
        <Button variant="danger" onClick={onStop}>
          <Square aria-hidden="true" />
          To&apos;xtatish
        </Button>
      ) : (
        <Button variant="danger" onClick={onStart}>
          <Circle aria-hidden="true" />
          Yozib olish
        </Button>
      )}

      {playing ? (
        <Button variant="outline" onClick={onStopPlayback}>
          <Square aria-hidden="true" />
          To&apos;xtatish
        </Button>
      ) : (
        <Button
          variant="success"
          onClick={onPlay}
          disabled={!events.length || recording}
        >
          <Play aria-hidden="true" />
          O&apos;ynatish
        </Button>
      )}

      {onSave && (
        <Button
          variant="soft"
          onClick={onSave}
          disabled={!events.length || recording || saving}
        >
          <Save aria-hidden="true" />
          {saving ? "Saqlanmoqda…" : saved ? "Saqlandi" : "Portfolioga saqlash"}
        </Button>
      )}

      <Button
        variant="ghost"
        onClick={onClear}
        disabled={!events.length || recording}
        aria-label="Yozuvni o'chirish"
      >
        <Trash2 aria-hidden="true" />
      </Button>

      <span
        className="ml-auto text-sm tabular-nums text-ink-muted"
        aria-live="polite"
      >
        {recording
          ? "Yozilmoqda…"
          : events.length
            ? `${events.length} nota · ${davomiylik.toFixed(1)} s`
            : "Yozuv yo'q"}
      </span>
    </div>
  );
}

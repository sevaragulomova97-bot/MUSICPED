"use client";

/** Oddiy sozlash slayderi (ovoz balandligi, reverb). */
export function Slider({
  label,
  min,
  max,
  step = 1,
  defaultValue,
  onChange,
  format,
}: {
  label: string;
  min: number;
  max: number;
  step?: number;
  defaultValue: number;
  onChange: (value: number) => void;
  format?: (value: number) => string;
}) {
  const id = `slider-${label.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm text-ink-muted">
        {label}
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-surface-muted accent-[var(--mp-primary)]"
      />
      {format && (
        <span className="text-xs tabular-nums text-ink-muted">
          {format(defaultValue)}
        </span>
      )}
    </div>
  );
}

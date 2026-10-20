import * as React from "react";
import { cn } from "@/lib/utils";

type ProgressProps = {
  value: number;
  label?: string;
  /** CSS rang qiymati, masalan `var(--mp-dir-nazariya)` */
  color?: string;
  /**
   * Ekran o'quvchi uchun nom — `label` ko'rinmaydigan joylarda.
   *
   * Nomsiz progressbar ekran o'quvchida «progressbar, 100 foiz» bo'lib
   * eshitiladi: nimaning foizi ekani noma'lum qoladi.
   */
  ariaLabel?: string;
  showValue?: boolean;
  className?: string;
};

/** Gorizontal progress chizig'i. */
export function Progress({
  value,
  label,
  color,
  ariaLabel,
  showValue = true,
  className,
}: ProgressProps) {
  const pct = Math.max(0, Math.min(100, Math.round(value)));

  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      {(label || showValue) && (
        <div className="flex items-baseline justify-between gap-2 text-sm">
          {label && <span className="text-ink-muted">{label}</span>}
          {showValue && (
            <span className="font-medium tabular-nums text-ink">{pct}%</span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={ariaLabel ?? label ?? "Bajarilish darajasi"}
        className="h-2 w-full overflow-hidden rounded-full bg-surface-muted"
      >
        <div
          className="h-full rounded-full transition-[width] duration-500"
          style={{
            width: `${pct}%`,
            backgroundColor: color ?? "var(--mp-primary)",
          }}
        />
      </div>
    </div>
  );
}

type RingProps = {
  value: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  caption?: string;
  className?: string;
};

/**
 * Aylana ko'rinishidagi foiz halqasi (maketdagi "O'qish davomiyligi 78%").
 *
 * Raqam halqa ichida matn sifatida yoziladi — ya'ni ma'no faqat rang orqali
 * berilmaydi va ekran o'quvchi ham to'g'ri o'qiydi.
 */
export function ProgressRing({
  value,
  size = 132,
  strokeWidth = 12,
  color,
  caption,
  className,
}: RingProps) {
  const pct = Math.max(0, Math.min(100, Math.round(value)));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (pct / 100) * circumference;

  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          role="img"
          aria-label={`${caption ? `${caption}: ` : ""}${pct} foiz`}
          className="-rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="var(--mp-surface-muted)"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color ?? "var(--mp-primary)"}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-[stroke-dashoffset] duration-700"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display text-2xl font-bold tabular-nums text-ink">
            {pct}%
          </span>
        </div>
      </div>
      {caption && <p className="text-sm text-ink-muted">{caption}</p>}
    </div>
  );
}

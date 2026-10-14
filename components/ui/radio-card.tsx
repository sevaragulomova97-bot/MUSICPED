"use client";

import { cn } from "@/lib/utils";

/** Variant tanlash kartasi — radio yoki checkbox sifatida ishlaydi. */
export function ChoiceCard({
  name,
  value,
  checked,
  onChange,
  multiple = false,
  children,
}: {
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  multiple?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label
      className={cn(
        "flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors",
        checked
          ? "border-primary bg-primary-soft"
          : "border-border-subtle bg-surface hover:border-primary/40",
      )}
    >
      <input
        type={multiple ? "checkbox" : "radio"}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="mt-0.5 size-4 shrink-0 accent-[var(--mp-primary)]"
      />
      <span className="text-sm leading-relaxed text-ink">{children}</span>
    </label>
  );
}

/** 1–5 Likert shkalasi. */
export function LikertScale({
  name,
  value,
  onChange,
  lowLabel,
  highLabel,
}: {
  name: string;
  value: number | undefined;
  onChange: (value: number) => void;
  lowLabel: string;
  highLabel: string;
}) {
  return (
    <div>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <label
            key={n}
            className={cn(
              "flex flex-1 cursor-pointer flex-col items-center gap-1.5 rounded-xl border py-3 transition-colors",
              value === n
                ? "border-primary bg-primary-soft"
                : "border-border-subtle bg-surface hover:border-primary/40",
            )}
          >
            <input
              type="radio"
              name={name}
              value={n}
              checked={value === n}
              onChange={() => onChange(n)}
              className="sr-only"
            />
            <span
              className={cn(
                "grid size-8 place-items-center rounded-full text-sm font-semibold",
                value === n ? "bg-primary text-white" : "bg-surface-muted text-ink-muted",
              )}
            >
              {n}
            </span>
          </label>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-xs text-ink-muted">
        <span>{lowLabel}</span>
        <span className="text-right">{highLabel}</span>
      </div>
    </div>
  );
}

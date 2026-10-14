import { cn } from "@/lib/utils";

/** MusicPed logotipi — nota belgisi + nom. Tashqi rasm ishlatilmaydi. */
export function Logo({
  className,
  variant = "light",
  showText = true,
}: {
  className?: string;
  /** `light` — to'q fonda (sidebar), `dark` — oq fonda */
  variant?: "light" | "dark";
  showText?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="grid size-9 shrink-0 place-items-center rounded-xl bg-secondary"
      >
        <svg viewBox="0 0 512 512" className="size-5" fill="white">
          <path d="M186 104 L378 84 V130 L186 150 Z" />
          <rect x="186" y="104" width="26" height="248" rx="13" />
          <rect x="352" y="84" width="26" height="238" rx="13" />
          <ellipse cx="162" cy="334" rx="54" ry="40" transform="rotate(-22 162 334)" />
          <ellipse cx="328" cy="304" rx="54" ry="40" transform="rotate(-22 328 304)" />
        </svg>
      </span>
      {showText && (
        <span
          className={cn(
            "font-display text-lg font-bold tracking-tight",
            variant === "light" ? "text-white" : "text-ink",
          )}
        >
          MusicPed
        </span>
      )}
    </span>
  );
}

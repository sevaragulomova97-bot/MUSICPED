"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useHydrated } from "@/lib/use-hydrated";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const hydrated = useHydrated();

  // Server tomonda mavzu noma'lum — joyni band qilib turamiz, aks holda
  // birinchi renderda ikonka sakrab ketadi.
  if (!hydrated) {
    return <div className="size-10" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Yorug' rejimga o'tish" : "Qorong'i rejimga o'tish"}
      className="grid size-10 place-items-center rounded-xl text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
    >
      {isDark ? (
        <Sun className="size-5" aria-hidden="true" />
      ) : (
        <Moon className="size-5" aria-hidden="true" />
      )}
    </button>
  );
}

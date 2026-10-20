"use client";

import * as React from "react";
import type { Role } from "@/lib/navigation";
import { useHydrated } from "@/lib/use-hydrated";

export type Profile = {
  id: string;
  fullName: string;
  role: Role;
  group?: string;
  /** ISO sana */
  startedAt?: string;
  direction?: string;
};

const STORAGE_KEY = "musicped.session.v1";

/* ──────────────────────────────────────────────────────────────
   localStorage ustidagi kichik tashqi do'kon (external store).
   `useSyncExternalStore` bilan ishlatilgani uchun effekt ichida
   setState chaqirilmaydi va boshqa tabdagi o'zgarish ham yetib keladi.
   ────────────────────────────────────────────────────────────── */

const listeners = new Set<() => void>();

/** Oxirgi o'qilgan xom qiymat va undan hosil bo'lgan obyekt.
 *  `getSnapshot` har safar yangi obyekt qaytarsa React cheksiz qayta
 *  renderga tushadi — shuning uchun natija keshlanadi. */
let cache: { raw: string | null; value: Profile | null } = { raw: null, value: null };

function parse(raw: string | null): Profile | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<Profile>;
    if (typeof parsed?.id !== "string" || typeof parsed?.fullName !== "string") {
      return null;
    }
    if (parsed.role !== "TALABA" && parsed.role !== "OQITUVCHI" && parsed.role !== "ADMIN") {
      return null;
    }
    return parsed as Profile;
  } catch {
    return null;
  }
}

function readRaw(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    // Shaxsiy rejim yoki o'chirilgan saqlash — bu xato emas, shunchaki sessiya yo'q.
    return null;
  }
}

function getSnapshot(): Profile | null {
  const raw = readRaw();
  if (raw !== cache.raw) cache = { raw, value: parse(raw) };
  return cache.value;
}

/** Server tomonda localStorage yo'q — doim "kirilmagan" holat. */
function getServerSnapshot(): Profile | null {
  return null;
}

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  // Boshqa tabda kirish/chiqish bo'lsa, bu tab ham yangilanadi.
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function write(profile: Profile | null) {
  try {
    if (profile) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } else {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  } catch {
    // Saqlab bo'lmasa ham joriy sessiya ishlayveradi — faqat eslab qolinmaydi.
    cache = { raw: profile ? JSON.stringify(profile) : null, value: profile };
  }
  emit();
}

/* ────────────────────────────────────────────────────────────── */

type SessionValue = {
  /** `null` — kirilmagan. */
  profile: Profile | null;
  /** Brauzer xotirasi o'qilgunicha `false`. */
  ready: boolean;
  signIn: (profile: Profile) => void;
  signOut: () => void;
};

const SessionContext = React.createContext<SessionValue | null>(null);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const profile = React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const ready = useHydrated();

  const value = React.useMemo<SessionValue>(
    () => ({
      profile,
      ready,
      signIn: (next: Profile) => write(next),
      signOut: () => write(null),
    }),
    [profile, ready],
  );

  return <SessionContext value={value}>{children}</SessionContext>;
}

export function useSession() {
  const ctx = React.useContext(SessionContext);
  if (!ctx) {
    throw new Error("useSession faqat <SessionProvider> ichida ishlatiladi");
  }
  return ctx;
}

/** Ism va familiyadan avatar uchun bosh harflar: "Bobur Akbarov" -> "BA" */
export function initialsOf(fullName: string) {
  return fullName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

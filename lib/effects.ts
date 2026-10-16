"use client";

import * as React from "react";
import { useHydrated } from "@/lib/use-hydrated";

/**
 * Bezak effektlarini (suzuvchi notalar va tugmadagi nota sachrashi)
 * yoqish/o'chirish.
 *
 * Nega sozlama kerak? Harakatlanuvchi fon ba'zi foydalanuvchilarga
 * xalaqit beradi — diqqat buzilishi, bosh aylanishi yoki shunchaki
 * zerikish. Platforma o'quv maqsadida ishlatilgani uchun foydalanuvchi
 * chalg'ituvchi narsani o'chira olishi kerak.
 *
 * Qiymat `localStorage` da saqlanadi va bir vaqtning o'zida `<html>`
 * elementiga `data-effects` atributi sifatida yoziladi. Shu sababli:
 *  • CSS to'g'ridan-to'g'ri `html[data-effects="off"]` bilan ishlay oladi;
 *  • React'dan tashqarida ishlaydigan kod (nota sachrashi) holatni
 *    o'qish uchun do'konga murojaat qilishi shart emas.
 *
 * `prefers-reduced-motion` tizim sozlamasi har doim ustun turadi: u
 * yoqilgan bo'lsa effektlar ko'rsatilmaydi, foydalanuvchi nima
 * tanlaganidan qat'i nazar.
 */

const KALIT = "musicped.effects.v1";

export type EffectHolati = "on" | "off";

const listeners = new Set<() => void>();

function oqish(): EffectHolati {
  try {
    return window.localStorage.getItem(KALIT) === "off" ? "off" : "on";
  } catch {
    // Shaxsiy rejim yoki o'chirilgan saqlash — bu xato emas.
    return "on";
  }
}

function belgilashHtml(holat: EffectHolati) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.effects = holat;
}

export function setEffects(holat: EffectHolati) {
  try {
    window.localStorage.setItem(KALIT, holat);
  } catch {
    // Saqlab bo'lmasa ham joriy sahifada ishlashi kerak.
  }
  belgilashHtml(holat);
  for (const l of listeners) l();
}

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  // Boshqa tabdagi o'zgarish ham yetib kelsin.
  const onStorage = (e: StorageEvent) => {
    if (e.key === KALIT) {
      belgilashHtml(oqish());
      onChange();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onStorage);
  };
}

const serverSnapshot = (): EffectHolati => "on";

/**
 * Joriy holat. Server tomonda va gidratatsiyagacha har doim `"on"`
 * qaytadi — aks holda server va klient HTML'i mos kelmay qoladi.
 */
export function useEffectsEnabled(): boolean {
  const holat = React.useSyncExternalStore(subscribe, oqish, serverSnapshot);
  const hydrated = useHydrated();
  return hydrated ? holat === "on" : true;
}

/** `<html>` atributini saqlangan qiymat bilan tenglashtiradi. */
export function useSyncEffectsAttribute() {
  const holat = React.useSyncExternalStore(subscribe, oqish, serverSnapshot);
  React.useEffect(() => {
    belgilashHtml(holat);
  }, [holat]);
}

/** React'dan tashqarida: effektlar hozir ishlashi kerakmi? */
export function effectsActive(): boolean {
  if (typeof document === "undefined") return false;
  if (document.documentElement.dataset.effects === "off") return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

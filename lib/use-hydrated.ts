"use client";

import * as React from "react";

const noopSubscribe = () => () => {};

/**
 * Hidratsiya tugaganini bildiradi: server renderida `false`, klientda `true`.
 *
 * `useEffect` + `setState` o'rniga ishlatiladi — kaskadli qayta render bo'lmaydi.
 * Faqat brauzerda ma'lum bo'ladigan qiymatlarni (mavzu, localStorage) ko'rsatishdan
 * oldin shu hook bilan tekshiriladi, aks holda SSR va klient mos kelmay qoladi.
 */
export function useHydrated() {
  return React.useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

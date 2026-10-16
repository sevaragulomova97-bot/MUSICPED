"use client";

import * as React from "react";

/**
 * Tizimdagi «harakatni kamaytirish» sozlamasi yoqilganmi.
 *
 * `useEffect` ichida `setState` chaqirilmaydi — media so'rov tashqi
 * do'kon sifatida o'qiladi. Shu sababli ortiqcha render bo'lmaydi va
 * server tomonda ham xavfsiz ishlaydi (u yerda har doim `false`).
 */
function subscribe(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

const getSnapshot = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const getServerSnapshot = () => false;

export function useReducedMotion(): boolean {
  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

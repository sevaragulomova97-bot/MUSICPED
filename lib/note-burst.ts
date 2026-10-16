"use client";

import { effectsActive } from "@/lib/effects";
import { NOTA_SVG_YOLLARI, type NotaBelgisi } from "@/components/decor/note-glyphs";

/**
 * Tugma bosilganda undan notalar sachrashi.
 *
 * Nega React holati emas, to'g'ridan-to'g'ri DOM? Chunki effekt bir
 * necha yuz millisekund yashaydi va hech qanday ma'lumot saqlamaydi.
 * Uni React holatiga bog'lash har bosqichda qayta renderga olib kelardi
 * — ayniqsa cholg'u sahifalarida, u yerda tugmalar tez-tez bosiladi.
 *
 * Animatsiya Web Animations API bilan bajariladi: brauzer uni kompozitor
 * oqimida yuritadi va tugagach element o'zini o'chiradi.
 *
 * Elementlar `<body>` ga ulanadi, tugmaning ichiga emas — aks holda
 * `overflow: hidden` bo'lgan ota element ularni qirqib tashlardi.
 */

const BELGILAR: NotaBelgisi[] = ["chorak", "sakkizlik", "juft", "diez", "bemol", "kalit"];

/** Bir vaqtda ekranda bo'ladigan sachragan notalarning chegarasi. */
const MAX_NOTALAR = 60;

let qatlam: HTMLElement | null = null;
let jonli = 0;

function qatlamniOl(): HTMLElement {
  if (qatlam?.isConnected) return qatlam;
  qatlam = document.createElement("div");
  qatlam.className = "mp-burst-layer";
  qatlam.setAttribute("aria-hidden", "true");
  document.body.appendChild(qatlam);
  return qatlam;
}

/**
 * Tugmaning rangini aniqlaydi.
 *
 * To'ldirilgan tugmada fon rangi, shaffof tugmada (outline, ghost) matn
 * rangi olinadi — shunda sachragan notalar tugmaning o'zi bilan bir
 * oilada ko'rinadi.
 */
function rangniTop(el: Element): string {
  const uslub = window.getComputedStyle(el);
  const fon = uslub.backgroundColor;
  const shaffof =
    !fon ||
    fon === "transparent" ||
    fon === "rgba(0, 0, 0, 0)" ||
    /,\s*0(\.\d+)?\)$/.test(fon);
  return shaffof ? uslub.color : fon;
}

export type BurstOptions = {
  /** Nechta nota sachrasin (standart 6) */
  count?: number;
  /** Rang; berilmasa tugmadan olinadi */
  color?: string;
};

/**
 * Berilgan nuqtadan notalarni sachratadi.
 *
 * Harakat fizikaga yaqin: notalar yuqoriga va yon tomonga otiladi, keyin
 * tortishish ularni pastga egadi. Shuning uchun yo'l to'g'ri chiziq emas,
 * yoysimon.
 */
export function burstNotes(x: number, y: number, options: BurstOptions = {}) {
  if (!effectsActive()) return;

  const soni = Math.min(options.count ?? 6, Math.max(0, MAX_NOTALAR - jonli));
  if (soni <= 0) return;

  const rang = options.color ?? "var(--mp-primary)";
  const root = qatlamniOl();

  for (let i = 0; i < soni; i += 1) {
    const belgi = BELGILAR[Math.floor(Math.random() * BELGILAR.length)];
    const olcham = 16 + Math.random() * 13;

    // Yelpig'ich: yuqoriga qaragan yarim doira ichida tarqaladi.
    const burchak = -Math.PI / 2 + (Math.random() - 0.5) * 2.1;
    const kuch = 95 + Math.random() * 85;
    const dx = Math.cos(burchak) * kuch;
    const dy = Math.sin(burchak) * kuch;
    const tortishish = 55 + Math.random() * 55;
    const aylanish = (Math.random() - 0.5) * 260;
    const davomiylik = 950 + Math.random() * 550;

    const el = document.createElement("span");
    el.className = "mp-burst-note";
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.color = rang;
    el.innerHTML = `<svg width="${olcham}" height="${olcham}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${NOTA_SVG_YOLLARI[belgi]}</svg>`;
    root.appendChild(el);
    jonli += 1;

    const animatsiya = el.animate(
      [
        // Tugmadan otilib chiqadi
        {
          transform: "translate3d(0,0,0) rotate(0deg) scale(.65)",
          opacity: 0,
          easing: "cubic-bezier(.12,.85,.3,1)",
        },
        // Tez to'liq ko'rinadi — endi tugmaning ustida emas, yonida
        {
          transform: `translate3d(${dx * 0.5}px, ${dy * 0.5}px, 0) rotate(${aylanish * 0.35}deg) scale(1.05)`,
          opacity: 1,
          offset: 0.2,
          easing: "linear",
        },
        // Yo'lning katta qismida to'liq ko'rinib turadi
        {
          transform: `translate3d(${dx * 0.85}px, ${dy * 0.88 + tortishish * 0.2}px, 0) rotate(${aylanish * 0.72}deg) scale(1)`,
          opacity: 0.92,
          offset: 0.62,
          easing: "cubic-bezier(.4,.05,.75,.6)",
        },
        // Tortishish pastga egadi va so'nadi
        {
          transform: `translate3d(${dx}px, ${dy + tortishish}px, 0) rotate(${aylanish}deg) scale(.8)`,
          opacity: 0,
        },
      ],
      {
        duration: davomiylik,
        // DIQQAT: bu yerdagi `easing` butun animatsiyaga qo'llanadi va
        // kadrlar orasidagi vaqtni ham siqadi. Shuning uchun u `linear`
        // qoldirilgan, tezlik esa har bir kadrda alohida beriladi —
        // aks holda notalar bir lahzada uchib, darhol yo'qolardi.
        easing: "linear",
        fill: "forwards",
      },
    );

    const tozalash = () => {
      el.remove();
      jonli -= 1;
    };
    animatsiya.addEventListener("finish", tozalash, { once: true });
    animatsiya.addEventListener("cancel", tozalash, { once: true });
  }
}

/**
 * Hodisa (klik yoki klaviatura) sodir bo'lgan elementdan notalarni
 * sachratadi.
 *
 * Sichqoncha bilan bosilganda kursor joyidan, klaviatura bilan
 * (Enter/Probel) bosilganda esa tugmaning markazidan chiqadi —
 * klaviatura foydalanuvchisi ham effektni ko'radi.
 */
export function burstFromEvent(
  event: { clientX?: number; clientY?: number; currentTarget: EventTarget | null },
  options: BurstOptions = {},
) {
  const el = event.currentTarget;
  if (!(el instanceof HTMLElement)) return;

  const quti = el.getBoundingClientRect();
  const klaviatura = !event.clientX && !event.clientY;
  const x = klaviatura ? quti.left + quti.width / 2 : (event.clientX as number);
  const y = klaviatura ? quti.top + quti.height / 2 : (event.clientY as number);

  burstNotes(x, y, { ...options, color: options.color ?? rangniTop(el) });
}

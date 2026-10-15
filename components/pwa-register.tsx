"use client";

import * as React from "react";
import { asset } from "@/lib/utils";

/**
 * Xizmat ishchisini ro'yxatdan o'tkazadi (oflayn rejim uchun).
 *
 * Faqat ishlab chiqarish qurilishida ishlaydi: `next dev` da xizmat ishchisi
 * eski fayllarni keshlab, o'zgarishlarni ko'rinmas qilib qo'yadi.
 *
 * `asset()` yordamida yo'lga `basePath` qo'shiladi — sayt GitHub Pages'da
 * `/MUSICPED/` ostida tursa ham to'g'ri ishlaydi.
 */
export function PwaRegister() {
  React.useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;

    const scope = asset("/");
    const url = asset("/sw.js");

    // Sahifa to'liq yuklangandan keyin ro'yxatdan o'tkazamiz: birinchi
    // ochilish tezligi xizmat ishchisidan muhimroq.
    const register = () => {
      navigator.serviceWorker.register(url, { scope }).catch(() => {
        // Shaxsiy rejimda yoki HTTPS bo'lmasa xato chiqadi — bu kutilgan
        // holat, foydalanuvchiga ko'rsatishning hojati yo'q.
      });
    };

    if (document.readyState === "complete") {
      register();
      return;
    }
    window.addEventListener("load", register);
    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}

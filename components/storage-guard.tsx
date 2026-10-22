"use client";

import * as React from "react";
import { AlertTriangle } from "lucide-react";
import { saqlashniTekshir, type SaqlashHolati } from "@/lib/db/mavjudlik";

/**
 * Saqlash bloklangan bo'lsa, tushuntirish ko'rsatadi.
 *
 * Nega butun sahifa o'rniga: saqlashsiz ilovaning **hech bir** qismi
 * ishlamaydi — diagnostika natijani yoza olmaydi, dars progressi
 * saqlanmaydi, portfolio bo'sh qoladi. Bunday holatda interfeysni
 * ko'rsatib qo'yish foydalanuvchini chalg'itadi: u ishlayapti deb
 * o'ylab, mehnatini yo'qotadi.
 */
export function StorageGuard({ children }: { children: React.ReactNode }) {
  const [holat, setHolat] = React.useState<SaqlashHolati>("tekshirilmoqda");

  React.useEffect(() => {
    let tirik = true;
    void saqlashniTekshir().then((ok) => {
      if (tirik) setHolat(ok ? "ishlaydi" : "bloklangan");
    });
    return () => {
      tirik = false;
    };
  }, []);

  // Tekshiruv davomida interfeys ko'rsatilaveradi: u odatda bir necha
  // millisekund oladi va bu vaqtda ekranni bo'shatish yaltirash beradi.
  if (holat !== "bloklangan") return <>{children}</>;

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-4 px-4 text-center">
      <span className="grid size-14 place-items-center rounded-2xl bg-warning-soft text-warning-ink">
        <AlertTriangle className="size-7" aria-hidden="true" />
      </span>
      <h1 className="font-display text-xl font-bold text-ink">
        Brauzer ma&apos;lumot saqlashga ruxsat bermayapti
      </h1>
      <p className="text-sm leading-relaxed text-ink-muted">
        MusicPed serversiz ishlaydi: diagnostika natijalari, darslar
        progressi, topshiriqlar va portfolio <strong>sizning
        brauzeringizda</strong> saqlanadi. Hozir brauzer bunga yo&apos;l
        qo&apos;ymayapti, shuning uchun platformani ishlatib bo&apos;lmaydi.
      </p>
      <div className="w-full rounded-xl border border-border-subtle bg-surface p-4 text-left">
        <p className="text-sm font-medium text-ink">Nima qilish kerak</p>
        <ul className="mt-2 flex list-disc flex-col gap-1.5 pl-5 text-sm text-ink-muted">
          <li>Shaxsiy (inkognito) rejimdan chiqib, oddiy oynada oching.</li>
          <li>
            Brauzer sozlamalarida shu sayt uchun «cookie va sayt
            ma&apos;lumotlari» ni yoqing.
          </li>
          <li>
            Kengaytmalar (reklama yoki kuzatuv bloklovchilari) saqlashni
            to&apos;sayotgan bo&apos;lishi mumkin — ularni shu sayt uchun
            o&apos;chiring.
          </li>
          <li>Boshqa brauzerda sinab ko&apos;ring.</li>
        </ul>
      </div>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="rounded-xl bg-primary-solid px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
      >
        Qayta tekshirish
      </button>
    </div>
  );
}

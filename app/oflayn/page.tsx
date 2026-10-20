import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/layout/logo";

export const metadata: Metadata = { title: "Internet aloqasi yo'q" };

/**
 * Oflayn sahifa — xizmat ishchisi tarmoq yo'q bo'lganda shuni ko'rsatadi.
 *
 * Ataylab juda sodda: tashqi shrift, rasm yoki skriptga bog'liq emas,
 * shuning uchun u har qanday holatda chiziladi.
 */
export default function Page() {
  return (
    <div className="grid min-h-dvh place-items-center bg-surface-muted px-5 py-12">
      <div className="w-full max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <Logo variant="dark" />
        </div>

        <h1 className="font-display text-xl font-bold text-ink">
          Internet aloqasi yo&apos;q
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Bu sahifa hali brauzeringizga saqlanmagan. Avval ochilgan sahifalar
          internetsiz ham ishlaydi — ma&apos;lumotlaringiz esa shu
          brauzerda turibdi va yo&apos;qolmaydi.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Link
            href="/bosh-sahifa"
            className="inline-flex h-10 items-center rounded-xl bg-primary-solid px-5 text-sm font-medium text-white transition-colors hover:opacity-90"
          >
            Bosh sahifa
          </Link>
          <Link
            href="/asboblar"
            className="inline-flex h-10 items-center rounded-xl border border-border-subtle bg-surface px-5 text-sm font-medium text-ink transition-colors hover:bg-surface-muted"
          >
            Cholg&apos;ular
          </Link>
        </div>
      </div>
    </div>
  );
}

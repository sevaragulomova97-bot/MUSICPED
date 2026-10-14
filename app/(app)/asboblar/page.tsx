import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DARAJA_NOMI, exercisesFor } from "@/content/practice";
import type { InstrumentKind } from "@/lib/audio/instruments";

export const metadata: Metadata = { title: "Musiqa asboblari" };

const ASBOBLAR: Array<{
  kind: InstrumentKind;
  href: string;
  nom: string;
  tavsif: string;
  rang: string;
}> = [
  {
    kind: "pianino",
    href: "/asboblar/pianino",
    nom: "Virtual pianino",
    tavsif:
      "Ikki oktavali klaviatura. Sichqoncha, sensorli ekran va kompyuter klaviaturasi bilan chalinadi.",
    rang: "var(--mp-dir-nazariya)",
  },
  {
    kind: "dutor",
    href: "/asboblar/dutor",
    nom: "Virtual dutor",
    tavsif:
      "Ikki torli an'anaviy cholg'u. Grifdagi pardalarni bosib, torni chertasiz.",
    rang: "var(--mp-dir-ijro)",
  },
  {
    kind: "doira",
    href: "/asboblar/doira",
    nom: "Virtual doira",
    tavsif:
      "Uch zarbli zarbli cholg'u: bum, tak va qarsak. Ritm mashqlari vaqt aniqligi bilan baholanadi.",
    rang: "var(--mp-dir-kasbiy)",
  },
];

/** Cholg'u ikonkasi — tashqi rasm ishlatilmaydi. */
function AsbobIkonka({ kind, color }: { kind: InstrumentKind; color: string }) {
  if (kind === "pianino") {
    return (
      <svg viewBox="0 0 48 32" className="h-10 w-14" aria-hidden="true">
        <rect width="48" height="32" rx="4" fill={color} opacity="0.14" />
        {[0, 8, 16, 24, 32, 40].map((x) => (
          <rect key={x} x={x + 2} y="6" width="6" height="20" rx="1.5" fill={color} opacity="0.35" />
        ))}
        {[6, 14, 30, 38].map((x) => (
          <rect key={x} x={x} y="6" width="4" height="12" rx="1" fill={color} />
        ))}
      </svg>
    );
  }

  if (kind === "dutor") {
    return (
      <svg viewBox="0 0 48 32" className="h-10 w-14" aria-hidden="true">
        <rect width="48" height="32" rx="4" fill={color} opacity="0.14" />
        <ellipse cx="13" cy="16" rx="10" ry="9" fill={color} opacity="0.5" />
        <circle cx="13" cy="16" r="3" fill={color} />
        <rect x="21" y="14" width="22" height="4" rx="1.5" fill={color} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 32" className="h-10 w-14" aria-hidden="true">
      <rect width="48" height="32" rx="4" fill={color} opacity="0.14" />
      <circle cx="24" cy="16" r="12" fill={color} opacity="0.4" />
      <circle cx="24" cy="16" r="5" fill={color} />
    </svg>
  );
}

export default function Page() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div>
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          Musiqa asboblari
        </h1>
        <p className="mt-1.5 text-sm text-ink-muted">
          Uchala cholg&apos;u brauzerda ishlaydi — ovoz real vaqtda sintez
          qilinadi, hech narsa yuklab olinmaydi.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {ASBOBLAR.map((asbob) => {
          const mashqlar = exercisesFor(asbob.kind);
          return (
            <Link key={asbob.kind} href={asbob.href} className="rounded-2xl">
              <Card className="h-full transition-shadow hover:shadow-lg">
                <CardContent className="flex h-full flex-col gap-4 p-5">
                  <AsbobIkonka kind={asbob.kind} color={asbob.rang} />

                  <div>
                    <h2 className="font-display text-base font-semibold text-ink">
                      {asbob.nom}
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {asbob.tavsif}
                    </p>
                  </div>

                  <ul className="mt-auto flex flex-col gap-1.5">
                    {mashqlar.map((m) => (
                      <li
                        key={m.id}
                        className="flex items-center gap-2 text-sm text-ink-muted"
                      >
                        <span className="min-w-0 flex-1 truncate">{m.title}</span>
                        <Badge variant="neutral">{DARAJA_NOMI[m.level]}</Badge>
                        <span className="text-xs">{m.durationMin} daq</span>
                      </li>
                    ))}
                  </ul>

                  <span className="flex items-center gap-1 text-sm font-medium text-primary">
                    Ochish
                    <ChevronRight className="size-4" aria-hidden="true" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

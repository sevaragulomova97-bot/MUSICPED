import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { DARAJA_NOMI, exercisesFor } from "@/content/practice";
import { CHOLGU_NOMI, type InstrumentKind } from "@/lib/domain/instruments";

export const metadata: Metadata = { title: "Musiqa asboblari" };

const ASBOBLAR: Array<{
  kind: InstrumentKind;
  href: string;
  tavsif: string;
  rang: string;
}> = [
  {
    kind: "pianino",
    href: "/asboblar/pianino",
    tavsif:
      "Ikki oktavali klaviatura. Sichqoncha, sensorli ekran va kompyuter klaviaturasi bilan chalinadi.",
    rang: "var(--mp-dir-nazariya)",
  },
  {
    kind: "gitara",
    href: "/asboblar/gitara",
    tavsif:
      "Klassik nayloniy torli gitara, standart sozlanish: Mi–Lya–Re–Sol–Si–Mi.",
    rang: "var(--mp-dir-metodika)",
  },
  {
    kind: "dutor",
    href: "/asboblar/dutor",
    tavsif:
      "Ikki torli an'anaviy cholg'u. Grifdagi pardalarni bosib, torni chertasiz.",
    rang: "var(--mp-dir-ijro)",
  },
  {
    kind: "rubob",
    href: "/asboblar/rubob",
    tavsif:
      "Metall torli an'anaviy cholg'u — yorqin, jarangdor tovush. Uch tor.",
    rang: "var(--mp-dir-kasbiy)",
  },
  {
    kind: "nay",
    href: "/asboblar/nay",
    tavsif:
      "Puflama cholg'u. Tovush nota bosilib turilganda davom etadi — nafas boshqaruvi mashqi.",
    rang: "var(--mp-dir-nazariya)",
  },
  {
    kind: "doira",
    href: "/asboblar/doira",
    tavsif:
      "Zarbli cholg'u: bum, tak va qarsak. Ritm mashqlari vaqt aniqligi bilan baholanadi.",
    rang: "var(--mp-dir-kasbiy)",
  },
];

/** Cholg'u ikonkasi — tashqi rasm ishlatilmaydi. */
function AsbobIkonka({ kind, color }: { kind: InstrumentKind; color: string }) {
  const fon = <rect width="48" height="32" rx="4" fill={color} opacity="0.14" />;

  if (kind === "pianino") {
    return (
      <svg viewBox="0 0 48 32" className="h-10 w-14" aria-hidden="true">
        {fon}
        {[0, 8, 16, 24, 32, 40].map((x) => (
          <rect key={x} x={x + 2} y="6" width="6" height="20" rx="1.5" fill={color} opacity="0.35" />
        ))}
        {[6, 14, 30, 38].map((x) => (
          <rect key={x} x={x} y="6" width="4" height="12" rx="1" fill={color} />
        ))}
      </svg>
    );
  }

  if (kind === "doira") {
    return (
      <svg viewBox="0 0 48 32" className="h-10 w-14" aria-hidden="true">
        {fon}
        <circle cx="24" cy="16" r="12" fill={color} opacity="0.4" />
        <circle cx="24" cy="16" r="5" fill={color} />
      </svg>
    );
  }

  if (kind === "nay") {
    return (
      <svg viewBox="0 0 48 32" className="h-10 w-14" aria-hidden="true">
        {fon}
        <rect x="5" y="13" width="38" height="6" rx="3" fill={color} />
        {[13, 20, 27, 34].map((x) => (
          <circle key={x} cx={x} cy="16" r="1.8" fill="white" opacity="0.9" />
        ))}
      </svg>
    );
  }

  // Torli cholg'ular: korpus + dasta, torlar soni bilan farqlanadi
  const torlar = kind === "gitara" ? 6 : kind === "rubob" ? 3 : 2;
  return (
    <svg viewBox="0 0 48 32" className="h-10 w-14" aria-hidden="true">
      {fon}
      <ellipse cx="13" cy="16" rx={kind === "gitara" ? 10 : 8} ry="9" fill={color} opacity="0.5" />
      <circle cx="13" cy="16" r="3" fill={color} />
      <rect x="21" y="14" width="22" height="4" rx="1.5" fill={color} />
      {Array.from({ length: torlar }, (_, i) => (
        <line
          key={i}
          x1="6"
          y1={16 - (torlar - 1) * 1.1 + i * 2.2}
          x2="43"
          y2={16 - (torlar - 1) * 1.1 + i * 2.2}
          stroke={color}
          strokeWidth="0.6"
          opacity="0.85"
        />
      ))}
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
          Oltita cholg&apos;u brauzerda ishlaydi. Ovoz haqiqiy yozib olingan
          namunalardan chiqadi va sayt bilan birga keladi — ishlash vaqtida
          tashqi serverga murojaat qilinmaydi va oflayn ham ishlaydi.
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
                      Virtual {CHOLGU_NOMI[asbob.kind].toLowerCase()}
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

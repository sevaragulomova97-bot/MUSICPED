import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  LineChart,
  Music4,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { Card, CardContent } from "@/components/ui/card";

const QADAMLAR = [
  { icon: BookOpen, title: "O'rgan", text: "Nazariy modullar va interaktiv darslar" },
  { icon: Music4, title: "Amaliyot qil", text: "Virtual pianino, dutor va doira" },
  { icon: LineChart, title: "Rivojlan", text: "Individual reja va adaptiv topshiriqlar" },
  { icon: Trophy, title: "Muvaffaqiyatga erish", text: "Portfolio va sertifikatlar" },
];

const IMKONIYATLAR = [
  {
    icon: Target,
    title: "Boshlang'ich diagnostika",
    text: "Musiqiy eshituv, ritm hissi, ijro texnikasi, sahna madaniyati, ijodkorlik va motivatsiya — 6 yo'nalish bo'yicha baholanadi.",
  },
  {
    icon: Sparkles,
    title: "Individual o'quv yo'nalishi",
    text: "Natijalar asosida har bir talabaga mos qiyinlik darajasi va topshiriqlar avtomatik tanlanadi.",
  },
  {
    icon: Music4,
    title: "Virtual cholg'ular",
    text: "Pianino, dutor va doira brauzerda chalinadi, yozib olinadi va mashq natijasi baholanadi.",
  },
  {
    icon: GraduationCap,
    title: "Pedagogik amaliyot",
    text: "Kuzatuv → mikro-o'qitish → mustaqil dars bosqichlari, mentor kuzatuv varaqasi va feedback.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-dvh">
      <header className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
        <Logo variant="dark" />
        <Link
          href="/kirish"
          className="inline-flex h-10 items-center rounded-xl px-4 text-sm font-medium text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
        >
          Kirish
        </Link>
      </header>

      <main id="asosiy-kontent">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-8 lg:pt-16">
          <div className="overflow-hidden rounded-3xl bg-sidebar px-6 py-14 text-center lg:px-16 lg:py-20">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80">
              Qo&apos;qon davlat universiteti · 13.00.02
            </p>
            <h1 className="font-display text-3xl font-bold leading-tight text-white lg:text-5xl">
              MusicPed
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-white/75 lg:text-lg">
              Bo&apos;lajak musiqa o&apos;qituvchilarini shaxsga yo&apos;naltirilgan
              ta&apos;lim texnologiyalari asosida kasbiy faoliyatga tayyorlash
              platformasi
            </p>
            <p className="mt-6 font-display text-sm italic text-secondary-soft lg:text-base">
              &laquo;Musiqa — bo&apos;lajak o&apos;qituvchi uchun ilhom manbai!&raquo;
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/kirish"
                className="inline-flex h-12 items-center rounded-xl bg-primary-solid px-7 text-sm font-medium text-white transition-colors hover:opacity-90"
              >
                Boshlash
              </Link>
              <Link
                href="#imkoniyatlar"
                className="inline-flex h-12 items-center rounded-xl border border-white/25 px-7 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Batafsil
              </Link>
            </div>
          </div>
        </section>

        {/* 4 qadam */}
        <section className="mx-auto max-w-6xl px-5 pb-16">
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {QADAMLAR.map((q, i) => {
              const Icon = q.icon;
              return (
                <li key={q.title}>
                  <Card className="h-full">
                    <CardContent className="flex h-full flex-col gap-3 p-6">
                      <span className="grid size-11 place-items-center rounded-xl bg-primary-soft text-primary-ink">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-xs font-medium text-ink-muted">
                          {i + 1}-qadam
                        </p>
                        <h2 className="font-display text-lg font-semibold text-ink">
                          {q.title}
                        </h2>
                      </div>
                      <p className="text-sm leading-relaxed text-ink-muted">
                        {q.text}
                      </p>
                    </CardContent>
                  </Card>
                </li>
              );
            })}
          </ol>
        </section>

        {/* Imkoniyatlar */}
        <section id="imkoniyatlar" className="mx-auto max-w-6xl px-5 pb-16">
          <h2 className="font-display text-2xl font-bold text-ink lg:text-3xl">
            Platforma imkoniyatlari
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-muted">
            Platforma L.S. Vigotskiyning yaqin rivojlanish zonasi, K. Rojersning
            shaxsga yo&apos;naltirilgan ta&apos;limi, B. Blum taksonomiyasi va
            J. Biggsning konstruktiv moslashuvi nazariyalariga tayanadi.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {IMKONIYATLAR.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <CardContent className="flex gap-4 p-6">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary-soft text-secondary-ink">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                        {item.text}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>

      <footer className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>MusicPed — pedagogika fanlari bo&apos;yicha dissertatsiya platformasi</p>
          <p>Ma&apos;lumotlar faqat shu brauzerda saqlanadi</p>
        </div>
      </footer>
    </div>
  );
}

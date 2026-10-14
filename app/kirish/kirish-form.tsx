"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Shield, UserRound, Users } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { useSession, type Profile } from "@/components/session-provider";
import { Card, CardContent } from "@/components/ui/card";
import type { Role } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/**
 * B1 bosqichida kirish — profil tanlash shaklida.
 * B2 da bu ro'yxat Dexie'dagi haqiqiy foydalanuvchilar bilan almashtiriladi.
 */
const DEMO_PROFILLAR: Array<Profile & { icon: typeof UserRound; tavsif: string }> = [
  {
    id: "talaba-sevaraxon",
    fullName: "Sevaraxon Egamnazarova",
    role: "TALABA",
    group: "MT-24",
    startedAt: "2025-09-01",
    direction: "Musiqa ta'limi",
    icon: UserRound,
    tavsif: "Diagnostika, individual reja, virtual cholg'ular va portfolio",
  },
  {
    id: "oqituvchi-1",
    fullName: "Dilnoza Rahimova",
    role: "OQITUVCHI",
    group: "MT-24",
    icon: Users,
    tavsif: "Talabalar ro'yxati, baholash, mentorlik va tadqiqot bo'limi",
  },
  {
    id: "admin-1",
    fullName: "Tizim administratori",
    role: "ADMIN",
    icon: Shield,
    tavsif: "Foydalanuvchilar, kontent va tizim sozlamalari",
  },
];

const BOSH_SAHIFA: Record<Role, string> = {
  TALABA: "/bosh-sahifa",
  OQITUVCHI: "/oqituvchi",
  ADMIN: "/admin",
};

export function KirishForm() {
  const { signIn } = useSession();
  const router = useRouter();
  const [tanlangan, setTanlangan] = React.useState<string>(DEMO_PROFILLAR[0].id);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const profil = DEMO_PROFILLAR.find((p) => p.id === tanlangan);
    if (!profil) return;
    const { icon: _icon, tavsif: _tavsif, ...clean } = profil;
    void _icon;
    void _tavsif;
    signIn(clean);
    router.push(BOSH_SAHIFA[clean.role]);
  }

  return (
    <div className="grid min-h-dvh place-items-center px-5 py-12">
      <div className="w-full max-w-lg">
        <div className="mb-8 flex flex-col items-center gap-4 text-center">
          <Logo variant="dark" />
          <div>
            <h1 className="font-display text-2xl font-bold text-ink">
              Platformaga kirish
            </h1>
            <p className="mt-1.5 text-sm text-ink-muted">
              Qaysi rolda ishlashni tanlang
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend className="sr-only">Profilni tanlang</legend>
            <div className="flex flex-col gap-3">
              {DEMO_PROFILLAR.map((profil) => {
                const Icon = profil.icon;
                const faol = tanlangan === profil.id;
                return (
                  <Card
                    key={profil.id}
                    className={cn(
                      "transition-colors",
                      faol
                        ? "border-primary ring-2 ring-primary/25"
                        : "hover:border-primary/40",
                    )}
                  >
                    <CardContent className="p-0">
                      <label className="flex cursor-pointer items-center gap-4 p-5">
                        <input
                          type="radio"
                          name="profil"
                          value={profil.id}
                          checked={faol}
                          onChange={() => setTanlangan(profil.id)}
                          className="size-4 accent-[var(--mp-primary)]"
                        />
                        <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-medium text-ink">
                            {profil.fullName}
                          </span>
                          <span className="block text-sm text-ink-muted">
                            {profil.tavsif}
                          </span>
                        </span>
                      </label>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </fieldset>

          <button
            type="submit"
            className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-xl bg-primary px-6 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
          >
            Davom etish
          </button>
        </form>

        <p className="mt-6 rounded-xl bg-warning-soft px-4 py-3 text-xs leading-relaxed text-ink">
          <strong className="font-semibold">Diqqat:</strong> bu platforma serversiz
          ishlaydi. Ma&apos;lumotlaringiz faqat shu brauzerda saqlanadi va bu yerda
          haqiqiy parol himoyasi yo&apos;q — shaxsiy ma&apos;lumot kiritmang.
        </p>

        <p className="mt-4 text-center text-sm">
          <Link
            href="/"
            className="rounded text-ink-muted underline-offset-4 hover:text-ink hover:underline"
          >
            Bosh sahifaga qaytish
          </Link>
        </p>
      </div>
    </div>
  );
}

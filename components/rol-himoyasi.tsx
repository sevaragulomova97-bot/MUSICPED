"use client";

import Link from "next/link";
import { ShieldAlert } from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Card, CardContent } from "@/components/ui/card";
import { ROLE_LABEL, type Role } from "@/lib/navigation";

/**
 * Bo'limni faqat mos roldagi profilga ko'rsatadi.
 *
 * Bu **xavfsizlik chorasi emas** va shunday bo'lishi ham mumkin emas:
 * platforma serversiz, kirish parolsiz va har bir profilning ma'lumoti
 * faqat o'z brauzerida yotadi — ya'ni bu yerda yashiriladigan maxfiy
 * narsa yo'q. Maqsad boshqa: talaba havola orqali o'qituvchi yoki admin
 * bo'limiga tushib qolganda, bo'sh kabinetni ko'rib «ma'lumotim
 * yo'qolibdi» deb o'ylamasin. Shuning uchun sabab aytiladi va qayerga
 * borish kerakligi ko'rsatiladi.
 */
export function RolHimoyasi({
  kerak,
  bolim,
  children,
}: {
  kerak: Role[];
  bolim: string;
  children: React.ReactNode;
}) {
  const { profile, ready } = useSession();

  // Sessiya o'qilgunicha hech narsa deyilmaydi: aks holda sahifa bir
  // lahza «ruxsat yo'q» bo'lib chaqnab ketadi.
  if (!ready || !profile || kerak.includes(profile.role)) {
    return <>{children}</>;
  }

  const kerakli = kerak.map((r) => ROLE_LABEL[r]).join(" yoki ");

  return (
    <Card className="mx-auto max-w-2xl">
      <CardContent className="flex flex-col items-center gap-4 p-10 text-center">
        <span className="grid size-12 place-items-center rounded-xl bg-warning-soft text-warning-ink">
          <ShieldAlert className="size-6" aria-hidden="true" />
        </span>
        <div>
          <h1 className="font-display text-xl font-bold text-ink">{bolim}</h1>
          <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-muted">
            Bu bo&apos;lim <strong className="font-medium text-ink">{kerakli}</strong>{" "}
            profili uchun, siz esa{" "}
            <strong className="font-medium text-ink">
              {ROLE_LABEL[profile.role]}
            </strong>{" "}
            profilidasiz ({profile.fullName}). Shuning uchun bu yerda
            ma&apos;lumot ko&apos;rinmaydi — sizning ishlaringiz o&apos;z
            bo&apos;limlaringizda turibdi.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <Link
            href="/bosh-sahifa"
            className="inline-flex h-10 items-center rounded-xl bg-primary-solid px-5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Bosh sahifaga qaytish
          </Link>
          <Link
            href="/kirish"
            className="inline-flex h-10 items-center rounded-xl border border-border-subtle px-5 text-sm font-medium text-ink transition-colors hover:bg-surface-muted"
          >
            Boshqa profil bilan kirish
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

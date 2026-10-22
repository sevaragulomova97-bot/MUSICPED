"use client";

import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import { Bell } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { initialsOf, useSession } from "@/components/session-provider";
import {
  allDiagnostics,
  allProgress,
  listSubmissions,
  recentActivity,
} from "@/lib/db/repo";
import { ROLE_LABEL } from "@/lib/navigation";
import { muhimlar, xabarlar } from "@/lib/notifications";

export function Header() {
  const { profile } = useSession();
  const userId = profile?.role === "TALABA" ? profile.id : undefined;

  // Faqat talabada: o'qituvchi va adminning eslatmalari boshqacha va
  // ular o'z kabinetida ko'rsatiladi.
  const muhimSoni =
    useLiveQuery(async () => {
      if (!userId) return 0;
      const [diagnostics, progress, submissions, faoliyat] = await Promise.all([
        allDiagnostics(userId),
        allProgress(userId),
        listSubmissions(userId),
        recentActivity(userId, 200),
      ]);
      const lastExport = faoliyat
        .filter((a) => a.type === "eksport")
        .map((a) => a.createdAt)
        .sort()
        .at(-1);
      return muhimlar(xabarlar({ diagnostics, progress, submissions, lastExport }));
    }, [userId]) ?? 0;

  return (
    <header className="sticky top-0 z-30 border-b border-border-subtle bg-surface/85 backdrop-blur">
      <div className="flex h-16 items-center gap-3 px-4 lg:px-8">
        <Link href="/bosh-sahifa" className="inline-flex rounded-lg lg:hidden">
          <Logo variant="dark" />
        </Link>

        <div className="ml-auto flex items-center gap-1">
          <ThemeToggle />

          {/*
            Qo'ng'iroq yonidagi raqam — **muhim** eslatmalar soni.
            Hammasini sanash ma'nosiz: ro'yxat doim bo'sh bo'lmaydi va
            raqam diqqatni tortishdan to'xtaydi.
          */}
          <Link
            href="/bildirishnomalar"
            aria-label={
              muhimSoni > 0
                ? `Bildirishnomalar — ${muhimSoni} ta muhim eslatma`
                : "Bildirishnomalar"
            }
            className="relative grid size-10 place-items-center rounded-xl text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
          >
            <Bell className="size-5" aria-hidden="true" />
            {muhimSoni > 0 && (
              <span
                aria-hidden="true"
                className="absolute right-1.5 top-1.5 grid min-w-4 place-items-center rounded-full bg-danger-solid px-1 text-[10px] font-semibold leading-4 text-white"
              >
                {muhimSoni > 9 ? "9+" : muhimSoni}
              </span>
            )}
          </Link>

          {profile && (
            <Link
              href="/profil"
              className="ml-1 flex items-center gap-2.5 rounded-xl py-1.5 pl-1.5 pr-3 transition-colors hover:bg-surface-muted"
            >
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-full bg-primary-soft text-sm font-semibold text-primary-ink"
              >
                {initialsOf(profile.fullName)}
              </span>
              <span className="hidden text-left leading-tight sm:block">
                <span className="block text-sm font-medium text-ink">
                  {profile.fullName}
                </span>
                <span className="block text-xs text-ink-muted">
                  {ROLE_LABEL[profile.role]}
                </span>
              </span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

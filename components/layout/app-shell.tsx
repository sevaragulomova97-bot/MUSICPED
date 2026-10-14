"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/header";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Sidebar } from "@/components/layout/sidebar";
import { SkipLink } from "@/components/ui/skip-link";
import { useSession } from "@/components/session-provider";

/**
 * Ilova qobig'i: sidebar (lg+) yoki pastki panel (mobil) + sarlavha.
 *
 * Sayt statik eksport bo'lgani uchun himoya server tomonda emas, klientda
 * bajariladi — bu haqiqiy xavfsizlik emas, faqat navigatsiya qulayligi.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const { profile, ready } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (ready && !profile) router.replace("/kirish");
  }, [ready, profile, router]);

  if (!ready) {
    return (
      <div className="grid min-h-dvh place-items-center" aria-busy="true">
        <p className="text-sm text-ink-muted">Yuklanmoqda…</p>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="grid min-h-dvh place-items-center px-6 text-center">
        <p className="text-sm text-ink-muted">
          Kirish sahifasiga yo&apos;naltirilmoqda…
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh">
      <SkipLink />
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header />
        <main
          id="asosiy-kontent"
          tabIndex={-1}
          className="flex-1 px-4 pb-24 pt-6 lg:px-8 lg:pb-10"
        >
          {children}
        </main>
      </div>
      <MobileNav />
    </div>
  );
}

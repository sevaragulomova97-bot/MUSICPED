"use client";

import Link from "next/link";
import { Bell } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { initialsOf, useSession } from "@/components/session-provider";
import { ROLE_LABEL } from "@/lib/navigation";

export function Header() {
  const { profile } = useSession();

  return (
    <header className="sticky top-0 z-30 border-b border-border-subtle bg-surface/85 backdrop-blur">
      <div className="flex h-16 items-center gap-3 px-4 lg:px-8">
        <Link href="/bosh-sahifa" className="inline-flex rounded-lg lg:hidden">
          <Logo variant="dark" />
        </Link>

        <div className="ml-auto flex items-center gap-1">
          <ThemeToggle />

          <Link
            href="/bildirishnomalar"
            aria-label="Bildirishnomalar"
            className="grid size-10 place-items-center rounded-xl text-ink-muted transition-colors hover:bg-surface-muted hover:text-ink"
          >
            <Bell className="size-5" aria-hidden="true" />
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

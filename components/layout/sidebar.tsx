"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { useSession } from "@/components/session-provider";
import { findActiveHref, GUIDE_NAV, NAV_BY_ROLE, SETTINGS_NAV } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const { profile, signOut } = useSession();
  const items = NAV_BY_ROLE[profile?.role ?? "TALABA"];
  const activeHref = findActiveHref(pathname, [...items, GUIDE_NAV, SETTINGS_NAV]);

  return (
    <aside className="sticky top-0 hidden h-dvh w-60 shrink-0 flex-col bg-sidebar lg:flex">
      <div className="px-5 py-6">
        <Link href="/bosh-sahifa" className="inline-flex rounded-lg">
          <Logo />
        </Link>
      </div>

      <nav aria-label="Asosiy menyu" className="flex-1 overflow-y-auto px-3">
        <ul className="flex flex-col gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            const active = activeHref === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
                    active
                      ? "bg-sidebar-active font-medium text-sidebar-ink-active"
                      : "text-sidebar-ink hover:bg-sidebar-hover hover:text-sidebar-ink-active",
                  )}
                >
                  <Icon className="size-[18px] shrink-0" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-white/10 p-3">
        <Link
          href={GUIDE_NAV.href}
          aria-current={activeHref === GUIDE_NAV.href ? "page" : undefined}
          className={cn(
            "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
            activeHref === GUIDE_NAV.href
              ? "bg-sidebar-active font-medium text-sidebar-ink-active"
              : "text-sidebar-ink hover:bg-sidebar-hover hover:text-sidebar-ink-active",
          )}
        >
          <GUIDE_NAV.icon className="size-[18px] shrink-0" aria-hidden="true" />
          {GUIDE_NAV.label}
        </Link>
        <Link
          href={SETTINGS_NAV.href}
          aria-current={activeHref === SETTINGS_NAV.href ? "page" : undefined}
          className={cn(
            "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors",
            activeHref === SETTINGS_NAV.href
              ? "bg-sidebar-active font-medium text-sidebar-ink-active"
              : "text-sidebar-ink hover:bg-sidebar-hover hover:text-sidebar-ink-active",
          )}
        >
          <SETTINGS_NAV.icon className="size-[18px] shrink-0" aria-hidden="true" />
          {SETTINGS_NAV.label}
        </Link>
        {profile && (
          <button
            type="button"
            onClick={signOut}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-sidebar-ink transition-colors hover:bg-sidebar-hover hover:text-sidebar-ink-active"
          >
            <LogOut className="size-[18px] shrink-0" aria-hidden="true" />
            Chiqish
          </button>
        )}
      </div>
    </aside>
  );
}

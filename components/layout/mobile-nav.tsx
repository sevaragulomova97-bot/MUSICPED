"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession } from "@/components/session-provider";
import { findActiveHref, NAV_BY_ROLE } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/** Mobil qurilmada sidebar o'rniga ishlatiladigan pastki navigatsiya paneli. */
export function MobileNav() {
  const pathname = usePathname();
  const { profile } = useSession();
  const items = NAV_BY_ROLE[profile?.role ?? "TALABA"].filter((i) => i.mobile);
  const activeHref = findActiveHref(pathname, items);

  return (
    <nav
      aria-label="Mobil menyu"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border-subtle bg-surface pb-[env(safe-area-inset-bottom)] lg:hidden"
    >
      <ul className="flex items-stretch">
        {items.map((item) => {
          const Icon = item.icon;
          const active = activeHref === item.href;
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                aria-label={item.label}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center gap-1 px-1 py-2 text-[11px] leading-tight transition-colors",
                  active ? "text-primary" : "text-ink-muted",
                )}
              >
                <Icon className="size-5 shrink-0" aria-hidden="true" />
                <span className="line-clamp-1">{item.shortLabel ?? item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

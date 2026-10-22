"use client";

import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import { AlertTriangle, BellOff, CircleCheck, Info } from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Card, CardContent } from "@/components/ui/card";
import {
  allDiagnostics,
  allProgress,
  listSubmissions,
  recentActivity,
} from "@/lib/db/repo";
import { xabarlar, type XabarDarajasi } from "@/lib/notifications";
import { formatDate } from "@/lib/utils";

/**
 * Bildirishnomalar.
 *
 * Platformada server yo'q, demak hech kim xabar yubormaydi — lekin
 * eslatish kerak bo'lgan narsalar bor va ularning hammasi brauzerdagi
 * ma'lumotdan kelib chiqadi. Qoidalar `lib/notifications.ts` da, sof
 * funksiya ko'rinishida va testlar bilan qoplangan.
 */

const BELGI: Record<XabarDarajasi, { Icon: typeof Info; klass: string }> = {
  muhim: { Icon: AlertTriangle, klass: "bg-warning-soft text-warning-ink" },
  eslatma: { Icon: Info, klass: "bg-primary-soft text-primary-ink" },
  "maʼlumot": { Icon: CircleCheck, klass: "bg-success-soft text-success-ink" },
};

export function Bildirishnomalar() {
  const { profile } = useSession();
  const userId = profile?.id;

  const malumot = useLiveQuery(async () => {
    if (!userId) return null;
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
    return { diagnostics, progress, submissions, lastExport };
  }, [userId]);

  if (!userId) {
    return (
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-ink-muted">Avval profilga kiring.</p>
      </div>
    );
  }

  if (malumot === undefined) {
    return (
      <div className="mx-auto max-w-3xl">
        <p className="text-sm text-ink-muted">Yuklanmoqda…</p>
      </div>
    );
  }

  const royxat = malumot ? xabarlar(malumot) : [];

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <div>
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          Bildirishnomalar
        </h1>
        <p className="mt-1.5 text-sm text-ink-muted">
          Eslatmalar sizning ma&apos;lumotingizdan hisoblanadi — serverdan
          kelmaydi.
        </p>
      </div>

      {royxat.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
            <span className="grid size-12 place-items-center rounded-xl bg-surface-muted text-ink-muted">
              <BellOff className="size-6" aria-hidden="true" />
            </span>
            <p className="font-medium text-ink">Hammasi joyida</p>
            <p className="max-w-sm text-sm text-ink-muted">
              Hozircha eslatma yo&apos;q. Yangi baho kelganda yoki kurs
              yakunlanganda shu yerda ko&apos;rinadi.
            </p>
          </CardContent>
        </Card>
      ) : (
        <ul className="flex flex-col gap-3">
          {royxat.map((x) => {
            const { Icon, klass } = BELGI[x.daraja];
            return (
              <li key={x.id}>
                <Link
                  href={x.href}
                  className="flex items-start gap-3 rounded-2xl border border-border-subtle bg-surface p-4 transition-colors hover:bg-surface-muted"
                >
                  <span
                    className={`grid size-10 shrink-0 place-items-center rounded-xl ${klass}`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-medium text-ink">{x.sarlavha}</span>
                    <span className="text-sm text-ink-muted">{x.matn}</span>
                    {x.sana && (
                      <span className="text-xs text-ink-muted">
                        {formatDate(x.sana)}
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

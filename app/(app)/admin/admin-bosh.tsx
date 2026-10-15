"use client";

import Link from "next/link";
import { AlertTriangle, BookOpen, CheckCircle2, Shield, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { auditIssues, inventory, moduleRows } from "@/lib/content-audit";
import { ASOSIY_YONALISH_NOMI } from "@/lib/domain/types";

/**
 * Admin paneli — serversiz platformada u nimani boshqaradi?
 *
 * Foydalanuvchilarni emas: markaziy ro'yxat yo'q, har bir brauzer o'zicha.
 * Shuning uchun panelning asosiy vazifasi — **kontentning yaxlitligini**
 * tekshirish: har bir o'quv natijasining darsi va baholovchi topshirig'i
 * bormi (konstruktiv moslashuv).
 */
export function AdminBosh() {
  const inv = inventory();
  const issues = auditIssues();
  const modullar = moduleRows();

  const xatolar = issues.filter((i) => i.level === "xato");
  const ogohlantirishlar = issues.filter((i) => i.level === "ogohlantirish");

  const kartalar = [
    { nom: "Modullar", qiymat: inv.modullar, izoh: `${inv.jamiKredit} ECTS kredit` },
    { nom: "O'quv natijalari", qiymat: inv.oquvNatijalari, izoh: "konstruktiv moslashuv asosi" },
    { nom: "Darslar", qiymat: inv.darslar, izoh: `${inv.kurslar} kursda` },
    { nom: "Topshiriqlar", qiymat: inv.topshiriqlar, izoh: `${inv.rubrikalar} ta rubrika` },
    { nom: "Diagnostika savollari", qiymat: inv.diagnostikaSavollari, izoh: "8 yo'nalish" },
    { nom: "Cholg'u mashqlari", qiymat: inv.mashqlar, izoh: "6 cholg'u" },
  ];

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div>
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          Admin paneli
        </h1>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
          Platforma serversiz, shuning uchun markaziy foydalanuvchilar ro&apos;yxati
          yo&apos;q. Panel ikki ish qiladi: <strong className="font-medium text-ink">shu
          brauzerdagi</strong> profillarni ko&apos;rsatadi va o&apos;quv kontentining
          yaxlitligini tekshiradi.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {kartalar.map((k) => (
          <Card key={k.nom}>
            <CardContent className="p-5">
              <p className="text-sm text-ink-muted">{k.nom}</p>
              <p className="mt-1 font-display text-3xl font-bold tabular-nums text-ink">
                {k.qiymat}
              </p>
              <p className="mt-0.5 text-xs text-ink-muted">{k.izoh}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <CardTitle>Kontent auditi</CardTitle>
          <Link href="/admin/kontent" className="text-sm text-primary hover:underline">
            Batafsil
          </Link>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {issues.length === 0 ? (
            <p className="flex items-center gap-2 text-sm text-success">
              <CheckCircle2 className="size-4" aria-hidden="true" />
              Muammo topilmadi — har bir o&apos;quv natijasining darsi va baholovchi
              topshirig&apos;i bor.
            </p>
          ) : (
            <>
              <div className="flex flex-wrap gap-2">
                <Badge variant={xatolar.length ? "danger" : "success"}>
                  {xatolar.length} xato
                </Badge>
                <Badge variant={ogohlantirishlar.length ? "warning" : "success"}>
                  {ogohlantirishlar.length} ogohlantirish
                </Badge>
              </div>
              <ul className="flex flex-col gap-2">
                {issues.map((i) => (
                  <li
                    key={i.message}
                    className={
                      i.level === "xato"
                        ? "flex items-start gap-2 text-sm text-danger"
                        : "flex items-start gap-2 text-sm text-warning"
                    }
                  >
                    <AlertTriangle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    <span className="leading-relaxed">{i.message}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Modullar bo&apos;yicha qamrov</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {modullar.map(({ module, darslar, topshiriqlar, qoplangan }) => {
            const foiz = Math.round((qoplangan / module.outcomes.length) * 100);
            return (
              <div key={module.id}>
                <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-2">
                  <span className="text-sm font-medium text-ink">
                    {module.title}
                    <span className="ml-2 text-xs font-normal text-ink-muted">
                      {ASOSIY_YONALISH_NOMI[module.direction]} · {module.credits} kredit
                    </span>
                  </span>
                  <span className="text-xs tabular-nums text-ink-muted">
                    {qoplangan}/{module.outcomes.length} natija qoplangan · {darslar} dars ·{" "}
                    {topshiriqlar} topshiriq
                  </span>
                </div>
                <Progress value={foiz} />
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bo&apos;limlar</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3 sm:grid-cols-3">
          {[
            { href: "/admin/foydalanuvchilar", icon: Users, nom: "Foydalanuvchilar", tavsif: "Shu brauzerdagi profillar" },
            { href: "/admin/kontent", icon: BookOpen, nom: "Kontent", tavsif: "Konstruktiv moslashuv jadvali" },
            { href: "/admin/jurnal", icon: Shield, nom: "Faoliyat jurnali", tavsif: "Harakatlar tarixi" },
          ].map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className="flex items-start gap-3 rounded-xl border border-border-subtle p-4 transition-colors hover:bg-surface-muted"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                <b.icon className="size-4.5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-medium text-ink">{b.nom}</span>
                <span className="mt-0.5 block text-xs leading-relaxed text-ink-muted">
                  {b.tavsif}
                </span>
              </span>
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

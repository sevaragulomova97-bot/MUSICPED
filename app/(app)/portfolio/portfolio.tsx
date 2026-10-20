"use client";

import * as React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import {
  Award,
  Download,
  FileText,
  FolderOpen,
  Music4,
  Trash2,
  Upload,
} from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  addPortfolioFile,
  deletePortfolioItem,
  listPortfolio,
  listSubmissions,
  MAX_FILE_BYTES,
  MAX_PORTFOLIO_BYTES,
  portfolioUsage,
  allProgress,
} from "@/lib/db/repo";
import { finalStatus, moduleStatuses } from "@/lib/certificates";
import type { StoredPortfolioItem } from "@/lib/db/schema";
import {
  buildCertificatePdf,
  certificateSerial,
  downloadBlob,
} from "@/lib/export/certificate";
import { cn, formatDate } from "@/lib/utils";

type Kategoriya = StoredPortfolioItem["category"];

const TABLAR: Array<{ id: Kategoriya; label: string; icon: typeof FolderOpen }> = [
  { id: "ishlar", label: "Mening ishlarim", icon: FolderOpen },
  { id: "ishlanmalar", label: "Dars ishlanmalari", icon: FileText },
  { id: "ijodiy", label: "Ijodiy ishlar", icon: Music4 },
  { id: "sertifikat", label: "Sertifikatlar", icon: Award },
];

const MB = 1024 * 1024;

export function Portfolio() {
  const { profile } = useSession();
  const userId = profile?.id;
  const [tab, setTab] = React.useState<Kategoriya>("ishlar");
  const [error, setError] = React.useState<string | null>(null);
  const [busy, setBusy] = React.useState(false);

  const data = useLiveQuery(async () => {
    if (!userId) return null;
    const [items, used, subs, prog] = await Promise.all([
      listPortfolio(userId),
      portfolioUsage(userId),
      listSubmissions(userId),
      allProgress(userId),
    ]);
    return { items, used, subs, prog };
  }, [userId]);

  const items = (data?.items ?? []).filter((i) => i.category === tab);
  const used = data?.used ?? 0;

  // Sertifikat shartlari `lib/certificates.ts` da — u yerda ular unit
  // test bilan qo'riqlanadi.
  const modulHolati = React.useMemo(
    () => moduleStatuses(data?.prog ?? [], data?.subs ?? []),
    [data?.prog, data?.subs],
  );
  const yakuniyHolat = React.useMemo(() => finalStatus(modulHolati), [modulHolati]);

  async function upload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file || !userId) return;
    setBusy(true);
    setError(null);
    try {
      await addPortfolioFile(userId, tab, file.name, file);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Faylni saqlab bo'lmadi.");
    } finally {
      setBusy(false);
      e.target.value = "";
    }
  }

  async function certificate(modulIndex: number) {
    if (!profile) return;
    const { modul, ortacha } = modulHolati[modulIndex];
    setBusy(true);
    setError(null);
    try {
      const issuedAt = new Date();
      const blob = await buildCertificatePdf({
        kind: "oraliq",
        fullName: profile.fullName,
        moduleTitle: modul.title,
        credits: modul.credits,
        score: ortacha || 100,
        issuedAt,
        serial: certificateSerial(profile.fullName, modul.id, issuedAt),
      });
      downloadBlob(blob, `oraliq-sertifikat-${modul.slug}.pdf`);
      // Sertifikat portfolioda ham qoladi
      await addPortfolioFile(
        userId!,
        "sertifikat",
        `Oraliq sertifikat — ${modul.title}`,
        new File([blob], `oraliq-sertifikat-${modul.slug}.pdf`, { type: "application/pdf" }),
        `${modul.credits} ECTS · ${ortacha}%`,
      );
    } catch (cause) {
      console.error(cause);
      setError("Sertifikatni yaratib bo'lmadi.");
    } finally {
      setBusy(false);
    }
  }

  /**
   * Yakuniy sertifikat — barcha kurslar yakunlanganda.
   *
   * Tugma faqat shart bajarilganda faol bo'ladi; aks holda qaysi kurslar
   * qolgani ro'yxat bilan ko'rsatiladi.
   */
  async function finalCertificate() {
    if (!profile || !yakuniyHolat.tayyor) return;
    setBusy(true);
    setError(null);
    try {
      const issuedAt = new Date();
      const blob = await buildCertificatePdf({
        kind: "yakuniy",
        fullName: profile.fullName,
        modules: modulHolati.map((m) => ({
          title: m.modul.title,
          credits: m.modul.credits,
        })),
        totalCredits: yakuniyHolat.jamiKredit,
        score: yakuniyHolat.ortacha || 100,
        issuedAt,
        serial: certificateSerial(profile.fullName, "yakuniy", issuedAt),
      });
      downloadBlob(blob, "yakuniy-sertifikat.pdf");
      await addPortfolioFile(
        userId!,
        "sertifikat",
        "Yakuniy sertifikat — barcha kurslar",
        new File([blob], "yakuniy-sertifikat.pdf", { type: "application/pdf" }),
        `${yakuniyHolat.jamiKredit} ECTS · ${yakuniyHolat.ortacha}%`,
      );
    } catch (cause) {
      console.error(cause);
      setError("Yakuniy sertifikatni yaratib bo'lmadi.");
    } finally {
      setBusy(false);
    }
  }

  function open(item: StoredPortfolioItem) {
    if (!item.blob) return;
    downloadBlob(item.blob, item.fileName ?? `${item.title}.bin`);
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div>
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          Elektron portfolio
        </h1>
        <p className="mt-1.5 text-sm text-ink-muted">
          Fayllar brauzeringizda saqlanadi — serverga yuborilmaydi.
        </p>
      </div>

      {error && (
        <p role="alert" className="rounded-xl bg-danger-soft px-4 py-3 text-sm text-danger-ink">
          {error}
        </p>
      )}

      {/* Tablar */}
      <div role="tablist" aria-label="Portfolio bo'limlari" className="flex flex-wrap gap-2">
        {TABLAR.map((t) => {
          const Icon = t.icon;
          const soni = (data?.items ?? []).filter((i) => i.category === t.id).length;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                tab === t.id
                  ? "bg-primary-solid text-white"
                  : "bg-surface text-ink-muted hover:bg-surface-muted hover:text-ink",
              )}
            >
              <Icon className="size-4" aria-hidden="true" />
              {t.label}
              <span className="tabular-nums">{soni}</span>
            </button>
          );
        })}
      </div>

      {/* Sertifikatlar bo'limi — har bir kurs uchun oraliq sertifikat */}
      {tab === "sertifikat" && (
        <Card>
          <CardHeader>
            <CardTitle>Oraliq sertifikatlar — har bir kurs uchun</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col gap-3">
              {modulHolati.map((m, i) => (
                <li
                  key={m.modul.id}
                  className="flex flex-wrap items-center gap-3 rounded-xl border border-border-subtle p-4"
                >
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-ink">
                      {m.modul.title}
                    </span>
                    <span className="block text-xs text-ink-muted">
                      {m.modul.credits} ECTS · darslar {m.tugagan}/{m.darslar}
                      {m.soni > 0 ? ` · o'rtacha ${m.ortacha}%` : ""}
                    </span>
                  </span>

                  {m.tayyor ? (
                    <Button size="sm" onClick={() => void certificate(i)} disabled={busy}>
                      <Download aria-hidden="true" />
                      Oraliq sertifikat
                    </Button>
                  ) : (
                    <Badge variant="neutral">{m.sabab}</Badge>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Yakuniy sertifikat — barcha kurslar yakunlanganda */}
      {tab === "sertifikat" && (
        <Card
          className={cn(
            yakuniyHolat.tayyor && "border-primary/50 bg-primary-soft/30",
          )}
        >
          <CardHeader>
            <CardTitle>Yakuniy sertifikat</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-sm leading-relaxed text-ink-muted">
              Dasturning barcha {yakuniyHolat.jami} ta kursi yakunlanganda
              beriladi. Hujjatda kurslar ro&apos;yxati, jami{" "}
              {yakuniyHolat.jamiKredit} ECTS kredit va umumiy natija
              ko&apos;rsatiladi.
            </p>

            <Progress
              value={Math.round(
                (yakuniyHolat.tugagan / Math.max(1, yakuniyHolat.jami)) * 100,
              )}
              label={`${yakuniyHolat.tugagan} / ${yakuniyHolat.jami} kurs yakunlandi`}
            />

            {yakuniyHolat.tayyor ? (
              <div className="flex flex-wrap items-center gap-3">
                <Button onClick={() => void finalCertificate()} disabled={busy}>
                  <Award aria-hidden="true" />
                  Yakuniy sertifikatni olish
                </Button>
                <span className="text-xs text-ink-muted">
                  Umumiy natija: {yakuniyHolat.ortacha}%
                </span>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <p className="text-sm text-ink">Yakunlanmagan kurslar:</p>
                <ul className="flex flex-wrap gap-2">
                  {yakuniyHolat.qolgan.map((nom) => (
                    <li key={nom}>
                      <Badge variant="neutral">{nom}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Fayl qo'shish */}
      <Card>
        <CardContent className="flex flex-col gap-3 p-5">
          <label className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-dashed border-border-subtle p-8 text-center transition-colors hover:border-primary/50 hover:bg-primary-soft/30">
            <Upload className="size-6 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-ink">
              {busy ? "Saqlanmoqda…" : "Yangi fayl qo'shish"}
            </span>
            <span className="text-xs text-ink-muted">
              PDF, DOCX, audio, video, rasm · eng ko&apos;pi {MAX_FILE_BYTES / MB} MB
            </span>
            <input type="file" onChange={(e) => void upload(e)} className="sr-only" disabled={busy} />
          </label>

          <Progress
            value={(used / MAX_PORTFOLIO_BYTES) * 100}
            label={`Band qilingan joy: ${(used / MB).toFixed(1)} MB / ${MAX_PORTFOLIO_BYTES / MB} MB`}
          />
        </CardContent>
      </Card>

      {/* Fayllar */}
      {items.length === 0 ? (
        <Card>
          <CardContent className="p-10 text-center text-sm text-ink-muted">
            Bu bo&apos;limda hali fayl yo&apos;q.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.id}>
              <CardContent className="flex h-full flex-col gap-3 p-5">
                <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary-ink">
                  {item.category === "sertifikat" ? (
                    <Award className="size-5" aria-hidden="true" />
                  ) : item.category === "ijodiy" ? (
                    <Music4 className="size-5" aria-hidden="true" />
                  ) : (
                    <FileText className="size-5" aria-hidden="true" />
                  )}
                </span>

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-ink">{item.title}</p>
                  {item.description && (
                    <p className="mt-0.5 text-xs text-ink-muted">{item.description}</p>
                  )}
                  <p className="mt-1 text-xs text-ink-muted">
                    {formatDate(item.createdAt)}
                    {item.sizeBytes ? ` · ${(item.sizeBytes / MB).toFixed(1)} MB` : ""}
                  </p>
                </div>

                <div className="mt-auto flex gap-2">
                  {item.blob && (
                    <Button size="sm" variant="soft" onClick={() => open(item)}>
                      <Download aria-hidden="true" />
                      Yuklab olish
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="ghost"
                    aria-label={`${item.title} — o'chirish`}
                    onClick={() => userId && void deletePortfolioItem(userId, item.id)}
                  >
                    <Trash2 aria-hidden="true" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

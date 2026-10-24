"use client";

import * as React from "react";
import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import { Download, GraduationCap, Trash2 } from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  MENTORLIK_BOSQICHLARI,
  MEZON_IZOHI,
  MEZON_MAX,
  type MentorshipStage,
  stageMax,
} from "@/content/mentorship";
import {
  deleteMentorship,
  listDatasets,
  listMentorship,
  saveMentorship,
} from "@/lib/db/repo";
import { downloadCsv } from "@/lib/export/download";
import { BLOOM_NOMI } from "@/lib/domain/types";
import { formatDate } from "@/lib/utils";

export function Mentorlik() {
  const { profile } = useSession();
  const ownerId = profile?.id;
  const [bosqichId, setBosqichId] = React.useState(MENTORLIK_BOSQICHLARI[0].id);
  const [talabaId, setTalabaId] = React.useState<string>("");

  const data = useLiveQuery(async () => {
    if (!ownerId) return null;
    const [datasets, varaqalar] = await Promise.all([
      listDatasets(ownerId),
      listMentorship(ownerId),
    ]);
    return { datasets, varaqalar };
  }, [ownerId]);

  const bosqich = MENTORLIK_BOSQICHLARI.find((b) => b.id === bosqichId)!;

  if (data === undefined) {
    return <p className="text-sm text-ink-muted">Yuklanmoqda…</p>;
  }

  const talabalar = data?.datasets ?? [];
  const varaqalar = data?.varaqalar ?? [];
  const joriy = talabalar.find((t) => t.studentId === talabaId);

  function eksportCsv() {
    const sarlavha = ["Talaba", "Bosqich", "Sana", "Ball", "Maksimal", "Foiz", "Izoh"];
    const qatorlar = varaqalar.map((v) => {
      const b = MENTORLIK_BOSQICHLARI.find((x) => x.id === v.stageId);
      const jami = Object.values(v.scores).reduce((a, c) => a + c, 0);
      const max = b ? stageMax(b) : 0;
      return [
        v.studentName,
        b?.title ?? v.stageId,
        formatDate(v.observedAt),
        jami,
        max,
        max ? Math.round((jami / max) * 100) : "",
        v.comment ?? "",
      ];
    });
    downloadCsv([sarlavha, ...qatorlar], "mentorlik-kuzatuvlari.csv");
  }

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <div>
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          Pedagogik amaliyot (mentorlik)
        </h1>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
          Uch bosqich: kuzatuv → mikro-o&apos;qitish → mustaqil dars. Ketma-ketlik
          yaqin rivojlanish zonasi mantiqiga mos — avval ustoz bilan, keyin
          yordam bilan, oxirida mustaqil.
        </p>
      </div>

      {/* Bosqich tanlash */}
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Amaliyot bosqichlari">
        {MENTORLIK_BOSQICHLARI.map((b) => (
          <button
            key={b.id}
            type="button"
            role="tab"
            aria-selected={b.id === bosqichId}
            onClick={() => setBosqichId(b.id)}
            className={
              b.id === bosqichId
                ? "rounded-xl bg-primary-solid px-4 py-2 text-sm font-medium text-white"
                : "rounded-xl border border-border-subtle px-4 py-2 text-sm text-ink transition-colors hover:bg-surface-muted"
            }
          >
            {b.title}
          </button>
        ))}
      </div>

      <BosqichKarta stage={bosqich} />

      {/* Kuzatuv varaqasi */}
      <Card>
        <CardHeader>
          <CardTitle>Kuzatuv varaqasi</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {talabalar.length === 0 ? (
            <p className="text-sm leading-relaxed text-ink-muted">
              Kuzatuv varaqasini to&apos;ldirish uchun avval talaba ma&apos;lumotini
              qabul qiling —{" "}
              {/*
                Matn ichidagi havola doim chiziladi: faqat rang bilan
                ajratish rang ko'rishi buzilgan foydalanuvchi uchun
                havolani ko'rinmas qiladi (WCAG 1.4.1).
              */}
              <Link href="/oqituvchi" className="text-primary underline">
                kabinet bosh sahifasi
              </Link>
              .
            </p>
          ) : (
            <>
              <label className="flex flex-col gap-1.5 text-sm sm:max-w-sm">
                <span className="text-ink-muted">Talaba</span>
                <select
                  value={talabaId}
                  onChange={(e) => setTalabaId(e.target.value)}
                  className="h-10 rounded-lg border border-border-subtle bg-surface px-3 text-sm text-ink"
                >
                  <option value="">Tanlanmagan</option>
                  {talabalar.map((t) => (
                    <option key={t.studentId} value={t.studentId}>
                      {t.studentName}
                    </option>
                  ))}
                </select>
              </label>

              {joriy && ownerId && (
                <VaraqaForm
                  key={`${joriy.studentId}-${bosqich.id}`}
                  ownerId={ownerId}
                  studentId={joriy.studentId}
                  studentName={joriy.studentName}
                  stage={bosqich}
                  mavjud={varaqalar.find(
                    (v) => v.studentId === joriy.studentId && v.stageId === bosqich.id,
                  )}
                />
              )}
            </>
          )}
        </CardContent>
      </Card>

      {/* To'ldirilgan varaqalar */}
      {varaqalar.length > 0 && (
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle>To&apos;ldirilgan varaqalar ({varaqalar.length})</CardTitle>
            <Button variant="outline" size="sm" onClick={eksportCsv}>
              <Download aria-hidden="true" />
              CSV
            </Button>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col divide-y divide-border-subtle">
              {varaqalar.map((v) => {
                const b = MENTORLIK_BOSQICHLARI.find((x) => x.id === v.stageId);
                const jami = Object.values(v.scores).reduce((a, c) => a + c, 0);
                const max = b ? stageMax(b) : 0;
                const foiz = max ? Math.round((jami / max) * 100) : 0;
                return (
                  <li key={v.id} className="flex items-center gap-3 py-2.5">
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-medium text-ink">
                        {v.studentName}
                      </span>
                      <span className="text-xs text-ink-muted">
                        {b?.title ?? v.stageId} · {formatDate(v.observedAt)} ·{" "}
                        {jami}/{max} ball ({foiz}%)
                        {v.comment && ` · ${v.comment.slice(0, 60)}${v.comment.length > 60 ? "…" : ""}`}
                      </span>
                    </span>
                    <Badge
                      variant={foiz >= 80 ? "success" : foiz >= 60 ? "primary" : "warning"}
                    >
                      {foiz}%
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      aria-label={`${v.studentName} varaqasini o'chirish`}
                      onClick={() => void deleteMentorship(ownerId!, v.id)}
                    >
                      <Trash2 aria-hidden="true" />
                    </Button>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function BosqichKarta({ stage }: { stage: MentorshipStage }) {
  return (
    <Card>
      <CardHeader className="flex-row flex-wrap items-start justify-between gap-2">
        <div>
          <CardTitle>{stage.title}</CardTitle>
          <p className="mt-1 text-sm leading-relaxed text-ink-muted">{stage.goal}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="neutral">{stage.duration}</Badge>
          <Badge variant="secondary">{BLOOM_NOMI[stage.bloom]}</Badge>
        </div>
      </CardHeader>
      <CardContent className="grid gap-5 sm:grid-cols-2">
        <div>
          <h3 className="mb-2 flex items-center gap-2 text-sm font-medium text-ink">
            <GraduationCap className="size-4 text-primary" aria-hidden="true" />
            Talaba nima qiladi
          </h3>
          <ul className="flex flex-col gap-1.5 text-sm text-ink-muted">
            {stage.tasks.map((t) => (
              <li key={t} className="flex gap-2">
                <span aria-hidden="true" className="text-primary">
                  •
                </span>
                <span className="leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-sm font-medium text-ink">
            Bosqich oxiridagi refleksiya
          </h3>
          <ul className="flex flex-col gap-1.5 text-sm text-ink-muted">
            {stage.reflection.map((r) => (
              <li key={r} className="leading-relaxed italic">
                {r}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}

/**
 * Kuzatuv varaqasining formasi.
 *
 * Har bir mezon 1–5 ball bilan baholanadi va shkalaning ma'nosi yonida
 * yozilgan — «4» nimani bildirishini o'qituvchi eslab qolishi shart emas.
 */
function VaraqaForm({
  ownerId,
  studentId,
  studentName,
  stage,
  mavjud,
}: {
  ownerId: string;
  studentId: string;
  studentName: string;
  stage: MentorshipStage;
  mavjud?: { scores: Record<string, number>; comment?: string; observedAt: string };
}) {
  const [ballar, setBallar] = React.useState<Record<string, number>>(() =>
    Object.fromEntries(
      stage.criteria.map((c) => [c.id, mavjud?.scores[c.id] ?? 3]),
    ),
  );
  const [izoh, setIzoh] = React.useState(mavjud?.comment ?? "");
  const [saqlandi, setSaqlandi] = React.useState(false);
  const [band, setBand] = React.useState(false);
  // Kuzatuv varaqasi — qo'lda to'ldirilgan ish. Saqlash yiqilsa, buni aytish
  // shart: aks holda o'qituvchi varaqa yozilgan deb o'ylab sahifani yopadi va
  // kuzatuv yo'qoladi. Ilgari bu yerda `try` umuman yo'q edi.
  const [xato, setXato] = React.useState<string | null>(null);

  const jami = Object.values(ballar).reduce((a, b) => a + b, 0);
  const max = stageMax(stage);
  const foiz = Math.round((jami / max) * 100);

  async function saqla() {
    setBand(true);
    setXato(null);
    try {
      await saveMentorship({
        ownerId,
        studentId,
        studentName,
        stageId: stage.id,
        scores: ballar,
        comment: izoh.trim() || undefined,
      });
      setSaqlandi(true);
      window.setTimeout(() => setSaqlandi(false), 2500);
    } catch (sabab) {
      console.error(sabab);
      setXato("Saqlab bo'lmadi — brauzer xotirasi ishlamayapti. Varaqa shu sahifada turibdi; qayta urinib ko'ring.");
    } finally {
      setBand(false);
    }
  }

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border-subtle p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm font-medium text-ink">{studentName}</p>
        {mavjud && (
          <p className="text-xs text-ink-muted">
            Oxirgi kuzatuv: {formatDate(mavjud.observedAt)}
          </p>
        )}
      </div>

      <ul className="flex flex-col gap-3">
        {stage.criteria.map((c) => (
          <li key={c.id}>
            <label htmlFor={`${stage.id}-${c.id}`} className="block text-sm font-medium text-ink">
              {c.title}
            </label>
            <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">{c.description}</p>
            <div className="mt-2 flex items-center gap-3">
              <input
                id={`${stage.id}-${c.id}`}
                type="range"
                min={1}
                max={MEZON_MAX}
                step={1}
                value={ballar[c.id] ?? 3}
                onChange={(e) =>
                  setBallar((v) => ({ ...v, [c.id]: Number(e.target.value) }))
                }
                className="h-2 flex-1 accent-[var(--mp-primary)]"
                aria-describedby={`${stage.id}-${c.id}-izoh`}
              />
              <span
                id={`${stage.id}-${c.id}-izoh`}
                className="w-56 shrink-0 text-xs text-ink-muted"
              >
                {ballar[c.id] ?? 3} — {MEZON_IZOHI[ballar[c.id] ?? 3]}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <p className="mb-1.5 flex items-baseline justify-between text-sm">
          <span className="text-ink-muted">Umumiy</span>
          <span className="tabular-nums text-ink">
            {jami}/{max} ball · {foiz}%
          </span>
        </p>
        <Progress value={foiz} />
      </div>

      <label className="flex flex-col gap-1.5 text-sm">
        <span className="text-ink-muted">Izoh va keyingi qadam</span>
        <textarea
          value={izoh}
          onChange={(e) => setIzoh(e.target.value)}
          rows={3}
          placeholder="Nima yaxshi chiqdi, keyingi kuzatuvda nimaga e'tibor berish kerak…"
          className="rounded-xl border border-border-subtle bg-surface p-3 text-sm leading-relaxed text-ink placeholder:text-ink-muted"
        />
      </label>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <Button onClick={() => void saqla()} disabled={band}>
            {band ? "Saqlanmoqda…" : "Varaqani saqlash"}
          </Button>
          {saqlandi && (
            <span className="text-sm text-success-ink" role="status">
              Saqlandi
            </span>
          )}
        </div>
        {xato && (
          <p role="alert" className="text-sm text-danger-ink">
            {xato}
          </p>
        )}
      </div>
    </div>
  );
}

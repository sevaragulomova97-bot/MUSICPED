"use client";

import * as React from "react";
import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import { Check, ClipboardCheck, Download, Send } from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TOPSHIRIQ_BY_ID } from "@/content/tasks";
import { gradeDatasetSubmission, listDatasets } from "@/lib/db/repo";
import { downloadJson } from "@/lib/export/download";
import { BLOOM_NOMI, type BloomLevel, YONALISH_NOMI } from "@/lib/domain/types";
import { buildGradeBundle, buildGradingQueue, type GradingItem } from "@/lib/teacher";
import { bundleFileName } from "@/lib/transfer";
import { formatDate } from "@/lib/utils";

export function Baholash() {
  const { profile } = useSession();
  const ownerId = profile?.id;
  const [faqatKutayotgan, setFaqatKutayotgan] = React.useState(true);
  // Baho saqlanganda karta ro'yxatdan chiqib ketadi (u endi kutayotgan
  // emas), shuning uchun tasdiq xabari kartada emas, ro'yxat ustida
  // ko'rsatiladi — aks holda o'qituvchi hech qanday javob ko'rmaydi.
  const [oxirgiBaho, setOxirgiBaho] = React.useState<string | null>(null);

  const datasets = useLiveQuery(
    async () => (ownerId ? listDatasets(ownerId) : []),
    [ownerId],
  );

  if (datasets === undefined) {
    return <p className="text-sm text-ink-muted">Yuklanmoqda…</p>;
  }

  const navbat = buildGradingQueue(datasets, { onlyPending: faqatKutayotgan });
  const kutayotgan = buildGradingQueue(datasets, { onlyPending: true }).length;

  // Baho qaytarish uchun: kamida bitta ishi baholangan talabalar.
  const qaytariladigan = datasets
    .map((d) => ({ dataset: d, bundle: buildGradeBundle(d, profile?.fullName ?? "") }))
    .filter((x): x is { dataset: typeof x.dataset; bundle: NonNullable<typeof x.bundle> } =>
      x.bundle !== null,
    );

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
            Ishlarni baholash
          </h1>
          <p className="mt-1.5 text-sm text-ink-muted">
            {kutayotgan > 0
              ? `${kutayotgan} ta ish baho kutmoqda`
              : "Baho kutayotgan ish yo'q"}
          </p>
        </div>

        <label className="flex items-center gap-2 text-sm text-ink-muted">
          <input
            type="checkbox"
            checked={faqatKutayotgan}
            onChange={(e) => setFaqatKutayotgan(e.target.checked)}
            className="size-4 rounded border-border-subtle accent-[var(--mp-primary)]"
          />
          Faqat baho kutayotganlar
        </label>
      </div>

      {oxirgiBaho && (
        <p
          role="status"
          className="flex items-center gap-2 rounded-xl bg-success-soft px-4 py-3 text-sm text-success"
        >
          <Check className="size-4 shrink-0" aria-hidden="true" />
          {oxirgiBaho}
        </p>
      )}

      {datasets.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-4 p-10 text-center">
            <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary">
              <ClipboardCheck className="size-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-medium text-ink">Talaba ma&apos;lumoti yuklanmagan</p>
              <p className="mt-1.5 max-w-sm text-sm text-ink-muted">
                Baholash uchun avval talabalarning natijalar faylini qabul qilish
                kerak.
              </p>
            </div>
            <Link
              href="/oqituvchi"
              className="inline-flex h-10 items-center rounded-xl bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              Ma&apos;lumot yuklash
            </Link>
          </CardContent>
        </Card>
      ) : navbat.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center text-sm text-ink-muted">
            {faqatKutayotgan
              ? "Barcha ishlar baholangan. Baholarni talabalarga qaytarish quyida."
              : "Hali hech kim ish topshirmagan."}
          </CardContent>
        </Card>
      ) : (
        <ul className="flex flex-col gap-4">
          {navbat.map((item) => (
            <li key={item.key}>
              <BaholashKarta
                item={item}
                ownerId={ownerId!}
                onSaved={(matn) => setOxirgiBaho(matn)}
              />
            </li>
          ))}
        </ul>
      )}

      {qaytariladigan.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Baholarni talabalarga qaytarish</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p className="text-sm leading-relaxed text-ink-muted">
              Server yo&apos;q, shuning uchun baho ham fayl orqali qaytadi. Har bir
              talaba uchun{" "}
              <code className="rounded bg-surface-muted px-1 py-0.5 text-xs">baholar-….json</code>{" "}
              faylini yuklab oling va talabaga bering — u <strong className="font-medium text-ink">Sozlamalar
              → Ma&apos;lumotni import qilish</strong> bo&apos;limida yuklaydi, shundan
              keyin baho va izohingiz uning natijalarida paydo bo&apos;ladi.
            </p>

            <ul className="flex flex-col divide-y divide-border-subtle">
              {qaytariladigan.map(({ dataset, bundle }) => (
                <li
                  key={dataset.studentId}
                  className="flex flex-wrap items-center justify-between gap-3 py-2.5"
                >
                  <span className="text-sm">
                    <span className="block font-medium text-ink">{dataset.studentName}</span>
                    <span className="text-xs text-ink-muted">
                      {bundle.grades.length} ta baho
                    </span>
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => downloadJson(bundle, bundleFileName(bundle))}
                  >
                    <Download aria-hidden="true" />
                    Yuklab olish
                  </Button>
                </li>
              ))}
            </ul>

            <Button
              variant="soft"
              onClick={() => {
                for (const { bundle } of qaytariladigan) {
                  downloadJson(bundle, bundleFileName(bundle));
                }
              }}
            >
              <Send aria-hidden="true" />
              Barchasini yuklab olish ({qaytariladigan.length})
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

/**
 * Bitta ishni rubrika bo'yicha baholash kartasi.
 *
 * Umumiy ball mezonlar yig'indisidan **avtomatik** hisoblanadi — o'qituvchi
 * «ko'zga chamalab» ball qo'ymaydi. Rubrikasi yo'q ishlar (masalan test)
 * uchun faqat umumiy ball maydoni ko'rsatiladi.
 */
function BaholashKarta({
  item,
  ownerId,
  onSaved,
}: {
  item: GradingItem;
  ownerId: string;
  onSaved: (matn: string) => void;
}) {
  const task = TOPSHIRIQ_BY_ID.get(item.submission.taskId);
  const criteria = item.rubricCriteria;
  const maxBall = criteria.reduce((s, c) => s + c.maxPoints, 0);

  const [ballar, setBallar] = React.useState<Record<string, number>>(() =>
    Object.fromEntries(criteria.map((c) => [c.id, 0])),
  );
  const [umumiy, setUmumiy] = React.useState<number>(
    item.submission.score !== undefined && item.submission.score >= 0
      ? item.submission.score
      : 0,
  );
  const [izoh, setIzoh] = React.useState(item.submission.teacherComment ?? "");

  const rubrikaBall = criteria.length
    ? Math.round((Object.values(ballar).reduce((a, b) => a + b, 0) / maxBall) * 100)
    : umumiy;

  async function saqla() {
    await gradeDatasetSubmission(
      ownerId,
      item.studentId,
      item.submission.id,
      rubrikaBall,
      izoh.trim() || undefined,
    );
    onSaved(
      `${item.studentName} — «${item.taskTitle}» ishiga ${rubrikaBall}% qo'yildi. Saqlandi.`,
    );
  }

  return (
    <Card>
      <CardHeader className="flex-row flex-wrap items-start justify-between gap-2">
        <div>
          <CardTitle className="text-base">{item.taskTitle}</CardTitle>
          <p className="mt-1 text-sm text-ink-muted">
            {item.studentName} · {formatDate(item.submission.submittedAt)}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="neutral">{YONALISH_NOMI[item.submission.area]}</Badge>
          <Badge variant="secondary">
            {BLOOM_NOMI[item.submission.bloom as BloomLevel] ?? item.submission.bloom}
          </Badge>
          {item.pending ? (
            <Badge variant="warning">baho kutmoqda</Badge>
          ) : (
            <Badge variant="success">{item.submission.score}%</Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {task && (
          <p className="text-sm leading-relaxed text-ink-muted">{task.description}</p>
        )}

        {criteria.length > 0 ? (
          <div className="flex flex-col gap-3">
            {criteria.map((c) => (
              <div key={c.id} className="rounded-xl bg-surface-muted p-3">
                <label
                  htmlFor={`${item.key}-${c.id}`}
                  className="flex flex-wrap items-baseline justify-between gap-2"
                >
                  <span className="text-sm font-medium text-ink">{c.title}</span>
                  <span className="text-xs text-ink-muted">
                    maksimal {c.maxPoints} ball
                  </span>
                </label>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  {c.description}
                </p>
                <div className="mt-2 flex items-center gap-3">
                  <input
                    id={`${item.key}-${c.id}`}
                    type="range"
                    min={0}
                    max={c.maxPoints}
                    step={1}
                    value={ballar[c.id] ?? 0}
                    onChange={(e) =>
                      setBallar((v) => ({ ...v, [c.id]: Number(e.target.value) }))
                    }
                    className="h-2 flex-1 accent-[var(--mp-primary)]"
                  />
                  <span className="w-14 shrink-0 text-right text-sm tabular-nums text-ink">
                    {ballar[c.id] ?? 0}/{c.maxPoints}
                  </span>
                </div>
              </div>
            ))}

            <p className="text-sm text-ink-muted">
              Umumiy ball:{" "}
              <strong className="font-medium text-ink tabular-nums">{rubrikaBall}%</strong>{" "}
              <span className="text-xs">
                ({Object.values(ballar).reduce((a, b) => a + b, 0)}/{maxBall} ball)
              </span>
            </p>
          </div>
        ) : (
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-ink-muted">
              Umumiy ball (bu topshiriqda rubrika yo&apos;q)
            </span>
            <input
              type="number"
              min={0}
              max={100}
              value={umumiy}
              onChange={(e) => setUmumiy(Math.max(0, Math.min(100, Number(e.target.value))))}
              className="h-10 w-28 rounded-lg border border-border-subtle bg-surface px-3 text-sm tabular-nums text-ink"
            />
          </label>
        )}

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="text-ink-muted">Izoh (talaba ko&apos;radi)</span>
          <textarea
            value={izoh}
            onChange={(e) => setIzoh(e.target.value)}
            rows={3}
            placeholder="Nimasi yaxshi, nimani kuchaytirish kerak…"
            className="rounded-xl border border-border-subtle bg-surface p-3 text-sm leading-relaxed text-ink placeholder:text-ink-muted"
          />
        </label>

        <Button className="w-fit" onClick={() => void saqla()}>
          Bahoni saqlash
        </Button>
      </CardContent>
    </Card>
  );
}

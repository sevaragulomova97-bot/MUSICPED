"use client";

import * as React from "react";
import { AlertTriangle, Check, FileJson, Upload, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DEMO_TALABALAR } from "@/content/demo-students";
import { saveDataset } from "@/lib/db/repo";
import { demoBundle } from "@/lib/teacher";
import { parseBundle, summarizeBundle, type TransferBundle } from "@/lib/transfer";

type Natija = { fayl: string; ok: boolean; matn: string };

/**
 * Talaba fayllarini qabul qilish paneli.
 *
 * Bir nechta fayl birdan tanlanadi va **har biri alohida** hisobot beradi:
 * bittasi buzuq bo'lsa qolganlari baribir qabul qilinadi. Shu sababli
 * o'qituvchi 24 talabaning faylini bir marta tanlab, keyin faqat
 * muammolisini qayta yuboradi.
 */
export function ImportPanel({ ownerId }: { ownerId: string }) {
  const [natijalar, setNatijalar] = React.useState<Natija[]>([]);
  const [ishlanmoqda, setIshlanmoqda] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setIshlanmoqda(true);
    const chiqish: Natija[] = [];

    for (const file of Array.from(files)) {
      try {
        const text = await file.text();
        const parsed = parseBundle(text);

        if (!parsed.ok) {
          chiqish.push({ fayl: file.name, ok: false, matn: parsed.error });
          continue;
        }

        if (parsed.value.kind !== "natijalar") {
          chiqish.push({
            fayl: file.name,
            ok: false,
            matn: "Bu baholar fayli — uni talaba o'z kabinetida import qiladi.",
          });
          continue;
        }

        const bundle: TransferBundle = parsed.value;
        await saveDataset(ownerId, bundle);
        const xulosa = summarizeBundle(bundle);
        chiqish.push({
          fayl: file.name,
          ok: true,
          matn: `${xulosa.title} — ${xulosa.lines.slice(0, 3).join(", ")}`,
        });
      } catch (error) {
        chiqish.push({
          fayl: file.name,
          ok: false,
          matn: error instanceof Error ? error.message : "Faylni o'qishda xato",
        });
      }
    }

    setNatijalar(chiqish);
    setIshlanmoqda(false);
    // Bir xil faylni qayta tanlash mumkin bo'lishi uchun input tozalanadi.
    if (inputRef.current) inputRef.current.value = "";
  }

  async function loadDemo() {
    setIshlanmoqda(true);
    for (const student of DEMO_TALABALAR) {
      await saveDataset(ownerId, demoBundle(student));
    }
    setNatijalar([
      {
        fayl: "namunaviy ma'lumot",
        ok: true,
        matn: `${DEMO_TALABALAR.length} ta namunaviy talaba qo'shildi (o'ylab topilgan ma'lumot)`,
      },
    ]);
    setIshlanmoqda(false);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Talaba natijalarini qabul qilish</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-sm leading-relaxed text-ink-muted">
          Platforma serversiz ishlaydi, shuning uchun natijalar o&apos;z-o&apos;zidan
          kelmaydi. Talaba <strong className="font-medium text-ink">Sozlamalar →
          Ma&apos;lumotni eksport qilish</strong> bo&apos;limida{" "}
          <code className="rounded bg-surface-muted px-1 py-0.5 text-xs">natijalar-….json</code>{" "}
          faylini saqlaydi va sizga beradi (masalan elektron pochta orqali).
          Bir nechta faylni birdan tanlash mumkin.
        </p>

        <div className="flex flex-wrap gap-2">
          <input
            ref={inputRef}
            id="talaba-fayllari"
            type="file"
            accept="application/json,.json"
            multiple
            className="sr-only"
            onChange={(e) => void handleFiles(e.target.files)}
          />
          <Button onClick={() => inputRef.current?.click()} disabled={ishlanmoqda}>
            <Upload aria-hidden="true" />
            {ishlanmoqda ? "O'qilmoqda…" : "Fayl tanlash"}
          </Button>
          <Button variant="outline" onClick={() => void loadDemo()} disabled={ishlanmoqda}>
            <Users aria-hidden="true" />
            Namunaviy ma&apos;lumot (24 talaba)
          </Button>
        </div>

        {natijalar.length > 0 && (
          <ul className="flex flex-col gap-2" aria-live="polite">
            {natijalar.map((n, i) => (
              <li
                key={`${n.fayl}-${i}`}
                className="flex items-start gap-2.5 rounded-xl bg-surface-muted p-3 text-sm"
              >
                <span
                  className={
                    n.ok
                      ? "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-success-soft text-success"
                      : "mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-warning-soft text-warning"
                  }
                >
                  {n.ok ? (
                    <Check className="size-3.5" aria-hidden="true" />
                  ) : (
                    <AlertTriangle className="size-3.5" aria-hidden="true" />
                  )}
                </span>
                <span>
                  <span className="flex items-center gap-1.5 font-medium text-ink">
                    <FileJson className="size-3.5 text-ink-muted" aria-hidden="true" />
                    {n.fayl}
                  </span>
                  <span className="mt-0.5 block text-ink-muted">{n.matn}</span>
                </span>
              </li>
            ))}
          </ul>
        )}

        <p className="text-xs leading-relaxed text-ink-muted">
          Fayllar faqat shu brauzerda saqlanadi va hech qayerga yuborilmaydi.
          Namunaviy ma&apos;lumot <strong className="font-medium">o&apos;ylab
          topilgan</strong> — u platformani ko&apos;rsatish uchun, ilmiy xulosa
          uchun emas.
        </p>
      </CardContent>
    </Card>
  );
}

"use client";

import * as React from "react";
import { useSession } from "@/components/session-provider";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { mundarija, slug, type Block, type Inline } from "@/lib/markdown";

/**
 * Qo'llanmani chizadi.
 *
 * Matn build paytida tahlil qilingan daraxt ko'rinishida keladi, ya'ni
 * bu yerda `dangerouslySetInnerHTML` ishlatilmaydi va HTML in'eksiyasi
 * uchun joy qolmaydi.
 */

function Satr({ parts }: { parts: Inline[] }) {
  return (
    <>
      {parts.map((p, i) => {
        if (p.kind === "qalin") return <strong key={i}>{p.text}</strong>;
        if (p.kind === "kod") {
          return (
            <code
              key={i}
              className="rounded bg-surface-muted px-1 py-0.5 text-[0.85em] text-ink"
            >
              {p.text}
            </code>
          );
        }
        return <React.Fragment key={i}>{p.text}</React.Fragment>;
      })}
    </>
  );
}

function matni(parts: Inline[]) {
  return parts.map((p) => p.text).join("");
}

function Bloklar({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((b, i) => {
        switch (b.kind) {
          case "sarlavha": {
            const id = b.level === 2 ? slug(matni(b.text)) : undefined;
            const klass =
              b.level <= 2
                ? "mt-4 font-display text-lg font-bold text-ink"
                : "mt-2 font-display text-base font-semibold text-ink";
            // Sarlavha darajasi hujjatdagidan bitta pastga suriladi:
            // sahifaning `h1` i allaqachon bor.
            const Tag = (`h${Math.min(6, b.level + 1)}`) as "h2";
            return (
              <Tag key={i} id={id} className={klass}>
                <Satr parts={b.text} />
              </Tag>
            );
          }
          case "xatboshi":
            return (
              <p key={i} className="text-sm leading-relaxed text-ink-muted">
                <Satr parts={b.text} />
              </p>
            );
          case "royxat": {
            const Tag = b.tartibli ? "ol" : "ul";
            return (
              <Tag
                key={i}
                className={cn(
                  "flex flex-col gap-1.5 pl-5 text-sm leading-relaxed text-ink-muted",
                  b.tartibli ? "list-decimal" : "list-disc",
                )}
              >
                {b.items.map((it, j) => (
                  <li key={j}>
                    <Satr parts={it} />
                  </li>
                ))}
              </Tag>
            );
          }
          case "jadval":
            return (
              // Tor ekranda jadval surilsin — matn siqilib ketmasligi kerak.
              <div key={i} className="overflow-x-auto">
                <table className="w-full min-w-[32rem] border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border-subtle text-left">
                      {b.head.map((c, j) => (
                        <th key={j} className="py-2 pr-4 font-semibold text-ink">
                          <Satr parts={c} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j} className="border-b border-border-subtle/60">
                        {r.map((c, k) => (
                          <td key={k} className="py-2 pr-4 align-top text-ink-muted">
                            <Satr parts={c} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case "iqtibos":
            return (
              <p
                key={i}
                className="rounded-xl border-l-4 border-primary bg-primary-soft/50 px-4 py-3 text-sm leading-relaxed text-ink"
              >
                <Satr parts={b.text} />
              </p>
            );
          case "kod":
            return (
              <pre
                key={i}
                className="overflow-x-auto rounded-xl bg-surface-muted p-4 text-xs text-ink"
              >
                <code>{b.text}</code>
              </pre>
            );
          case "ajratgich":
            return <hr key={i} className="border-border-subtle" />;
        }
      })}
    </div>
  );
}

export function Qollanma({
  talaba,
  oqituvchi,
}: {
  talaba: Block[];
  oqituvchi: Block[];
}) {
  const { profile } = useSession();
  // O'qituvchi va admin uchun o'qituvchi qo'llanmasi ochiq keladi —
  // lekin ikkalasi ham doim mavjud: o'qituvchi talabaning nimani
  // ko'rayotganini bilishi kerak.
  const boshlangich = profile?.role === "TALABA" ? "talaba" : "oqituvchi";
  const [tanlov, setTanlov] = React.useState<"talaba" | "oqituvchi">(boshlangich);
  const joriy = tanlov === "talaba" ? talaba : oqituvchi;
  const royxat = React.useMemo(() => mundarija(joriy), [joriy]);

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <div>
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          Qo&apos;llanma
        </h1>
        <p className="mt-1.5 text-sm text-ink-muted">
          Platformadan foydalanish bo&apos;yicha bosqichma-bosqich
          ko&apos;rsatma. Internetsiz ham ochiladi.
        </p>
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Qo'llanma turi">
        {(
          [
            ["talaba", "Talaba uchun"],
            ["oqituvchi", "O'qituvchi va tadqiqotchi uchun"],
          ] as const
        ).map(([id, nom]) => (
          <button
            key={id}
            type="button"
            aria-pressed={tanlov === id}
            onClick={() => setTanlov(id)}
            className={cn(
              "rounded-xl border px-4 py-2 text-sm transition-colors",
              tanlov === id
                ? "border-primary bg-primary-solid font-medium text-white"
                : "border-border-subtle bg-surface text-ink hover:bg-surface-muted",
            )}
          >
            {nom}
          </button>
        ))}
      </div>

      {royxat.length > 1 && (
        <Card>
          <CardContent className="p-4">
            <p className="text-sm font-medium text-ink">Mundarija</p>
            <ul className="mt-2 flex flex-col gap-1">
              {royxat.map((m) => (
                <li key={m.id}>
                  <a
                    href={`#${m.id}`}
                    className="text-sm text-primary-ink underline-offset-2 hover:underline"
                  >
                    {m.text}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="p-5 sm:p-6">
          <Bloklar blocks={joriy} />
        </CardContent>
      </Card>
    </div>
  );
}

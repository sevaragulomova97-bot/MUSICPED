"use client";

import { DOIRA_ZARB_NOMI, DOIRA_ZARBLARI, type DoiraStroke } from "@/lib/domain/instruments";
import { cn } from "@/lib/utils";

/**
 * Doira — to'rt zonaga bosiladi:
 *  • markaz  → «bum» (past, ochiq, uzoq jaranglaydi)
 *  • markaz atrofi → «bosiq» (o'sha past tovush, lekin kaft bosib turadi)
 *  • o'rta halqa → «tak» (baland, qisqa)
 *  • tashqi gardish → «qarsak» (shovqinli)
 *
 * Haqiqiy doirada «bosiq» zarb «bum» bilan **bir joyga** uriladi; farqi
 * ikkinchi qo'lning membranani bosib turishida. Alohida halqa — shu
 * farqni sichqoncha bilan ham, ekran o'quvchi bilan ham berish uchun
 * qilingan interfeys yechimi, cholg'uning chizmasi emas.
 */

const ZONA_RANGI: Record<DoiraStroke, string> = {
  bum: "#8b5a2b",
  bosiq: "#9c6834",
  tak: "#b5804a",
  qarsak: "#d8b483",
};

export function Doira({
  active,
  onHit,
  targetStroke,
  feedback,
}: {
  active: ReadonlySet<string>;
  onHit: (stroke: DoiraStroke) => void;
  targetStroke?: DoiraStroke | null;
  feedback?: "togri" | "xato" | null;
}) {
  function zoneFill(stroke: DoiraStroke) {
    if (active.has(stroke)) return "var(--mp-primary)";
    if (targetStroke === stroke) {
      if (feedback === "togri") return "var(--mp-success)";
      if (feedback === "xato") return "var(--mp-danger)";
      return "var(--mp-warning)";
    }
    return ZONA_RANGI[stroke];
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <svg
        viewBox="0 0 280 280"
        className="h-64 w-64 touch-none select-none sm:h-72 sm:w-72"
        role="group"
        aria-label="Virtual doira"
      >
        {/* Tashqi gardish — qarsak */}
        <circle
          cx="140"
          cy="140"
          r="134"
          fill={zoneFill("qarsak")}
          stroke="#6b4423"
          strokeWidth="3"
          className="cursor-pointer transition-[fill] duration-100"
          onPointerDown={(e) => {
            e.preventDefault();
            onHit("qarsak");
          }}
        />
        {/* O'rta halqa — tak */}
        <circle
          cx="140"
          cy="140"
          r="106"
          fill={zoneFill("tak")}
          className="cursor-pointer transition-[fill] duration-100"
          onPointerDown={(e) => {
            e.preventDefault();
            onHit("tak");
          }}
        />
        {/* Markaz atrofi — bosiq */}
        <circle
          cx="140"
          cy="140"
          r="88"
          fill={zoneFill("bosiq")}
          className="cursor-pointer transition-[fill] duration-100"
          onPointerDown={(e) => {
            e.preventDefault();
            onHit("bosiq");
          }}
        />
        {/* Markaz — bum */}
        <circle
          cx="140"
          cy="140"
          r="52"
          fill={zoneFill("bum")}
          className="cursor-pointer transition-[fill] duration-100"
          onPointerDown={(e) => {
            e.preventDefault();
            onHit("bum");
          }}
        />

        {/* Qo'ng'iroqchalar — bezak, bosilmaydi */}
        {Array.from({ length: 12 }, (_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          return (
            <circle
              key={i}
              cx={140 + Math.cos(angle) * 120}
              cy={140 + Math.sin(angle) * 120}
              r="5"
              fill="#f1e4cf"
              opacity="0.65"
              pointerEvents="none"
            />
          );
        })}

        <text
          x="140"
          y="146"
          textAnchor="middle"
          className="fill-white text-[15px] font-semibold"
          pointerEvents="none"
        >
          BUM
        </text>
        <text
          x="140"
          y="74"
          textAnchor="middle"
          className="fill-white/85 text-[12px] font-medium"
          pointerEvents="none"
        >
          TAK
        </text>
        <text
          x="140"
          y="218"
          textAnchor="middle"
          className="fill-white/85 text-[11px] font-medium"
          pointerEvents="none"
        >
          BOSIQ
        </text>
      </svg>

      {/* Klaviatura va ekran o'quvchi uchun muqobil boshqaruv */}
      <div
        className="flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Doira zarblari"
      >
        {DOIRA_ZARBLARI.map((stroke) => (
          <button
            key={stroke}
            type="button"
            onClick={() => onHit(stroke)}
            className={cn(
              "rounded-xl border px-4 py-2 text-sm font-medium transition-colors",
              active.has(stroke)
                ? "border-primary bg-primary text-white"
                : "border-border-subtle bg-surface text-ink hover:bg-surface-muted",
            )}
          >
            {DOIRA_ZARB_NOMI[stroke]}
          </button>
        ))}
      </div>
    </div>
  );
}

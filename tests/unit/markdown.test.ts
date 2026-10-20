import { readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { mundarija, parseInline, parseMarkdown, slug } from "@/lib/markdown";

/**
 * Qo'llanmalarni chizadigan tahlilchi.
 *
 * Eng muhim shart — **hech narsa yo'qolmasligi**: hujjatdagi har bir
 * sarlavha, jadval va ro'yxat sahifada ham bo'lishi kerak. Tahlilchi
 * biror qurilmani tushunmay qolsa, matn jim yo'qoladi va buni faqat
 * ko'z bilan payqash mumkin — shuning uchun test haqiqiy qo'llanma
 * fayllari ustida yuritiladi.
 */

const DOCS = path.join(process.cwd(), "docs");
const FAYLLAR = ["QOLLANMA-TALABA.md", "QOLLANMA-OQITUVCHI.md"];

describe("satr ichidagi belgilar", () => {
  it("qalin matn va kodni ajratadi", () => {
    expect(parseInline("oddiy **qalin** va `kod`")).toEqual([
      { kind: "matn", text: "oddiy " },
      { kind: "qalin", text: "qalin" },
      { kind: "matn", text: " va " },
      { kind: "kod", text: "kod" },
    ]);
  });

  it("belgisiz matnni o'zgartirmaydi", () => {
    expect(parseInline("oddiy matn")).toEqual([{ kind: "matn", text: "oddiy matn" }]);
  });
});

describe("blok tahlili", () => {
  it("sarlavha, ro'yxat, jadval va iqtibosni taniydi", () => {
    const b = parseMarkdown(
      [
        "## Sarlavha",
        "",
        "Xatboshi matni.",
        "",
        "- birinchi",
        "- ikkinchi",
        "",
        "1. bir",
        "2. ikki",
        "",
        "| A | B |",
        "|---|---|",
        "| 1 | 2 |",
        "",
        "> Diqqat",
        "",
        "---",
      ].join("\n"),
    );
    expect(b.map((x) => x.kind)).toEqual([
      "sarlavha", "xatboshi", "royxat", "royxat", "jadval", "iqtibos", "ajratgich",
    ]);
    const royxatlar = b.filter((x) => x.kind === "royxat");
    expect(royxatlar[0]).toMatchObject({ tartibli: false });
    expect(royxatlar[1]).toMatchObject({ tartibli: true });
    const jadval = b.find((x) => x.kind === "jadval");
    expect(jadval && jadval.kind === "jadval" && jadval.rows).toHaveLength(1);
  });

  it("ko'p satrli xatboshini bitta blokka yig'adi", () => {
    const b = parseMarkdown("birinchi satr\nikkinchi satr\n");
    expect(b).toHaveLength(1);
    expect(b[0].kind === "xatboshi" && b[0].text[0].text).toBe(
      "birinchi satr ikkinchi satr",
    );
  });

  it("kod blokini o'zgartirmasdan oladi", () => {
    const b = parseMarkdown("```\nnpm run build\n```\n");
    expect(b[0]).toEqual({ kind: "kod", text: "npm run build" });
  });
});

describe("haqiqiy qo'llanmalar", () => {
  for (const nom of FAYLLAR) {
    describe(nom, () => {
      const xom = readFileSync(path.join(DOCS, nom), "utf8");
      const bloklar = parseMarkdown(xom);

      it("hujjatdagi barcha sarlavhalar tahlilga tushadi", () => {
        const kutilgan = xom
          .split("\n")
          .filter((l) => /^#{1,6}\s/.test(l) && !l.startsWith("```")).length;
        const topilgan = bloklar.filter((b) => b.kind === "sarlavha").length;
        expect(topilgan).toBe(kutilgan);
      });

      it("barcha jadvallar tahlilga tushadi", () => {
        const kutilgan = xom
          .split("\n")
          .filter((l, i, a) => l.trim().startsWith("|")
            && /^\|?[\s:-]+\|[\s|:-]*$/.test(a[i + 1] ?? "")).length;
        const topilgan = bloklar.filter((b) => b.kind === "jadval").length;
        expect(topilgan).toBe(kutilgan);
      });

      it("matn yo'qolmaydi", () => {
        // Hujjatdagi so'zlarning deyarli hammasi natijada bo'lishi kerak.
        const soz = (t: string) =>
          new Set(t.toLowerCase().match(/[a-zĀ-ɏ']{4,}/g) ?? []);
        const asl = soz(xom.replace(/[#*|`>-]/g, " "));
        const natija = soz(
          JSON.stringify(bloklar).replace(/[^a-zA-ZĀ-ɏ' ]/g, " "),
        );
        const yoqolgan = [...asl].filter((w) => !natija.has(w));
        expect(yoqolgan, `yo'qolgan: ${yoqolgan.slice(0, 10).join(", ")}`)
          .toHaveLength(0);
      });

      it("mundarija bo'sh emas va identifikatorlar takrorlanmaydi", () => {
        const m = mundarija(bloklar);
        expect(m.length).toBeGreaterThan(3);
        expect(new Set(m.map((x) => x.id)).size).toBe(m.length);
      });
    });
  }
});

describe("slug", () => {
  it("apostrof va bo'shliqlarni tozalaydi", () => {
    expect(slug("O'quv kurslari")).toBe("oquv-kurslari");
  });
});

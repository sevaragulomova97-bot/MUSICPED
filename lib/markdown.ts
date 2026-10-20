/**
 * Juda kichik Markdown tahlilchisi — **faqat loyihaning o'z hujjatlari**
 * uchun.
 *
 * Nega tayyor kutubxona emas: `docs/` dagi qo'llanmalar bizning
 * matnimiz, ular build paytida o'qiladi va foydalanuvchi kiritadigan
 * matn bu yerga umuman tushmaydi. Shu sababli to'liq Markdown
 * qo'llab-quvvatlashi ham, HTML tozalash ham kerak emas — kerakli
 * sintaksis esa qo'llanmalarda aniq sanoqli:
 *
 *   sarlavhalar, xatboshi, ro'yxatlar (belgili va raqamli), jadval,
 *   iqtibos, ajratgich, kod bloki, qalin matn va kod bo'lagi.
 *
 * Tahlil natijasi — oddiy obyektlar daraxti; uni React komponenti
 * chizadi. HTML satr sifatida qaytarilmaydi, ya'ni
 * `dangerouslySetInnerHTML` hech qayerda kerak bo'lmaydi.
 */

export type Inline =
  | { kind: "matn"; text: string }
  | { kind: "qalin"; text: string }
  | { kind: "kod"; text: string };

export type Block =
  | { kind: "sarlavha"; level: number; text: Inline[] }
  | { kind: "xatboshi"; text: Inline[] }
  | { kind: "royxat"; tartibli: boolean; items: Inline[][] }
  | { kind: "jadval"; head: Inline[][]; rows: Inline[][][] }
  | { kind: "iqtibos"; text: Inline[] }
  | { kind: "kod"; text: string }
  | { kind: "ajratgich" };

/** Satr ichidagi belgilarni ajratadi: `**qalin**` va `` `kod` ``. */
export function parseInline(src: string): Inline[] {
  const out: Inline[] = [];
  const re = /\*\*([^*]+)\*\*|`([^`]+)`/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src))) {
    if (m.index > last) out.push({ kind: "matn", text: src.slice(last, m.index) });
    if (m[1] !== undefined) out.push({ kind: "qalin", text: m[1] });
    else out.push({ kind: "kod", text: m[2] });
    last = m.index + m[0].length;
  }
  if (last < src.length) out.push({ kind: "matn", text: src.slice(last) });
  return out.length ? out : [{ kind: "matn", text: "" }];
}

function jadvalQatori(line: string): Inline[][] {
  return line
    .replace(/^\||\|$/g, "")
    .split("|")
    .map((c) => parseInline(c.trim()));
}

const AJRATGICH = /^\|?[\s:-]+\|[\s|:-]*$/;

export function parseMarkdown(src: string): Block[] {
  const lines = src.replace(/\r\n/g, "\n").split("\n");
  const blocks: Block[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i += 1;
      continue;
    }

    // Kod bloki
    if (line.startsWith("```")) {
      const buf: string[] = [];
      i += 1;
      while (i < lines.length && !lines[i].startsWith("```")) {
        buf.push(lines[i]);
        i += 1;
      }
      i += 1;
      blocks.push({ kind: "kod", text: buf.join("\n") });
      continue;
    }

    // Ajratgich
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(line.trim())) {
      blocks.push({ kind: "ajratgich" });
      i += 1;
      continue;
    }

    // Sarlavha
    const h = /^(#{1,6})\s+(.*)$/.exec(line);
    if (h) {
      blocks.push({ kind: "sarlavha", level: h[1].length, text: parseInline(h[2]) });
      i += 1;
      continue;
    }

    // Jadval: sarlavha qatori + ajratgich qatori
    if (line.trim().startsWith("|") && AJRATGICH.test(lines[i + 1] ?? "")) {
      const head = jadvalQatori(line);
      const rows: Inline[][][] = [];
      i += 2;
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(jadvalQatori(lines[i]));
        i += 1;
      }
      blocks.push({ kind: "jadval", head, rows });
      continue;
    }

    // Iqtibos — ketma-ket satrlar bitta blokka qo'shiladi
    if (line.trimStart().startsWith(">")) {
      const buf: string[] = [];
      while (i < lines.length && lines[i].trimStart().startsWith(">")) {
        buf.push(lines[i].replace(/^\s*>\s?/, ""));
        i += 1;
      }
      blocks.push({ kind: "iqtibos", text: parseInline(buf.join(" ").trim()) });
      continue;
    }

    // Ro'yxat
    const belgili = /^\s*[-*+]\s+(.*)$/.exec(line);
    const tartibli = /^\s*\d+\.\s+(.*)$/.exec(line);
    if (belgili || tartibli) {
      const ordered = Boolean(tartibli);
      const items: Inline[][] = [];
      let joriy = "";
      while (i < lines.length) {
        const l = lines[i];
        const b = /^\s*[-*+]\s+(.*)$/.exec(l);
        const t = /^\s*\d+\.\s+(.*)$/.exec(l);
        if ((ordered && t) || (!ordered && b)) {
          if (joriy) items.push(parseInline(joriy.trim()));
          joriy = (ordered ? t![1] : b![1]).trim();
          i += 1;
        } else if (l.trim() && /^\s{2,}\S/.test(l) && joriy) {
          // Davom etgan satr — bir xil bandga qo'shiladi.
          joriy += ` ${l.trim()}`;
          i += 1;
        } else {
          break;
        }
      }
      if (joriy) items.push(parseInline(joriy.trim()));
      blocks.push({ kind: "royxat", tartibli: ordered, items });
      continue;
    }

    // Xatboshi — bo'sh satrgacha
    const buf: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !/^(#{1,6}\s|```|>|\s*[-*+]\s|\s*\d+\.\s)/.test(lines[i]) &&
      !/^(-{3,}|\*{3,}|_{3,})$/.test(lines[i].trim()) &&
      !lines[i].trim().startsWith("|")
    ) {
      buf.push(lines[i].trim());
      i += 1;
    }
    if (buf.length) blocks.push({ kind: "xatboshi", text: parseInline(buf.join(" ")) });
    else i += 1;
  }

  return blocks;
}

/** Sarlavhalardan mundarija yasaydi (faqat 2-daraja). */
export function mundarija(blocks: Block[]) {
  return blocks
    .filter((b): b is Extract<Block, { kind: "sarlavha" }> =>
      b.kind === "sarlavha" && b.level === 2)
    .map((b) => {
      const text = b.text.map((t) => t.text).join("");
      return { text, id: slug(text) };
    });
}

/** Sarlavha matnidan havola uchun identifikator. */
export function slug(text: string): string {
  return text
    .toLowerCase()
    .replace(/['’`]/g, "")
    .replace(/[^a-z0-9Ā-ɏ]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

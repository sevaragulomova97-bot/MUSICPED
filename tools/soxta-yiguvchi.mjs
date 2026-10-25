/*
 * Soxta yig'uvchi server — faqat testlar uchun.
 *
 * Supabase (PostgREST) ning shu loyihada ishlatiladigan qismini
 * takrorlaydi: `POST` paketni saqlaydi, `GET` ro'yxatni qaytaradi,
 * kalit noto'g'ri bo'lsa 401 beradi. Shu tufayli yuborish va yuklash
 * oqimi haqiqiy tarmoq bilan, lekin tashqi xizmatsiz sinaladi.
 */
import { createServer } from "node:http";

const PORT = Number(process.env.PORT ?? 4182);
const YOZISH = process.env.YOZISH_KALITI ?? "yozish-kaliti";
const OQISH = process.env.OQISH_KALITI ?? "oqish-kaliti";

/** talaba_id -> yozuv */
const saqlangan = new Map();

function kalit(req) {
  return (
    req.headers["apikey"] ??
    (req.headers["authorization"] ?? "").replace(/^Bearer\s+/i, "")
  );
}

const server = createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "OPTIONS") {
    res.writeHead(204).end();
    return;
  }

  if (req.method === "POST") {
    if (kalit(req) !== YOZISH) {
      res.writeHead(401).end(JSON.stringify({ message: "kalit noto'g'ri" }));
      return;
    }
    let tana = "";
    req.on("data", (b) => (tana += b));
    req.on("end", () => {
      try {
        const yozuv = JSON.parse(tana);
        saqlangan.set(yozuv.talaba_id, yozuv);
        res.writeHead(201).end(JSON.stringify({ ok: true }));
      } catch {
        res.writeHead(400).end(JSON.stringify({ message: "buzuq JSON" }));
      }
    });
    return;
  }

  if (req.method === "GET") {
    if (kalit(req) !== OQISH) {
      res.writeHead(401).end(JSON.stringify({ message: "kalit noto'g'ri" }));
      return;
    }
    const royxat = [...saqlangan.values()].sort((a, b) =>
      String(b.yuborilgan).localeCompare(String(a.yuborilgan)),
    );
    res.writeHead(200).end(JSON.stringify(royxat));
    return;
  }

  res.writeHead(405).end(JSON.stringify({ message: "qo'llab-quvvatlanmaydi" }));
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`soxta yig'uvchi: http://127.0.0.1:${PORT}/`);
});

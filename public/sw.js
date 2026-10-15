/*
 * MusicPed — xizmat ishchisi (service worker).
 *
 * Maqsad: internetsiz ham ishlash. Bu serversiz platforma uchun ayniqsa
 * muhim — sayt allaqachon statik, demak uni to'liq brauzerda saqlash
 * mumkin va hech narsa yo'qotilmaydi.
 *
 * Qoidalar (strategiya har bir resurs turiga alohida tanlangan):
 *
 *  1. `/_next/static/…` va media fayllar — **avval kesh**. Bu fayllarning
 *     nomida mazmun xeshi bor, ya'ni mazmuni o'zgarsa nomi ham o'zgaradi.
 *     Shuning uchun keshdagi nusxa hech qachon eskirmaydi.
 *  2. Sahifaga o'tish (navigation) — **avval tarmoq**. Yangi versiya
 *     chiqqan bo'lsa darhol ko'rinadi; tarmoq yo'q bo'lsa keshdagi nusxa,
 *     u ham bo'lmasa oflayn sahifa beriladi.
 *  3. Qolganlari — avval tarmoq, keyin kesh.
 *
 * `scope` qat'iy yozilmagan: u `self.registration.scope` dan olinadi,
 * shuning uchun sayt `/` da ham, `/MUSICPED/` da ham bir xil ishlaydi.
 */

const VERSION = "musicped-v1";
const OFFLINE_PATH = new URL("oflayn/", self.registration.scope).pathname;
const ROOT_PATH = new URL("./", self.registration.scope).pathname;

/** Nomida xesh bo'lgan, hech qachon o'zgarmaydigan fayllar. */
function isImmutable(url) {
  return (
    url.pathname.includes("/_next/static/") ||
    /\.(?:woff2?|png|svg|jpg|jpeg|webp|ico|mp3|ogg|wav)$/i.test(url.pathname)
  );
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(VERSION);
      // Oflayn sahifa va bosh sahifa oldindan saqlanadi: birinchi uzilishda
      // foydalanuvchi bo'sh ekran ko'rmasligi kerak.
      await cache.addAll([OFFLINE_PATH, ROOT_PATH]).catch(() => {});
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const nomlar = await caches.keys();
      await Promise.all(
        nomlar.filter((n) => n !== VERSION).map((n) => caches.delete(n)),
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Faqat GET va faqat o'z domenimiz: tashqi so'rovlarga aralashmaymiz.
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          const javob = await fetch(request);
          const cache = await caches.open(VERSION);
          cache.put(request, javob.clone());
          return javob;
        } catch {
          const cache = await caches.open(VERSION);
          return (
            (await cache.match(request)) ??
            (await cache.match(OFFLINE_PATH)) ??
            new Response("Oflayn", { status: 503, headers: { "Content-Type": "text/plain" } })
          );
        }
      })(),
    );
    return;
  }

  if (isImmutable(url)) {
    event.respondWith(
      (async () => {
        const cache = await caches.open(VERSION);
        const keshda = await cache.match(request);
        if (keshda) return keshda;
        const javob = await fetch(request);
        // Faqat muvaffaqiyatli javob saqlanadi — 404 ni keshlash xato.
        if (javob.ok) cache.put(request, javob.clone());
        return javob;
      })(),
    );
    return;
  }

  event.respondWith(
    (async () => {
      try {
        const javob = await fetch(request);
        if (javob.ok) {
          const cache = await caches.open(VERSION);
          cache.put(request, javob.clone());
        }
        return javob;
      } catch {
        const cache = await caches.open(VERSION);
        const keshda = await cache.match(request);
        if (keshda) return keshda;
        throw new Error("Tarmoq yo'q va keshda ham yo'q");
      }
    })(),
  );
});

/**
 * Yig'uvchi server — natijalarni o'qituvchiga internetdan yuborish.
 *
 * Platforma serversiz qoladi: barcha ish, hisob va saqlash brauzerda
 * bajariladi. Server bu yerda **faqat pochta qutisi** vazifasini
 * bajaradi — talabaning tayyor paketini qabul qiladi, o'qituvchi esa
 * uni o'qiydi. Shuning uchun u sozlanmagan bo'lsa ham platforma
 * to'liq ishlayveradi, faqat fayl almashish usuli qoladi.
 *
 * Nega shunday: fayl orqali topshirish eng zaif bo'g'in edi — talaba
 * faylni yubormasa, o'qituvchida hech narsa yo'q. Lekin oflayn
 * ishlashni ham yo'qotib bo'lmaydi: maktab va universitet
 * kompyuterlarida internet doim ham bo'lmaydi.
 *
 * Shu sababli yuborish **navbat** orqali ishlaydi: paket avval
 * brauzerda saqlanadi, so'ng yuborishga urinib ko'riladi. Internet
 * yo'q bo'lsa navbatda qoladi va keyingi imkoniyatda o'zi jo'naydi.
 *
 * Bu modul **tarmoqqa bog'liq bo'lmagan qismi** sof funksiyalardan
 * iborat, shuning uchun brauzersiz sinaladi.
 */

/** Yig'uvchi sozlamasi — qurish paytida `.env` dan olinadi. */
export type Sozlama = {
  /** Paketlar yuboriladigan manzil (POST) */
  url: string;
  /** Ochiq kalit — serverga yozish uchun (maxfiy emas, brauzerda ko'rinadi) */
  kalit: string;
};

/**
 * Sozlama bormi.
 *
 * Yo'q bo'lsa interfeys yuborish tugmasini umuman ko'rsatmaydi —
 * ishlamaydigan tugma ko'rsatish foydalanuvchini chalg'itadi.
 */
/**
 * Manzil shifrlangan bo'lishi shart.
 *
 * Shifrlanmagan ulanishda talabaning butun ishi ochiq ketadi — maktab
 * va universitet tarmoqlarida bu real xavf. Yagona istisno: o'z
 * kompyuteringdagi manzil (sinov va ishlab chiqish uchun), u tarmoqqa
 * umuman chiqmaydi.
 */
function manzilYaroqlimi(url: string) {
  if (url.startsWith("https://")) return true;
  return /^http:\/\/(127\.0\.0\.1|localhost)(:\d+)?(\/|$)/.test(url);
}

export function sozlangan(s: Partial<Sozlama> | null | undefined): s is Sozlama {
  return Boolean(s?.url && manzilYaroqlimi(s.url) && s.kalit);
}

export function sozlamaniOqi(): Sozlama | null {
  const url = process.env.NEXT_PUBLIC_YIGUVCHI_URL ?? "";
  const kalit = process.env.NEXT_PUBLIC_YIGUVCHI_KALIT ?? "";
  const s = { url, kalit };
  return sozlangan(s) ? s : null;
}

/* ───────────────────────── Navbat ───────────────────────── */

export const NAVBAT_KALITI = "musicped.yiguvchi.navbat.v1";

/** Yuborilishi kerak bo'lgan paket. */
export type Navbatdagi = {
  /** Paketning o'zi (eksport bilan bir xil tuzilma) */
  paket: unknown;
  /** Talabaning identifikatori — serverda qayta yozish uchun */
  talabaId: string;
  ism: string;
  guruh?: string;
  /** Navbatga qo'yilgan vaqt (ISO) */
  qoshilgan: string;
  /** Nechta urinish bo'ldi */
  urinish: number;
};

function saqlash(): Storage | null {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}

export function navbatniOqi(): Navbatdagi[] {
  try {
    const raw = saqlash()?.getItem(NAVBAT_KALITI);
    if (!raw) return [];
    const v = JSON.parse(raw);
    return Array.isArray(v) ? (v.filter(navbatdagimi) as Navbatdagi[]) : [];
  } catch {
    return [];
  }
}

function navbatdagimi(v: unknown): v is Navbatdagi {
  if (!v || typeof v !== "object") return false;
  const n = v as Partial<Navbatdagi>;
  return (
    typeof n.talabaId === "string" &&
    typeof n.ism === "string" &&
    typeof n.qoshilgan === "string" &&
    typeof n.urinish === "number" &&
    n.paket !== undefined
  );
}

export function navbatniYoz(navbat: Navbatdagi[]) {
  try {
    saqlash()?.setItem(NAVBAT_KALITI, JSON.stringify(navbat));
  } catch {
    // Saqlash bloklangan bo'lsa navbat yo'q — yuborish shu zahoti
    // bajariladi yoki umuman bajarilmaydi. Ish baribir yo'qolmaydi:
    // u Dexie da turibdi va faylga ham saqlanadi.
  }
}

/**
 * Navbatga qo'shadi.
 *
 * Bitta talabaning eski paketi o'chiriladi: serverga eng so'nggi
 * holat kerak, oraliq nusxalar emas.
 */
export function navbatgaQosh(navbat: Navbatdagi[], yangi: Navbatdagi): Navbatdagi[] {
  return [...navbat.filter((n) => n.talabaId !== yangi.talabaId), yangi];
}

/** Muvaffaqiyatli yuborilgan paketni navbatdan chiqaradi. */
export function navbatdanOlib(navbat: Navbatdagi[], talabaId: string) {
  return navbat.filter((n) => n.talabaId !== talabaId);
}

/**
 * Urinishlar soni shu chegaradan oshsa, paket navbatda qoladi-yu,
 * lekin avtomatik urinish to'xtaydi — foydalanuvchi o'zi bosadi.
 *
 * Sabab: server manzili butunlay noto'g'ri bo'lsa, har sahifa
 * ochilishida bir xil xatoni takrorlash foyda bermaydi.
 */
export const MAX_URINISH = 5;

export function avtomatikUrinilsinmi(n: Navbatdagi) {
  return n.urinish < MAX_URINISH;
}

/* ───────────────────────── Yuborish ───────────────────────── */

export type Natija =
  | { holat: "yuborildi" }
  | { holat: "navbatda"; sabab: string }
  | { holat: "sozlanmagan" };

/**
 * Serverga bitta paketni yuboradi.
 *
 * Supabase (PostgREST) shaklida yoziladi, lekin manzil to'liq
 * sozlanadigani uchun shu shaklni qabul qiladigan istalgan server
 * ishlaydi — o'z serveringiz ham, boshqa xizmat ham.
 */
export async function yubor(
  sozlama: Sozlama,
  n: Navbatdagi,
  fetchFn: typeof fetch = fetch,
): Promise<{ ok: true } | { ok: false; sabab: string }> {
  try {
    const javob = await fetchFn(sozlama.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: sozlama.kalit,
        Authorization: `Bearer ${sozlama.kalit}`,
        // Supabase: bir xil talaba uchun yangi yozuv emas, almashtirish.
        Prefer: "resolution=merge-duplicates",
      },
      body: JSON.stringify({
        talaba_id: n.talabaId,
        ism: n.ism,
        guruh: n.guruh ?? null,
        yuborilgan: new Date().toISOString(),
        paket: n.paket,
      }),
    });
    if (!javob.ok) {
      return { ok: false, sabab: `Server ${javob.status} javob qaytardi` };
    }
    return { ok: true };
  } catch (sabab) {
    return {
      ok: false,
      sabab:
        sabab instanceof Error && sabab.message
          ? sabab.message
          : "Internetga ulanib bo'lmadi",
    };
  }
}

/** Xato sababini foydalanuvchi tiliga o'giradi. */
export function xabarMatni(natija: Natija): string {
  switch (natija.holat) {
    case "yuborildi":
      return "Natijalaringiz o'qituvchiga yuborildi.";
    case "navbatda":
      return (
        "Hozir yuborib bo'lmadi, shuning uchun navbatga qo'yildi: " +
        `${natija.sabab}. Internet paydo bo'lganda o'zi jo'naydi — ` +
        "sahifani ochiq qoldirishingiz shart emas."
      );
    case "sozlanmagan":
      return "Yuborish manzili sozlanmagan.";
  }
}

/* ───────────────── O'qituvchi tomoni: o'qish ───────────────── */

/**
 * O'qish kaliti **kodga yozilmaydi**.
 *
 * Yuborish kaliti brauzerga tushadi va uni har kim ko'radi — shuning
 * uchun u faqat yozish huquqiga ega. O'qish esa boshqa gap: u bilan
 * barcha talabalarning ishini ko'rish mumkin. Shu sababli o'qituvchi
 * uni bir marta o'z brauzeriga kiritadi va u faqat shu yerda qoladi.
 */
export const OQITUVCHI_KALIT_KALITI = "musicped.yiguvchi.oqish.v1";

export function oqituvchiKalitiniOqi(): string {
  try {
    return saqlash()?.getItem(OQITUVCHI_KALIT_KALITI) ?? "";
  } catch {
    return "";
  }
}

export function oqituvchiKalitiniYoz(kalit: string) {
  try {
    const s = saqlash();
    if (!s) return;
    if (kalit.trim()) s.setItem(OQITUVCHI_KALIT_KALITI, kalit.trim());
    else s.removeItem(OQITUVCHI_KALIT_KALITI);
  } catch {
    // Saqlash bloklangan bo'lsa kalit har safar qayta kiritiladi.
  }
}

/** Serverdagi bitta yozuv. */
export type ServerYozuvi = {
  talaba_id: string;
  ism: string;
  guruh: string | null;
  yuborilgan: string;
  paket: unknown;
};

export function serverYozuvimi(v: unknown): v is ServerYozuvi {
  if (!v || typeof v !== "object") return false;
  const y = v as Partial<ServerYozuvi>;
  return (
    typeof y.talaba_id === "string" &&
    typeof y.ism === "string" &&
    typeof y.yuborilgan === "string" &&
    y.paket !== undefined &&
    y.paket !== null
  );
}

/**
 * Serverdan yuborilgan paketlarni oladi.
 *
 * Manzilga so'rov parametri qo'shiladi, shuning uchun sozlamadagi
 * manzilda `?` bo'lsa ham to'g'ri ishlaydi.
 */
export async function serverdanOl(
  sozlama: Sozlama,
  oqishKaliti: string,
  fetchFn: typeof fetch = fetch,
): Promise<
  { ok: true; yozuvlar: ServerYozuvi[] } | { ok: false; sabab: string }
> {
  if (!oqishKaliti.trim()) {
    return { ok: false, sabab: "O'qish kaliti kiritilmagan" };
  }
  const ajratgich = sozlama.url.includes("?") ? "&" : "?";
  const url = `${sozlama.url}${ajratgich}select=*&order=yuborilgan.desc`;
  try {
    const javob = await fetchFn(url, {
      headers: {
        apikey: oqishKaliti,
        Authorization: `Bearer ${oqishKaliti}`,
      },
    });
    if (!javob.ok) {
      return {
        ok: false,
        sabab:
          javob.status === 401 || javob.status === 403
            ? "Kalit noto'g'ri yoki o'qishga ruxsat yo'q"
            : `Server ${javob.status} javob qaytardi`,
      };
    }
    const malumot: unknown = await javob.json();
    if (!Array.isArray(malumot)) {
      return { ok: false, sabab: "Server kutilgan ro'yxatni qaytarmadi" };
    }
    return { ok: true, yozuvlar: malumot.filter(serverYozuvimi) };
  } catch (sabab) {
    return {
      ok: false,
      sabab:
        sabab instanceof Error && sabab.message
          ? sabab.message
          : "Internetga ulanib bo'lmadi",
    };
  }
}

"use client";

import {
  asosiyQatlam,
  notaTanlovi,
  parseBank,
  zarbTanlovi,
  type BankNamuna,
  type SampleBank,
  type Tanlov,
} from "@/lib/audio/bank";
import { chiqariladiganlar } from "@/lib/audio/lru";
import type { Shaping } from "@/lib/audio/timbres";
import { asset } from "@/lib/utils";

/**
 * Namunalarni chaladigan dvigatel — to'g'ridan-to'g'ri Web Audio ustida.
 *
 * Nega Tone.js `Sampler` emas:
 *
 *  • **Ijro kuchi qatlamlari.** `Sampler` har bir nota uchun bitta fayl
 *    kutadi va kuchni faqat balandlik bilan beradi. Haqiqiy cholg'uda
 *    esa kuchli ijro boshqa tembr — buni balandlik bilan hosil qilib
 *    bo'lmaydi.
 *  • **Variantlar.** Zarbli cholg'uda bitta namunani qayta-qayta
 *    chalish mexanik eshitiladi; navbat bilan almashadigan variantlar
 *    kerak.
 *  • **Ovozlarni boshqarish.** Tez ijroda notalar bir-birining ustiga
 *    nazoratsiz yig'ilib, tovush loyqalanadi. Bu yerda ovozlar soni
 *    cheklanadi va eng eskisi yumshoq so'ndiriladi.
 *  • **Bosqichma-bosqich yuklash.** Bank 60–80 fayldan iborat; hammasini
 *    birdan kutish cholg'uni sekundlarga jim qoldiradi. Avval o'rta
 *    qatlam yuklanadi va cholg'u darhol ishlaydi, qolgani keyin keladi.
 *
 * Cholg'u Tone.js ning **audio kontekstida** ishlaydi (bir brauzerda ikki
 * kontekst ochish mobil qurilmada ovozni butunlay o'chirib qo'yishi
 * mumkin), lekin uning tugunlariga bog'liq emas.
 */

/** Bir vaqtda jaranglaydigan ovozlarning chegarasi. */
const MAX_OVOZ = 24;
/** Ovoz so'ndirilganda — qisqa pasayish (chertilish eshitilmasligi uchun). */
const SONDIRISH = 0.06;

type Ovoz = {
  kalit: string;
  src: AudioBufferSourceNode;
  gain: GainNode;
  boshlandi: number;
};

/* ───────────────────── Umumiy keshlar ───────────────────── */

/**
 * Yuklangan fayllar va banklar modul darajasida saqlanadi.
 *
 * Shu sababli cholg'u sahifasiga qaytib kelinganda yoki tembr
 * almashtirilganda fayllar qaytadan yuklanmaydi — brauzer keshi
 * ishlatilsa ham, qayta dekodlash sezilarli pauza berardi.
 *
 * **Kesh chegaralangan.** Dekodlangan audio xotirada siqilmagan holda
 * yotadi: bitta rubob banki (81 namuna) ≈ 41 MB. Chegarasiz keshda
 * uchta cholg'uni aylanib chiqqan talabada 87 MB to'planishi
 * o'lchandi — kuchsiz telefonda bu yorliqning yopilishiga olib
 * keladi. Shuning uchun eng uzoq ishlatilmagan namunalar
 * chiqarib tashlanadi; chalinayotgan ovozlar o'z havolasini ushlab
 * turgani uchun ular to'xtamaydi.
 */
const MAX_BUFFER_BAYT = 48 * 1024 * 1024;

type KeshYozuvi = {
  buf: Promise<AudioBuffer>;
  /** Dekodlangandan keyin ma'lum bo'ladi */
  bayt: number;
  /** Oxirgi murojaat tartibi — eng kichigi birinchi chiqariladi */
  navbat: number;
};

const bufferKesh = new Map<string, KeshYozuvi>();
const bankKesh = new Map<string, Promise<SampleBank>>();
let keshNavbati = 0;

/** Keshdagi dekodlangan audio hajmi (bayt) — o'lchov va test uchun. */
export function keshHajmi() {
  let bayt = 0;
  for (const y of bufferKesh.values()) bayt += y.bayt;
  return { namunalar: bufferKesh.size, bayt };
}

/** Chegaradan oshgan bo'lsa, eng uzoq ishlatilmaganlarini chiqaradi. */
function keshniChegarala() {
  const chiqadi = chiqariladiganlar(
    [...bufferKesh].map(([kalit, y]) => ({ kalit, bayt: y.bayt, navbat: y.navbat })),
    MAX_BUFFER_BAYT,
  );
  for (const kalit of chiqadi) bufferKesh.delete(kalit);
}

export function bankYoli(papka: string) {
  return asset(`/audio/${papka}/bank.json`);
}

export async function bankYukla(papka: string): Promise<SampleBank> {
  const yol = bankYoli(papka);
  let bor = bankKesh.get(yol);
  if (!bor) {
    bor = fetch(yol)
      .then((r) => {
        if (!r.ok) throw new Error(`bank.json yuklanmadi (${r.status}): ${yol}`);
        return r.json();
      })
      .then(parseBank)
      .catch((cause) => {
        // Muvaffaqiyatsiz va'dani keshda qoldirmaymiz — tarmoq tiklanganda
        // keyingi urinish ishlashi kerak.
        bankKesh.delete(yol);
        throw cause;
      });
    bankKesh.set(yol, bor);
  }
  return bor;
}

async function bufferYukla(
  ctx: BaseAudioContext,
  yol: string,
): Promise<AudioBuffer> {
  const bor = bufferKesh.get(yol);
  if (bor) {
    bor.navbat = ++keshNavbati;
    return bor.buf;
  }

  const yozuv: KeshYozuvi = {
    bayt: 0,
    navbat: ++keshNavbati,
    buf: fetch(yol)
      .then((r) => {
        if (!r.ok) throw new Error(`namuna yuklanmadi (${r.status}): ${yol}`);
        return r.arrayBuffer();
      })
      .then((b) => ctx.decodeAudioData(b))
      .then((buf) => {
        // Dekodlangan hajm — Float32, kanallar soni bo'yicha.
        yozuv.bayt = buf.length * buf.numberOfChannels * 4;
        keshniChegarala();
        return buf;
      })
      .catch((cause) => {
        bufferKesh.delete(yol);
        throw cause;
      }),
  };
  bufferKesh.set(yol, yozuv);
  return yozuv.buf;
}

/* ───────────────────── Effektlar zanjiri ───────────────────── */

/**
 * Reverb uchun impuls javobi.
 *
 * Tayyor IR fayli ishlatilmaydi: u yana bitta yuklanadigan audio fayl
 * bo'lardi va uning ham litsenziyasi kerak bo'lardi. Eksponensial
 * so'nuvchi shovqin — zal akustikasining eng sodda, lekin yetarli
 * modeli.
 */
function impulsYarat(ctx: BaseAudioContext, decay: number): AudioBuffer {
  const n = Math.max(1, Math.floor(ctx.sampleRate * decay));
  const buf = ctx.createBuffer(2, n, ctx.sampleRate);
  for (let ch = 0; ch < 2; ch += 1) {
    const data = buf.getChannelData(ch);
    for (let i = 0; i < n; i += 1) {
      // Dastlabki 5 ms — to'g'ridan-to'g'ri tovush, uni shovqin bosmasin.
      const oldin = i < ctx.sampleRate * 0.005 ? 0.2 : 1;
      data[i] = (Math.random() * 2 - 1) * (1 - i / n) ** 2.5 * oldin;
    }
  }
  return buf;
}

export type Zanjir = {
  kirish: GainNode;
  setVolume: (db: number) => void;
  setReverb: (wet: number) => void;
  dispose: () => void;
};

export function zanjirYarat(
  ctx: BaseAudioContext,
  chiqish: AudioNode,
  shaping: Shaping,
): Zanjir {
  const kirish = ctx.createGain();
  let oxirgi: AudioNode = kirish;

  const ula = (node: AudioNode) => {
    oxirgi.connect(node);
    oxirgi = node;
  };

  if (shaping.highpass !== undefined) {
    const f = ctx.createBiquadFilter();
    f.type = "highpass";
    f.frequency.value = shaping.highpass;
    f.Q.value = 0.6;
    ula(f);
  }
  if (shaping.lowpass !== undefined) {
    const f = ctx.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.value = shaping.lowpass;
    f.Q.value = 0.6;
    ula(f);
  }
  if (shaping.presence !== undefined) {
    const f = ctx.createBiquadFilter();
    f.type = "peaking";
    f.frequency.value = 4000;
    f.Q.value = 0.9;
    f.gain.value = shaping.presence;
    ula(f);
  }

  // Quruq va ho'l yo'llar — reverb aralashmasini o'zgartirish uchun.
  const quruq = ctx.createGain();
  const hol = ctx.createGain();
  const reverb = ctx.createConvolver();
  reverb.buffer = impulsYarat(ctx, Math.max(0.2, shaping.reverbDecay));

  const master = ctx.createGain();
  master.gain.value = 10 ** (shaping.volumeDb / 20);

  oxirgi.connect(quruq);
  oxirgi.connect(reverb);
  reverb.connect(hol);
  quruq.connect(master);
  hol.connect(master);
  master.connect(chiqish);

  const setReverb = (wet: number) => {
    const w = Math.max(0, Math.min(1, wet));
    hol.gain.value = w;
    quruq.gain.value = 1 - w * 0.4;
  };
  setReverb(shaping.reverbWet);

  return {
    kirish,
    setVolume: (db) => {
      master.gain.value = 10 ** (db / 20);
    },
    setReverb,
    dispose: () => {
      for (const n of [kirish, quruq, hol, reverb, master]) n.disconnect();
    },
  };
}

/* ───────────────────────── Dvigatel ───────────────────────── */

export type BankPlayerHolat = {
  /** Nechta namuna yuklandi / jami nechta */
  yuklandi: number;
  jami: number;
  /** Yuklab bo'lmagan fayllar */
  xatolar: string[];
};

export class BankPlayer {
  readonly bank: SampleBank;
  private readonly ctx: BaseAudioContext;
  private readonly zanjir: Zanjir;
  private readonly papka: string;
  private readonly bufferlar = new Map<string, AudioBuffer>();
  private readonly navbatlar = new Map<string, number>();
  private ovozlar: Ovoz[] = [];
  private xatolar: string[] = [];
  private tashlandi = false;

  constructor(
    ctx: BaseAudioContext,
    zanjir: Zanjir,
    bank: SampleBank,
    papka: string,
  ) {
    this.ctx = ctx;
    this.zanjir = zanjir;
    this.bank = bank;
    this.papka = papka;
  }

  /** Hozir xotirada turgan fayllar — namuna tanlash shunga qaraydi. */
  private get mavjud(): ReadonlySet<string> {
    return new Set(this.bufferlar.keys());
  }

  get holat(): BankPlayerHolat {
    return {
      yuklandi: this.bufferlar.size,
      jami: this.bank.namunalar.length,
      xatolar: [...this.xatolar],
    };
  }

  /**
   * Bitta kuch qatlamini yuklaydi.
   *
   * Ayrim fayl yuklanmasa, qolganlari baribir ishlaydi: bitta buzuq
   * fayl butun cholg'uni o'chirib qo'ymasligi kerak. Qaytariladigan
   * qiymat — muvaffaqiyatli yuklangan fayllar soni.
   */
  async qatlamYukla(kuchId: string): Promise<number> {
    const kerak = this.bank.namunalar.filter(
      (n) => n.kuch === kuchId && !this.bufferlar.has(n.fayl),
    );
    const natijalar = await Promise.allSettled(
      kerak.map(async (n) => {
        const buf = await bufferYukla(
          this.ctx,
          asset(`/audio/${this.papka}/${n.fayl}`),
        );
        return [n, buf] as const;
      }),
    );
    let soni = 0;
    for (let i = 0; i < natijalar.length; i += 1) {
      const r = natijalar[i];
      if (r.status === "fulfilled") {
        if (this.tashlandi) continue;
        this.bufferlar.set(r.value[0].fayl, r.value[1]);
        soni += 1;
      } else {
        this.xatolar.push(kerak[i].fayl);
      }
    }
    return soni;
  }

  /**
   * Qolgan qatlamlarni fonda yuklaydi.
   *
   * Natija kutilmaydi: cholg'u asosiy qatlam bilan allaqachon ishlayapti,
   * qolgani kelgan sayin ijro boyiyadi.
   */
  qolganiniYukla() {
    const asosiy = asosiyQatlam(this.bank).id;
    for (const k of this.bank.kuchlar) {
      if (k.id === asosiy) continue;
      void this.qatlamYukla(k.id).catch(() => {
        // Qatlam kelmasa, mavjudlari bilan ishlayveradi.
      });
    }
  }

  /* ── Chalish ── */

  private chal(tanlov: Tanlov, kalit: string, velocity: number) {
    const buf = this.bufferlar.get(tanlov.namuna.fayl);
    if (!buf || this.tashlandi) return;

    const src = this.ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = tanlov.tezlik;

    const gain = this.ctx.createGain();
    // Balandlik qatlamga nisbatan hisoblanadi, shuning uchun ijro kuchi
    // qatlamlar ichida ham uzluksiz o'zgaradi.
    const nisbat = velocity / Math.max(0.05, tanlov.qatlam.velocity);
    gain.gain.value = Math.max(0.15, Math.min(1.8, nisbat));

    src.connect(gain);
    gain.connect(this.zanjir.kirish);

    const ovoz: Ovoz = { kalit, src, gain, boshlandi: this.ctx.currentTime };
    src.onended = () => {
      this.ovozlar = this.ovozlar.filter((o) => o !== ovoz);
      try {
        gain.disconnect();
      } catch {
        // Tugun allaqachon uzilgan bo'lishi mumkin — zarari yo'q.
      }
    };
    this.ovozlar.push(ovoz);
    this.chegarani_tekshir();
    src.start();
  }

  /**
   * Ovozlar sonini chegarada ushlaydi.
   *
   * Tez kuy ijro etilganda o'nlab namuna bir-birining ustiga tushadi va
   * tovush loyqalanadi — bu haqiqiy cholg'uda bo'lmaydigan hodisa,
   * chunki u yerda chekli miqdordagi tor bor. Eng eski ovoz yumshoq
   * so'ndiriladi: keskin to'xtatish chertilish beradi.
   */
  private chegarani_tekshir() {
    while (this.ovozlar.length > MAX_OVOZ) {
      const eski = this.ovozlar.shift();
      if (eski) this.sondir(eski);
    }
  }

  private sondir(ovoz: Ovoz, vaqt = SONDIRISH) {
    const now = this.ctx.currentTime;
    try {
      ovoz.gain.gain.cancelScheduledValues(now);
      ovoz.gain.gain.setValueAtTime(ovoz.gain.gain.value, now);
      ovoz.gain.gain.linearRampToValueAtTime(0.0001, now + vaqt);
      ovoz.src.stop(now + vaqt);
    } catch {
      // Ovoz o'zi tugagan bo'lishi mumkin.
    }
  }

  /**
   * Nota chaladi.
   *
   * Bir xil nota qayta bosilsa, avvalgisi so'ndiriladi: haqiqiy torda
   * ham yangi chertish eskisini to'xtatadi. Buni qilmaslik tez ijroda
   * bitta notani o'nlab nusxada jaranglatib yuboradi.
   */
  nota(note: string, velocity = 0.8) {
    const tanlov = notaTanlovi(this.bank, note, velocity, this.mavjud);
    if (!tanlov) return;
    for (const o of this.ovozlar.filter((o) => o.kalit === note)) {
      this.sondir(o, 0.08);
    }
    this.chal(tanlov, note, velocity);
  }

  /** Zarb chaladi — variantlar navbat bilan almashadi. */
  zarb(stroke: string, velocity = 0.9) {
    const navbat = this.navbatlar.get(stroke) ?? 0;
    const tanlov = zarbTanlovi(this.bank, stroke, velocity, navbat, this.mavjud);
    if (!tanlov) return;
    this.navbatlar.set(stroke, navbat + 1);
    this.chal(tanlov, stroke, velocity);
  }

  /** Jaranglab turgan hamma narsani to'xtatadi. */
  stopAll() {
    for (const o of this.ovozlar) this.sondir(o, 0.04);
    this.ovozlar = [];
  }

  setVolume(db: number) {
    this.zanjir.setVolume(db);
  }

  setReverb(wet: number) {
    this.zanjir.setReverb(wet);
  }

  dispose() {
    this.tashlandi = true;
    this.stopAll();
    this.zanjir.dispose();
    // Bufferlar keshda qoladi — sahifaga qaytilganda qayta yuklanmaydi.
    this.bufferlar.clear();
  }
}

/** Namunalar ro'yxatini registr bo'yicha sanab beradi (hujjat va test uchun). */
export function registrlarBoyicha(namunalar: readonly BankNamuna[]) {
  const natija = new Map<string, number>();
  for (const n of namunalar) {
    natija.set(n.registr, (natija.get(n.registr) ?? 0) + 1);
  }
  return natija;
}

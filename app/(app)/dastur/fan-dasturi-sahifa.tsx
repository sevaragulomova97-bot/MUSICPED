import {
  AMALIYLAR,
  asarMuallifi,
  ASARLAR,
  FAN,
  KURS_ISHLARI,
  MARUZALAR,
  MUSTAQIL_TOPSHIRIQLAR,
  TALIM_NATIJALARI,
} from "@/content/fan-dasturi";
import { turQoplovi } from "@/content/dastur-qoplovi";
import {
  BAHO_JADVALI,
  JAMI_MAX,
  NAZORATLAR,
  RUBRIKA_BY_NAZORAT,
} from "@/lib/baholash-rasmiy";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Fan dasturi — rasmiy hujjatning platformadagi ko'rinishi.
 *
 * Sahifa **o'qish uchun**: o'qituvchi dastur bilan platformani
 * solishtiradi, talaba esa nimani o'rganishini va qanday baholanishini
 * oldindan ko'radi. Ma'lumot `content/fan-dasturi.ts` dan olinadi —
 * bu yerda hech narsa qo'lda takrorlanmaydi, aks holda ikkisi
 * bir-biridan uzilib ketardi.
 *
 * Server komponenti: sahifa butunlay statik, brauzerda hisob yo'q.
 */
export function FanDasturi() {
  /*
    `alohida` — mashg'ulot platformada o'z darsi bilan beriladimi.
    Mustaqil ta'lim uchun yo'q: uning mavzulari boshqa kurslardagi
    topshiriqlar va musiqa asboblaridagi mashqlar orqali mustahkamlanadi.
    Shuning uchun u yerda nol raqam kamchilik emas — ustun qizarmaydi.
  */
  const soat = [
    { nom: "Ma'ruza", qiymat: FAN.soat.maruza, alohida: true },
    { nom: "Amaliy mashg'ulot", qiymat: FAN.soat.amaliy, alohida: true },
    { nom: "Kurs ishi", qiymat: FAN.soat.kursIshi, alohida: true },
    { nom: "Mustaqil ta'lim", qiymat: FAN.soat.mustaqil, alohida: false },
  ];

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div>
        <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
          {FAN.nom}
        </h1>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
          {FAN.kod} · {FAN.yonalish} · {FAN.oquvYili} o&apos;quv yili,{" "}
          {FAN.semestr}-semestr · {FAN.turi.toLowerCase()} fan
        </p>
      </div>

      {/* Hajm */}
      <Card>
        <CardHeader>
          <CardTitle>Hajmi</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
            <span className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold tabular-nums text-ink">
                {FAN.ects}
              </span>
              <span className="text-sm text-ink-muted">ECTS kredit</span>
            </span>
            <span className="flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold tabular-nums text-ink">
                {FAN.soat.jami}
              </span>
              <span className="text-sm text-ink-muted">jami soat</span>
            </span>
            <span className="text-sm text-ink-muted">
              haftasiga {FAN.haftadagiSoat} soat
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle text-left text-ink-muted">
                  <th className="py-2 font-medium">Mashg&apos;ulot turi</th>
                  <th className="py-2 text-right font-medium">Dasturda</th>
                  <th className="py-2 text-right font-medium">Platformada</th>
                </tr>
              </thead>
              <tbody>
                {soat.map((s, i) => {
                  const turlar = ["maruza", "amaliy", "kurs-ishi", "mustaqil"] as const;
                  /*
                    Ustun platformada yozilgan darslardan hisoblanadi —
                    dasturning o'z hujjatidan emas. Aks holda ikki ustun
                    har doim teng chiqib, tekshiruv ma'nosini yo'qotardi.
                  */
                  const q = turQoplovi(turlar[i]);
                  const toliq = q.platformada >= s.qiymat;
                  return (
                    <tr key={s.nom} className="border-b border-border-subtle/60">
                      <td className="py-2 text-ink">{s.nom}</td>
                      <td className="py-2 text-right tabular-nums text-ink">
                        {s.qiymat} soat
                      </td>
                      <td className="py-2 text-right text-sm">
                        {s.alohida ? (
                          <>
                            <span
                              className={
                                toliq
                                  ? "tabular-nums text-success-ink"
                                  : "tabular-nums text-danger-ink"
                              }
                            >
                              {q.platformada} soat
                            </span>
                            <span className="block text-xs text-ink-muted tabular-nums">
                              {q.yozilgan}/{q.mavzular} mavzu
                            </span>
                          </>
                        ) : (
                          <span className="text-xs text-ink-muted">
                            topshiriq va asboblar orqali
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="text-xs leading-relaxed text-ink-muted">
            «Platformada» ustuni dasturdagi mashg&apos;ulot uchun haqiqatan
            dars yozilganini ko&apos;rsatadi: soat platformadagi darslardan
            hisoblanadi. Qizil raqam — kontent hali to&apos;liq emas.
          </p>

          <p className="text-sm leading-relaxed text-ink-muted">{FAN.maqsad}</p>
        </CardContent>
      </Card>

      {/* Ta'lim natijalari */}
      <Card>
        <CardHeader>
          <CardTitle>Ta&apos;lim natijalari (TN)</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {TALIM_NATIJALARI.map((t) => (
            <div key={t.kod} className="flex gap-3">
              <Badge variant={t.tur === "kompetensiya" ? "primary" : "neutral"}>
                {t.kod}
              </Badge>
              <p className="text-sm leading-relaxed text-ink">{t.matn}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Ma'ruzalar */}
      <Card>
        <CardHeader>
          <CardTitle>
            Ma&apos;ruzalar — {MARUZALAR.length} ta mavzu, {FAN.soat.maruza} soat
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3.5">
          {MARUZALAR.map((m) => (
            <div key={m.kod} className="border-b border-border-subtle/60 pb-3 last:border-0 last:pb-0">
              <p className="flex flex-wrap items-baseline gap-2">
                <span className="font-display text-sm font-semibold text-primary-ink">
                  {m.kod}
                </span>
                <span className="font-medium text-ink">{m.sarlavha}</span>
                <span className="text-xs text-ink-muted">{m.soat} soat</span>
              </p>
              {m.mazmun && (
                <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                  {m.mazmun}
                </p>
              )}
              {m.adabiyot && (
                <p className="mt-1 text-xs text-ink-muted">
                  Adabiyot: [{m.adabiyot.join(", ")}]
                </p>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Amaliy mashg'ulotlar */}
      <Card>
        <CardHeader>
          <CardTitle>
            Amaliy mashg&apos;ulotlar — {AMALIYLAR.length} ta, {FAN.soat.amaliy} soat
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm leading-relaxed text-ink-muted">
            Har bir mashg&apos;ulot bitta asar ustida ishlaydi: Flipped
            Classroom metodi asosida ifodali kuylab ijro etish va mazmunini
            tahlil qilish.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle text-left text-ink-muted">
                  <th className="py-2 font-medium">Kod</th>
                  <th className="py-2 font-medium">Asar</th>
                  <th className="py-2 font-medium">Mualliflar</th>
                  <th className="py-2 text-right font-medium">Sinf</th>
                </tr>
              </thead>
              <tbody>
                {ASARLAR.map((a) => (
                  <tr key={a.kod} className="border-b border-border-subtle/60">
                    <td className="py-2 font-medium text-primary-ink">{a.kod}</td>
                    <td className="py-2 text-ink">{a.nom}</td>
                    <td className="py-2 text-ink-muted">{asarMuallifi(a)}</td>
                    <td className="py-2 text-right tabular-nums text-ink-muted">
                      {a.sinf ? `${a.sinf}-sinf` : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="rounded-xl bg-warning-soft p-3 text-sm leading-relaxed text-warning-ink">
            Asarlarning nota matni va audio yozuvi platformaga qo&apos;yilmaydi
            — bular hozirgi zamon mualliflarining asarlari va ularning huquqi
            himoyalangan. Platforma asarni emas, uni o&apos;rgatish
            metodikasini beradi; nota matni sinf darsligida.
          </p>
        </CardContent>
      </Card>

      {/* Mustaqil ta'lim */}
      <Card>
        <CardHeader>
          <CardTitle>
            Mustaqil ta&apos;lim — {MUSTAQIL_TOPSHIRIQLAR.length} ta topshiriq,{" "}
            {FAN.soat.mustaqil} soat
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <p className="rounded-lg bg-surface-muted p-3 text-sm leading-relaxed text-ink-muted">
            Mustaqil ta&apos;lim platformada alohida sahifa sifatida
            berilmaydi. Uning mavzulari — asarni mustaqil tahlil qilish va
            dars ishlanmasi tayyorlash — boshqa kurslardagi topshiriqlar va
            musiqa asboblaridagi mashqlar orqali mustahkamlanadi. Quyidagi
            ro&apos;yxat dastur hujjatidagi holicha, yo&apos;naltirish uchun
            keltirilgan.
          </p>

          {MUSTAQIL_TOPSHIRIQLAR.map((t) => (
            <div key={t.kod} className="flex flex-wrap items-baseline gap-2">
              <span className="font-display text-sm font-semibold text-primary-ink">
                {t.kod}
              </span>
              <span className="flex-1 text-sm text-ink">{t.mazmun}</span>
              <span className="text-xs text-ink-muted">{t.soat} soat</span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Kurs ishi */}
      <Card>
        <CardHeader>
          <CardTitle>
            Kurs ishi mavzulari — {KURS_ISHLARI.length} ta, {FAN.soat.kursIshi} soat
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="flex flex-col gap-2 text-sm">
            {KURS_ISHLARI.map((k) => (
              <li key={k.kod} className="flex gap-2.5">
                <span className="font-display font-semibold text-primary-ink">
                  {k.kod}
                </span>
                <span className="text-ink">{k.sarlavha}</span>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Baholash */}
      <Card>
        <CardHeader>
          <CardTitle>Baholash mezonlari</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-5">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[460px] text-sm">
              <thead>
                <tr className="border-b border-border-subtle text-left text-ink-muted">
                  <th className="py-2 font-medium">Nazorat turi</th>
                  <th className="py-2 text-right font-medium">Maksimal ball</th>
                  <th className="py-2 text-right font-medium">Saralash balli</th>
                  <th className="py-2 font-medium">Baholash vositasi</th>
                </tr>
              </thead>
              <tbody>
                {NAZORATLAR.map((n) => (
                  <tr key={n.kod} className="border-b border-border-subtle/60">
                    <td className="py-2 text-ink">
                      {n.nom} ({n.kod})
                    </td>
                    <td className="py-2 text-right tabular-nums text-ink">{n.max}</td>
                    <td className="py-2 text-right tabular-nums text-ink-muted">
                      {n.saralash}
                    </td>
                    <td className="py-2 text-ink-muted">{n.vosita}</td>
                  </tr>
                ))}
                <tr>
                  <td className="py-2 font-medium text-ink">Jami</td>
                  <td className="py-2 text-right font-medium tabular-nums text-primary-ink">
                    {JAMI_MAX}
                  </td>
                  <td colSpan={2} />
                </tr>
              </tbody>
            </table>
          </div>

          {NAZORATLAR.map((n) => (
            <div key={n.kod}>
              <p className="mb-2 font-medium text-ink">
                {n.nom} rubrikasi — {n.max} ball
              </p>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] text-xs">
                  <thead>
                    <tr className="border-b border-border-subtle text-left text-ink-muted">
                      <th className="py-2 font-medium">Mezon</th>
                      <th className="py-2 text-right font-medium">Ball</th>
                      <th className="py-2 font-medium">Yuqori</th>
                      <th className="py-2 font-medium">Yetarli</th>
                      <th className="py-2 font-medium">Minimal</th>
                      <th className="py-2 font-medium">Erishilmagan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RUBRIKA_BY_NAZORAT[n.kod].map((m) => (
                      <tr key={m.nom} className="border-b border-border-subtle/60 align-top">
                        <td className="py-2 pr-2 text-ink">{m.nom}</td>
                        <td className="py-2 pr-2 text-right tabular-nums text-ink">
                          {m.max}
                        </td>
                        <td className="py-2 pr-2 text-ink-muted">{m.darajalar.yuqori}</td>
                        <td className="py-2 pr-2 text-ink-muted">{m.darajalar.yetarli}</td>
                        <td className="py-2 pr-2 text-ink-muted">{m.darajalar.minimal}</td>
                        <td className="py-2 text-ink-muted">{m.darajalar.erishilmagan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div>
            <p className="mb-2 font-medium text-ink">Fan bo&apos;yicha baho</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[460px] text-sm">
                <tbody>
                  {BAHO_JADVALI.map((d, i) => {
                    const yuqori = i === 0 ? 100 : BAHO_JADVALI[i - 1].min - 0.1;
                    return (
                      <tr key={d.baho} className="border-b border-border-subtle/60 align-top">
                        <td className="w-28 py-2 tabular-nums text-ink">
                          {d.min}–{yuqori}
                        </td>
                        <td className="w-28 py-2 font-medium text-ink">{d.baho}</td>
                        <td className="py-2 text-ink-muted">{d.tavsif}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <p className="rounded-xl bg-surface-muted p-3 text-sm leading-relaxed text-ink-muted">
            <strong className="font-medium text-ink">Eslatma.</strong> JN, ON va
            YaN bo&apos;yicha saralash talabi <strong>alohida</strong>{" "}
            qo&apos;llaniladi: bir nazorat turidagi yetishmagan ball boshqa
            nazorat turidagi yuqori ball hisobiga qoplanmaydi.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

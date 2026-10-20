"use client";

import * as React from "react";
import { useLiveQuery } from "dexie-react-hooks";
import { Info, Trash2, Users } from "lucide-react";
import { useSession } from "@/components/session-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { deleteProfile, profileSummaries } from "@/lib/db/repo";
import { downloadCsv } from "@/lib/export/download";
import { EKSPERIMENT_GURUH_NOMI } from "@/lib/domain/types";
import { ROLE_LABEL } from "@/lib/navigation";
import { formatDate } from "@/lib/utils";

export function Foydalanuvchilar() {
  const { profile } = useSession();
  const [ochirilayotgan, setOchirilayotgan] = React.useState<string | null>(null);

  const rows = useLiveQuery(() => profileSummaries(), []);

  if (rows === undefined) {
    return <p className="text-sm text-ink-muted">Yuklanmoqda…</p>;
  }

  function eksport() {
    const sarlavha = [
      "Ism familiya", "Rol", "Guruh", "Tajriba guruhi", "Diagnostika",
      "Darslar", "Ishlar", "Refleksiya", "Yozuvlar", "Portfolio", "Yaratilgan",
    ];
    const qatorlar = (rows ?? []).map((r) => [
      r.profile.fullName,
      ROLE_LABEL[r.profile.role],
      r.profile.group ?? "",
      r.profile.experimentGroup ? EKSPERIMENT_GURUH_NOMI[r.profile.experimentGroup] : "",
      r.diagnostics, r.progress, r.submissions, r.reflections, r.recordings, r.portfolio,
      formatDate(r.profile.createdAt),
    ]);
    downloadCsv([sarlavha, ...qatorlar], "profillar.csv");
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
            Foydalanuvchilar
          </h1>
          <p className="mt-1.5 text-sm text-ink-muted">
            Shu brauzerda {rows.length} ta profil
          </p>
        </div>
        {rows.length > 0 && (
          <Button variant="outline" size="sm" onClick={eksport}>
            CSV
          </Button>
        )}
      </div>

      <Card>
        <CardContent className="flex items-start gap-2.5 p-4 text-sm leading-relaxed text-ink-muted">
          <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
          <span>
            Bu ro&apos;yxat <strong className="font-medium text-ink">butun
            platformaning</strong> foydalanuvchilari emas. Server yo&apos;q, shuning
            uchun markaziy ro&apos;yxat ham yo&apos;q: har bir kompyuter o&apos;z
            ma&apos;lumotini o&apos;zi saqlaydi. Bu yerda faqat shu brauzerda profil
            yaratgan foydalanuvchilar ko&apos;rinadi.
          </span>
        </CardContent>
      </Card>

      {rows.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
            <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary-ink">
              <Users className="size-6" aria-hidden="true" />
            </span>
            <p className="max-w-sm text-sm text-ink-muted">
              Hali profil yaratilmagan. Profil diagnostikadan o&apos;tilganda yoki
              sozlamalarda ma&apos;lumot saqlanganda bazaga yoziladi.
            </p>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Profillar</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto p-0">
            <table className="w-full text-sm">
              <caption className="sr-only">
                Shu brauzerdagi profillar va ular saqlagan yozuvlar soni
              </caption>
              <thead>
                <tr className="border-b border-border-subtle text-left">
                  <th scope="col" className="px-4 py-3 font-medium text-ink-muted">Profil</th>
                  <th scope="col" className="px-4 py-3 font-medium text-ink-muted">Rol</th>
                  <th scope="col" className="px-4 py-3 font-medium text-ink-muted">Diagnostika</th>
                  <th scope="col" className="px-4 py-3 font-medium text-ink-muted">Darslar</th>
                  <th scope="col" className="px-4 py-3 font-medium text-ink-muted">Ishlar</th>
                  <th scope="col" className="px-4 py-3 font-medium text-ink-muted">Portfolio</th>
                  <th scope="col" className="px-4 py-3 font-medium text-ink-muted">
                    <span className="sr-only">Amallar</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.profile.id} className="border-b border-border-subtle last:border-0">
                    <td className="px-4 py-3">
                      <span className="block font-medium text-ink">
                        {r.profile.fullName}
                        {r.profile.id === profile?.id && (
                          <Badge variant="primary" className="ml-2">siz</Badge>
                        )}
                        {r.profile.demo && <Badge variant="warning" className="ml-2">namuna</Badge>}
                      </span>
                      <span className="text-xs text-ink-muted">
                        {r.profile.group ?? "guruhsiz"}
                        {r.profile.experimentGroup &&
                          ` · ${EKSPERIMENT_GURUH_NOMI[r.profile.experimentGroup]}`}
                        {` · ${formatDate(r.profile.createdAt)}`}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-ink-muted">{ROLE_LABEL[r.profile.role]}</td>
                    <td className="px-4 py-3 tabular-nums text-ink">{r.diagnostics}</td>
                    <td className="px-4 py-3 tabular-nums text-ink">{r.progress}</td>
                    <td className="px-4 py-3 tabular-nums text-ink">{r.submissions}</td>
                    <td className="px-4 py-3 tabular-nums text-ink">{r.portfolio}</td>
                    <td className="px-4 py-3 text-right">
                      {ochirilayotgan === r.profile.id ? (
                        <span className="flex flex-wrap items-center justify-end gap-2">
                          <Button
                            variant="danger"
                            size="sm"
                            onClick={async () => {
                              await deleteProfile(r.profile.id);
                              setOchirilayotgan(null);
                            }}
                          >
                            Ha, o&apos;chirish
                          </Button>
                          <Button variant="ghost" size="sm" onClick={() => setOchirilayotgan(null)}>
                            Bekor
                          </Button>
                        </span>
                      ) : (
                        <Button
                          variant="ghost"
                          size="sm"
                          aria-label={`${r.profile.fullName} profilini o'chirish`}
                          onClick={() => setOchirilayotgan(r.profile.id)}
                        >
                          <Trash2 aria-hidden="true" />
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}

      <p className="text-xs leading-relaxed text-ink-muted">
        Profilni o&apos;chirish uning barcha yozuvlarini ham o&apos;chiradi
        (diagnostika, darslar, ishlar, yozuvlar, portfolio, qabul qilingan
        talabalar va kuzatuv varaqalari). Serverda nusxa yo&apos;q, shuning uchun
        amalni qaytarib bo&apos;lmaydi.
      </p>
    </div>
  );
}

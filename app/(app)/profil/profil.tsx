"use client";

import * as React from "react";
import Link from "next/link";
import { useLiveQuery } from "dexie-react-hooks";
import { Route, UserRound } from "lucide-react";
import { initialsOf, useSession } from "@/components/session-provider";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  allDiagnostics,
  getProfile,
  latestLearningPath,
  upsertProfile,
} from "@/lib/db/repo";
import {
  DIAGNOSTIKA_TURI_NOMI,
  EKSPERIMENT_GURUH_NOMI,
  type ExperimentGroup,
  PROFIL_NOMI,
  YONALISH_NOMI,
  ZPD_NOMI,
  ZPD_TAVSIFI,
  zpdZone,
} from "@/lib/domain/types";
import { ROLE_LABEL } from "@/lib/navigation";
import { formatDate } from "@/lib/utils";

export function Profil() {
  const { profile, signIn } = useSession();
  const userId = profile?.id;

  const data = useLiveQuery(async () => {
    if (!userId) return null;
    const [saqlangan, diags, path] = await Promise.all([
      getProfile(userId),
      allDiagnostics(userId),
      latestLearningPath(userId),
    ]);
    return { saqlangan, diags, path };
  }, [userId]);

  if (!profile) {
    return <p className="text-sm text-ink-muted">Profil tanlanmagan.</p>;
  }
  if (data === undefined) {
    return <p className="text-sm text-ink-muted">Yuklanmoqda…</p>;
  }

  const diags = data?.diags ?? [];
  const oxirgi = diags[diags.length - 1];
  const tajribaGuruhi = data?.saqlangan?.experimentGroup;

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <Card>
        <CardContent className="flex flex-wrap items-center gap-5 p-6">
          <span
            aria-hidden="true"
            className="grid size-16 shrink-0 place-items-center rounded-2xl bg-primary-soft font-display text-xl font-bold text-primary"
          >
            {initialsOf(profile.fullName)}
          </span>
          <div className="min-w-0 flex-1">
            <h1 className="font-display text-xl font-bold text-ink">
              {profile.fullName}
            </h1>
            <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-ink-muted">
              <Badge variant="primary">{ROLE_LABEL[profile.role]}</Badge>
              {profile.group && <span>{profile.group}</span>}
              {profile.direction && <span>· {profile.direction}</span>}
              {tajribaGuruhi && (
                <Badge variant={tajribaGuruhi === "tajriba" ? "secondary" : "neutral"}>
                  {EKSPERIMENT_GURUH_NOMI[tajribaGuruhi]}
                </Badge>
              )}
            </p>
            {profile.startedAt && (
              <p className="mt-1 text-xs text-ink-muted">
                Boshlagan sana: {formatDate(profile.startedAt)}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {oxirgi && (
        <Card>
          <CardHeader>
            <CardTitle>Joriy daraja</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div>
              <p className="mb-1.5 flex items-baseline justify-between text-sm">
                <span className="text-ink-muted">Umumiy ball</span>
                <span className="font-display text-2xl font-bold tabular-nums text-ink">
                  {oxirgi.overall}%
                </span>
              </p>
              <Progress value={oxirgi.overall} />
            </div>

            <div className="rounded-xl bg-surface-muted p-4">
              <p className="text-sm font-medium text-ink">
                {ZPD_NOMI[zpdZone(oxirgi.overall)]}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                {ZPD_TAVSIFI[zpdZone(oxirgi.overall)]}
              </p>
            </div>

            <p className="text-sm text-ink-muted">
              Profil turi:{" "}
              <strong className="font-medium text-ink">
                {PROFIL_NOMI[oxirgi.profileType]}
              </strong>
            </p>

            <Link
              href="/yolnalish"
              className="inline-flex h-10 w-fit items-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              <Route className="size-4" aria-hidden="true" />
              Individual yo&apos;nalishim
            </Link>
          </CardContent>
        </Card>
      )}

      {diags.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Diagnostika tarixi</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <table className="w-full text-sm">
              <caption className="sr-only">
                O&apos;tilgan diagnostikalar: turi, sanasi va umumiy ball
              </caption>
              <thead>
                <tr className="border-b border-border-subtle text-left">
                  <th scope="col" className="py-2 pr-4 font-medium text-ink-muted">Turi</th>
                  <th scope="col" className="py-2 pr-4 font-medium text-ink-muted">Sana</th>
                  <th scope="col" className="py-2 pr-4 font-medium text-ink-muted">Ball</th>
                  <th scope="col" className="py-2 font-medium text-ink-muted">Eng kuchli yo&apos;nalish</th>
                </tr>
              </thead>
              <tbody>
                {diags.map((d) => {
                  const kuchli = Object.entries(d.scores).sort(
                    (a, b) => b[1] - a[1],
                  )[0];
                  return (
                    <tr key={d.id} className="border-b border-border-subtle last:border-0">
                      <td className="py-2 pr-4 text-ink">{DIAGNOSTIKA_TURI_NOMI[d.kind]}</td>
                      <td className="py-2 pr-4 text-ink-muted">{formatDate(d.completedAt)}</td>
                      <td className="py-2 pr-4 tabular-nums text-ink">{d.overall}%</td>
                      <td className="py-2 text-ink-muted">
                        {kuchli
                          ? `${YONALISH_NOMI[kuchli[0] as keyof typeof YONALISH_NOMI]} (${kuchli[1]}%)`
                          : "—"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center gap-4 p-8 text-center">
            <span className="grid size-12 place-items-center rounded-xl bg-primary-soft text-primary">
              <UserRound className="size-6" aria-hidden="true" />
            </span>
            <p className="max-w-sm text-sm text-ink-muted">
              Hali diagnostikadan o&apos;tmagansiz. Diagnostika individual o&apos;quv
              yo&apos;nalishini qurish uchun asos bo&apos;ladi.
            </p>
            <Link
              href="/diagnostika"
              className="inline-flex h-10 items-center rounded-xl bg-primary px-5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
            >
              Diagnostikadan o&apos;tish
            </Link>
          </CardContent>
        </Card>
      )}

      <ProfilForm
        current={{
          id: profile.id,
          fullName: profile.fullName,
          role: profile.role,
          group: profile.group,
          direction: profile.direction,
          startedAt: profile.startedAt,
          experimentGroup: tajribaGuruhi,
        }}
        onSaved={(next) => {
          signIn({
            id: next.id,
            fullName: next.fullName,
            role: next.role,
            group: next.group,
            direction: next.direction,
            startedAt: next.startedAt,
          });
        }}
      />
    </div>
  );
}

type FormProfile = {
  id: string;
  fullName: string;
  role: "TALABA" | "OQITUVCHI" | "ADMIN";
  group?: string;
  direction?: string;
  startedAt?: string;
  experimentGroup?: ExperimentGroup;
};

/**
 * Profil ma'lumotini tahrirlash.
 *
 * Ism sessiyada (localStorage) va bazada — ikki joyda ham yangilanadi, aks
 * holda eksport faylida eski ism qolib ketardi.
 *
 * Tajriba guruhi ataylab shu yerda: uni **o'qituvchi aytadi**, talaba esa
 * belgilaydi. Serversiz platformada o'qituvchi talabaning brauzeriga yoza
 * olmaydi, shuning uchun boshqa yo'l yo'q — buning izohi forma yonida
 * yozilgan.
 */
function ProfilForm({
  current,
  onSaved,
}: {
  current: FormProfile;
  onSaved: (next: FormProfile) => void;
}) {
  const [qiymat, setQiymat] = React.useState<FormProfile>(current);
  const [holat, setHolat] = React.useState<"tayyor" | "saqlanmoqda" | "saqlandi">("tayyor");

  async function saqla(event: React.FormEvent) {
    event.preventDefault();
    if (!qiymat.fullName.trim()) return;
    setHolat("saqlanmoqda");
    await upsertProfile({
      id: qiymat.id,
      fullName: qiymat.fullName.trim(),
      role: qiymat.role,
      group: qiymat.group?.trim() || undefined,
      direction: qiymat.direction?.trim() || undefined,
      startedAt: qiymat.startedAt,
      experimentGroup: qiymat.experimentGroup,
    });
    onSaved(qiymat);
    setHolat("saqlandi");
    window.setTimeout(() => setHolat("tayyor"), 2500);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Profil ma&apos;lumotini tahrirlash</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => void saqla(e)} className="flex flex-col gap-4">
          <label className="flex flex-col gap-1.5 text-sm">
            <span className="text-ink-muted">Ism va familiya</span>
            <input
              type="text"
              required
              value={qiymat.fullName}
              onChange={(e) => setQiymat((v) => ({ ...v, fullName: e.target.value }))}
              className="h-10 rounded-lg border border-border-subtle bg-surface px-3 text-sm text-ink"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="text-ink-muted">Guruh</span>
              <input
                type="text"
                value={qiymat.group ?? ""}
                placeholder="MT-24"
                onChange={(e) => setQiymat((v) => ({ ...v, group: e.target.value }))}
                className="h-10 rounded-lg border border-border-subtle bg-surface px-3 text-sm text-ink placeholder:text-ink-muted"
              />
            </label>

            <label className="flex flex-col gap-1.5 text-sm">
              <span className="text-ink-muted">Yo&apos;nalish</span>
              <input
                type="text"
                value={qiymat.direction ?? ""}
                placeholder="Musiqa ta'limi"
                onChange={(e) => setQiymat((v) => ({ ...v, direction: e.target.value }))}
                className="h-10 rounded-lg border border-border-subtle bg-surface px-3 text-sm text-ink placeholder:text-ink-muted"
              />
            </label>
          </div>

          {qiymat.role === "TALABA" && (
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="text-ink-muted">Tajriba-sinov guruhi</span>
              <select
                value={qiymat.experimentGroup ?? ""}
                onChange={(e) =>
                  setQiymat((v) => ({
                    ...v,
                    experimentGroup: (e.target.value || undefined) as ExperimentGroup | undefined,
                  }))
                }
                className="h-10 rounded-lg border border-border-subtle bg-surface px-3 text-sm text-ink sm:max-w-xs"
              >
                <option value="">Ko&apos;rsatilmagan</option>
                <option value="tajriba">{EKSPERIMENT_GURUH_NOMI.tajriba}</option>
                <option value="nazorat">{EKSPERIMENT_GURUH_NOMI.nazorat}</option>
              </select>
              <span className="text-xs leading-relaxed text-ink-muted">
                Bu qiymatni o&apos;qituvchingiz aytadi. U faqat tajriba-sinov
                tahlilida ishlatiladi va o&apos;quv jarayoniga ta&apos;sir qilmaydi.
              </span>
            </label>
          )}

          <div className="flex items-center gap-3">
            <Button type="submit" disabled={holat === "saqlanmoqda"}>
              {holat === "saqlanmoqda" ? "Saqlanmoqda…" : "Saqlash"}
            </Button>
            {holat === "saqlandi" && (
              <span className="text-sm text-success" role="status">
                Saqlandi
              </span>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

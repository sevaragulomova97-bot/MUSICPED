import { Construction } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

/** Keyingi bosqichda to'ldiriladigan sahifalar uchun vaqtinchalik ko'rinish. */
export function Placeholder({
  title,
  description,
  stage,
}: {
  title: string;
  description: string;
  stage: string;
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-display text-xl font-bold text-ink lg:text-2xl">
        {title}
      </h1>
      <p className="mt-1.5 text-sm text-ink-muted">{description}</p>

      <Card className="mt-6">
        <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
          <span className="grid size-12 place-items-center rounded-xl bg-warning-soft text-warning">
            <Construction className="size-6" aria-hidden="true" />
          </span>
          <p className="font-medium text-ink">Bu bo&apos;lim hali tayyor emas</p>
          <p className="max-w-sm text-sm text-ink-muted">
            {stage} bosqichida ishlab chiqiladi.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

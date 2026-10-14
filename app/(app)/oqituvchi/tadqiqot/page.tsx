import type { Metadata } from "next";
import { Placeholder } from "@/components/layout/placeholder";

export const metadata: Metadata = { title: "Tadqiqot" };

export default function Page() {
  return (
    <Placeholder
      title="Tadqiqot"
      description="Tajriba-nazorat guruhlari, t-mezon, χ² va eksport"
      stage="B5"
    />
  );
}

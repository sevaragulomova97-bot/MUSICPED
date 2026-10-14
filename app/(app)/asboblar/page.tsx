import type { Metadata } from "next";
import { Placeholder } from "@/components/layout/placeholder";

export const metadata: Metadata = { title: "Musiqa asboblari" };

export default function Page() {
  return (
    <Placeholder
      title="Musiqa asboblari"
      description="Virtual pianino, dutor va doira"
      stage="B3"
    />
  );
}

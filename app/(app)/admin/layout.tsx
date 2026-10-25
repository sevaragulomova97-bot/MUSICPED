import { RolHimoyasi } from "@/components/rol-himoyasi";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RolHimoyasi kerak={["ADMIN"]} bolim="Admin paneli">
      {children}
    </RolHimoyasi>
  );
}

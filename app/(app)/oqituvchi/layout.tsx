import { RolHimoyasi } from "@/components/rol-himoyasi";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <RolHimoyasi kerak={["OQITUVCHI", "ADMIN"]} bolim="O'qituvchi kabineti">
      {children}
    </RolHimoyasi>
  );
}

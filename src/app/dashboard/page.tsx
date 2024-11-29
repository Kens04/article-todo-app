import { useSession } from "@/components/hooks/useSession";
import { AppSidebar } from "@/components/layout/dashboard/sidebar";

export default async function Dashboard() {
  const session = await useSession();
  return <AppSidebar session={session} />;
}

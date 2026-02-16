import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSideBar from "./AppSideBar";
export default function Dashboard() {
  return (
    <section>
      <SidebarProvider>
        <AppSideBar />
        <SidebarTrigger />
      </SidebarProvider>
    </section>
  );
}

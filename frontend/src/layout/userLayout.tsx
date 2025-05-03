import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <main>
      <AppSidebar />

      <Outlet />
    </main>
  );
}

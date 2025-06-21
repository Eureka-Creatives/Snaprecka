import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <main className="flex items-stretch min-w-full min-h-screen">
      <AppSidebar />

      <Outlet />
    </main>
  );
}

import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/user/navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function UserLayout() {
  return (
    <main className="flex flex-col items-stretch min-w-screen min-h-screen font-dm container mx-auto  bg-white relative max-md:px-0">
      <div className="flex-1 w-full flex flex-row gap-2 top-14 h-full z-40">
        <Toaster richColors position="top-right" />
        <div className="w-[20%] max-lg:hidden">
          <AppSidebar />
        </div>
        <div className="w-[82%] max-lg:w-full flex flex-col gap-8 bg-[#F9FAFB]">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </main>
  );
}

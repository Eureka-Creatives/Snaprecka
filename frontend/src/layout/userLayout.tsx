import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/user/navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function UserLayout() {
  return (
    <main className="flex flex-col min-w-screen min-h-screen font-dm container mx-auto  bg-white relative max-md:px-0">
      <div className="w-full flex flex-row justify-between top-14 h-full z-40">
        <Toaster richColors position="top-right" />
        <div className="w-1/4 max-lg:hidden">
          <AppSidebar />
        </div>
        <div className="w-[84%] flex flex-col gap-8 bg-[#F9FAFB] min-h-screen relative">
          <div className="sticky top-0 z-50 bg-[#F9FAFB] ml-2">
            <Navbar />
          </div>
          <Outlet />
        </div>
      </div>
    </main>
  );
}

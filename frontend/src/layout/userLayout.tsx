import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/user/navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function UserLayout() {
  return (
    <main className="flex flex-col min-w-screen h-screen font-dm container mx-auto bg-white relative max-md:px-0">
      <div className="w-full flex justify-between top-14 z-40">
        <Toaster richColors position="top-right" />
        <AppSidebar />
        <div className="w-full flex flex-col gap-8 bg-[#F9FAFB] h-screen relative">
          <div className="pl-5">
            <Navbar />
          </div>

          <Outlet />
        </div>
      </div>
    </main>
  );
}

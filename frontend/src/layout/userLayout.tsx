import { AppSidebar } from "@/components/app-sidebar";
import Navbar from "@/components/user/navbar";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <main className="flex flex-col items-stretch min-w-screen min-h-screen font-dm container mx-auto px-10 bg-white relative max-md:px-0">
      <div className="fixed w-full top-0 right-0 z-50 backdrop-blur-md px-10 max-md:px-0">
        <Navbar />
      </div>
      <div className="flex-1 w-full flex flex-row top-14 h-full py-5 z-40 pt-20">
        <div className="w-[20%] max-lg:hidden">
          <AppSidebar />
        </div>
        <div className="w-[82%] max-lg:w-full">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

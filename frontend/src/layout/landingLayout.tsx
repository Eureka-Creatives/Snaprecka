import { Outlet } from "react-router";
import Navbar from "../components/landing/navbar";
import Footer from "@/components/landing/footer";

export default function LandingLayout() {
  return (
    <main className="relative">
      <header className="fixed top-0 right-0 z-50 px-10">
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </main>
  );
}

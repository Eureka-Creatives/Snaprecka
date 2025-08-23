import { Button } from "./ui/button";
import { useAuthStore } from "../stores/useAuthStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { MdLogout } from "react-icons/md";

export function AppSidebar() {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully", {
      duration: 500,
      onAutoClose: () => {
        navigate("/auth/login");
      },
    });
  };
  return (
    <section className="w-1/4 text-black max-lg:hidden flex flex-col items-center justify-center gap-5 py-20 h-screen">
      <div className="flex flex-col items-center justify-center h-full p-5 gap-5 relative">
        <div className="flex justify-start gap-2 rounded-full h-32 w-32 px-auto bg-soft-blue/10"></div>
        <ul className="flex flex-col items-center gap-2"></ul>

        <div className="absolute bottom-0 w-full  px-5 py-2   ">
          <Button
            variant="outline"
            className="bg-red-500 text-white hover:bg-red-400 hover:text-white cursor-pointer w-full border-none"
            onClick={handleLogout}>
            <MdLogout size={16} />
            Logout
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Button } from "./ui/button";
import { Logout } from "iconsax-reactjs";
import { useAuthStore } from "../stores/useAuthStore";
import { useUserStore } from "@/stores/useUserStore";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { user } from "@/types/user/user";

export function AppSidebar() {
  const { getUser } = useUserStore();
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const [user, setUser] = useState<user | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser();
      console.log("User Details:", response);
      const user = response?.user;
      setUser(user);
    };
    fetchUser();
  }, [getUser]);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully", {
      duration: 1000,
      onAutoClose: () => {
        navigate("/auth/login");
      },
    });
  };
  return (
    <section className="w-[18%] text-black max-lg:hidden flex flex-col items-center justify-center gap-5 fixed py-20 h-screen">
      <div className="flex flex-col items-center justify-start h-full p-5 gap-5 relative">
        <div className="flex justify-start gap-2 rounded-full h-32 w-32 px-auto bg-soft-blue/10"></div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-base text-black">
            Welcome {user?.firstName}
          </span>
        </div>

        <div className="absolute bottom-0 w-full  px-5 py-2   ">
          <Button
            variant="outline"
            className="bg-red-500 text-white hover:bg-red-400 hover:text-white cursor-pointer w-full border-none"
            onClick={handleLogout}
          >
            <Logout size={16} />
            Logout
          </Button>
        </div>
      </div>
    </section>
  );
}

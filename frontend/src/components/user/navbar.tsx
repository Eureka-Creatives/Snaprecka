import { useState, useEffect } from "react";
import { CgSearch } from "react-icons/cg";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { user } from "@/types/user/user";
import { useUserStore } from "@/stores/useUserStore";

export default function Navbar() {
  const { getUser } = useUserStore();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser();
      console.log("User Details:", response);
      const user = response?.user;
      setUser(user);
    };
    fetchUser();
  }, [getUser]);

  const [user, setUser] = useState<user | null>(null);
  return (
    <nav className="py-7.5 max-md:px-3 pr-15 flex flex-row justify-between items-center font-dm text-black bg-white w-full">
      <div className="">
        <h1 className="text-3xl max-md:text-xl font-bold text-black p-2.5">
          Dashboard
        </h1>
      </div>
      <div className="cursor-pointer bg-[#F9FAFB] rounded-lg flex items-center gap-2 max-md:hidden w-[400px]">
        <div className="w-full flex gap-2 px-6 py-3 items-center">
          <CgSearch className="text-base text-gray-600" />
          <input
            type="text"
            placeholder="Search for a capsule"
            className="bg-transparent outline-none text-sm max-md:text-sm px-2 w-full"
          />
        </div>
      </div>
      <div className="flex flex-row gap-6 items-center">
        <span className="p-3 bg-[#FFFAF1] rounded-lg">
          <IoMdNotificationsOutline className="text-xl" />
        </span>
        <div className="flex gap-5 items-center">
          <span className="h-10 w-10 bg-gray-300 rounded-full"></span>
          <div className="flex flex-row items-center justify-center py-2 gap-5">
            <span>
              Welcome {user?.firstName} {user?.lastName}
            </span>
            <span>
              <IoIosArrowDown className="text-base" />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

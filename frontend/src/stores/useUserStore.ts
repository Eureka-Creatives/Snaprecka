import { create } from "zustand";
import { user, userDetailsResponseType } from "@/types/user/user";
import { getUserDetails } from "@/service/userLogic/getUserDetails";

interface userState {
  email: string;
  name: string;
  userDetails: user | null;
  getUser: () => Promise<userDetailsResponseType>;
}

export const useUserStore = create<userState>()(
  (set): userState => ({
    email: "",
    name: "",
    userDetails: null,
    getUser: async () => {
      const userDetails = await getUserDetails();
      set({ userDetails });
      return userDetails;
    },
  })
);

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { loginResponseType } from "@/types/auth/login";
import { registerResponseType } from "@/types/auth/register";

interface user {
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  isLoggedIn: boolean;
  user: null | user;
  token: string | null;
  login: (loginResponse: loginResponseType, token: string) => void;
  register: (registerResponse: registerResponseType) => void;
  logout: () => void;
  reset: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set): AuthState => ({
      isLoggedIn: false,
      user: null,
      token: null,
      login: (loginResponse: loginResponseType, token: string) =>
        set({ isLoggedIn: true, user: loginResponse.user, token }),
      logout: () => set({ isLoggedIn: false, user: null, token: null }),
      register: (registerResponse: registerResponseType) =>
        set({ isLoggedIn: false, user: registerResponse.user }),
      reset: () => set({ isLoggedIn: false, user: null, token: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

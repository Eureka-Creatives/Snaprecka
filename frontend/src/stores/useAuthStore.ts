import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { loginRequestType, loginResponseType } from "@/types/auth/login";
import {
  registerRequestType,
  registerResponseType,
} from "@/types/auth/register";
import {
  forgotPasswordRequestType,
  forgotPasswordResponseType,
} from "@/types/auth/forgotPassword";
import { forgotPassword } from "@/service/logic/forgotPassword";
import { login } from "@/service/logic/login";
import { registerUser } from "@/service/logic/register";
import { verifyOTP } from "@/service/logic/OTP";
import { resetPassword } from "@/service/logic/resetPassword";
import {
  resetPasswordRequestType,
  resetPasswordResponseType,
} from "@/types/auth/resetPassword";
import { OTPRequestType, OTPResponseType } from "@/types/auth/otp";

interface user {
  email: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  updatedAt: string;
}

interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: null | user;
  token: string | null;
  email?: string;
  message?: string;
  login: (
    loginRequest: loginRequestType
  ) => Promise<loginResponseType | undefined>;
  register: (
    registerRequest: registerRequestType
  ) => Promise<registerResponseType | undefined>;
  forgotPassword: (
    email: forgotPasswordRequestType
  ) => Promise<forgotPasswordResponseType | undefined>;
  verifyOtp: (data: OTPRequestType) => Promise<OTPResponseType | undefined>;
  resetPassword: (
    data: resetPasswordRequestType
  ) => Promise<resetPasswordResponseType | undefined>;
  logout: () => void;
  reset: () => void;
  clearStorage: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set): AuthState => ({
      isAuthenticated: false,
      isLoading: false,
      user: null,
      token: null,
      email: "",
      login: async (loginRequest: loginRequestType) => {
        try {
          set({ isLoading: true });
          const loginResponse = await login(loginRequest);
          console.log("Login response:", loginResponse);
          set({
            isAuthenticated: true,
            token: loginResponse?.token,
            message: loginResponse?.message,
            isLoading: false,
          });
          if (loginResponse?.isAuthenticated) {
            console.log("Login successful:", loginResponse);
            set({ isLoading: false });
            return loginResponse;
          }
        } catch (error) {
          console.error("Error in login:", error);
          set({ isLoading: false });
        }
      },
      logout: () => {
        set({ isAuthenticated: false, token: null, user: null });
        localStorage.removeItem("auth-storage");
      },
      forgotPassword: async (data: forgotPasswordRequestType) => {
        try {
          set({ isLoading: true });
          const response = await forgotPassword(data);
          set({
            isAuthenticated: false,
            token: null,
            isLoading: false,
            email: data.email,
          });
          if (response) {
            console.log("Forgot password request successful:", response);
          }
          return response;
        } catch (error) {
          console.error("Error in forgotPassword:", error);
          set({ isLoading: false });
        }
      },
      verifyOtp: async (data: OTPRequestType) => {
        try {
          set({ isLoading: true });
          const currentState = useAuthStore.getState();
          const response = await verifyOTP({
            email: currentState?.email || data.email,
            otp: data.otp,
          });
          set({ isLoading: false, email: "" });
          if (response) {
            console.log("OTP verification successful:", response);
          }
          return response;
        } catch (error) {
          console.error("Error in verifyOTP:", error);
          set({ isLoading: false });
        }
      },
      resetPassword: async (data: resetPasswordRequestType) => {
        try {
          set({ isLoading: true });
          const response = await resetPassword(data);
          set({ isLoading: false });
          if (response) {
            console.log("Reset password request successful:", response);
          }
          return response;
        } catch (error) {
          console.error("Error in resetPassword:", error);
          set({ isLoading: false });
        }
      },
      register: async (registerRequest: registerRequestType) => {
        try {
          set({ isLoading: true });
          const registerResponse = await registerUser(registerRequest);
          set({
            isAuthenticated: false,
            user: registerResponse?.user,
            isLoading: false,
          });
          return registerResponse;
        } catch (error) {
          console.error("Error in register:", error);
          set({ isLoading: false });
        }
      },
      reset: () => set({ isAuthenticated: false, user: null, token: null }),
      clearStorage: () => {
        localStorage.removeItem("auth-storage");
        set({ isAuthenticated: false, user: null, token: null });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

import authInstance from "../apiClient";
import { toast } from "sonner";
import { AxiosError } from "axios";
import {
  forgotPasswordResponseType,
  forgotPasswordRequestType,
} from "@/types/auth/forgotPassword";

export const forgotPassword = async (email: forgotPasswordRequestType) => {
  try {
    const response = await authInstance.post<forgotPasswordResponseType>(
      "/auth/mail",
      {
        email,
      }
    );
    console.log("Forgot password request successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Forgot password request failed:", error);
    if (error instanceof AxiosError) {
      toast.error(
        error.response?.data.error || "Forgot password request failed"
      );
    }
  }
};

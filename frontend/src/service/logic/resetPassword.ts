import authInstance from "../apiClient";
import { AxiosError } from "axios";
import { resetPasswordData } from "@/types/auth.types";
import { toast } from "sonner";

export const resetPassword = async ({
  newPassword,
  confirmPassword,
}: resetPasswordData) => {
  try {
    const response = await authInstance.post("/auth/reset-password", {
      newPassword,
      confirmPassword,
    });
    return response.data;
  } catch (error) {
    console.error("Error in password reset:", error);
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.error || "Password reset failed");
    }
    throw error;
  }
};

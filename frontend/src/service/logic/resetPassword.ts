import authInstance from "../apiClient";
import { AxiosError } from "axios";
import { resetPasswordData } from "@/types/auth.types";
import { toast } from "sonner";

export const resetPassword = async ({
  email,
  newPassword,
  confirmPassword,
}: resetPasswordData) => {
  try {
    const response = await authInstance.post("/auth/resetPassword", {
      email,
      newPassword,
      confirmPassword,
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.error || "Password reset failed");
    }
    throw error;
  }
};

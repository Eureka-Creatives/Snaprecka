import authInstance from "../apiClient";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { OTPRequestType, OTPResponseType } from "@/types/auth/otp";

export const verifyOTP = async ({ email, otp }: OTPRequestType) => {
  try {
    const response = await authInstance.post<OTPResponseType>(
      "/auth/verifyOtp",
      {
        otp,
        email,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in OTP validation:", error);
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.error || "OTP validation failed");
    }
    throw error;
  }
};

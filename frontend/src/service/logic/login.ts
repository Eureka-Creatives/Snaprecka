import authInstance from "../apiClient";
import { loginRequestType, loginResponseType } from "../../types/auth/login";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const login = async (formData: loginRequestType) => {
  try {
    const response = await authInstance.post<loginResponseType>("/auth/login", {
      email: formData.email,
      password: formData.password,
    });
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(
        error.response?.data.error || error.message || "error failed"
      );
    }
  }
};

import authInstance from "../apiClient";
import {
  registerRequestType,
  registerResponseType,
} from "../../types/auth/register";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const registerUser = async (formData: registerRequestType) => {
  try {
    const response = await authInstance.post<registerResponseType>(
      "/auth/signup",
      {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        confirmPassword: formData.confirmPassword,
      }
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(
        error.response?.data.error || error.message || "Signup failed"
      );
    }
  }
};

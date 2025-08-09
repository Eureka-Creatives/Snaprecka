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
    console.log("Registration successful:", response.data);
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.error || "Login failed");
    }
  }
};

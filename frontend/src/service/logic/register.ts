import authInstance from "../apiClient";
import {
  registerRequestType,
  registerResponseType,
} from "../../types/auth/register";

export const registerUser = async (formData: registerRequestType) => {
  try {
    const response = await authInstance.post<registerResponseType>(
      "/auth/signup",
      {
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        confirmPassword: formData.confirmPassword, // Ensure this is included if your API requires it
      }
    );
    console.log("Registration successful:", response.data);
    return response.data;
  } catch (error: unknown) {
    console.error("Registration failed:", error);
    throw new Error("Registration failed");
  }
};

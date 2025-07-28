import authInstance from "../apiClient";
import { loginRequestType, loginResponseType } from "../../types/auth/login";
import { handleLoginAuth } from "@/lib/authHandler";

export const login = async (formData: loginRequestType) => {
  try {
    const response = await authInstance.post<loginResponseType>("/auth/login", {
      email: formData.email,
      password: formData.password,
    });
    console.log("Login successful:", response.data);
    if (response.data) {
      console.log("Handling login auth...", response.data);
      await handleLoginAuth(response.data);
    }
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error("Login failed");
  }
};

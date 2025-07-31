import { loginResponseType } from "@/types/auth/login";
import { registerResponseType } from "@/types/auth/register";
import { useAuthStore } from "@/stores/useAuthStore";

export const handleLoginAuth = async (responseData: loginResponseType) => {
  console.log("Login successful:", responseData);
  const { login } = useAuthStore.getState();
  login(responseData, responseData.token);
};

export const handleRegisterAuth = async (
  responseData: registerResponseType
) => {
  console.log("Registration successful:", responseData);
  const { register } = useAuthStore.getState();
  register(responseData);
};

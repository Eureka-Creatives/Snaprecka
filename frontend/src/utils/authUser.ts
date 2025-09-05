import { redirect } from "react-router";
import { useAuthStore } from "../stores/useAuthStore";

export const CheckAuth = async () => {
  const { isAuthenticated } = useAuthStore.getState();
  // console.log(isAuthenticated);
  if (!isAuthenticated) {
    throw redirect("/auth/login");
  }
};

export const CheckAuthWithRedirect = async (redirectPath: string) => {
  const { isAuthenticated } = useAuthStore.getState();
  // console.log(isAuthenticated);
  if (!isAuthenticated) {
    throw redirect(redirectPath);
  }
};

export const getUserToken = () => {
  const { token } = useAuthStore.getState();
  return token;
};

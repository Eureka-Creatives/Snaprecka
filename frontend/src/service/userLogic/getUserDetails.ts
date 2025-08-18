import { userInstance } from "../apiClient";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const getUserDetails = async () => {
  try {
    const response = await userInstance.get(`/auth/profile`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      toast.error(error.response?.data.error || "Failed to fetch user details");
    }
    throw error;
  }
};

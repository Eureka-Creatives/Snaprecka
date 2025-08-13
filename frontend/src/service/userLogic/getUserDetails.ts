import { userInstance } from "../apiClient";

export const getUserDetails = async () => {
  try {
    const response = await userInstance.get(`/auth/profile`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
};

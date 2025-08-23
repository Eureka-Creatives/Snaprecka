import axios from "axios";
import { API_URL } from "../constant";
import { getUserToken } from "@/utils/authUser";

const authInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const userInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

userInstance.interceptors.request.use(
  (config) => {
    const token = getUserToken();

    if (!token) {
      window.location.href = "/auth/login";
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authInstance;

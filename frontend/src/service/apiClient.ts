import axios from "axios";
import { API_URL } from "../constant";

const authInstance = axios.create({
  baseURL: API_URL,
  method: "POST",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default authInstance;

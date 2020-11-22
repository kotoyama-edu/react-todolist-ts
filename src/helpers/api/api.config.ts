import { AxiosRequestConfig } from "axios";

export const apiConfig: AxiosRequestConfig = {
  withCredentials: true,
  timeout: 30000,
  baseURL: "/",
  headers: {
    "Cache-Control": "no-cache, no-store, must-revalidate",
    "Content-Type": "application/json",
    Accept: "application/json",
    Pragma: "no-cache",
  },
};

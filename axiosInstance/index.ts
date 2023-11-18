import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "./constance";
export function getJWTHeader(token: string): Record<string, string> {
  return { Authorization: `Bearer ${token}` };
}
const config: AxiosRequestConfig = { baseURL: BASE_URL };
export const axiosInstance = axios.create(config);




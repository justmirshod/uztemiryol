import axios from "axios";
import { API_URL } from "../config/config";

export const useHttp = () => {
  const axiosInstance = axios.create({
    baseURL: API_URL,
  });

  const request = async ({ method = "GET", url, data, headers }) => {
    try {
      return await axiosInstance({
        method,
        url: `${API_URL}${url}`,
        data,
        headers: {
          ...headers,
          "ngrok-skip-browser-warning": "any",
        },
      })
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log(error);
          // return error?.response?.data?.detail ? { error: error.response.data } : {};
        });
    } catch (error) {
      console.log(error);
    }
  };
  return { request };
};

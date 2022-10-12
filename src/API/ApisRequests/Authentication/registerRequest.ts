import { useAxiosInstance } from "API/axiosInstance";

export const useRegisterAPI = () => {
  const { axiosClient } = useAxiosInstance();

  return {
    register: async () => axiosClient.get("/register"),
  };
};

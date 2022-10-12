import { useAxiosInstance } from "API/axiosInstance"

export const useLoginAPI = () => {
   const { axiosClient } = useAxiosInstance()

   return {
      login: async (data: any) => axiosClient.get('/login', data)
   }
}

import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { useLoginAPI } from "API/ApisRequests/Authentication/loginRequest";
import { AxiosError } from "axios";

export const useLogin = () => {
  const { login } = useLoginAPI();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, mutate } = useMutation(login, {
    onError: (error: AxiosError) => {
      console.log(error.response);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries("login");
      console.log(data);
    },
  });
  return { mutate, isLoading };
};

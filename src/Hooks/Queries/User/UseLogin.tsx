import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { useLoginAPI } from "API/ApisRequests/Authentication/loginRequest";
import { AxiosError } from "axios";
import { v4 as uuidv4 } from "uuid";

export const useLogin = () => {
  const { login } = useLoginAPI();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isLoading, mutate, isError } = useMutation(login, {
    onError: (error: AxiosError) => {},
    onSuccess: (data) => {
      queryClient.invalidateQueries("login");
      Cookies.set("token", uuidv4());
      if (data.status === 200) {
        navigate("../dashborad");
      }
    },
  });
  return { mutate, isLoading, isError };
};

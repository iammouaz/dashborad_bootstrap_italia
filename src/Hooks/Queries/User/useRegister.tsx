import { useMutation } from "react-query";
import { useRegisterAPI } from "API/ApisRequests/Authentication/registerRequest";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const useRegister = () => {
  const { register } = useRegisterAPI();
  const navigate = useNavigate();

  const { isLoading, mutate } = useMutation(register, {
    onError: () => {},
    onSuccess: (data) => {
      console.log(data.data.lognInfo);
      if (data.status === 200) {
        Cookies.set("token", data.data?.token);
        navigate("../dashborad");
      }
    },
  });
  return { mutate, isLoading };
};

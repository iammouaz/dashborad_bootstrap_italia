import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const useLogout = () => {
  const navigate = useNavigate();

  const Logout = () => {
    Cookies.remove("token");
    navigate(0);
  };

  return { Logout };
};

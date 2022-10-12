import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginData } from "Recoil/Atoms";

var MockAdapter = require("axios-mock-adapter");

const axiosClient = axios.create();

export const useAxiosInstance = () => {
  const [lognInfo] = useRecoilState(loginData);

  const navigate = useNavigate();

  const { REACT_APP_API_BASE_URL } = process.env;

  axiosClient.defaults.baseURL = REACT_APP_API_BASE_URL;

  axiosClient.defaults.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  axiosClient.interceptors.response.use(
    (response) =>
      // Dispatch any action on success
      response,
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosClient.interceptors.request.use((config) => {
    const token = Cookies.get("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  function setAuthToken(tokenP) {
    axiosClient.interceptors.request.use((config) => {
      config.headers.Authorization = tokenP ? `Bearer ${tokenP}` : "";
      return config;
    });
  }

  var mock = new MockAdapter(axiosClient);

  mock.onGet("/login").reply(200, {
    lognInfo,
  });

  mock.onGet("/register").reply(200, {
    lognInfo,
  });
  return { setAuthToken, axiosClient };
};

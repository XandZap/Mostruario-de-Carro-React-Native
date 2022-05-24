import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosError } from "axios";
import { Alert, ColorPropType } from "react-native";

const instance = axios.create({
  baseURL: "http://192.168.15.51:3333/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(
  async (config) => {
    const responseToken = await AsyncStorage.getItem("token");
    if (responseToken) {
      const newToken = JSON.parse(responseToken);
      const isToken = newToken.token;
      if (isToken) {
        config.headers!.Authorization = "Bearer " + isToken;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  async (response) => {
    if (response.data.token && response.data.user) {
      AsyncStorage.setItem("token", JSON.stringify(response.data.token));
      AsyncStorage.setItem("user", JSON.stringify(response.data.user));
    }
    return response;
  },
  function (error: AxiosError) {
    if (error.response) {
      const handleError = error.response;
      
      return Promise.reject(handleError);
    } else if (error.toString() === "Error: Network Error") {
      Alert.alert("Erro", "Falha no servidor");
    } else {
      console.log(error);
    }
    return Promise.reject(error);
  }
);

export default instance;

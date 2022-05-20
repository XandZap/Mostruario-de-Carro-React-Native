import {
  IBodyAuth,
  ILoginResponse,
  IBodyReset,
  IResetResponse,
  IBodyChangePassword,
  IChangePasswordResponse,
} from "../../interfaces/index";
import instance from "../axios.config";
import { IAuth } from "./interfaces";

const authServices = (): IAuth => {
  async function login(body: IBodyAuth): Promise<ILoginResponse> {
    return instance.post("/login", body);
  }
  async function resetPassword(body: IBodyReset): Promise<IResetResponse> {
    return instance.post("/reset", body);
  }

  async function changePassword(
    body: IBodyChangePassword,
    token: string | null
  ): Promise<IChangePasswordResponse> {
    return instance.post(`/reset/${token}`, body);
  }

  return { login, resetPassword, changePassword };
};

export default authServices;

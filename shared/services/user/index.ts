import {
  IBodyRegister,
  IGetUserResponse,
  IRegisterResponse,
  IUpdateAuth,
  IUpdateResponse,
} from "../../interfaces/index";
import instance from "../axios.config";
import { IUser } from "./interfaces";

const userServices = (): IUser => {
  async function updateUser(body: IUpdateAuth): Promise<IUpdateResponse> {
    return instance.put("/user/update", body);
  }

  async function registerUser(body: IBodyRegister): Promise<IRegisterResponse> {
    const response = await instance.post("/user/create", body);
    return response.data;
  }

  async function getUser(): Promise<IGetUserResponse> {
    return instance.get("/user/my-account");
  }

  return { updateUser, registerUser, getUser };
};

export default userServices;

import {
  IUpdateAuth,
  IBodyRegister,
  IRegisterResponse,
  IUpdateResponse,
  IGetUserResponse,
} from "../../interfaces/index";

export interface IUser {
  updateUser: ({ email, name }: IUpdateAuth) => Promise<IUpdateResponse>;
  registerUser: ({ email, password, name }: IBodyRegister) => Promise<IRegisterResponse>;
  getUser: () => Promise<IGetUserResponse>;
}

import {
  IBodyAuth,
  IBodyChangePassword,
  IBodyReset,
  IChangePasswordResponse,
  ILoginResponse,
  IResetResponse,
} from "../../interfaces/index";

export interface IAuth {
  login: ({ email, password }: IBodyAuth) => Promise<ILoginResponse>;
  resetPassword: ({ email }: IBodyReset) => Promise<IResetResponse>;
  changePassword: ({ password }: IBodyChangePassword, token: string|null) => Promise<IChangePasswordResponse>;
}

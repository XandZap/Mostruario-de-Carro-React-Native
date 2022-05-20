import { IBodyNewBet, IResponseListBet, IResponseNewBet } from "../../interfaces/index";
import instance from "../axios.config";
import { IUser } from "./interfaces";

const qs = require("qs");

const betsServices = (): IUser => {
  async function listBet(): Promise<IResponseListBet[]> {
    const response = await instance.get("/bet/all-bets");
    return response.data;
  }

  async function filterBets(params: {}): Promise<IResponseListBet> {
    const response = await instance.get("/bet/all-bets", {
      params: { "type[]": params },

      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    });
    return response.data;
  }

  async function saveNewBet(body: IBodyNewBet): Promise<IResponseNewBet> {
    return instance.post("/bet/new-bet", body);
  }

  return { listBet, saveNewBet, filterBets };
};

export default betsServices;

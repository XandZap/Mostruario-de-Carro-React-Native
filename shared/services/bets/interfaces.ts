import { IBodyNewBet, IResponseListBet, IResponseNewBet } from "../../interfaces/index";

export interface IUser {
  listBet: () => Promise<IResponseListBet[]>;
  saveNewBet: (games: IBodyNewBet) => Promise<IResponseNewBet>;
  filterBets: (params: {}) => Promise<IResponseListBet>;
}

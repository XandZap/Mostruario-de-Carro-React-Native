import { betsServices } from "../../shared/services";
import { getFilteredBet, getRecentBet } from "./recentBets.slice";
import { AppThunk } from "../store";

const { listBet, filterBets } = betsServices();

export const fetchRecentBetData = (): AppThunk => {
  return async (dispatch) => {
    const fetchGames = async () => {
      const responseGames: any = await listBet();

      return responseGames;
    };
    const recentGamesData = await fetchGames();
    
    dispatch(getRecentBet(recentGamesData));
  };
};

export const fetchFilteredBetsData = (params: string[]): AppThunk => {
  return async (dispatch) => {
    const fetchGames = async () => {
      const responseFilteredGames: any = await filterBets(params);
      return responseFilteredGames;
    };

    const filtredGamesData = await fetchGames();

    dispatch(getFilteredBet(filtredGamesData.reverse()));
  };
};

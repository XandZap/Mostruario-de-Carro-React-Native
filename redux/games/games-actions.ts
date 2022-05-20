import { getGamesServices } from "../../shared/services";
import { replaceGames } from "./games.slice";
import { AppThunk } from "../store";

import { addMinCartValue } from "../cart/cart.slice";

const { getGames } = getGamesServices();

export const fetchGamesData = (): AppThunk => {
  return async (dispatch) => {
    const fetchGames = async () => {
      const responseGames: any = await getGames();
      return responseGames.data;
    };

    const gamesData = await fetchGames();

    dispatch(addMinCartValue({ min_cart_value: gamesData.min_cart_value }));

    dispatch(
      replaceGames({
        min_cart_value: gamesData.min_cart_value,
        types: gamesData.types,
      })
    );
  };
};

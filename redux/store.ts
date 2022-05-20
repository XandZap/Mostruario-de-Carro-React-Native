import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { cartSlice } from "./cart/cart.slice";
import { gamesSlice } from "./games/games.slice";
import { recentBetSlice } from "./recentBets/recentBets.slice";
import { userSlice } from "./user/user.slice";

const store = configureStore({
  reducer: {
    games: gamesSlice.reducer,
    cart: cartSlice.reducer,
    recentBet: recentBetSlice.reducer,
    user: userSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectGames = (state: RootState) => state.games;
export const selectCart = (state: RootState) => state.cart;
export const selectRecentBet = (state: RootState) => state.recentBet;
export const selectUser = (state: RootState) => state.user;

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

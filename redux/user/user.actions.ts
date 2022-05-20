import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppThunk } from "../store";
import { getUser } from "./user.slice";

export const fetchUserData = (): AppThunk => {
  return async (dispatch) => {
    const fetchUser = async () => {
      const responseUser = await AsyncStorage.getItem("user");
      const responseToken = await AsyncStorage.getItem("token");
      if (responseUser && responseToken) {
        const userAndToken = { user: JSON.parse(responseUser), token: JSON.parse(responseToken) };
        return userAndToken;
      }
    };
    try {
      const userAndToken = await fetchUser();
      if (userAndToken) {
        dispatch(getUser({ user: userAndToken.user, token: userAndToken.token }));
      }
    } catch (e) {
      console.log('error: ',e);
    }
  };
};

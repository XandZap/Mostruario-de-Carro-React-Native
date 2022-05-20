import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialUserValue, User } from "./interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState: initialUserValue = {
  user: {
    id: 0,
    email: "",
    is_admin: 0,
    name: "",
    token: null,
    token_created_at: null,
    created_at: "",
    updated_at: "",
    picture: null,
  },
  token: {
    type: "",
    token: "",
    expires_at: "",
  },
  isLogged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<initialUserValue>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },

    removeUser: (state) => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLogged = false;
      AsyncStorage.clear();
    },

    addResetPassUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },

    getUser: (state, action: PayloadAction<initialUserValue>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },

    updateUserRedux: (state, action: PayloadAction<{ name: string; email: string }>) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      AsyncStorage.setItem("user", JSON.stringify(state.user));
    },
  },
});

export const { addUser, removeUser, addResetPassUser, getUser, updateUserRedux } = userSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {
  token: string;
  isLogged: boolean;
}

const initialState: AuthState = {
  token: "",
  isLogged: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<AuthState>) => {
      state.token = action.payload.token;
      state.isLogged = action.payload.isLogged;
    },
    logout: (state) => {
      state.token = initialState.token;
      state.isLogged = initialState.isLogged;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state: RootState) => state;
export default authSlice.reducer;

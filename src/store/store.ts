import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/auth";
import loadingReducer from "./reducers/loading";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

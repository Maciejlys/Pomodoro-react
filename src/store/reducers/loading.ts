import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    loading: (state) => {
      state.isLoading = true;
    },
    loaded: (state) => {
      state.isLoading = false;
    },
  },
});

export const { loading, loaded } = loadingSlice.actions;
export const loadingState = (state: RootState) => state.loading;
export default loadingSlice.reducer;

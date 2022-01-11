import { createSlice } from "@reduxjs/toolkit";

const covidSlice = createSlice({
  name: "covid19",
  initialState: {
    ui: {
      loading: false,
      error: false,
    },
    data: [],
  },
  reducers: {
    showSpinner(state, action) {
      state.ui = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const covidActions = covidSlice.actions;

export default covidSlice;

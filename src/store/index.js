import { configureStore } from "@reduxjs/toolkit";
import covidSlice from "./covidSlice";

const store = configureStore({
  reducer: covidSlice.reducer,
});

export default store;

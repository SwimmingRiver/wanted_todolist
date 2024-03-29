import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../reducer/reducer";

export const store = configureStore({
  initialState: [],
  reducer: todoSlice.reducer,
});

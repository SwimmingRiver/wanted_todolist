import { combineReducers, createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    ADD_TODO: (state, action) => {
      state.push(action.payload);
    },
    DELETE_TODO: (state, action) => {
      state.splice(action.payload.index, 1);
    },
  },
});

export const rootReducer = combineReducers({
  todoSlice: todoSlice,
});

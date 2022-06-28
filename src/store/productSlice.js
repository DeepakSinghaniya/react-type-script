import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

export const counterSlice = createSlice({
  name: "Counter",
  initialState: initialState,
  reducers: {
    inc: (state) => {
      state.count = state.count + 1;
      return state;
    },
    dec: (state) => {
      state.count = state.count - 1;
      return state;
    },
  },
});

export const { inc, dec } = counterSlice.actions;

const productReducer = counterSlice.reducer;

export default productReducer;

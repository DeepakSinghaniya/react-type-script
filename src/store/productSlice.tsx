import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  count: 0,
  users: { list: [], status: "", error: false },
};

export const getUsers = createAsyncThunk("getUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/postss"
  );
  return response.data;
});

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
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, actions) => {
      state.users.status = "pending";
      return state;
    });
    builder.addCase(getUsers.fulfilled, (state, actions) => {
      state.users.status = "fulfilled";
      state.users.list = actions.payload;
      return state;
    });
    builder.addCase(getUsers.rejected, (state, actions) => {
      state.users.status = "rejected";
      state.users.error = true;
      return state;
    });
  },
});

export const { inc, dec } = counterSlice.actions;

const productReducer = counterSlice.reducer;

export default productReducer;

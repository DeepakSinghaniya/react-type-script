import { createSlice, createAsyncThunk, Action, ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { Product } from "../allTypes";
import { addProduct, getProducts as getProductList } from "./api";


const initialState = {
  products: { list: [], isloading: false, error: false },
};

export const createProducts = createAsyncThunk("products", async (data: Product) => {
  const response = await addProduct(data);
  return response.data;
});

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await getProductList();
  return response.data;
});

export const productSlice = createSlice({
  name: "Product",
  initialState: initialState,
  reducers: {
  },
  extraReducers: (builder) => {

    builder.addCase(getProducts.pending, (state, action) => {
      state.products.isloading = true;
      return state;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products.list = action.payload
      state.products.isloading = false;

      return state;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.products.isloading = false;
      state.products.error = true;
      return state;
    });

  },
});


const productReducer = productSlice.reducer;

export default productReducer;

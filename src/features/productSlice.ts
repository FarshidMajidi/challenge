import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, getProducts } from "../services";

type InitialState = {
  products: IProduct[];
  filter: IProduct[];
  error: string;
};

const initialState: InitialState = {
  products: [],
  filter: [],
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  getProducts
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    searchByTitle: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        filter: state.products.filter((product) =>
          product.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action: PayloadAction<IProduct[]>) => {
        state.products = action.payload;
        state.filter = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.products = [];
      state.filter = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default productSlice.reducer;
export const { searchByTitle } = productSlice.actions;

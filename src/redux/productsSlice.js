// src/store/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL;
// const API_URL = "http://localhost:5000/api/products";
console.log("API Base URL:", baseUrl);
const API_URL = `${baseUrl}/api/products`;
// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ page, limit }) => {
    const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    staticProducts: [],
    liveProducts: [],
    hasMoreStatic: true,
    hasMoreLive: true,
    loading: false,
    page: 1,
  },
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.staticProducts = [...state.staticProducts, ...action.payload.staticProducts];
        state.liveProducts = [...state.liveProducts, ...action.payload.liveProducts];
        state.hasMoreStatic = action.payload.hasMoreStatic;
        state.hasMoreLive = action.payload.hasMoreLive;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { incrementPage } = productSlice.actions;
export default productSlice.reducer;

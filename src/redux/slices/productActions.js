import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { products: [], selectedProduct: null },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    selectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    removeSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
});

export const { setProducts, selectedProduct, removeSelectedProduct } =
  productSlice.actions;
export default productSlice.reducer;

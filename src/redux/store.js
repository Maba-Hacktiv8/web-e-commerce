import { configureStore } from "@reduxjs/toolkit";
import {
  productsReducer,
  selectedProductsReducer,
} from "./reducers/productsReducer";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    allProducts: productsReducer,
    product: selectedProductsReducer,
    cart: cartReducer,
  },
});

export default store;

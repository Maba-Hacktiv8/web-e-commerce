import { configureStore } from "@reduxjs/toolkit";
import {
  productsReducer,
  selectedProductsReducer,
} from "./reducers/productsReducer";
import cartReducer from "./slices/cartSlice";
import orderSlice from "./slices/orderSlice";

const store = configureStore({
  reducer: {
    allProducts: productsReducer,
    product: selectedProductsReducer,
    cart: cartReducer,
    order: orderSlice,
  },
});

export default store;

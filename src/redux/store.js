import { configureStore } from '@reduxjs/toolkit';
import { productsReducer, selectedProductsReducer } from './reducers/productsReducer';

const store = configureStore({
  reducer: {
    allProducts: productsReducer,
    product: selectedProductsReducer,
  },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: JSON.parse(localStorage.getItem("cart") || "[]"),
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.data.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    decreaseCart: (state, action) => {
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.qty--;
        if (itemInCart.qty === 0) {
          state.data = state.data.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    removeCart: (state, action) => {
      const itemIdToRemove = action.payload;
      state.data = state.data.filter((item) => item.id !== itemIdToRemove);
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
  },
});

export const { addToCart, removeCart, decreaseCart, removeAllCart } =
  cartSlice.actions;
export default cartSlice.reducer;

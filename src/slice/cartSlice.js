import { createSlice } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { cartItem: [] },
  reducers: {
    add_cart: (state, action) => {
      state.cartItem.push(...action.payload);
      console.log(action.payload);
    },
  },
});

export const { add_cart } = cartSlice.actions;
export const selectCart = (state) => state.cart.cartItem;

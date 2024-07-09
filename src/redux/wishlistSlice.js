import { createSlice } from "@reduxjs/toolkit";
import storeData from "../services/data";

const initialState = {
  products: storeData,
  amount: 0,
  total: 0,
  cart: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const basketSlice = createSlice({
  name: "wishlasket",
  initialState,
  reducers: {
    removeItem: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.name !== payload.name);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addwishlist: (state, { payload }) => {
      const itemInCart = state.cart.find((item) => item.name === payload.name);
      if (!itemInCart) {
        const item = state.products.find((item) => item.name === payload.name);
        if (item) {
          state.cart.push({ ...item, amount: 1 });
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    
  },
  
});

export const { removeItem, addwishlist } = basketSlice.actions;

export default basketSlice.reducer;




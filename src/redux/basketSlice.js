import { createSlice } from "@reduxjs/toolkit";
import storeData from "../services/data";

const initialState = {
  products: storeData,
  amount: 0,
  total: 0,
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    increaseAmount: (state, { payload }) => {
      const item = state.cart.find((item) => item.name === payload.name);
      if (item) {
        item.amount++;
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decreaseAmount: (state, { payload }) => {
      const item = state.cart.find((item) => item.name === payload.name);
      if (item && item.amount > 1) {
        item.amount--;
      } else if (item && item.amount === 1) {
        state.cart = state.cart.filter(
          (cartItem) => cartItem.name !== payload.name,
        );
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeItem: (state, { payload }) => {
      state.cart = state.cart.filter((item) => item.name !== payload.name);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    addCart: (state, { payload }) => {
      const itemInCart = state.cart.find((item) => item.name === payload.name);
      if (!itemInCart) {
        const item = state.products.find((item) => item.name === payload.name);
        if (item) {
          state.cart.push({ ...item, amount: 1 });
        }
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    updateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.cart.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    completePurchase: (state) => {
      state.cart = [];
      state.amount = 0;
      state.total = 0;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const {
  increaseAmount,
  decreaseAmount,
  removeItem,
  updateTotal,
  addCart,
  completePurchase,
} = basketSlice.actions;

export default basketSlice.reducer;

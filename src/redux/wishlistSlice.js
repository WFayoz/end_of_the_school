import { createSlice } from "@reduxjs/toolkit";
import storeData from "../services/data";

const initialState = {
  products: storeData,
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, { payload }) => {
      const itemIndex = state.wishlist.findIndex(
        (item) => item.name === payload.name,
      );
      if (itemIndex !== -1) {
        state.wishlist.splice(itemIndex, 1);
      } else {
        const item = state.products.find((item) => item.name === payload.name);
        if (item) {
          state.wishlist.push({ ...item, amount: 1 });
        }
      }

      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    updateTotal: (state) => {
      let amount = 0;
      let total = 0;
      state.wishlist.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions; // Updated export

export default wishlistSlice.reducer;
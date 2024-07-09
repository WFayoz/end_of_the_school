import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";
import wishlistSlice from "./wishlistSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    wishlist: wishlistSlice,
  },
});

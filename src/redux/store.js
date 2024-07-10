import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";
import wishlistSlice from "./wishlistSlice";
import compareSlice from "./compareSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    wishlist: wishlistSlice,
    compare: compareSlice,
  },
});

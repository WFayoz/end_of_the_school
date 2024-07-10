import { createSlice } from "@reduxjs/toolkit";
import storeData from "../services/data";

const initialState = {
  products: storeData,
  compare: JSON.parse(localStorage.getItem("compare")) || [],
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    toggleCompare: (state, { payload }) => {
      const itemIndex = state.compare.findIndex(
        (item) => item.name === payload.name,
      );
      if (itemIndex !== -1) {
        state.compare.splice(itemIndex, 1);
      } else {
        const item = state.products.find((item) => item.name === payload.name);
        if (item) {
          state.compare.push({ ...item, amount: 1 });
        }
      }

      localStorage.setItem("compare", JSON.stringify(state.compare));
    },
  },
});

export const { toggleCompare } = compareSlice.actions; // Updated export

export default compareSlice.reducer;

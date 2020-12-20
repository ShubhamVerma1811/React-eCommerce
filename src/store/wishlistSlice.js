import { createSlice } from "@reduxjs/toolkit";

export const wishlist = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = wishlist.actions;

export default wishlist.reducer;

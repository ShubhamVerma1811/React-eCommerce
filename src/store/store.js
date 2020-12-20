import { configureStore } from "@reduxjs/toolkit";
import {
  loadFromLocalStorage,
  saveToLocalStorage,
} from "../services/localStorage";
import cart from "./cartSlice";
import products from "./productCardSlice";
import wishlists from "./wishlistSlice";

const persistedState = loadFromLocalStorage();
export const store = configureStore({
  reducer: {
    cart,
    products,
    wishlists,
  },
});

store.subscribe(() => saveToLocalStorage(store.getState()));

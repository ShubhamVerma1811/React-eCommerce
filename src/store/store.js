import { configureStore } from "@reduxjs/toolkit";
// import { updateCart as cart } from "./cart/cartReducer";
// import { productsReducer as products } from "./products/reducers";
import cartReducer from "./cartSlice";
import productsReducer from "./productCardSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
});

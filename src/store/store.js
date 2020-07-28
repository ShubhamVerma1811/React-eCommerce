import { combineReducers, createStore } from "redux";
import { productsReducer } from "./products/reducers";
import { updateCart } from "./cart/cartReducer";

//  Combining all Reducers
export const rootReducer = combineReducers({
  products: productsReducer,
  cart: updateCart,
});

// exporting Combined Reducer
export const store = createStore(
  rootReducer,
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

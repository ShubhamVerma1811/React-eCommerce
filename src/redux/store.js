import { combineReducers, createStore } from "redux";
import { productsReducer } from "./products/reducers";

//  Combining all Reducers
export const rootReducer = combineReducers({
  products: productsReducer,
});

// exporting Combined Reducer
export const store = createStore(
  rootReducer,
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

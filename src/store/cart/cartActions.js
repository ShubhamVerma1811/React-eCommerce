import { ADD_CART_ITEMS, REMOVE_CART_ITEMS, SET_CART_ITEMS } from "./cartTypes";

export const setCartItems = (product) => {
  let itemQuantity = 0;
  return {
    type: SET_CART_ITEMS,
    payload: {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: ++itemQuantity,
    },
  };
};

export const removeCartItems = ({ id }) => {
  return {
    type: REMOVE_CART_ITEMS,
    payload: {
      id,
    },
  };
};

export const addCartItems = ({ id }) => {
  return {
    type: ADD_CART_ITEMS,
    payload: {
      id,
    },
  };
};
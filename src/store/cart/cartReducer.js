import { ADD_CART_ITEMS, REMOVE_CART_ITEMS, SET_CART_ITEMS } from "./cartTypes";

const initialState = [];

export const updateCart = (state = initialState, action) => {
  switch (action.type) {
    case SET_CART_ITEMS:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
          quantity: action.payload.quantity,
        },
      ];

    case REMOVE_CART_ITEMS: {
      const prod = state.find((item) => item.id === action.payload.id);
      prod.quantity -= 1;
    }

    case ADD_CART_ITEMS: {
      const prod = state.find((item) => item.id === action.payload.id);
      prod.quantity += 1;
    }

    default:
      return state;
  }
};

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartItems,
  removeCartItems,
  setCartItems,
} from "../../store/cartSlice";

const AddBtn = ({ product }) => {
  let itemQuantity = 0;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { quantity } = cart;

  // derived state
  const prod = cart.find((item) => item.id === product.id);
  if (prod) {
    itemQuantity = prod.quantity;
  }

  return (
    <div>
      {itemQuantity === 0 ? (
        <button
          onClick={() => {
            dispatch(setCartItems(product));
          }}
          className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"
        >
          Add to cart
        </button>
      ) : (
        <div className="flex justify-evenly">
          <button
            onClick={() => {
              dispatch(removeCartItems(product.id));
            }}
            className="bg-gray-200 px-3 py-1 text-sm text-gray-900 font-extrabold focus:outline-none "
            disabled={quantity < 0}
          >
            -
          </button>
          <div className="px-3 py-1 bg-gray-200 text-sm text-green-600 font-extrabold ">
            {itemQuantity}
          </div>
          <button
            onClick={() => {
              dispatch(addCartItems(product.id));
            }}
            className="bg-gray-200 px-3 py-1  text-sm text-green-600 font-bold focus:outline-none "
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default AddBtn;

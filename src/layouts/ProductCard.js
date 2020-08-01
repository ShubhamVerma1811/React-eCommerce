import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Ratings from 'react-star-rating-component';
import {
  addCartItems,
  removeCartItems,
  setCartItems,
} from '../store/cart/cartActions';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { quantity } = useSelector((state) => state.cart);

  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
      <div className="px-4 py-2">
        <Link
          href="/product"
          as={`/product/${product.name.split(' ').join('-')}`}>
          <h1 className="text-gray-900 font-bold text-3xl uppercase">
            {product.name}
          </h1>
        </Link>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>
      </div>
      <img
        className="h-56 w-full object-cover mt-2"
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        alt="NIKE AIR"
      />

      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-gray-200 font-bold text-xl">₹{product.price}</h1>
        {quantity === 0 ? (
          <button
            onClick={() => {
              setQuantity((prev) => prev + 1);
              dispatch(setCartItems(product, quantity));
            }}
            className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
            Add to cart
          </button>
        ) : (
          <div className="flex justify-evenly">
            <button
              onClick={() => {
                if (quantity >= 0) setQuantity((prev) => prev - 1);
                dispatch(removeCartItems(product));
              }}
              className="bg-gray-200 px-3 py-1 text-sm text-gray-900 font-extrabold focus:outline-none "
              disabled={quantity < 0}>
              -
            </button>
            <div className="px-3 py-1 bg-gray-200 text-sm text-green-600 font-extrabold ">
              {quantity}
            </div>
            <button
              onClick={() => {
                setQuantity((prev) => prev + 1);
                dispatch(addCartItems(product));
              }}
              className="bg-gray-200 px-3 py-1  text-sm text-green-600 font-bold focus:outline-none ">
              +
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-between px-4 py-2 bg-gray-900">
        <Ratings
          name="rate1"
          starCount={5}
          value={product.rating}
          starColor="#f00"
          emptyStarColor="grey"
          editing={false}
          className="text-2xl"
        />
        <h1 className="text-white">Ratings: {product.reviews}</h1>
      </div>
      <div className="my-6 pt-3 flex flex-wrap mx-6 border-t">
        {product.tags.map((tag) => {
          return (
            <div
              key={product.tags.indexOf(tag)}
              className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;
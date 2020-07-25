import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden my-10">
      <div className="px-4 py-2">
        <h1 className="text-gray-900 font-bold text-3xl uppercase">
          {product.name}
        </h1>
        <p className="text-gray-600 text-sm mt-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos
          quidem sequi illum facere recusandae voluptatibus
        </p>
      </div>
      <img
        className="h-56 w-full object-cover mt-2"
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        alt="NIKE AIR"
      />
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
        <h1 className="text-gray-200 font-bold text-xl">₹{product.price}</h1>
        <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">
          Add to cart
        </button>
      </div>
      <div class="my-6 pt-3 flex flex-wrap mx-6 border-t">
        {product.tags.map((tag) => {
          return (
            <div class="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
              {tag}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCard;

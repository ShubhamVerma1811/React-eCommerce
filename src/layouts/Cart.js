import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-between mt-5 items-start">
        <div className="w-full mb-6 lg:mb-0 lg:w-2/3 px-4 flex flex-col">
          <div className="flex flex-col">
            <div className="mb-4 bg-white border border-grey-lighter overflow-hidden">
              <div className="px-6 mb-2">
                <p className="text-black pt-4 font-bold text-2xl">Your Cart</p>
              </div>
              <ul className="list-reset px-6">
                {items.map((item) => {
                  return (
                    <li className="inline-block border-b border-grey-lighter flex justify-between py-4">
                      <div className="flex items-start w-4/5">
                        <div className="flex-1 overflow-hidden">
                          <div className="pb-2">
                            <span className="text-lg font-bold">
                              {item.name}
                            </span>
                          </div>
                          <p className="text-lg font-normal text-grey-dark">
                            Price : ₹ {item.price}
                          </p>
                        </div>
                      </div>
                      <div className="w-1/5 text-right relative">
                        <h1 className="appearance-none text-center bg-white border-solid rounded-none border border-grey-light text-black py-2 px-4 pr-8 focus:outline-none focus:bg-white focus:border-black">
                          Quantity
                        </h1>
                        <h1 className="appearance-none text-center bg-white border-solid rounded-none border border-grey-light text-black py-2 px-4 pr-8 focus:outline-none focus:bg-white focus:border-black">
                          {item.quantity}
                        </h1>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <div className="px-6 py-4">
                <div className="text-left font-normal text-sm text-blue-dark">
                  * Delivery Charges may apply
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full mb-6 lg:mb-0 lg:w-1/3 px-4 lg:sticky"
          style={{ top: "1.25rem" }}>
          <div className="flex-grow bg-white border border-grey-lighter overflow-hidden">
            <div className="px-6 mb-2">
              <p className="text-black py-4 font-bold text-2xl">Total</p>
            </div>
            <div className="flex justify-between items-center mb-8">
              <div className="w-3/4 pl-6">
                <div className="w-full">
                  <span className="text-sm">Sous-total</span>
                </div>
              </div>
              <div className="w-1/4 pr-6 text-right">
                <div className="w-full">
                  <span className="text-sm">99,90 €</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <div className="w-3/4 pl-6">
                <div className="w-full border-b border-grey-lighter-lighter pb-4">
                  <span className="text-sm">Livraison gratuite</span>
                </div>
              </div>
              <div className="w-1/4 pr-6 text-right">
                <div className="w-full border-b border-grey-lighter-lighter pb-4">
                  <span className="text-sm">gratuite</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mb-8">
              <div className="w-3/4 pl-6">
                <div className="w-full">
                  <span className="text-sm font-bold">Total (TVA incluse)</span>
                </div>
              </div>
              <div className="w-1/4 pr-6 text-right">
                <div className="w-full">
                  <span className="text-sm font-bold">99,90 €</span>
                </div>
              </div>
            </div>
            <div className="mb-8">
              <div className="w-full px-6">
                <button className="w-full mx-auto px-4 py-2 uppercase font-bold text-xs text-white bg-black lg:text-black lg:bg-white border-2 border-black border-solid hover:text-white hover:bg-black">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

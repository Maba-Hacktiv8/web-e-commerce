import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseCart, removeCart } from "../redux/slices/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.data);
  const products = useSelector((state) => state.allProducts.products);
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {products.length > 0 &&
            cart.map((item) => {
              const product = products.find(
                (product) => product.id === item.id
              );
              return (
                <div className="flex font-sans border-2 border-slate-200 bg-white p-5 mb-5 rounded-2xl shadow-lg max-w-3xl">
                  <div className="flex-none w-60 relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 w-60 h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-auto">
                    <div className="flex flex-wrap flex-col">
                      <button
                        className="flex justify-end"
                        onClick={() => {
                          dispatch(removeCart(item.id));
                        }}
                      >
                        ❌
                      </button>
                      <h1 className="flex-auto text-lg font-semibold text-slate-900">
                        {product.title}
                      </h1>
                      <div className="text-lg font-semibold text-slate-500">
                        $ {product.price}
                      </div>
                    </div>
                    <div className="text-base font-semibold text-slate-700 flex items-center gap-2">
                      <p className="mt-10">
                        Rating {product.rating.rate}/5 ({product.rating.count})
                      </p>
                    </div>
                    <div className="flex space-x-1  text-sm font-medium">
                      <div className="flex-auto flex justify-end space-x-4">
                        <button
                          className="h-10 px-5 text-xl font-semibold rounded-md bg-black text-white"
                          onClick={() => {
                            dispatch(decreaseCart({ id: item.id, qty: 1 }));
                          }}
                        >
                          -
                        </button>
                        <p className="py-3">{item.qty}</p>
                        <button
                          className="h-10 px-4 font-semibold text-xl rounded-md border border-slate-900 text-slate-900"
                          onClick={() => {
                            dispatch(addToCart({ id: item.id, qty: 1 }));
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          {cart.length === 0 ? (
            <div className="flex items-center pt-20 gap-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#6366f1"
                viewBox="0 0 512 512"
                strokeWidth="0"
                stroke="#6366f1"
                className="w-52"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M512,182.161c0-12.088-4.164-23.909-11.996-33.389c-9.964-12.046-24.792-19.027-40.42-19.027H349.003 c-2.382-8.597-7.88-15.895-15.245-20.56l-0.133-66.82l-0.017-0.124c-0.283-13.546-7.797-25.892-19.71-32.323 c-5.582-3.016-11.763-4.532-17.895-4.532c-6.697,0-13.429,1.832-19.377,5.423l-0.016-0.025l-65.146,37.538l-0.216,0.15 c-15.696,9.78-25.725,26.492-27.041,44.919l-0.033,0.624v35.764c-20.844,0.1-40.904,7.864-56.366,21.826l-108.732,98.21 C6.732,260.969,0,276.639,0,292.726c0,5.839,0.883,11.763,2.732,17.511L54.499,472.9c6.381,20.077,25.008,33.714,46.085,33.714 h230.092c25.208,0,49.45-9.706,67.711-27.083l66.995-63.813c8.714-8.314,14.628-19.11,16.911-30.939l0.066-0.383l28.841-193.054 h-0.033C511.701,188.3,512,185.227,512,182.161z M218.996,95.539c0.6-7.164,4.515-13.628,10.597-17.477l64.696-37.288l0.266-0.159 c0.45-0.275,0.916-0.425,1.449-0.425c0.45,0,0.883,0.101,1.316,0.351h0.017c0.883,0.483,1.433,1.399,1.466,2.365l0.149,64.404 c-9.014,4.44-15.861,12.571-18.577,22.435h-36.105v34.813h215.313c2.632,0,5.198,0.592,7.514,1.683l-93.636,86.863 c-9.964,9.03-22.959,14.012-36.388,14.012h-92.07c-2.749-14.778-12.696-26.991-26.075-32.93L218.996,95.539z M151.134,177.438 c9.064-8.188,20.826-12.721,33.022-12.862l-0.033,68.902c-14.245,5.616-24.925,18.244-27.791,33.639H51.85L151.134,177.438z M48.901,340.56l-13.013-40.87c-0.666-2.15-0.999-4.298-1.016-6.464h64.629l5.998,47.334H48.901z M55.832,362.311h52.417 l5.348,42.378H69.328L55.832,362.311z M100.584,471.809c-5.898,0-11.13-3.84-12.912-9.456l-11.43-35.888h40.104l5.732,45.344 H100.584z M188.922,471.809h-44.918l-5.732-45.344h50.65V471.809z M188.922,404.689h-53.399l-5.348-42.378h58.747V404.689z M188.922,340.56h-61.497l-5.998-47.334h67.494V340.56z M198.802,277.28c-6.615,0-11.98-5.381-11.98-11.971 c0-6.623,5.365-11.971,11.98-11.971c6.597,0,11.962,5.348,11.962,11.971C210.765,271.899,205.4,277.28,198.802,277.28z M265.564,471.809h-54.882v-45.344h56.015L265.564,471.809z M267.246,404.689h-56.564v-42.378h57.631L267.246,404.689z M268.846,340.56h-58.164v-47.334h59.364L268.846,340.56z M336.541,471.517c-1.949,0.176-3.916,0.292-5.864,0.292h-43.352 l1.133-45.344h50.666L336.541,471.517z M340.373,404.689h-51.367l1.066-42.378h52.733L340.373,404.689z M344.055,340.56h-53.432 l1.182-47.334h45.27c3.282,0,6.514-0.276,9.747-0.658L344.055,340.56z M399.288,430.598l-24.909,23.716 c-3.416,3.25-7.198,6.041-11.196,8.44l2.449-42.52l36.538-29.357L399.288,430.598z M404.336,361.22l-37.005,29.732l2.315-40.445 l37.655-30.274L404.336,361.22z M409.451,290.593l-38.122,30.64l2.1-36.738c6.298-3.191,12.212-7.19,17.528-11.996l21.243-19.71 L409.451,290.593z M448.055,378.322c-0.917,4.657-3.249,8.906-6.682,12.204l-18.66,17.744l2.616-36.022l26.874-21.592 L448.055,378.322z M456.935,318.966l-29.44,23.643l2.966-40.995l33.022-26.516L456.935,318.966z M468.214,243.366l-35.588,28.616 l2.966-40.886l40.004-37.122L468.214,243.366"
                />
              </svg>
              <div className="flex flex-col">
                <h1 className="font-bold text-xl">
                  Wah, Keranjang belanjaanmu masih kosong
                </h1>
                <a href="/products">
                  <button className="flex w-80 bg-white hover:bg-black p-2 rounded-full justify-center ml-5 text-black hover:text-white mt-5 transition-all duration-300 border border-black">
                    <p className="font-semibold">Yuk isi dulu!</p>
                  </button>
                </a>
              </div>
            </div>
          ) : null}
        </div>
        {cart.length > 0 && (
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total price</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">
                  $
                  {totalPrice.toLocaleString("en-US", {
                    styles: "currency",
                    currency: "USD",
                  })}{" "}
                  USD
                </p>
              </div>
            </div>
            <hr className="my-2" />
            <button className="mt-6 w-full rounded-md bg-black py-1.5 font-medium text-white hover:bg-white hover:text-black transition-all duration-300 border border-black">
              Check out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

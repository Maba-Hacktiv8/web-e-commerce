import { useEffect } from "react";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";

const IconCart = () => {
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);
  return (
    <button className="fixed right-3 bottom-2  p-[6px] rounded-full border border-slate-800 animate-bounce">
      <div className="-top-2 -right-2 absolute">
        <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
          {totalCart}
        </p>
      </div>
      <FaCartShopping color="#000" className="w-10 h-10 p-2" />
    </button>
  );
};

export default IconCart;

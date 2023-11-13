import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const Report = () => {
  const order = useSelector((state) => state.order.orderItems);
  const products = useSelector((state) => state.allProducts.products);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (products.length > 0 && order.length > 0) {
      const sum = order.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("order", JSON.stringify(order));
    } else {
      setTotalPrice(0);
    }
    console.log(products);
  }, [order, products]);

  return (
    <>
      <div className="flex flex-col justify-center items-center pt-4 ">
        <div className=" container mx-auto text-white">
          <div className="flex items-center justify-between mb-5 p-3 w-full bg-black rounded-lg">
            <div className="text-lg font-bold text-navy-700 text-white ">
              Income
            </div>
            <div className="text-lg font-bold text-navy-700 text-white">
              $ {totalPrice.toLocaleString()} USD
            </div>
          </div>
          <div className="grid grid-cols-4 gap-7 text-black font-bold">
            <p>Product</p>
            <p className="ml-10">Price</p>
            <p>Sold</p>
            <p>Total Price</p>
          </div>
          {products.length > 0 &&
            order.map((item) => {
              const product = products.find(
                (product) => product.id === item.id
              );
              return (
                <div
                  className="grid grid-cols-4 gap-10 space-y-4 justify-between sm:flex-row h-full w-full items-start rounded-md border px-3 py-5 transition-all duration-150 "
                  key={item.id}
                >
                  <div className="flex items-center">
                    <div className="flex flex-col">
                      <h5 className="text-base font-bold text-navy-700 text-black">
                        {product.title}
                      </h5>
                    </div>
                  </div>
                  <p className="mt-1 ml-10 text-sm font-normal text-gray-600">
                    ${product.price.toLocaleString()}
                  </p>
                  <div className="mt-1 mr-10 font-semibold text-black space-x-2">
                    <h2>{item.qty}</h2>
                  </div>
                  <p className="mt-1 text-sm font-normal text-gray-600">
                    ${(product.price * item.qty).toLocaleString()}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Report;

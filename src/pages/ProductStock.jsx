import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./../services/product.service";
import { setProducts } from "../redux/actions/productActions";
import { Link } from "react-router-dom";
import IconCart from "../components/moleculs/IconCart";
import { useEffect } from "react";

const ProductStock = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const products = useSelector((state) => state.allProducts.products);
  const [refresh, setRefresh] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("token") !== "admin") {
      window.location.href = "/";
    }
  }, []);

  const onDecrease = (id) => {
    let datas = [true];
    let temp_production = [];

    products.map((item) => {
      if (id == item.id) {
        if (item.stock) {
          item.stock = item.stock - 1;
        }
      }
      console.log(item.stock);
      temp_production.push(item);
    });

    getProducts((products) => {
      dispatch(setProducts(temp_production));
    }, []);

    localStorage.setItem("products", JSON.stringify(temp_production));
    setRefresh(datas);
  };

  const onIncrease = (id) => {
    let datas = [true];
    let temp_production = [];

    products.map((item) => {
      if (id == item.id) {
        if (item.stock) {
          item.stock = item.stock + 1;
        }
      }
      console.log(item.stock);
      temp_production.push(item);
    });

    getProducts((products) => {
      dispatch(setProducts(temp_production));
    }, []);

    localStorage.setItem("products", JSON.stringify(temp_production));
    setRefresh(datas);
  };

  React.useEffect(() => {
    if (products.length < 1) {
      getProducts((products) => {
        const data = [];
        products.map((item) => {
          item.stock = 10;
          data.push(item);
        });
        dispatch(setProducts(data));
      }, []);
    }
  }, [refresh]);
  return (
    <div className="min-h-screen bg-gray-100 py-20">
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {products.length > 0 &&
            products.map((item) => {
              return (
                <div className="flex font-sans border-2 border-slate-200 bg-white p-5 mb-5 rounded-2xl shadow-lg max-w-3xl">
                  <div className="flex-none w-60 relative">
                    <img
                      src={item.image}
                      alt={item.title}
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
                      ></button>
                      <h1 className="flex-auto text-lg font-semibold text-slate-900">
                        {item.title}
                      </h1>
                      <div className="text-lg font-semibold text-slate-500">
                        $ {item.price}
                      </div>
                    </div>
                    <div className="text-base font-semibold text-slate-700 flex items-center gap-2">
                      <p className="mt-10">
                        Rating {item.rating.rate}/5 ({item.rating.count})
                      </p>
                    </div>
                    <div className="flex space-x-1  text-sm font-medium">
                      <div className="flex-auto flex justify-end space-x-4">
                        <button
                          className="h-10 px-5 text-xl font-semibold rounded-md bg-black text-white"
                          onClick={() => {
                            onDecrease(item.id);
                          }}
                        >
                          -
                        </button>
                        <p className="py-3">{item.stock}</p>
                        <button
                          className="h-10 px-4 font-semibold text-xl rounded-md border border-slate-900 text-slate-900"
                          onClick={() => {
                            onIncrease(item.id);
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
        </div>
      </div>
    </div>
  );
};

export default ProductStock;

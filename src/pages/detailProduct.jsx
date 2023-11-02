import React from 'react';
import { useParams } from 'react-router-dom';
import { getDetailProduct } from '../services/product.service';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { selectedProduct } from '../redux/actions/productActions';

const DetailProductPage = () => {
  const product = useSelector((state) => state.product);
  const { id } = useParams();
  const dispatch = useDispatch();

  React.useEffect(() => {
    getDetailProduct(id, (data) => {
      dispatch(selectedProduct(data));
    });
  }, [id]);

  return (
    <div className="w-100 min-h-screen flex justify-center items-center bg-gray-100">
      {Object.keys(product).length > 0 && (
        <div className="flex font-sans border-2 border-slate-200 bg-white p-5 rounded-2xl shadow-lg max-w-3xl">
          <div className="flex-none w-60 relative">
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 w-full h-full object-contain"
              loading="lazy"
            />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap flex-col">
              <h1 className="flex-auto text-lg font-semibold text-slate-900">{product.title}</h1>
              <div className="text-lg font-semibold text-slate-500">${product.price}</div>
            </div>
            <div className="text-base font-semibold text-slate-700 flex items-center gap-2">
              <AiFillStar className="text-yellow-500 text-lg" />
              <p>
                Review {product.rating.rate}/5 ({product.rating.count})
              </p>
            </div>
            <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
              <div className="space-x-2 flex text-sm">{product.description}</div>
            </div>
            <div className="flex space-x-4 mb-6 text-sm font-medium">
              <div className="flex-auto flex space-x-4">
                <button
                  className="h-10 px-6 font-semibold rounded-md bg-black text-white"
                  type="submit"
                >
                  Buy now
                </button>
                <button
                  className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
                  type="button"
                >
                  Add to cart
                </button>
              </div>
              <button
                className="flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
                type="button"
                aria-label="Like"
              >
                <svg width="20" height="20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-sm text-slate-700">Free shipping on all east JAVA orders.</p>
          </form>
        </div>
      )}
    </div>
  );
};

export default DetailProductPage;

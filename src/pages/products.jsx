import React from 'react';
import { useLogin } from '../hooks/useLogin';
import CardProduct from '../components/organisms/CardProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './../services/product.service';
import { setProducts } from '../redux/actions/productActions';

const ProductsPage = () => {
  const username = useLogin();
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getProducts((products) => {
      dispatch(setProducts(products));
    });
  }, []);

  return (
    <>
      Username : {username}
      <div className="flex justify-center py-5">
        <div className="w-full flex flex-wrap justify-evenly">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body
                  name={product.title}
                  category={product.category}
                  id={product.id}
                />
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductsPage;

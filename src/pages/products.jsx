import React from 'react';
import CardProduct from '../components/organisms/CardProduct';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from './../services/product.service';
import { setProducts } from '../redux/actions/productActions';
import { Link } from 'react-router-dom';
import IconCart from '../components/moleculs/IconCart';
import Hero from '../components/organisms/Hero';

const ProductsPage = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const productsFiltered = products.filter((product) => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase());
  });

  React.useEffect(() => {
    getProducts((products) => {
      dispatch(setProducts(products));
    }, []);
  });

  return (
    <>
      <Hero />
      <div className="w-full flex justify-center mb-5">
        <input
          type="text"
          placeholder="Search product name..."
          className="ml-5 mt-5 px-5 py-2 rounded border border-gray-600 w-1/2"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
      </div>

      <div className="flex justify-center py-5">
        <div className="w-full flex flex-wrap justify-evenly">
          {productsFiltered.length > 0 &&
            productsFiltered.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} id={product.id} />
                <CardProduct.Body
                  name={product.title}
                  category={product.category}
                  id={product.id}
                  description={product.description}
                />
                <CardProduct.Footer price={product.price} id={product.id} />
              </CardProduct>
            ))}
        </div>
      </div>
      <Link to={'/cart'}>
        <IconCart />
      </Link>
    </>
  );
};

export default ProductsPage;

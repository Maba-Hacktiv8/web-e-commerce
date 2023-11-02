import React from 'react';
import Button from '../moleculs/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-xs text-black border border-gray-700 rounded-lg shadow mx-3 flex flex-col justify-between my-2">
      {children}
    </div>
  );
};

const Header = ({ image, id }) => {
  return (
    <Link to={`/product/${id}`}>
      <img
        src={image}
        alt="product"
        className="p-5 rounded-t-lg h-60 w-full object-contain border-b border-gray-500 border-opacity-50"
      />
    </Link>
  );
};

const Body = ({ category, name, id }) => {
  return (
    <div className="px-5 h-full">
      <Link to={`/product/${id}`}>
        <h5 className="text-xl font-semibold tracking-tight ">{name}</h5>
        <p className="text-slate-400 font-normal">{category}</p>
      </Link>
    </div>
  );
};

const Footer = ({ price }) => {
  return (
    <div className="flex items-center  justify-between px-5 pb-5 ">
      <span className="text-xl font-black">$ {price.toLocaleString()}</span>
      <Button type="button" classname="mt-0">
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.propTypes = {
  children: PropTypes.node.isRequired,
};

Header.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

Body.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

Footer.propTypes = {
  price: PropTypes.number.isRequired,
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
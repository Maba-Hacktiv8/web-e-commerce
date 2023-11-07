import React from "react";
import Button from "../moleculs/Button";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

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

const Body = ({ category, name, id, description }) => {
  return (
    <div className="px-5 h-full">
      <Link to={`/product/${id}`}>
        <h5 className="text-xl font-semibold tracking-tight mt-3">{name}</h5>
        <p className="inline-block my-2 bg-black rounded-md px-2 py-1 shadow-md text-xs text-white">
          {category}
        </p>
        <p>{description.substring(0, 100)}...</p>
      </Link>
    </div>
  );
};

const Footer = ({ price, id }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const isLogin = localStorage.getItem("token");
    if (isLogin) {
      dispatch(addToCart({ id, qty: 1 }));
    } else {
      window.location.href = "/login";
    }
  };
  return (
    <div className="flex items-center justify-between px-5 py-5 ">
      <span className="text-xl font-black  mt-6">
        $ {price.toLocaleString()}
      </span>

      <Button
        classname="text-slate-950 bg-white hover:text-white hover:bg-slate-950 border border-slate-950 transition-all duration-300"
        onClick={handleAddToCart}
      >
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
  description: PropTypes.string.isRequired,
};

Footer.propTypes = {
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;

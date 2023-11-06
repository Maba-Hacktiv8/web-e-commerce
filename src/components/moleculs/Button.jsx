import React from "react";
import PropTypes from "prop-types";

const Button = ({
  children,
  type = "button",
  classname,
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      className={`block text-white font-semibold rounded-lg px-4 py-3 mt-6 ${classname}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  classname: PropTypes.string,
};

export default Button;

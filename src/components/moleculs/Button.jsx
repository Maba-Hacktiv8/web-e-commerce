import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, type = 'button', classname }) => {
  return (
    <button
      type={type}
      className={`block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 ${classname}`}
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

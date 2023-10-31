import React from 'react';
import PropTypes from 'prop-types';

const InputForm = ({ placeholder, type, htmlFor, name, children }) => {
  return (
    <div className="mb-6">
      <label htmlFor={htmlFor} className="block text-gray-700">
        {children}
      </label>
      <input
        type={type}
        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
        placeholder={placeholder}
        id={name}
        name={name}
      />
    </div>
  );
};

InputForm.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  htmlFor: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default InputForm;

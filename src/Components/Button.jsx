import React from 'react';

const Button = ({ name }) => {
  return (
    <button className="px-4 py-2 m-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-lg whitespace-nowrap hover:bg-gray-300 transition">
      {name}
    </button>
  );
};

export default Button;

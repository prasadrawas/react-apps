import React from "react";

function SecondaryButton({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 p-3 bg-white rounded-full text-green-900 border-[1px] border-green-900 hover:text-white hover:bg-green-900 transition-all duration-300 ease-in-out font-semibold ${className}`}
    >
      {text}
    </button>
  );
}

export default SecondaryButton;

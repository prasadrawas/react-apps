import React from "react";

function PrimaryButton({ text, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 p-3 bg-green-900 rounded-full text-white border-[1px] border-green-900 hover:text-green-900 hover:bg-white transition-all duration-300 ease-in-out font-semibold ${className}`}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;

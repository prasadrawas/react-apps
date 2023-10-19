import React from "react";

function SelectableButton({ text, onClick, selected, className }) {
  return (
    <button
      onClick={() => onClick(text)}
      className={`px-6 p-[10px] font-medium border-[1px] text-sm rounded-full ${selected ? 'bg-green-900 text-white': 'bg-white'} ${className}`}
    >
      {text}
    </button>
  );
}

export default SelectableButton;

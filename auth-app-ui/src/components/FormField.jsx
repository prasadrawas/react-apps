import React from "react";

function FormField({ label, placeholder, marginTop = 0 }) {
  return (
    <div className={`flex-col justify-center items-center mt-${marginTop}`}>
      <p className="font-bold text-xs text-opacity-90">{label}</p>
      <input
        type="text"
        className="border border-gray-300 rounded p-2 mt-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-xs w-full"
        placeholder={placeholder}
      />
    </div>
  );
}

export default FormField;

import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

function FormInput({ placeholder, name }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 w-64 rounded-lg flex items-center px-2">
        <FaUser className="text-sm text-gray-600" />
        <input
          type="text"
          placeholder={placeholder}
          name={name}
          className="bg-gray-100 text-xs ml-1 w-full p-2.5 outline-none"
        />
      </div>
    </div>
  );
}

export default FormInput;

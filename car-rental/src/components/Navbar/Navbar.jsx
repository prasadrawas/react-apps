import React from "react";
import { logo } from "../../assets";

function Navbar() {
  return (
    <div className="flex items-center shadow-md border-b-[1px] bg-white fixed w-full">
      <img src={logo} alt="" className="h-20" />

      <div className="flex gap-16 text-lg text-gray-900 w-full justify-center mr-24">
        <p className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
          Home
        </p>
        <p className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
          History
        </p>
        <p className="cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out">
          Contact Us
        </p>
      </div>
    </div>
  );
}

export default Navbar;

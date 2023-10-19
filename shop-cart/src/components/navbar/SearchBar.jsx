import React from "react";
import {HiSearch} from "react-icons/hi"

function SearchBar() {
  return (
    <div className="hidden md:block w-70">
      <div className="flex rounded-full border-[1px] border-slate-300 text-sm text-slate-800 justify-between">
        <input
          type="text"
          placeholder="Search here"
          className="p-3 outline-none px-4 rounded-bl-full rounded-tl-full "
        />
        <button className="px-4 rounded-tr-full rounded-br-full hover:bg-blue-700 transition-all duration-300 ease-in-out hover:text-white text-slate-700">
          <HiSearch className="" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;

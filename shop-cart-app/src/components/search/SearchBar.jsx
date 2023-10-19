import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar({ className }) {
  return (
    <div className={`${className}`}>
      <div
        className={`flex items-center text-xs text-slate-800 bg-slate-100 rounded-full px-3 w-fit `}
      >
        <input
          type="search"
          placeholder="Search Product"
          className="p-3 outline-none bg-slate-100 rounded-full w-[300px]"
        />

        <AiOutlineSearch />
      </div>
    </div>
  );
}

export default SearchBar;

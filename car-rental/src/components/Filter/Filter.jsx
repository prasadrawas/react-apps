import React from "react";
import { IoLocationSharp } from "react-icons/io5";

function Filter() {
  return (
    <div className="flex flex-col items-center">
        <p className="mb-3 text-slate-700">Let's search what you need</p>
      <div className="flex justify-center text-slate-700">
        <div className="bg-slate-100 py-3 w-min px-4 rounded-tl-full rounded-bl-full">
          <div className="flex items-center">
            <IoLocationSharp className="h-4 text-slate-900" />
            <select
              name=""
              id=""
              className="bg-slate-100 text-xs px-6 outline-none appearance-none"
            >
              <option value="Aurangabad">Aurangabad</option>
              <option value="Aurangabad">Pune</option>
              <option value="Aurangabad">Mumbai</option>
            </select>
          </div>
        </div>

        <div className="px-1 md:px-14 bg-slate-100" />

        <div className="bg-slate-100 py-3 w-min px-4 rounded-tr-full rounded-br-full">
          <div className="flex items-center">
            <input
              type="date"
              className="appearance-none bg-slate-100 text-xs outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;

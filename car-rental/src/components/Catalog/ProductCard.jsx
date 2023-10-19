import React from "react";
import { hero } from "../../assets";
import { GiSteeringWheel } from "react-icons/gi";
import {MdAirlineSeatReclineExtra, MdLocalGasStation} from 'react-icons/md'

function ProductCard() {
  return (
    <div className="bg-slate-50 rounded-xl p-3 mt-3 w-full max-w-xs py-4 shadow-md hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
      <h1 className="font-semibold text-lg mb-2">Honda City</h1>

      <span className="font-medium text-xs">
        $ <span className="text-2xl font-bold">52</span> Hour
      </span>

      <img src={hero} alt="" className="h:30 md:h-40 my-6" />

      <div className="flex justify-around">
      <div className="flex flex-col items-center">
          <GiSteeringWheel className="text-slate-700 text-2xl" />
          <p className="text-xs text-slate-700 mt-2">Auto</p>
        </div>
        <div className="flex flex-col items-center">
          <MdAirlineSeatReclineExtra className="text-slate-700 text-2xl" />
          <p className="text-xs text-slate-700 mt-2">4 Seat</p>
        </div>
        <div className="flex flex-col items-center">
          <MdLocalGasStation className="text-slate-700 text-2xl" />
          <p className="text-xs text-slate-700 mt-2">32 MPH</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

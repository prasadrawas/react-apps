import React from "react";
import { hero } from "../../assets";

export default function Hero() {
  return (
    <div className="p-10 xl:flex items-center">
      <div className="flex-1">
        <h1 className="text-6xl md:text-6xl font-semibold text-gray-900">
          Premium Car Renal In Your Area
        </h1>
        <h3 className="text-2xl md:text-2xl font-light text-gray-700 mt-8">
          Book the selected car effortlessly, Pay for driving only, Book the car
          now
        </h3>

        <button className="rounded-full px-10 py-2 md:py-3 bg-blue-500 text-white font-regular mt-10 text-lg md:text-lg hover:scale-105 transition-all duration-300 ease-in-out">
          Explore Cars
        </button>
      </div>

      <div className="flex-1">
        <img src={hero} alt="" className="float-right mt-14 md:mt-2" />
      </div>
    </div>
  );
}

import React from "react";
import { heroBg } from "../../assets";

function Hero() {
  return (
    <div className="relative">
      {/* Hero Background image */}
      <img
        src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e58c0997219ec01eb6_background-bg-min.png"
        alt=""
        className="w-full h-[450px] md:h-[650px]"
      />

      {/* Hero  item - 1*/}
      <div className="absolute inset-0 flex items-center justify-end">
        <img src={heroBg} alt="" className="w-[70%] hidden md:block" />
      </div>

      {/* Hero item - 2 */}
      <div className="absolute inset-0 flex flex-col items-start justify-center w-full md:w-[40%] md:ml-[10%] px-5 md:px-0">
        <h1 className="text-green-800 text-3xl md:text-6xl font-bold">
          Shopping And <br />
          Department Store
        </h1>

        <p className="mt-5 text-slate-700 text-md md:text-lg">
          Shopping is a bit of a relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>
        <button className="rounded-full bg-green-800 text-white p-3 px-5 font-semibold mt-5">
          Learn more
        </button>
      </div>
    </div>
  );
}

export default Hero;

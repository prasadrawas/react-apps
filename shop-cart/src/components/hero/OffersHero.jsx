import React from "react";
function OffersHero() {
  return (
    <div className="w-full my-16 relative mb-[450px] lg:mb-[750px]">
      <img
        src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51a7c201f00ec5fe3_biscount%20banner-min.png"
        alt=""
        className="w-full h-[350px] lg:h-[650px] absolute z-0"
      />

      <div className="absolute z-0 bg-green-900 px-6 lg:px-12 py-5 lg:py-24 text-white flex flex-col items-start right-0 top-7 lg:right-32 lg:top-32">
        <h1 className="font-bold text-2xl lg:text-5xl leading-snug">
          Get $5 Cash <br />
          Back On $200
        </h1>
        <p className="text-white mt-4 font-medium text-lg">
          Shopping is a bit of a relaxing hobby for me, <br />
          which is sometimes troubling for the bank balance.
        </p>

        <button className="rounded-full p-3 px-6 border-[2px] border-white mt-5 font-medium hover:border-green-800 hover:bg-white hover:text-green-800 transition-all duration-400 ease-out">
          Learn more
        </button>
      </div>
     
    </div>
  );
}

export default OffersHero;

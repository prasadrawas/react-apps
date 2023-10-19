import React from "react";
import { PrimaryButton, SecondaryButton } from "../../../components/button";

function CashbackHero({ className }) {
  return (
    <div className={`${className} h-[300px] md:h-[600px] relative`}>
      <img
        src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e51a7c201f00ec5fe3_biscount%20banner-min.png"
        alt=""
        className="w-full h-[300px] md:h-[600px] absolute z-0 indent-0"
      />

      <div className="bg-green-900 px-3 md:px-10 py-10 md:py-20 right-3 md:right-[10%] absolute z-10 indent-1 flex flex-col items-start justify-center text-white max-w-md top-5 md:top-[15%]">
            <h1 className="text-3xl md:text-5xl font-bold">Get 5% Cash <br />back on $200</h1>
            <p className="text-xs md:text-sm my-3">Shopping is a bit of a relaxing hobby for me, which is sometimes troubling for the bank balance.</p>
            <SecondaryButton text={'Learn more'} className={'w-[200px] mt-2 md:mt-7'}/>
      </div>
    </div>
  );
}

export default CashbackHero;

import React from "react";
import { imgHero } from "../../../assets/images";
import { PrimaryButton } from "../../../components/button";

function Hero() {
  return (
    <div className="w-full h-[400px] md:h-[600px]">
      {/* main background image*/}
      <img
        src={
          "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e58c0997219ec01eb6_background-bg-min.png"
        }
        alt=""
        className="w-screen h-[400px] md:h-[600px] absolute z-1"
        data-aos="fade-in"
        data-aos-duration="500"
        data-aos-easing="ease-in"
      />

      <div
        className="absolute z-20 index-0 left-10 md:left-20 h-[400px] md:h-[600px] flex flex-col items-start justify-center max-w-xl"
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-easing="ease-in"
      >
        <h1 className="font-bold text-4xl md:text-6xl text-green-900">
          Shopping And <br />
          Department Store.
        </h1>
        <p className="text-green-900 mt-5 font-medium">
          Shopping is a bit of a relaxing hobby for me, which is sometimes
          troubling for the bank balance.
        </p>

        <PrimaryButton
          text={"Learn More"}
          className={"mt-10"}
          onClick={() => {}}
        />
      </div>

      {/* overlapped background image */}
      <img
        src={imgHero}
        alt=""
        className="hidden md:block absolute z-10 right-0"
        data-aos="fade-left"
        data-aos-duration="500"
        data-aos-easing="ease-in"
      />
    </div>
  );
}

export default Hero;

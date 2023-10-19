import React from "react";
import { imgLogin } from "../../../assets/images";

function LoginHero({ className }) {
  return (
    <section
      className={`flex items-center justify-center md:h-screen ${className}`}
      data-aos="fade-right"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
    >
      <img src={imgLogin} alt="" className="w-[70%] md:w-[90%]" />
    </section>
  );
}

export default LoginHero;

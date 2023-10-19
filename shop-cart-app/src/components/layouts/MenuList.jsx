import React from "react";

function MenuList({ className }) {
  return (
    <div
      className={`${className} px-10 rounded-xl`}
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
    >
      <div className="flex flex-col space-y-4 font-medium">
        <a href="">Deals</a>
        <a href="">What's new</a>
        <a href="">Delivery</a>
        <a href="">Cart</a>
        <a href="">Account</a>
      </div>
    </div>
  );
}

export default MenuList;

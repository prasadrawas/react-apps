import React, { useState } from "react";
import { logoImg, userImg } from "../../assets";
import {
  FaHome,
  FaSearch,
  FaTv,
  FaCamera,
  FaStar,
  FaGlasses,
} from "react-icons/fa";

import { IoEllipsisVerticalSharp } from "react-icons/io5";

import HeaderItem from "./HeaderItem";

function Header() {
  const [toggle, setToggle] = useState(false);


  const headerItems = [
    {
      name: "Home",
      icon: FaHome,
    },
    {
      name: "Search",
      icon: FaSearch,
    },
    {
      name: "WatchList",
      icon: FaTv,
    },
    {
      name: "Originals",
      icon: FaStar,
    },
    {
      name: "Movies",
      icon: FaCamera,
    },
    {
      name: "Series",
      icon: FaGlasses,
    },
  ];

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src={logoImg} alt="logo" className="h-10 top-0" />

        <div className="hidden lg:block mt-2">
          <div className="flex gap-8 p-8 pl-10">
            {headerItems.map((item) => (
              <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
            ))}
          </div>
        </div>

        <div className="lg:hidden flex items-center ">
          <div className="flex gap-8 p-8 pl-16">
            {headerItems.map(
              (item, index) => index <= 2 && <HeaderItem key={item.name} Icon={item.icon} name={''}/>
            )}
          </div>

          <div>
            <IoEllipsisVerticalSharp
              className="text-white cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />

            {toggle && <div className="absolute py-4 space-y-4 bg-slate-900 rounded px-5 mt-4 left-56">
              {headerItems.map(
                (item, index) => index > 2 && <HeaderItem key={item.name} Icon={item.icon} name={item.name} />
              )}
            </div>}
          </div>
        </div>
      </div>

        <div className="group cursor-pointer rounded-full hover:border-[2px] border-white hover:scale-110 transition-all duration-300 ease-in-out mr-6">
          <img src={userImg} alt="user" className="h-10" />
        </div>
      
    </div>
  );
}

export default Header;

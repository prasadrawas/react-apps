import React from "react";
import { imgLogo } from "../../assets/images";
import BottomBarSection from "./BottomBarSection";


function BottomBar() {
  return (
    <div className="w-full flex flex-col items-center justify-center my-20">
      <div className="w-11/12 md:w-4/5">
        <div className="h-[2px] bg-slate-200 rounded-full my-10" />

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10">
          {/* Company details */}
          <div>
            <img src={imgLogo} alt="" />
            <p className="my-5 text-slate-800 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              quis totam iusto. Tempore quis totam iusto
            </p>
          </div>

          {/* Department */}
          <BottomBarSection title={"Department"} />

          {/* Department */}
          <BottomBarSection title={"About Us"} />

          {/* Department */}
          <BottomBarSection title={"Services"} />

          {/* Department */}
          <BottomBarSection title={"Help"} />
        </div>
      </div>
    </div>
  );
}

export default BottomBar;

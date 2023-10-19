import React from "react";

function BrandsCard({ brand }) {
  return (
    <div className="flex bg-slate-100 rounded-xl w-full border-[1px] p-4 hover:border-[1px] hover:border-slate-300 transition-all duration-300 ease-in-out space-x-2 ">
      <img
        src={brand.imageUrl}
        alt=""
        className="hover:scale-105 transition-all duration-300 ease-in-out"
      />
      <div className="flex flex-col justify-center space-y-1">
        <h1 className="text-md font-semibold">{brand.name}</h1>
        <p className="text-xs font-medium">{brand.description}</p>
      </div>
    </div>
  );
}

export default BrandsCard;

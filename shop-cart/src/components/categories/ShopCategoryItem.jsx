import React from "react";

function ShopCategoryItem({ item }) {
  return (
    <div className="flex flex-col w-full h-80 rounded-xl items-center justify-center mb-10">
      <div className="relative z-0 h-80 transition-all duration-300 ease-linear">
        <img src={item.imageUrl} alt="" className="rounded-xl w-full h-full" />

        <div className="absolute inset-0 z-10 flex justify-center pt-3">
          <h1 className="text-2xl text-white font-bold">{item.name}</h1>
        </div>
      </div>
    </div>
  );
}

export default ShopCategoryItem;

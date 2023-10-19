import React from "react";

function CategoryItem({ item }) {
  return (
    <div
      className="bg-slate-100 rounded-md p-1 m-1
   flex items-center gap-2 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <img src={item.imageUrl} alt="" className="h-14" />

      <div>
        <h1 className="font-semibold mb-1">{item.name}</h1>
        <p className="text-xs">{item.available} Items available</p>
      </div>
    </div>
  );
}

export default CategoryItem;

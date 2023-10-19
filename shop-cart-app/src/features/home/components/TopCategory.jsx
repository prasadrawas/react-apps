import React from "react";
import { useTopCategory } from "../hooks";

function TopCategory() {
  const categories = useTopCategory();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Shop our Top Categories</h1>

      <div className="flex flex-wrap justify-between mb-2">
        {categories.map((category) => (
          <div className="flex items-center justify-center mb-8 cursor-pointer relative h-[250px]">
            <img
              src={category.imageUrl}
              alt=""
              className="rounded-xl hover:scale-105 transition-all duration-300"
            />

            <h1 className="text-xl text-white absolute z-10 font-semibold top-2">
              {category.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCategory;

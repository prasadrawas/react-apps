import React from "react";
import { Divider } from "../divider";
import { useCategory } from "./hooks";

function CategoryDialog() {
  const categories = useCategory();

  return (
    <div
      className="flex flex-col absolute top-12 shadow-md rounded-lg w-full border-[0.1px] px-5 pb-2 z-50 item-0 bg-white"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
    >
      <h1 className="text-xl text-start mt-4">Popular Categories</h1>
      <Divider />

      {categories.map((category) => (
        <div className="bg-slate-100 rounded-md p-2 flex mb-2 cursor-pointer">
          <img src={category.imageUrl} alt="" />
          <div className="flex flex-col items-start justify-center mx-4">
            <h1 className="text-lg font-medium">{category.name}</h1>
            <p className="text-xs font-regular text-slate-700">
              {category.available} Item available
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryDialog;

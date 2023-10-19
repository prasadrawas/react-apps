import React from "react";
import { AiFillTags } from "react-icons/ai";

function StoreCard({ store }) {
  return (
    <div class="w-full h-auto flex flex-col justify-center items-start">
      <div class="relative z-0">
        {/* <p class="italic text-bold bd-red-100 font-serif">Map</p> */}
        <img src={store.bgImageUrl} alt="" className="rounded-xl" />
        <div class="absolute inset-0 flex justify-start items-end z-10 -bottom-8 left-5">
          <img src={store.imageUrl} alt="" />
        </div>
      </div>

      <h1 className="mt-14 text-2xl font-bold">{store.name}</h1>
      <p className="text-sm text-gray-600 font-medium my-1">{store.tags}</p>

      <div className="flex my-4">
        <AiFillTags className="text-red-400" />
        <p className="pl-3 text-red-400 text-xs">{store.description}</p>
      </div>
    </div>
  );
}

export default StoreCard;

import React from "react";
import productsList from "../../constants/ProductsList";
import StarRating from "../rating/StarRating";
import ColorCard from "../color-card/ColorCard";
import Divider from "../divider/Divider";
import { HiPlus, HiMinus, HiOutlineTruck } from "react-icons/hi";

function ProductDetailsHighlights({ className }) {
  const product = productsList[3];
  return (
    <div className={`${className} w-full px-6 md:px-24 mt-16 md:mt-0`}>
      <h1 className="font-semibold text-3xl">{product.name}</h1>

      <p className="mt-6 text-sm text-slate-800">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius provident
        beatae sapiente quod quibusdam id in alias eos cumque soluta ipsam amet,
        dolore incidunt vero a, libero expedita quo sint!
      </p>

      <StarRating rating={4} reviews={121} />

      <Divider />

      <h1 className="font-bold text-xl">
        ${` ${product.price} or $ 99/month`}
      </h1>
      <p className="text-xs mt-2 text-slate-800">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <Divider />

      <h1 className="font-bold text-xl">Choose a color</h1>
      <div className="flex space-x-2 mt-3">
        <ColorCard className="bg-red-400" />
        <ColorCard className="bg-blue-400" />
        <ColorCard className="bg-orange-400" />
        <ColorCard className="bg-pink-400" />
      </div>

      <Divider />

      <div className="flex items-center space-x-10">
        <div className="flex items-center justify-around bg-slate-300 rounded-full p-[8px] text-gray-700 font-semibold text-xl px-3">
          <HiMinus className="ml-1 cursor-pointer" />
          <p className="px-10">1</p>
          <HiPlus className="mr-1 cursor-pointer" />
        </div>

        <p className="text-sm font-medium text-slate-700">
          Only <span className="text-orange-400">12 Items</span> left! <br />
          Don't miss it
        </p>
      </div>

      <div className="flex space-x-8 mt-8">
        <div className="bg-green-900 rounded-full p-[10px] px-10 text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 ease-linear border-[2px] hover:border-[2px] hover:border-slate-400 cursor-pointer">
          Buy now
        </div>
        <div className="bg-white rounded-full p-[10px] px-10 text-green font-semibold hover:bg-green-900 hover:text-white transition-all duration-300 ease-linear border-[2px] hover:border-[2px] hover:border-slate-400 cursor-pointer">
          Add to Cart
        </div>
      </div>

      <Divider />

      <div className="flex flex-col rounded-xl p-3 px-4 max-w-md shadow-md border-[1px] border-slate-100">
        <div className="flex space-x-3">
          <HiOutlineTruck className="text-orange-400" />
          <div className="flex flex-col">
            <p className="font-semibold text-sm text-slate-800">
              Free delivery
            </p>
            <p className="text-xs text-slate-600 ">
              Enter you postal and delivery address to check availability
            </p>
          </div>
        </div>

        <Divider className={'my-2'}/>
        <div className="flex space-x-3">
          <HiOutlineTruck className="text-orange-400" />
          <div className="flex flex-col">
            <p className="font-semibold text-sm text-slate-800">
              Free delivery
            </p>
            <p className="text-xs text-slate-600 ">
              Enter you postal and delivery address to check availability
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetailsHighlights;

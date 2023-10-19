import React from "react";
import StarRating from "../rating/StarRating";

function ProductCard({ item }) {
  return (
    <div className="cursor-pointer">
      <div className="flex items-center justify-center bg-slate-100 rounded-xl">
        <img
          src={item.imageUrl}
          alt=""
          className="hover:scale-110 transition-all duration-300 ease-in-out"
        />
      </div>

      <div className="flex justify-between mt-4 mb-2 font-semibold">
        <h1 className="text-lg md:text-xl">{item.name}</h1>
        <div className="flex justify-start">
          <span className="text-sm">$</span>
          <span className="text-xl">{item.price}</span>
          <span className="text-sm">.00</span>
        </div>
      </div>

      <p className="text-xs md:text-sm">{item.description}</p>

      <StarRating rating={4} reviews={item.reviews}/>

      <button className="rounded-full p-2 px-5 border-[1px] border-slate-400 my-4 text-sm font-medium hover:bg-green-900 hover:border-green-800 hover:text-white transition-all duration-300 ease-in-out">Add to Cart</button>
    </div>
  );
}

export default ProductCard;

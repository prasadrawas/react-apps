import React from "react";

function OffersCard({ item }) {
  return (
    <div className={`${item.color} rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 ease-linear cursor-pointer mb-6`}>
      <div className="p-4 py-6">
        <h1 className="font-bold text-3xl text-slate-700">Save</h1>
        <h1 className="font-bold text-md mt-2">
          $ <span className="text-3xl">{item.discount}</span>
        </h1>
        <p className="text-slate-700 mt-2">{item.description}</p>
      </div>
      <img src={item.imageUrl} alt="" className="w-full rounded-bl-xl rounded-br-xl mt-6"/>
    </div>
  );
}

export default OffersCard;

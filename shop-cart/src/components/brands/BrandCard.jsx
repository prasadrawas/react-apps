import React from "react";

function BrandCard({ item }) {
  return (
    <div className="flex gap-4 bg-slate-100 rounded-lg p-3">
      <img
        src={item.imageUrl}
        alt=""
        className="h-16 hover:scale-110 transition-all duration-300 ease-in-out"
      />

      <div className="flex flex-col items-start justify-center">
        <h1 className="text-lg font-semibold">{item.name}</h1>
        <p className="text-sm font-light">{item.description}</p>
      </div>
    </div>
  );
}

export default BrandCard;

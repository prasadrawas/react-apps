import React from "react";
import productsList from "../../constants/ProductsList";

function ProductDetailsHero({className}) {
  const product = productsList[5];
  return (
    <div className={`${className} col-span-1 w-full md:mx-16 flex flex-col items-center md:items-start`}>
      <div className="w-[90%] h-auto bg-slate-100 rounded-xl p-1 flex items-center justify-center">
        <img src={product.imageUrl} alt="" className="w-full max-w-xl" />
      </div>

      <div className="flex justify-between mt-3 w-[90%] space-x-6">
        <div className="bg-slate-100 rounded-lg p-2">
          <img src={product.imageUrl} alt="" className="max-h-32 max-w-32 hover:scale-105 transition-all duration-300 ease-linear" />
        </div>
        <div className="bg-slate-100 rounded-lg p-2">
          <img src={product.imageUrl} alt="" className="max-h-32 max-w-32 hover:scale-105 transition-all duration-300 ease-linear" />
        </div>
        <div className="bg-slate-100 rounded-lg p-2">
          <img src={product.imageUrl} alt="" className="max-h-32 max-w-32 hover:scale-105 transition-all duration-300 ease-linear" />
        </div>
        <div className="bg-slate-100 rounded-lg p-2">
          <img src={product.imageUrl} alt="" className="max-h-32 max-w-32 hover:scale-105 transition-all duration-300 ease-linear" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsHero;

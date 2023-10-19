import React from "react";
import productsList from "../../constants/ProductsList";
import ProductCard from "../product/ProductCard";
function BestDeals() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-11/12 md:w-4/5 mt-14">
        <h1 className="text-2xl font-bold mb-8">Todays Best Deals for you!</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {productsList.map((e, index) => ( index<=5 && 
            <ProductCard key={e.imageUrl} item={e}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestDeals;

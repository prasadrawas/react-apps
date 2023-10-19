import React from "react";
import productsList from "../../constants/ProductsList";
import ProductCard from "../product/ProductCard";
function TodaysDeals() {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="w-11/12 md:w-4/5 mt-14">
        <h1 className="text-2xl font-bold mb-8">Todays Best Deals for you!</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsList.map((e, index) => (
            <ProductCard key={e.imageUrl} item={e} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodaysDeals;

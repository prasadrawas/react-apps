import React from "react";
import ProductCard from "./ProductCard";
import productsList from "../../../../shop-cart/src/constants/ProductsList";

export default function Catalog() {
  return (
    <div className="p-10 mt-6">
      {/* Catalog header */}
      <div className="flex justify-between mb-4">
        <div>
          <h1 className="text-2xl font-semibold">Cars Catalog</h1>
          <p className="text-slate-700 text-sm mt-1">
            Explore our cars, you might like it
          </p>
        </div>

        <div>
          <select
            name=""
            id=""
            className="px-6 py-2 bg-slate-100 rounded-md text-sm outline-none text-slate-700"
          >
            <option value="Low to high">Low to high</option>
            <option value="High to high">High to high</option>
            <option value="Relevance">Relevance</option>
          </select>
        </div>
      </div>

      {/* Catalog products */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
        {productsList.map((e) => (
            <ProductCard />
        ))}
      </div>
    </div>
  );
}

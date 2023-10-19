import React from "react";
import { useBrand } from "../hooks";
import { BrandsCard } from "../../../components/brands";

function BrandsSection({ className }) {
  const brands = useBrand();

  return (
    <div className={`${className}`}>
      <h1 className="text-2xl font-bold mb-8">Get Up to 70% off</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-2 gap-8">
        {brands.map((brand) => (
          <BrandsCard brand={brand} />
        ))}
      </div>
    </div>
  );
}

export default BrandsSection;

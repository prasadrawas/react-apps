import React, { useState } from "react";
import { useProduct } from "../hooks";
import { ProductCard } from "../../../components/product";
import { PrimaryButton, SelectableButton } from "../../../components/button";

function TodaysBestDeals({ className }) {
  const products = useProduct();

  const buttons = [
    "Gadgets",
    "Fashion",
    "Toys",
    "Education",
    "Beauty",
    "Fitness",
    "Furniture",
    "Sneakers",
  ];

  const [selected, setSelected] = useState("Gadgets");

  return (
    <div className={`${className}`}>
      <h1 className="text-2xl font-bold my-3">Todays Best Deals for you!</h1>

      <div className="flex flex-wrap space-x-5 my-7">
        {buttons.map((button) => (
          <SelectableButton
            text={button}
            selected={selected === button}
            onClick={(text) => setSelected(text)}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 mb-2 gap-8">
        {products.map(
          (product, index) => index <= 5 && <ProductCard product={product} />
        )}
      </div>
    </div>
  );
}

export default TodaysBestDeals;

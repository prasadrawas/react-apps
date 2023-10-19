import React from "react";
import { useStore } from "../hooks";
import { StoreCard } from "../../../components/brands";

function BestSellingStore({className}) {
  const stores = useStore();

  return (
    <div className={`${className}`}>
      <h1 className="text-2xl font-bold my-3">Best Selling Stores!</h1>

      <div className="grid grid-cols-2 lg:grid-cols-4 mb-2 gap-8">
        {stores.map((store) => (
          <StoreCard store={store} />
        ))}
      </div>
    </div>
  );
}

export default BestSellingStore;

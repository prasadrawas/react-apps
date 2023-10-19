import React from "react";
import { useOffers } from "../hooks";
import {  OffersCard } from "../../../components/brands";

function OffersSection({ className }) {
  const offers = useOffers();

  return (
    <div className={`${className}`}>
      <h1 className="text-2xl font-bold mb-8">Todays Best Deals for you!</h1>

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-2 gap-8">
        {offers.map((offer) => (
          <OffersCard offer={offer} />
        ))}
      </div>
    </div>
  );
}

export default OffersSection;

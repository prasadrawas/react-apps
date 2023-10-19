import React from "react";

function OffersCard({ offer }) {
  return (
    <div>
      <div className={`p-5 ${offer.bgColor} rounded-tl-xl rounded-tr-xl`}>
        <h2 className="font-bold text-xl text-slate-700 my-1 md:my-2">Save</h2>

        <h1 className={`flex items-start font-bold text-4xl my-1 md:my-2 ${offer.textColor}`}>
          <span className="text-sm">$</span> {offer.price}
        </h1>

        <p className="text-sm text-slate-800 my-1 md:my-3 font-medium">{offer.description}</p>
      </div>


      <img src={offer.imageUrl} alt="" className="w-full rounded-br-xl rounded-bl-xl"/>
    </div>
  );
}

export default OffersCard;

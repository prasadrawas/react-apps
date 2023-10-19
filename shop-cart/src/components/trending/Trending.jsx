import React from "react";
import TrendingCard from "./TrendingCard";

function Trending() {
  const trends = [
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd3678e82164f755_furniture%20village-min.png",
      name: "Furniture Village",
      description: "Delivery with in 24 hours",
    },
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6037f3b456acf2024_Fashion%20world-min.png",
      name: "Fashion world",
      description: "Delivery with in 24 hours",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="w-11/12 md:w-4/5 mt-14">
        <h1 className="text-2xl font-bold mb-8">Trending Products for you!</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trends.map((e) => (
            <TrendingCard key={e.imageUrl} item={e} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Trending;

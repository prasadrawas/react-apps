import React from "react";
import { ShopCart } from "../../components";

function BestSelling() {
  const stores = [
    {
      bgImageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e62d65536b6a75698f_store%20one-min.png",
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2d253f08a89912d90709_Ellipse%20287.png",
      name: "Staples",
      tags: "Bags . Perfume",
      description: "Delivery with in 24 hours",
    },
    {
      bgImageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e74bd907803dd35b4f_store%20two-min.png",
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2d253a093c1dea9a21c7_Ellipse%20287-1.png",
      name: "Now Delivery",
      tags: "Bags . Perfume",
      description: "Delivery with in 24 hours",
    },
    {
      bgImageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e668e3265021e48a0b_store%20three-min.png",
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2d25fbba384ffd156e76_Ellipse%20287-2.png",
      name: "Bevmo",
      tags: "Bags . Perfume",
      description: "Delivery with in 24 hours",
    },
    {
      bgImageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6eaf8537c8058cf04_store%20four-min.png",
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63ea2d25dddbd27c9eda91b5_Ellipse%20287-3.png",
      name: "Quicklly",
      tags: "Bags . Perfume",
      description: "Delivery with in 24 hours",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-11/12 md:w-4/5 mt-6">
        <h1 className="text-2xl font-bold mb-8">Best Selling Store</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {stores.map((e) => (
            <ShopCart key={e.imageUrl} item={e} />
          ))}
        
        </div>
      </div>
    </div>
  );
}

export default BestSelling;

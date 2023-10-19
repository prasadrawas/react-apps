import React from "react";
import ShopCategoryItem from "./ShopCategoryItem";

function ShopCategories() {
  const categories = [
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png",
      name: "Furniture",
    },
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png",
      name: "Handbag",
    },
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png",
      name: "Books",
    },
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png",
      name: "Tech",
    },
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png",
      name: "Sneakers",
    },
    {
      imageUrl:
        "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png",
      name: "Travel",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-11/12 md:w-4/5 mt-14">
        <h1 className="text-2xl font-bold mb-8">Shop our Top Categories</h1>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {categories.map((e) => (
            <ShopCategoryItem 
            key={e.imageUrl}
            item={e} />
            // <h1>{item.name}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShopCategories;

import { useState } from "react";

const categories = [
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png",
    name: "Furniture",
    available: 240,
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e52d6553668075697e_hand%20bag-min.png",
    name: "Hand Bag",
    available: 220,
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e460afc22b7ea53520_books-min.png",
    name: "Shoe",
    available: 120,
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e754ac2e32897cb53b_tech-min.png",
    name: "Headphone",
    available: 240,
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64b769118272f244f_sneakers-min.png",
    name: "Laptop",
    available: 240,
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e71eb4ad6d07e7568f_travel-min.png",
    name: "Books",
    available: 240,
  },
];

const useTopCategory = () => {
  const [categoryData] = useState(categories);

  return categoryData;
};

export default useTopCategory;

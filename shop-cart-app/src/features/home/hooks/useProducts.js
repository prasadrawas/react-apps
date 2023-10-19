import { useState } from "react";

const products = [
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e68b497e229146b818_leptop%20sleeve-min.png",
    name: "Laptop sleeve MacBook",
    price: 59.0,
    description: "Organic Cotton, fairtrade certified",
    rating: 5,
    reviews: 121,
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png",
    name: "AirPods Max",
    price: 559.0,
    description: "A perfect balance of high-fidelity audio",
    rating: 4,
    reviews: 121,
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e55cc9361a8ecce6d4_flower%20leptop%20sleeve-min.png",
    name: "Supreme Water Bottle",
    price: 39.0,
    description: "A perfect balance of high-fidelity audio",
    rating: 4,
    reviews: 121,
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e78b497e3a5646b82f_water%20pot-min.png",
    name: "Supreme Water Bottle",
    price: 19.0,
    description: "A perfect balance of high-fidelity audio",
    rating: 4,
    reviews: 121,
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5560c31bbfce_leptop%20sleeve%20macbook-min.png",
    name: "Laptop sleeve MacBook",
    price: 59.0,
    description: "A perfect balance of high-fidelity audio",
    rating: 4,
    reviews: 121,
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61eb4ad4af6e75689_macbook%2013-min.png",
    name: "Macbook pro 13",
    price: 1099.0,
    description: "A perfect balance of high-fidelity audio",
    rating: 4,
    reviews: 121,
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png",
    name: "HomePod mini",
    price: 59.0,
    description: "A perfect balance of high-fidelity audio",
    rating: 4,
    reviews: 121,
  },
  {
    imageUrl:
      "https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e64bd907adafd35b46_ipad%20mini-min.png",
    name: "Ipad Mini",
    price: 539.0,
    description: "A perfect balance of high-fidelity audio",
    rating: 4,
    reviews: 121,
  },
];

const useProduct = () => {
  const [productsData] = useState(products);

  return productsData;
};

export default useProduct;

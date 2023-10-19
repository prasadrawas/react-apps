import { useState } from "react";

const offersList = [
    {
        imageUrl:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png",
        price:100,
        description:"Explore Our Furniture & Home Furnishing Range",
        textColor:'text-yellow-500',
        bgColor: 'bg-yellow-200',
    },
    {
        imageUrl:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e4e006822af104db61_book-min.png",
        price:29,
        description:"Explore Our Furniture & Home Furnishing Range",
        textColor:'text-red-500',
        bgColor: 'bg-red-200',
    },
    {
        imageUrl:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e61a7c20076aec5fe7_shirt-min.png",
        price:67,
        description:"Explore Our Furniture & Home Furnishing Range",
        textColor:'text-orange-500',
        bgColor: 'bg-orange-200',
    },
    {
        imageUrl:"https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e53f7127592743f6be_bug%20%26%20book-min.png",
        price:59,
        description:"Explore Our Furniture & Home Furnishing Range",
        textColor:'text-green-500',
        bgColor: 'bg-green-200',
    },
];

const useOffers = () => {
  const [offersData] = useState(offersList);

  return offersData;
};

export default useOffers;

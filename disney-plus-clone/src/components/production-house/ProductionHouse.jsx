import React from "react";
import {
  pixarImg,
  disneyImg,
  marvelImg,
  nationalGImg,
  starWarImg,
  pixarVideo,
  disneyVideo,
  marvelVideo,
  nationalGVideo,
  starWarsVideo,
} from "../../assets";

function ProductionHouse() {
  const ProductionHouses = [
    {
      id: 1,
      title: "Pixar",
      image: pixarImg,
      video: pixarVideo,
    },
    {
      id: 2,
      title: "Disney",
      image: disneyImg,
      video: disneyVideo,
    },
    {
      id: 3,
      title: "Marvel",
      image: marvelImg,
      video: marvelVideo,
    },
    {
      id: 4,
      title: "National Geographic",
      image: nationalGImg,
      video: nationalGVideo,
    },
    {
      id: 5,
      title: "Star Wars",
      image: starWarImg,
      video: starWarsVideo,
    },
  ];

  return (
    <div className="flex p-2 px-5 md:px-14 gap-2 md:gap-8 mt-2 md:mt-10">
      {ProductionHouses.map((item) => (
        <div
          key={item.id}
          className="border-[2px] border-white rounded-md md:rounded-xl hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer"
        >
          <video
            src={item.video}
            autoPlay
            loop
            playsInline
            muted
            className="absolute z-0 opacity-0 hover:opacity-70 rounded-md md:rounded-xl "
          />
          <img src={item.image} alt={item.title} className="w-full z-[1]" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;

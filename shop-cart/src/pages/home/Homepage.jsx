import React from "react";
import {
  BestDeals,
  BestSelling,
  BottomBar,
  Cashback,
  ChooseBrands,
  Hero,
  Navbar,
  Offers,
  OffersHero,
  ShopCategories,
  TodaysDeals,
  Trending,
} from "../../components";

function Homepage() {
  return (
    <div className="">
      <Navbar />

      <Hero />

      <ShopCategories />

      <BestDeals />

      <ChooseBrands />

      <Offers />

      <OffersHero />

      <Trending />

      <TodaysDeals />

      <Cashback />

      <BestSelling />

      <BottomBar/>
    </div>
  );
}

export default Homepage;

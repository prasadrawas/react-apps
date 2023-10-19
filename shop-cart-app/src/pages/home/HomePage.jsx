import React from "react";
import {
  BrandsSection,
  Hero,
  TodaysBestDeals,
  TopCategory,
  OffersSection,
  CashbackHero,
  BestSellingStore,
} from "../../features/home/components";
import { BottomBar } from "../../components/layouts";

function HomePage() {
  return (
    <div>
      <Hero />

      <div className="flex flex-col items-center justify-center">
        <div className="w-11/12 md:w-4/5 mt-14">
          <TopCategory />

          <TodaysBestDeals className={"my-10"} />

          <BrandsSection className={"my-14"} />

          <OffersSection className={"my-14"} />
        </div>
      </div>

      <CashbackHero className={"my-14"} />

      <div className="flex flex-col items-center justify-center">
        <div className="w-11/12 md:w-4/5 mt-14">
          <BestSellingStore />
        </div>
      </div>

      <BottomBar />
    </div>
  );
}

export default HomePage;

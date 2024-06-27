import React from "react";
import CatagorySection from "./CatagorySection";
import OffersSection from "./OffersSection";
import Client from "./ClientsSections";
import AboutSection from "./AboutSection";
import NewsSection from "./NewsSection";
import BrandsSection from "./BrandsSection";

const Home = () => {
  return (
    <div>
      <CatagorySection />
      <OffersSection />
      <Client />
      <BrandsSection />
      <AboutSection />
      <NewsSection />
    </div>
  );
};

export default Home;

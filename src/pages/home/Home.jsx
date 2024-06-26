import React from "react";
import CatagorySection from "./CatagorySection";
import OffersSection from "./OffersSection";
import Client from "./ClientsSections";
import AboutSection from "./AboutSection";


const Home = () => {
  return <div>
    <CatagorySection/>
    <OffersSection/>
    <Client/>
    <AboutSection/>
  </div>;
};

export default Home;

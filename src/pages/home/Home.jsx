import React from "react";
import CatagorySection from "./CatagorySection";
import OffersSection from "../reusables/OffersSection";
import Client from "../reusables/ClientsSections";
import AboutSection from "../reusables/AboutSection";
import NewsSection from "../reusables/NewsSection";
import BrandsSection from "../reusables/BrandsSection";
import EquipmentSections from "../reusables/EquipmentSections";
import FormSection from "../reusables/FormSection";
import SubscribeSection from "../reusables/SubscribeSection";
import PreviousNextMethods from "./Banner";

const Home = () => {
  return (
    <div>
      <PreviousNextMethods />
      <CatagorySection />
      <EquipmentSections />
      <OffersSection />
      <Client />
      <BrandsSection />
      <AboutSection />
      <NewsSection />
      <FormSection />
      <SubscribeSection />
    </div>
  );
};

export default Home;

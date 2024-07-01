import React from "react";
import CatagorySection from "./CatagorySection";
import OffersSection from "../../components/reusables/OffersSection";
import Client from "../../components/reusables/ClientsSections";
import AboutSection from "../../components/reusables/AboutSection";
import NewsSection from "../../components/reusables/NewsSection";
import BrandsSection from "../../components/reusables/BrandsSection";
import EquipmentSections from "../../components/reusables/EquipmentSections";
import FormSection from "../../components/reusables/FormSection";
import SubscribeSection from "../../components/reusables/SubscribeSection";
import PreviousNextMethods from "./Banner";
import Products from "../../components/reusables/Products";
import Shop from "../../components/reusables/products/Shop";
import Reusables from "../../components/reusables/Reusables";

const Home = () => {
  return (
    <div>
      <PreviousNextMethods />
      <CatagorySection />
      <Reusables />
    </div>
  );
};

export default Home;

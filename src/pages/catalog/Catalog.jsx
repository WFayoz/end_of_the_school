import React from "react";
import OffersSection from "../reusables/OffersSection";
import Client from "../reusables/ClientsSections";
import BrandsSection from "../reusables/BrandsSection";
import NewsSection from "../reusables/NewsSection";
import FormSection from "../reusables/FormSection";
import SubscribeSection from "../reusables/SubscribeSection";
import AboutSection from "../reusables/AboutSection";
import EquipmentSections from "../reusables/EquipmentSections";
import CatalogHero from "./CatalogHero";
import Products from "../reusables/Products";

const Catalog = () => {
  return (
    <div>
      <CatalogHero/>
      <EquipmentSections />
      <OffersSection />
      <Products/>
      <Client />
      <BrandsSection />
      <AboutSection />
      <NewsSection />
      <FormSection />
      <SubscribeSection />
    </div>
  );
};

export default Catalog;

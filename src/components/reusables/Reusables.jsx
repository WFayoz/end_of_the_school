import React from "react";
import EquipmentSections from "./EquipmentSections";
import OffersSection from "./OffersSection";
import Shop from "./products/Shop";
import Client from "./ClientsSections";
import BrandsSection from "./BrandsSection";
import AboutSection from "./AboutSection";
import NewsSection from "./NewsSection";
import FormSection from "./FormSection";
import SubscribeSection from "./SubscribeSection";

const Reusables = () => {
  return (
    <div>
      <EquipmentSections />
      <OffersSection />
      <Shop />
      <Client />
      <BrandsSection />
      <AboutSection />
      <NewsSection />
      <FormSection />
      <SubscribeSection />
    </div>
  );
};

export default Reusables;

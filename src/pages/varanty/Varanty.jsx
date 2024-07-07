import React from "react";
import VarantyHero from "./VarantyHero";
import VarantyAttention from "./VarantyAttention";
import FormSection from "../../components/customComponents/FormSection";
import VarantyOffers from "./VarantyOffers";

const Varanty = () => {
  return (
    <div>
      <VarantyHero />
      <VarantyOffers/>
      <VarantyAttention />
      <FormSection />
      <div className="mb-36"></div>
    </div>
  );
};

export default Varanty;

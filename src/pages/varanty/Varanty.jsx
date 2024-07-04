import React from "react";
import VarantyHero from "./VarantyHero";
import VarantyAttention from "./VarantyAttention";
import FormSection from "../../components/customComponents/FormSection";

const Varanty = () => {
  return (
    <div>
      <VarantyHero />
      <VarantyAttention />
      <FormSection />
      <div className="mb-36"></div>
    </div>
  );
};

export default Varanty;

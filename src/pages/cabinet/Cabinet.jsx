import React from "react";
import CabinetCards from "./CabinetCards";
import OffersSection from "../delivery/DeliveryOffers";
import CabinetForm from "./CabinetForm";
import DeliveryAccardionMain from "../../components/deliveryComponents/DeliveryAccardionMain";
import AboutSection from "../../components/customComponents/AboutSection";
import FormSection from "../../components/customComponents/FormSection";

const Cabinet = () => {
  return (
    <>
      <CabinetCards />
      <OffersSection />
      <CabinetForm />
      <div className="mt-36"></div>

      <AboutSection />

      <div className="mt-36"></div>
      <FormSection />
      <div className="mt-36"></div>
    </>
  );
};

export default Cabinet;

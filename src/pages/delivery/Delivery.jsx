import React from "react";
import DeliveryMap from "./DeliveryMap";
import DeliveryOffers from "./DeliveryOffers";
import RulesSection from "./RulesSection";
import DeliveryMap2 from "./DeliveryMap2";
import DeliveryForm from "./DeliveryForm";
import SubscribeSection from "../../components/customComponents/SubscribeSection";
import DeliveryAbout from "../../components/deliveryComponents/DeliveryAbout";
import DeliveryAccardionMain from "../../components/deliveryComponents/DeliveryAccardionMain";

const Delivery = () => {
  return (
    <div>
      <DeliveryMap />
      <DeliveryOffers />
      <RulesSection />
      <DeliveryAbout />
      <DeliveryMap2 />
      <DeliveryAccardionMain/>
      <DeliveryForm />
      <SubscribeSection />
    </div>
  );
};

export default Delivery;

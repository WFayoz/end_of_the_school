import React from "react";
import DeliveryMap from "./DeliveryMap";
import DeliveryOffers from "./DeliveryOffers";
import RulesSection from "./RulesSection";
import DeliveryMap2 from "./DeliveryMap2";
import DeliveryForm from "./DeliveryForm";
import SubscribeSection from "../../components/reusables/SubscribeSection";

const Delivery = () => {
  return (
    <div>
      <DeliveryMap />
      <DeliveryOffers />
      <RulesSection />
      <DeliveryMap2 />
      <DeliveryForm />
      <SubscribeSection />
    </div>
  );
};

export default Delivery;

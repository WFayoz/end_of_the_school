import React, { useEffect } from "react";
import HeroAbout from "./HeroAbout";
import FactsInNums from "./FactsInNums";
import AboutPartners from "./AboutPartners";
import Employess from "./Employess";
import Client from "../../components/customComponents/ClientsSections";
import OffersSection from "../../components/customComponents/OffersSection";
import BrandsSection from "../../components/customComponents/BrandsSection";
import FormSection from "../../components/customComponents/FormSection";
import Certificates from "./Certificates";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroAbout />
      <FactsInNums />
      <AboutPartners />
      <Employess />
      <Client />
      <BrandsSection />
      <OffersSection />
      <Certificates />
      <FormSection />
      <div className="mb-36"></div>
    </div>
  );
};

export default AboutUs;

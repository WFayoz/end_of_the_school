import React, { useEffect } from "react";
import HeroAbout from "./HeroAbout";
import FactsInNums from "./FactsInNums";
import AboutPartners from "./AboutPartners";
import Employess from "./Employess";
import Client from "../../components/reusables/ClientsSections";
import OffersSection from "../../components/reusables/OffersSection";
import BrandsSection from "../../components/reusables/BrandsSection";
import FormSection from "../../components/reusables/FormSection";
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
      <BrandsSection/>
      <OffersSection />
      <Certificates />
      <FormSection />
    </div>
  );
};

export default AboutUs;

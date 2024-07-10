import React, { useEffect } from "react";
import CatagorySection from "./CatagorySection";
import PreviousNextMethods from "./Banner";
import CustomComponents from "../../components/customComponents/CustomComponents";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PreviousNextMethods />
      <CatagorySection />
      <CustomComponents />
    </div>
  );
};

export default Home;


import React, { useEffect } from "react";
import CatagorySection from "./CatagorySection";
import PreviousNextMethods from "./Banner";
import Reusables from "../../components/reusables/Reusables";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PreviousNextMethods />
      <CatagorySection />
      <Reusables />
    </div>
  );
};

export default Home;

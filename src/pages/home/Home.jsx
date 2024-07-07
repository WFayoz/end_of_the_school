import React, { useEffect } from "react";
import CatagorySection from "./CatagorySection";
import PreviousNextMethods from "./Banner";
import CustomComponents from "../../components/customComponents/CustomComponents";

import PaginationView from "../delivery/PaginationView";
import FaqAccardion from "../FAQ/FaqAccardion";
import FaqWrapper from "../FAQ/FaqWrapper";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PreviousNextMethods />
      <CatagorySection />
      <CustomComponents />
      <PaginationView />
      <div className="my-96">
      <FaqWrapper/>

      </div>
    </div>
  );
};

export default Home;
{
  /* <TabSlider/> */
}

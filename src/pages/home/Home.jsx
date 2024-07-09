import React, { useEffect } from "react";
import CatagorySection from "./CatagorySection";
import PreviousNextMethods from "./Banner";
import CustomComponents from "../../components/customComponents/CustomComponents";
import Discount from "../discount/Discount";
import Blog from "../blog/Blog";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PreviousNextMethods />
      <CatagorySection />
      <CustomComponents />
      <Discount/>
      <Blog/>
    </div>
  );
};

export default Home;
{
  /* <TabSlider/> */
}

import React, { useEffect } from "react";
import CatalogHero from "./CatalogHero";
import CustomComponents from "../../components/customComponents/CustomComponents";

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <CatalogHero />
      <CustomComponents />
    </div>
  );
};

export default Catalog;

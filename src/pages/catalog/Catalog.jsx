import React, { useEffect } from "react";
import CatalogHero from "./CatalogHero";
import Reusables from "../../components/reusables/Reusables";

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <CatalogHero />
      <Reusables />
    </div>
  );
};

export default Catalog;

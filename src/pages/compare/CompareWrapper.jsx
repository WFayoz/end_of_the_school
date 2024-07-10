import React from "react";
import CompareSort from "./CompareSort";
import CompareCards from "./CompareCards";

const CompareWrapper = () => {
  return (
    <div className="flex justify-between mx-auto max-w-[1350px] px-5 max-lg:flex-col">
      <CompareSort />
      <CompareCards />
    </div>
  );
};

export default CompareWrapper;

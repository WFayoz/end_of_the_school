import React from "react";
import DiscountDropdown from "./DiscountDropdown";
import DiscountCards from "./DiscountCards";

const DiscountWrapper = () => {
  return (
    <div className="max-w-[1350px] w-full flex gap-3 mx-auto">
      <DiscountDropdown />
      <DiscountCards />
    </div>
  );
};

export default DiscountWrapper;

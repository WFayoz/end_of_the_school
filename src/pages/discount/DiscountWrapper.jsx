import React from "react";
import DiscountDropdown from "./DiscountDropdown";
import DiscountCards from "./DiscountCards";

const DiscountWrapper = () => {
  return (
    <div className="max-w-[1350px] w-full flex gap-[30px] justify-center mx-auto px-5">
      <DiscountDropdown />
      <DiscountCards />
    </div>
  );
};

export default DiscountWrapper;

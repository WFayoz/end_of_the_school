import React from "react";
import WishlistSort from "./WishlistSort";
import WishlistCards from "./WishlistCards";

const WishlistWrapper = () => {
  return (
    <div className="flex justify-between mx-auto max-w-[1350px] px-5 max-lg:flex-col">
      <WishlistSort />
      <WishlistCards />
    </div>
  );
};

export default WishlistWrapper;

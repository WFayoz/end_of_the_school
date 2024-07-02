import React, { useEffect } from "react";
import ProductReview from "./ProductReview";
import Reusables from "../../components/reusables/Reusables";

const Review = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProductReview />
      <Reusables />
    </div>
  );
};

export default Review;

import React, { useEffect } from "react";
import ProductReview from "./ProductReview";
import CustomComponents from "../../components/customComponents/CustomComponents";

const Review = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ProductReview />
      <CustomComponents />
    </div>
  );
};

export default Review;

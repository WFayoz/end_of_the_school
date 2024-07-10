import React from "react";
import CommentsCards from "./CommentsCards";
import FormSection from "../../components/customComponents/FormSection";

const Comments = () => {
  return (
    <div>
      <CommentsCards />
      <FormSection />
      <div className="mb-36"></div>
    </div>
  );
};

export default Comments;

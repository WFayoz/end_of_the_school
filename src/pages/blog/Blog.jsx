import React from "react";
import BlogCards from "./BlogCards";
import BlogDropdown from "./BlogDropdown";
import SubscribeSection from "../../components/customComponents/SubscribeSection";

const Blog = () => {
  return (
    <>
      <div className="mx-auto max-w-[1350px] px-5">
        <h1 className="text-[48px]">Блог</h1>
        <div className="my-10 flex w-full justify-between">
          <BlogDropdown />
          <BlogCards />
        </div>
      </div>
      <SubscribeSection />
    </>
  );
};
export default Blog;

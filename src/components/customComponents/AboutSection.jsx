import React from "react";
import CustomizedAccordions from "./AboutAccardion";

const AboutSection = () => {
  return (
    <div className="bg-primaryGreen">
      <div className="mx-auto flex max-w-[1350px] bg-primaryGreen px-5 py-28 max-md:flex-col">
        <div className="w-1/2 text-[32px] text-primaryWhite max-md:w-full max-md:text-[26px]">
          Информация о компании
        </div>
        <div className="w-1/2 max-md:mt-8 max-md:w-full">
          <CustomizedAccordions />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

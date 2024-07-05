import React from "react";
import CustomizedAccordions from "./DeliveryAccardion";

const DeliveryAccardionMain = () => {
  return (
    <div className="mt-36 bg-accent">
      <div className="mx-auto flex max-w-[1350px] bg-accent px-5 py-28 max-md:flex-col">
        <div className="w-1/2 text-primaryBlack max-md:w-full">
          <h1 className="text-[32px] max-md:text-[26px]">
            Документы, необходимые для получения груза
          </h1>
          <p>
            По копиям доверенностей и доверенностям с незаполненными
            обязательными реквизитами отгрузка не производится
          </p>
        </div>
        <div className="w-1/2 max-md:mt-8 max-md:w-full">
          <CustomizedAccordions />
        </div>
      </div>
    </div>
  );
};

export default DeliveryAccardionMain;

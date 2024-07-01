import React from "react";
import symbol1 from "../../../public/icons/symbol1.svg";
import symbol2 from "../../../public/icons/symbol2.svg";
import symbol3 from "../../../public/icons/symbol3.svg";
import symbol4 from "../../../public/icons/symbol4.svg";

const OffersSection = () => {
  return (
    <div className="mx-auto mt-36 flex w-full max-w-[1350px] flex-col items-start justify-center px-5">
      <div>
        <p className="text-[32px] text-primaryBlack max-md:text-[28px]">
          Почему выбирают нас?
        </p>
      </div>
      <div className="mt-10 flex w-full grid-cols-2 items-center justify-between gap-10 max-md:grid">
        <div className="flex h-[320px] w-[320px] flex-col items-center justify-center rounded-lg border border-accent max-xl:h-[250px] max-xl:w-[250px] max-lg:h-[200px] max-lg:w-[200px] max-md:h-[160px] max-md:w-[160px]">
          <img src={symbol1} alt="symbol" />
          <p className="pt-3npm i text-primaryBlack">Быстрая доставка</p>
        </div>
        <div className="flex h-[320px] w-[320px] flex-col items-center justify-center rounded-lg border border-accent max-xl:h-[250px] max-xl:w-[250px] max-lg:h-[200px] max-lg:w-[200px] max-md:h-[160px] max-md:w-[160px]">
          <img src={symbol2} alt="symbol" />
          <p className="pt-3npm text-primaryBlack">Быстрая доставка</p>
        </div>
        <div className="flex h-[320px] w-[320px] flex-col items-center justify-center rounded-lg border border-accent max-xl:h-[250px] max-xl:w-[250px] max-lg:h-[200px] max-lg:w-[200px] max-md:h-[160px] max-md:w-[160px]">
          <img src={symbol3} alt="symbol" />
          <p className="pt-3npm i text-primaryBlack">Быстрая доставка</p>
        </div>
        <div className="flex h-[320px] w-[320px] flex-col items-center justify-center rounded-lg border border-accent max-xl:h-[250px] max-xl:w-[250px] max-lg:h-[200px] max-lg:w-[200px] max-md:h-[160px] max-md:w-[160px]">
          <img src={symbol4} alt="symbol" />
          <p className="pt-3 text-primaryBlack">Быстрая доставка</p>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;

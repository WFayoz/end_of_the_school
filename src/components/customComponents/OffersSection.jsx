import React from "react";
import symbol1 from "../../../public/icons/symbol1.svg";
import symbol2 from "../../../public/icons/symbol2.svg";
import symbol3 from "../../../public/icons/symbol3.svg";
import symbol4 from "../../../public/icons/symbol4.svg";

const DeliveryOffers = () => {
  return (
    <div className="w-full px-5">
      <div className="mx-auto mt-36 flex w-full max-w-[1350px] flex-col items-start justify-center">
        <div>
          <p className="text-[32px] text-primaryBlack max-md:text-[28px]">
            Почему выбирают нас?
          </p>
        </div>
        <div className="mt-10 grid w-full grid-cols-4 gap-10 max-md:grid-cols-1">
          <div className="flex h-[320px] flex-col items-center justify-center rounded-lg border border-accent max-xl:h-[250px] max-lg:h-[200px] max-md:h-[160px]">
            <img src={symbol1} alt="symbol" />
            <p className="pt-3 text-primaryBlack">Быстрая доставка</p>
          </div>
          <div className="flex h-[320px] flex-col items-center justify-center rounded-lg border border-accent max-xl:h-[250px] max-lg:h-[200px] max-md:h-[160px]">
            <img src={symbol2} alt="symbol" />
            <p className="pt-3 text-primaryBlack">Быстрая доставка</p>
          </div>
          <div className="flex h-[320px] flex-col items-center justify-center rounded-lg border border-accent max-xl:h-[250px] max-lg:h-[200px] max-md:h-[160px]">
            <img src={symbol3} alt="symbol" />
            <p className="pt-3 text-primaryBlack">Быстрая доставка</p>
          </div>
          <div className="flex h-[320px] flex-col items-center justify-center rounded-lg border border-accent max-xl:h-[250px] max-lg:h-[200px] max-md:h-[160px]">
            <img src={symbol4} alt="symbol" />
            <p className="pt-3 text-primaryBlack">Быстрая доставка</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOffers;

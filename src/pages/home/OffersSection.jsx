import React from "react";
import symbol1 from '../../../public/icons/symbol1.svg'
import symbol2 from '../../../public/icons/symbol2.svg'
import symbol3 from '../../../public/icons/symbol3.svg'
import symbol4 from '../../../public/icons/symbol4.svg'

const OffersSection = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1350px] items-start mt-36 flex-col justify-center px-5">
      <div>
        <p className="text-primaryBlack text-[32px]">Почему выбирают нас?</p>
      </div>
      <div className="flex w-full items-center justify-between mt-10 ">
        <div className="flex h-[320px] w-[320px] flex-col items-center justify-center rounded-lg border border-accent">
          <img src={symbol1} alt="symbol" />
          <p className="text-primaryBlack pt-3npm i react-fast-marquee">Быстрая доставка</p>
        </div>
        <div className="flex h-[320px] w-[320px] flex-col items-center justify-center rounded-lg border border-accent">
          <img src={symbol2} alt="symbol" />
          <p className="text-primaryBlack pt-3npm i react-fast-marquee">Быстрая доставка</p>
        </div>
        <div className="flex h-[320px] w-[320px] flex-col items-center justify-center rounded-lg border border-accent">
          <img src={symbol3} alt="symbol" />
          <p className="text-primaryBlack pt-3npm i react-fast-marquee">Быстрая доставка</p>
        </div>
        <div className="flex h-[320px] w-[320px] flex-col items-center justify-center rounded-lg border border-accent">
          <img src={symbol4} alt="symbol" />
          <p className="text-primaryBlack pt-3npm i react-fast-marquee">Быстрая доставка</p>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;

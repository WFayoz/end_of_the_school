import React from "react";
import symbol9 from "../../../public/icons/symbol9.svg";
import symbol10 from "../../../public/icons/symbol10.svg";
import symbol11 from "../../../public/icons/symbol11.svg";
import symbol12 from "../../../public/icons/symbol12.svg";

const VarantyOffers = () => {
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
            <img src={symbol9} alt="symbol" />
            <p className="pt-3 text-primaryBlack  max-w-[218px] text-center"> Установка, настройка и пуско-наладка медтехники</p>
          </div>
          <div className="flex h-[320px] flex-col items-center justify-center rounded-lg border border-accent max-xl:h-[250px] max-lg:h-[200px] max-md:h-[160px]">
            <img src={symbol10} alt="symbol" />
            <p className="pt-3 text-primaryBlack  max-w-[218px] text-center"> Сервисное обслуживание медицинской техники любой комплектации</p>
          </div>
          <div className="flex h-[320px] flex-col items-center justify-center rounded-lg border border-accent max-xl:h-[250px] max-lg:h-[200px] max-md:h-[160px]">
            <img src={symbol11} alt="symbol" />
            <p className="pt-3 text-primaryBlack  max-w-[218px] text-center"> Гарантийное и постгарантийное обслуживание</p>
          </div>
          <div className="flex h-[320px] flex-col items-center justify-center rounded-lg border border-accent max-xl:h-[250px] max-lg:h-[200px] max-md:h-[160px]">
            <img src={symbol12} alt="symbol" />
            <p className="pt-3 text-primaryBlack  max-w-[218px] text-center"> Диагностика и проведение профилактических работ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VarantyOffers;

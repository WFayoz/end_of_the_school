import React from "react";

const FactsInNums = () => {
  return (
    <div className="mx-auto mt-36 flex w-full max-w-[1350px] flex-col justify-between px-5 md:flex-row">
      <div className="mb-10 md:mb-0 md:w-[48%]">
        <h2 className="text-[30px] text-primaryBlack">Цифры и факты</h2>
        <p className="w-[290px] text-secondaryGray">
          Мы работаем на результат и продаём только качественную продукцию
        </p>
      </div>
      <div className="md:w-[48%]">
        <div className="flex items-center border-b border-accent py-5">
          <h2 className="w-[138px] text-[48px] text-primaryGreen">7 лет</h2>
          <p className="pl-10 text-primaryBlack md:pl-40">на рынке</p>
        </div>
        <div className="flex items-center border-b border-accent py-5">
          <h2 className="w-[138px] text-[48px] text-primaryGreen">964+</h2>
          <p className="pl-10 text-primaryBlack md:pl-40">
            оригинальной продукции со всего мира
          </p>
        </div>
        <div className="flex items-center border-b border-accent py-5">
          <h2 className="w-[138px] text-[48px] text-primaryGreen">23+</h2>
          <p className="pl-10 text-primaryBlack md:pl-40">
            международных сертификатов качества
          </p>
        </div>
        <div className="flex items-center py-5">
          <h2 className="w-[138px] text-[48px] text-primaryGreen">2452+</h2>
          <p className="pl-10 text-primaryBlack md:pl-40">
            товаров всегда в наличии
          </p>
        </div>
      </div>
    </div>
  );
};

export default FactsInNums;

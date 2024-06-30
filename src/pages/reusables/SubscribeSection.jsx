import React from "react";

const SubscribeSection = () => {
  return (
    <div className="mt-32 bg-accent">
      <div className="mx-auto flex w-full max-w-[1350px] items-center justify-end bg-accent px-5 py-9">
        <div className="flex flex-col max-md:w-full">
          <h2 className="text-[30px] text-primaryBlack">
            Подпишитесь и будьте в курсе!
          </h2>
          <p className="pt-5 text-secondaryGray">
            Акции, скидки, распродажи ждут!
          </p>
          <div className="mt-6 overflow-hidden rounded-[50px] border border-accent bg-white">
            <input
              type="text"
              placeholder="Введите email"
              className="py-[11px] pl-[25px] pr-[200px] outline-none max-md:w-[60%] max-md:pr-0"
            />
            <button className="buttonG max-md:w-[40%]">Подписаться</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;

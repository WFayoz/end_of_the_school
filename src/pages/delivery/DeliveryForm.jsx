import React from "react";

const DeliveryForm = () => {
  return (
    <div className="mx-auto mt-36 flex w-full max-w-[1350px] flex-col items-start px-5 md:flex-row">
      <div className="w-full md:w-1/2">
        <h1 className="text-[30px]">Вам нужна консультация?</h1>
        <p className="pt-8 md:w-[540px]">
          Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
          координаты и наш менеджер перезвонит вам через 10 минут
        </p>
      </div>
      <div className="mt-8 w-full rounded-lg border border-accent bg-primaryWhite p-10 md:mt-0 md:h-[612px] md:w-1/2 md:max-xl:h-[600px] md:max-xl:w-[600px] md:max-lg:h-[600px] md:max-lg:w-full md:max-sm:h-[650px]">
        <div>
          <h2 className="text-[30px] text-primaryBlack max-sm:text-[20px]">
            Остались вопросы?
          </h2>
          <p className="w-full pt-6 text-secondaryGray max-sm:text-[12px] md:w-[90%]">
            Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои
            координаты и наш менеджер перезвонит вам через 10 минут
          </p>
          <form action="" className="mt-8 flex flex-col">
            <input
              type="text"
              placeholder="Ваше имя"
              className="mt-1 border-b border-accent py-4 outline-none"
            />
            <input
              type="text"
              placeholder="Ваш телефон"
              className="mt-1 border-b border-accent py-4 outline-none"
            />
            <input
              type="text"
              placeholder="Ваш email"
              className="mt-1 border-b border-accent py-4 outline-none"
            />
            <input
              type="text"
              placeholder="Ваш вопрос"
              className="mt-1 border-b border-accent py-4 outline-none"
            />
          </form>
          <div className="mt-12 flex flex-col items-start justify-between border-t border-accent pt-8 md:flex-row">
            <button className="buttonG">Отправить</button>
            <div className="mt-4 text-[11px] text-secondaryGray md:mt-0 md:max-md:hidden">
              Нажимая «Отправить», я соглашаюсь c обработкой персональных данных{" "}
              <br /> на условиях{" "}
              <span className="text-primaryGreen">
                Политики конфиденциальности.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryForm;
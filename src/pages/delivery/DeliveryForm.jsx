import React from "react";

const DeliveryForm = () => {
  return (
    <div className="flex items-start max-w-[1350px] w-full px-5 mx-auto mt-36">
      <div className="w-[50%]">
        <h1 className="text-[30px] ">
        Вам нужна консультация?
        </h1>
        <p className="w-[540px] pt-8">Задайте их по номеру телефона +7 (495) 000-00-00 или оставьте свои координаты и наш менеджер перезвонит вам через 10 минут</p>
      </div>
      <div className="h-[612px] w-[50%] rounded-lg border border-accent bg-primaryWhite p-10 max-xl:h-[600px] max-xl:w-[600px] max-lg:h-[600px] max-lg:w-full max-sm:h-[650px]">
        <div>
          <h2 className="text-[30px] text-primaryBlack max-sm:text-[20px]">
            Остались вопросы?
          </h2>
          <p className="w-[90%] pt-6 text-secondaryGray max-sm:text-[12px]">
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
          <div className="mt-12 flex flex-row items-start justify-between border-t border-accent pt-8">
            <button className="buttonG">Отправить</button>
            <div className="text-[11px] text-secondaryGray max-md:hidden">
              Нажимая «Отправить», я соглашаюсь c обработкой персональных данных{" "}
              <br /> на условиях{" "}
              <span className="text-primaryGreen">
                {" "}
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

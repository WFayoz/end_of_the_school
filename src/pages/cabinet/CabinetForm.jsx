import React from "react";

const CabinetForm = () => {
  return (
    <div className="mx-auto mt-36 flex w-full max-w-[1350px] flex-col items-start justify-between rounded-xl bg-white p-5 md:flex-row md:items-center md:p-10">
      <p className="mb-5 w-full max-w-full text-start text-[24px] md:mb-0 md:max-w-[350px] md:text-[30px]">
        Закажите у нас комплексное оснащение
      </p>

      <form action="" className="w-full max-md:mt-10 md:w-1/2">
        <input
          type="text"
          placeholder="Ваш телефон"
          className="mt-1 w-full border-b border-accent py-4 outline-none"
        />
        <div className="mt-10 flex w-full flex-col items-start justify-between gap-5 md:flex-row md:items-center md:gap-10">
          <button className="buttonG">Заказать</button>
          <p className="mt-4 text-[12px] text-secondaryGray md:mt-0">
            Нажимая «Отправить», я соглашаюсь c обработкой персональных данных
            на условиях{" "}
            <span className="text-primaryGreen">
              Политики конфиденциальности.
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default CabinetForm;

import React from "react";

const FormSection = () => {
  return (
    <div className="mx-auto flex max-w-[1350px] items-center justify-between gap-5 px-5 max-lg:flex-col">
      <div className="h-[612px] w-[650px] overflow-hidden rounded-lg border border-accent max-xl:h-[600px] max-xl:w-[600px] max-lg:h-[500px] max-lg:w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d982.6004409776284!2d66.96382008702044!3d39.650563989926155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d18ce6bd15555%3A0xc4b84585b8657cf!2sAmir%20Temur%20Monument!5e1!3m2!1sen!2s!4v1720248915714!5m2!1sen!2s"
          width="100%"
          height="612"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="h-[612px] w-[650px] rounded-lg border border-accent bg-primaryWhite p-10 max-xl:h-[600px] max-xl:w-[600px] max-lg:h-[600px] max-lg:w-full max-sm:h-[650px]">
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

export default FormSection;

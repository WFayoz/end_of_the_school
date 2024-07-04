import React from "react";

const FormSection = () => {
  return (
    <div className="mx-auto flex max-w-[1350px] items-center justify-between px-5 gap-5 max-lg:flex-col">
      <div className="h-[612px] w-[650px] overflow-hidden rounded-lg border border-accent max-xl:w-[600px] max-xl:h-[600px] max-lg:w-full max-lg:h-[500px]  ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3013.134420680891!2d72.09591527541916!3d40.95663402260419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bca55d4da4d0fb%3A0x3108d3a779fddac4!2sTurg&#39;unboy%20Mahmudjonov!5e0!3m2!1sen!2s!4v1719473271011!5m2!1sen!2s"
          width="650"
          height="612"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="h-[612px] w-[650px] rounded-lg border border-accent bg-primaryWhite p-10 max-xl:w-[600px] max-xl:h-[600px] max-lg:w-full max-lg:h-[600px] max-sm:h-[650px] ">
        <div>
          <h2 className="text-[30px] text-primaryBlack max-sm:text-[20px]">Остались вопросы?</h2>
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

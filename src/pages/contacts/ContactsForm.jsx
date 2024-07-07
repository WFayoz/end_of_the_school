import React from "react";
import { CiLocationOn, CiClock2, CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp, FaWikipediaW } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";

const ContactsForm = () => {
  return (
    <div className="mx-auto mb-36 max-w-[1350px] px-5">
      <h1 className="text-center text-[48px] md:text-left">Контакты</h1>
      <div className="mb-5 mt-10 flex gap-10 flex-col lg:flex-row lg:justify-between">
        <div className="mb-10 w-full  rounded-xl border border-accent bg-primaryWhite p-10 lg:mb-0">
          <h2 className="text-[30px]">ООО Глобал Медикал Трейд</h2>
          <ul className="mt-6 flex flex-col gap-4">
            <li>
              <p className="flex items-center gap-1 text-secondaryGray">
                <CiLocationOn />
                Юридический адрес:
              </p>
              <p className="pl-5">Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
            </li>
            <li>
              <p className="flex items-center gap-1 text-secondaryGray">
                <CiLocationOn />
                Фактический адрес:
              </p>
              <p className="pl-5">Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
            </li>
            <li>
              <p className="flex items-center gap-1 text-secondaryGray">
                <CiClock2 />
                Юридический адрес:
              </p>
              <p className="pl-5">Россия, г. Москва, ул. Докукина, 8, стр. 2</p>
            </li>
          </ul>
          <h3 className="py-7 text-[18px] font-semibold">
            Звоните. Звонки по России бесплатны:
          </h3>
          <div>
            <div>
              <p className="flex items-center gap-1 text-secondaryGray">
                <BsTelephone />
                Телефоны:
              </p>
              <div className="flex flex-col gap-2 pl-5">
                <p>8-800-000-00-00</p>
                <p>+7-000-000-00-00</p>
                <p>+7-495-000-00-00</p>
              </div>
            </div>
            <div>
              <p className="mt-4 flex items-center gap-1 text-secondaryGray">
                <CiMail />
                Пишите:
              </p>
              <div className="flex flex-col gap-2 pl-5">
                <p>info@mail.ru</p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col lg:flex-row lg:gap-16">
            <div className="mb-10 flex flex-col lg:mb-0">
              <h3 className="text-[18px] font-semibold">Реквизиты:</h3>
              <div className="mt-4 flex gap-10">
                <div>
                  <p className="text-secondaryGray">ИНН:</p>
                  <p>9717039181</p>
                </div>
                <div>
                  <p className="text-secondaryGray">ОГРН:</p>
                  <p>1167746796986</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-[18px] font-semibold">Мы в соцсетях</h3>
              <div className="flex gap-3 pt-7">
                <FaWikipediaW className="rounded-sm bg-primaryGreen p-1 text-[30px] font-bold text-primaryWhite" />
                <PiTelegramLogoLight className="rounded-sm bg-primaryGreen p-1 text-[30px] font-bold text-primaryWhite" />
                <FaWhatsapp className="rounded-sm bg-primaryGreen p-1 text-[30px] font-bold text-primaryWhite" />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  rounded-xl border border-accent bg-primaryWhite p-10 max-xl:w-[600px]  max-lg:w-full">
          <h2 className="text-[30px] text-primaryBlack max-sm:text-[20px]">
            Бесплатная консультация
          </h2>
          <p className="w-full max-w-[417px] pt-6 text-secondaryGray max-sm:text-[12px]">
            Оставьте свои координаты и наш менеджер перезвонит вам через 10
            минут
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
          <div className="mt-24 flex flex-row items-start justify-between border-t border-accent pt-8">
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
      <div className="relative mt-10 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.1272608464124!2d69.26538967543686!3d41.284334702381955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8abf6cafffff%3A0xf891468a94f4bf81!2sFrontend%20Web%20Developer!5e0!3m2!1sen!2s!4v1719918016414!5m2!1sen!2s"
          width="100%"
          height="389"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <button className="buttonG absolute bottom-3 right-3">
          Пункт выдачи
        </button>
      </div>
    </div>
  );
};

export default ContactsForm;

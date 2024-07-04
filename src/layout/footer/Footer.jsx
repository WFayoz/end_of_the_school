import React from "react";
import { FaWikipediaW, FaWhatsapp } from "react-icons/fa";
import { PiTelegramLogoLight } from "react-icons/pi";
import mastercard from "../../../public/icons/mastercard.svg";
import visa from "../../../public/icons/visa.svg";
import mir from "../../../public/icons/mir.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mx-auto w-full bg-primaryGreen pt-10">
      <div className="mx-auto max-w-[1350px] px-5">
        <div className="flex flex-wrap justify-between">
          <div className="mb-10 w-full text-[14px] text-white md:w-auto">
            <p className="pb-5 font-semibold">Покупателям</p>
            <div className="w-[210px] border border-white"></div>
            <div className="mt-5 flex flex-wrap gap-5 md:gap-14">
              <ul className="flex flex-col gap-2">
                <li>О компании</li>
                <li>Сертификаты</li>
                <Link to={"/vacancy"}>Вакансии</Link>
                <li>Гарантии</li>
                <li>Услуги</li>
                <li>Акции</li>
                <li>Доставка</li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li>Оплата</li>
                <li>Возврат</li>
                <li>FAQ</li>
                <li>Лизинг</li>
                <li>Отзывы</li>
                <li>Блог</li>
              </ul>
            </div>
          </div>
          <div className="mb-10 w-full text-[14px] text-white md:w-auto">
            <p className="pb-5 font-semibold">Каталог</p>
            <div className="w-full border border-white md:w-[650px]"></div>
            <div className="mt-5 flex flex-wrap gap-5 md:gap-14">
              <ul className="flex flex-col gap-2">
                <li>Реанимация</li>
                <li>Хирургия</li>
                <li>Офтальмология</li>
                <li>Лабораторная диагностика</li>
                <li>Акушерство и Гинекология</li>
                <li>Гистология</li>
                <li>Косметология</li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li>Орториноларингология</li>
                <li>Рентгенология и томография</li>
                <li>Стрерилизация</li>
                <li>Физиотерапия и реабилитация</li>
                <li>Функциональная диагностика</li>
                <li>Эндоскопия</li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li>Новинки</li>
                <li>Распродажи</li>
                <li>Кабинеты под ключ</li>
                <li>Скачать каталог</li>
              </ul>
            </div>
          </div>
          <div className="w-full text-[14px] text-white md:w-auto">
            <p className="pb-5 font-semibold">Контакты</p>
            <div className="w-[210px] border border-white"></div>
            <div className="mt-5 flex flex-wrap gap-5 md:gap-14">
              <ul className="flex flex-col gap-2">
                <li className="font-bold">Адрес:</li>
                <li>г. Москва, ул. Московская, д. 35 </li>
                <li className="py-6">Карта проезда</li>
                <li>
                  График работы: <br /> Пн-Пт с 09:00-19:00, <br /> Сб-Вс -
                  выходной
                </li>
                <li className="pt-6">+7 000-000-00-00</li>
                <li>+7 495-000-00-00</li>
                <li>8 800-000-00-00</li>
                <li>info@mail.ru</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-20 border-t border-primaryWhite py-5">
          <div className="flex flex-wrap justify-between text-[14px] text-primaryWhite">
            <div className="mb-10 md:mb-0">
              <img
                src="https://global-mt.ru/local/templates/gmt/img/Logo2.svg"
                alt=""
              />
            </div>
            <div className="mb-10 md:mb-0">
              <p>Мы в соцсетях</p>
              <div className="mt-2 flex gap-3">
                <FaWikipediaW className="rounded-sm bg-primaryWhite text-[20px] font-bold text-primaryGreen" />
                <PiTelegramLogoLight className="rounded-sm bg-primaryWhite text-[20px] font-bold text-primaryGreen" />
                <FaWhatsapp className="rounded-sm bg-primaryWhite text-[20px] font-bold text-primaryGreen" />
              </div>
            </div>
            <div className="flex flex-wrap gap-5 md:gap-20">
              <ul className="flex flex-col gap-2">
                <li>Партнерская программа</li>
                <li>Оптовые продажи</li>
                <li>Реквизиты</li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li>Политика конфиденциальности</li>
                <li>Условия соглашения</li>
                <li>Карта сайта</li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li className="font-bold">Способы оплаты</li>
                <div className="mt-2 flex flex-wrap gap-2">
                  <img src={mastercard} alt="" />
                  <img src={visa} alt="" />
                  <img src={mir} alt="" />
                </div>
              </ul>
            </div>
          </div>
          <div className="mt-20 flex flex-wrap justify-between text-white">
            <p className="text-[14px]">
              © 2022 Медоборудование <br /> Все права защищены
            </p>
            <p className="text-[12px] opacity-50">
              Информация на данном сайте носит справочный характер и не является
              публичной офертой, определяемой положениями Статьи 437
              Гражданского кодекса Российской Федерации
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const HeaderPop = ({ setopenMenu }) => {
  return (
    <div onClick={() => setopenMenu(false)} className="flex flex-col  ">
      <Link to={"/delivery"} className="py-3 border-b border-accent">Доставка</Link>
      <Link to={"/payment"} className="py-3 border-b border-accent">Оплата</Link>
      <Link to={"/discount"} className="py-3 border-b border-accent">Акции</Link>
      <Link to={"/varanty"} className="py-3 border-b border-accent">Гарантии</Link>
      <Link to={"/manafactures"} className="py-3 border-b border-accent">Производители</Link>
      <Link to={"/blog"} className="py-3 border-b border-accent">Блог</Link>
      <Link to={"/service"} className="py-3 border-b border-accent">Услуги</Link>
      <Link to={"/comments"} className="py-3 border-b border-accent">Отзывы</Link>
      <Link to={"/contacts"} className="py-3 border-b border-accent">Контакты</Link>
      <Link to={"/faq"} className="py-3 border-b border-accent">FAQ</Link>
      <Link to={"/about"} className="py-3 border-b border-accent">О компании</Link>
      <Link to={"/vacancy"} className="py-3 border-b border-accent"> Вакансии</Link>
      <Link to={"/cabinet"} className="py-3 border-b border-accent"> Кабинеты под ключ</Link>
    </div>
  );
};

export default HeaderPop;

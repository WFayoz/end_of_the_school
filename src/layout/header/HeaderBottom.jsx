import React from "react";
import burger from "../../../public/icons/burger.svg";
import location from "../../../public/icons/location.svg";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";

const HeaderBottom = () => {
  return (
    <div className="flex items-center justify-between pb-4 max-md:hidden">
      <div className="flex list-none gap-5 text-primaryBlack max-xl:gap-3">
        <Link to={"/catalog"} className="flex list-none">
          <img src={burger} alt="Burger" />
          Каталог
        </Link>
        <Link to={"/cabinet"}>Производители</Link>
        <li>Кабинеты под ключ</li>
        <Link to={"/service"}>Услуги</Link>
        <li>Акции</li>
        <li>Контакты</li>
      </div>
      <div className="flex gap-5 max-xl:hidden">
        <div className="flex cursor-pointer items-center text-primaryBlack">
          <p>Москва</p>
          <img src={location} alt="" />
        </div>
        <button className="buttonW">+7(495)000-00-00</button>
        <button className="buttonG">Заказать звонок</button>
      </div>
      <div className="items-center justify-center rounded-full bg-primaryGreen p-2 xl:hidden">
        <FiPhone className="text-white" />
      </div>
    </div>
  );
};

export default HeaderBottom;

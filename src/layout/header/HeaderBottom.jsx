import React from "react";
import burger from "../../../public/icons/burger.svg";
import location from "../../../public/icons/location.svg";

const HeaderBottom = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex list-none gap-5 text-primaryBlack">
        <div className="flex list-none">
          <img src={burger} alt="Burger" />
          Каталог
        </div>
        <li>Производители</li>
        <li>Кабинеты под ключ</li>
        <li>Услуги</li>
        <li>Акции</li>
        <li>Покупателям</li>
        <li>Контакты</li>
      </div>
      <div className="flex gap-5">
        <div className="flex cursor-pointer items-center text-primaryBlack">
          <p>Москва</p>
          <img src={location} alt="" />
        </div>
        <button>a</button>
        <button>a</button>
      </div>
    </div>
  );
};

export default HeaderBottom;

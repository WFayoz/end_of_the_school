import React from "react";
import logo from "../../../public/icons/logo.svg";
import search from "../../../public/icons/search.svg";
import login from "../../../public/icons/login.svg";
import favourite from "../../../public/icons/favourite.svg";
import comparison from "../../../public/icons/comparison.svg";
import basket from "../../../public/icons/basket.svg";

const HeaderCenter = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center  justify-between gap-10">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex w-[460px] items-center rounded-[50px] border border-secondaryGray bg-accent">
          <input
            id="id"
            type="text"
            className="h-full w-[90%] rounded-[50px] py-[10px] pl-[15px] outline-none"
            placeholder="Поиск"
          />
          <label
            htmlFor="id"
            className="flex w-[10%] cursor-pointer items-center justify-center py-[6px]"
          >
            <img src={search} alt="Search" />
          </label>
        </div>
        <p className="text-[12px] text-secondaryGray">
          Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
        </p>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex cursor-pointer flex-col items-center font-normal text-secondaryGray hover:text-[black]">
          <img src={login} alt="" />
          Войти
        </div>
        <div className="flex cursor-pointer flex-col items-center font-normal text-secondaryGray hover:text-[black]">
          <img src={favourite} alt="" />
          Избранное
        </div>
        <div className="flex cursor-pointer flex-col items-center font-normal text-secondaryGray hover:text-[black]">
          <img src={comparison} alt="" />
          Сравнить
        </div>
        <div className="flex cursor-pointer flex-col items-center font-normal text-secondaryGray hover:text-[black]">
          <img src={basket} alt="" />
          Корзина
        </div>
      </div>
    </div>
  );
};

export default HeaderCenter;

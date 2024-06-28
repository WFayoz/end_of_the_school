import React from "react";
import logo from "../../../public/icons/logo.svg";
import search from "../../../public/icons/search.svg";
import login from "../../../public/icons/login.svg";
import favourite from "../../../public/icons/favourite.svg";
import comparison from "../../../public/icons/comparison.svg";
import basket from "../../../public/icons/basket.svg";
import { FiPhone } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";



const HeaderCenter = () => {
  return (
    <div className="flex items-center justify-between flex-col">
      <div className="flex items-center justify-between w-full mb-5 md:hidden">
      <div className="md:hidden">
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex gap-10 md:hidden">
          <FiPhone className="text-[30px] text-primaryBlack"/>
          <RxHamburgerMenu className="text-[30px] text-primaryBlack"/>
        </div>
      </div>
      <div className="flex w-full items-center gap-[7%] justify-between">

      <div className="flex items-center justify-between gap-10 w-full max-lg:justify-start max-lg:gap-12">
        <div className="max-md:hidden">
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex w-[460px] items-center rounded-[50px] border border-secondaryGray bg-accent max-md:w-full">
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
        <p className="text-[12px] text-secondaryGray max-lg:hidden">
          Пн-Пт с 09:00-19:00 <br /> Сб-Вс - выходной
        </p>
      </div>
      <div className="flex items-center gap-5 max-xl:gap-3 max-md:hidden">
        <div className="flex cursor-pointer flex-col items-center font-normal text-secondaryGray hover:text-[black]">
          <img src={login} alt="" />
          <p className="max-xl:hidden">Войти</p>
        </div>
        <div className="flex cursor-pointer flex-col items-center font-normal text-secondaryGray hover:text-[black]">
          <img src={favourite} alt="" />
          <p className="max-xl:hidden">Избранное</p>
        </div>
        <div className="flex cursor-pointer flex-col items-center font-normal text-secondaryGray hover:text-[black]">
          <img src={comparison} alt="" />
          <p className="max-xl:hidden">Сравнить</p>{" "}
        </div>
        <div className="flex cursor-pointer flex-col items-center font-normal text-secondaryGray hover:text-[black]">
          <img src={basket} alt="" />
          <p className="max-xl:hidden">Корзина</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeaderCenter;

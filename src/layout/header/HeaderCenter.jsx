import React, { useEffect } from "react";
import logo from "../../../public/icons/logo.svg";
import search from "../../../public/icons/search.svg";
import login from "../../../public/icons/login.svg";
import favourite from "../../../public/icons/favourite.svg";
import comparison from "../../../public/icons/comparison.svg";
import basket from "../../../public/icons/basket.svg";
import { FiPhone } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateTotal } from "../../redux/basketSlice";

const HeaderCenter = () => {
  const cart = useSelector((state) => state.basket.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [cart, dispatch]);
  return (
    <div className="flex flex-col items-center justify-between">
      <div className="mb-5 flex w-full items-center justify-between md:hidden">
        <div className="md:hidden">
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="flex gap-10 md:hidden">
          <FiPhone className="text-[30px] text-primaryBlack" />
          <RxHamburgerMenu className="text-[30px] text-primaryBlack" />
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-[7%]">
        <div className="flex w-full items-center justify-between gap-10 max-lg:justify-start max-lg:gap-12">
          <div className="max-md:hidden">
            <Link to={"/"}>
              <img src={logo} alt="Logo" />
            </Link>
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
          <Link
            to="/cart"
            className="relative flex cursor-pointer flex-col items-center font-normal text-secondaryGray hover:text-[black]"
          >
            <img src={basket} alt="" />
            <div className="absolute -right-1 -top-2 rounded-full bg-primaryGreen px-2 py-[0.1px] text-white">
              {cart.length}
            </div>
            <p className="max-xl:hidden">Корзина</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderCenter;

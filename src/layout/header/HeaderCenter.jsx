import React, { useEffect, useState } from "react";
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
import footerHome from "../../../public/icons/footerHome.svg";
import footerCatalog from "../../../public/icons/footerCatalog.svg";
import HeaderPop from "./HeaderPop";
import { CloseOutlined } from "@mui/icons-material";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const HeaderCenter = () => {
  const cart = useSelector((state) => state.basket.cart);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const compare = useSelector((state) => state.compare.compare);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [cart, dispatch]);

  const [openMenu, setopenMenu] = useState(false);
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
          <RxHamburgerMenu
            className="text-[30px] text-primaryBlack"
            onClick={() => setopenMenu(true)}
          />
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
          <SignedOut>
            <SignInButton>
              <div className="flex cursor-pointer flex-col items-center font-normal text-secondaryGray hover:text-[black]">
                <img src={login} alt="" />
                <p className="max-xl:hidden">Войти</p>
              </div>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Link
            to={"/wishlist"}
            className="relative flex cursor-pointer flex-col items-center font-normal text-secondaryGray hover:text-[black]"
          >
            <img src={favourite} alt="" />
            {wishlist.length > 0 && (
              <div className="absolute -top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primaryGreen text-[10px] text-white max-xl:-right-2 max-xl:h-4 max-xl:w-4">
                {wishlist.length}
              </div>
            )}
            <p className="max-xl:hidden">Избранное</p>
          </Link>
          <Link
            to={"/compare"}
            className="relative flex cursor-pointer flex-col items-center font-normal text-secondaryGray hover:text-[black]"
          >
            <img src={comparison} alt="" />
            {compare.length > 0 && (
              <div className="absolute -top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primaryGreen text-[10px] text-white max-xl:-right-2 max-xl:h-4 max-xl:w-4">
                {compare.length}
              </div>
            )}
            <p className="max-xl:hidden">Сравнить</p>{" "}
          </Link>
          <Link
            to="/cart"
            className="relative flex cursor-pointer flex-col items-center font-normal text-secondaryGray hover:text-[black]"
          >
            <img src={basket} alt="" />
            {cart.length > 0 && (
              <div className="absolute -top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primaryGreen text-[10px] text-white max-xl:-right-2 max-xl:h-4 max-xl:w-4">
                {cart.length}
              </div>
            )}
            <p className="max-xl:hidden">Корзина</p>
          </Link>
        </div>
      </div>

      {openMenu && (
        <div className="fixed top-0 z-40 flex h-screen w-full flex-col bg-primaryCream p-5">
          <div className="flex w-full items-center justify-end">
            <CloseOutlined
              className="text-[30px] text-primaryBlack"
              onClick={() => setopenMenu(false)}
            />
          </div>

          <div className="mt-5"></div>
          <HeaderPop setopenMenu={setopenMenu} />
        </div>
      )}

      {/* footer */}

      <div className="fixed bottom-0 left-0 right-0 z-50 mx-auto flex w-full flex-auto items-center justify-around bg-primaryWhite py-2 sm:hidden">
        <Link
          to={"/"}
          className="flex flex-col items-center justify-center gap-1"
        >
          <img src={footerHome} alt="" />
          <p className="text-[12px] text-secondaryGray">Главная</p>
        </Link>
        <Link
          to={"/catalog"}
          className="flex flex-col items-center justify-center gap-1"
        >
          <img src={footerCatalog} alt="" />
          <p className="text-[12px] text-secondaryGray">Каталог</p>
        </Link>
        <Link
          to={"/cart"}
          className="relative flex flex-col items-center justify-center gap-1"
        >
          <img src={basket} alt="" />
          {cart.length > 0 && (
            <div className="absolute -top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primaryGreen text-[10px] text-white max-xl:-right-2 max-xl:h-4 max-xl:w-4">
              {cart.length}
            </div>
          )}
          <p className="text-[12px] text-secondaryGray">Корзина</p>
        </Link>
        <Link
          to={"/wishlist"}
          className="relative flex flex-col items-center justify-center gap-1"
        >
          <img src={favourite} alt="" />
          {wishlist.length > 0 && (
            <div className="absolute -top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primaryGreen text-[10px] text-white max-xl:-right-2 max-xl:h-4 max-xl:w-4">
              {wishlist.length}
            </div>
          )}
          <p className="text-[12px] text-secondaryGray">Избранное</p>
        </Link>
        <SignedOut>
          <SignInButton>
            <div className="flex cursor-pointer flex-col items-center font-normal text-secondaryGray hover:text-[black]">
              <img src={login} alt="" />
              <p className="max-xl:hidden">Войти</p>
            </div>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default HeaderCenter;

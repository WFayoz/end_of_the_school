import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseAmount,
  increaseAmount,
  removeItem,
  updateTotal,
} from "../../redux/basketSlice";
import { Link } from "react-router-dom";
import favourite from "../../../public/icons/favourite.svg";
import likedGreen from "../../../public/icons/likedGreen.svg"; // Add the path to the liked green icon
import comparison from "../../../public/icons/comparison.svg";
import { IoClose } from "react-icons/io5";
import { toggleCompare } from "../../redux/compareSlice";
import { toggleWishlist } from "../../redux/wishlistSlice";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cart = useSelector((state) => state.basket.cart);
  const total = useSelector((state) => state.basket.total);
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [cart, dispatch]);

  return (
    <div className="mx-auto flex w-full max-w-[1350px] justify-between px-5 max-cmbr:flex-col">
      {cart.length === 0 ? (
        <div className="my-28 flex w-full flex-col items-start justify-between max-cmbr:flex-col">
          <h1 className="text-[48px] text-primaryBlack">Корзина</h1>
          <div className="mt-6">
            <h2 className="text-[30px]">“Не добавлено товаров в Корзину”</h2>
            <p className="max-w-[384px] py-6 text-secondaryGray">
              Вы можете перейти на главную страницу или воспользоваться
              каталогом товаров
            </p>
            <div className="flex gap-3">
              <button className="buttonW">На главную</button>
              <button className="buttonG">В каталог</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full flex-col gap-3">
          {cart.map((item) => (
            <div
              className="flex max-w-full flex-col gap-5 overflow-hidden rounded-xl border border-accent md:flex-row"
              key={item.id}
            >
              <div className="relative w-full bg-primaryWhite md:w-[320px]">
                <img
                  src={item.img}
                  alt=""
                  className="h-[240px] w-full object-contain md:w-[320px]"
                />
                <p className="absolute left-2 top-2 rounded-[50px] bg-secondaryGreen3 px-5 py-2 text-secondaryGreen2">
                  {item.category}
                </p>
              </div>
              <div className="flex w-full flex-col items-start justify-between p-5 md:flex-row">
                <div className="flex w-full flex-col md:w-[180px]">
                  <div>
                    <h1 className="text-[20px] text-primaryBlack">
                      {item.name}
                    </h1>
                    <p className="pt-1 text-[12px] text-secondaryGray">
                      Артикул: {item.seriesNumber}
                    </p>
                    <p className="pt-1 text-[12px] text-secondaryGray">
                      В наличии
                    </p>
                  </div>
                  <div className="mt-5 flex flex-col justify-center md:hidden">
                    <h1 className="text-[20px]">{item.price} руб</h1>
                    <div className="mt-5 flex w-min flex-row items-center gap-4 rounded-[50px] border border-accent px-5 py-2 font-medium text-gray-600">
                      <button
                        onClick={() => {
                          if (item.amount === 1) {
                            dispatch(removeItem({ name: item.name }));
                            return;
                          }
                          dispatch(decreaseAmount({ name: item.name }));
                        }}
                      >
                        -
                      </button>
                      <p>{item.amount}</p>
                      <button
                        onClick={() => {
                          dispatch(increaseAmount({ name: item.name }));
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex hidden flex-col justify-center md:flex">
                  <h1 className="text-[20px]">{item.price} руб</h1>
                  <div className="mt-5 flex w-min flex-row items-center gap-4 rounded-[50px] border border-accent px-5 py-2 font-medium text-gray-600">
                    <button
                      onClick={() => {
                        if (item.amount === 1) {
                          dispatch(removeItem({ name: item.name }));
                          return;
                        }
                        dispatch(decreaseAmount({ name: item.name }));
                      }}
                    >
                      -
                    </button>
                    <p>{item.amount}</p>
                    <button
                      onClick={() => {
                        dispatch(increaseAmount({ name: item.name }));
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="mt-4 flex space-x-3 md:mt-0">
                  <img
                    src={comparison}
                    alt="img"
                    className="text-[24px]"
                    onClick={() => {
                      dispatch(toggleCompare({ name: item.name }));
                    }}
                  />
                  <img
                    src={
                      wishlist.some(
                        (wishlistItem) => wishlistItem.name === item.name,
                      )
                        ? likedGreen
                        : favourite
                    }
                    alt="img"
                    className="text-[24px]"
                    onClick={() => {
                      dispatch(toggleWishlist({ name: item.name }));
                    }}
                  />
                  <IoClose
                    className="text-[24px]"
                    onClick={() => {
                      dispatch(removeItem({ name: item.name }));
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="h-[270px] w-[320px] rounded-xl bg-primaryWhite px-5 py-[14px] max-cmbr:mt-5 max-cmbr:w-full">
          <div className="flex items-center justify-between border-b border-accent pb-4">
            <p>Итого</p>
            <p>{total} руб</p>
          </div>
          <div className="flex items-center justify-between pt-[14px]">
            <p>Товары (3 шт)</p>
            <p>{total} руб</p>
          </div>
          <div className="flex items-center justify-between pt-2">
            <p>Скидка</p>
            <p>0 руб.</p>
          </div>
          <div>
            <Link
              to="/complete"
              className="mt-4 flex w-full text-xl text-blue-500"
            >
              <button className="buttonG w-full">Оформить заказ</button>
            </Link>
            <Link
              to="/complete"
              className="mt-[10px] flex w-full text-xl text-blue-500"
            >
              <button className="buttonW w-full">Задать вопрос</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

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
import comparison from "../../../public/icons/comparison.svg";
import { IoClose } from "react-icons/io5";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cart = useSelector((state) => state.basket.cart);
  const total = useSelector((state) => state.basket.total);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [cart, dispatch]);
  
  return (
    <div className="mx-auto flex w-full max-w-[1350px] justify-between px-5">
      {cart.length === 0 ? (
        <div className="my-28 flex w-full items-start justify-between">
          <h1 className="text-[48px] text-primaryBlack">Корзина</h1>
          <div>
            <h2 className="text-[30px]">Не добавлено товаров к Корзина</h2>
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
        <ul className="flex w-full max-w-[980px] flex-col gap-3">
          {cart.map((item) => (
            <li
              key={item.name}
              className="relative flex flex-row items-start gap-5 overflow-hidden h-[270px] rounded-xl border border-accent"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-[270px] w-[320px] object-cover"
              />
              <div className="flex gap-5 p-5">
                <div className="w-[277px] pl-1">
                  <p className="text-[18px] text-primaryBlack">{item.name}</p>
                  <p className="text-[12px] text-primaryBlack">
                    {item.seriesNumber}
                  </p>
                </div>
                <div className="flex w-[150px] flex-col items-center pl-9">
                  <p>{item.price * item.amount} rub</p>
                  <div className="flex flex-row items-center gap-4 rounded-xl border border-accent px-5 py-2 font-medium text-gray-600">
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
                <div className="absolute right-4 top-4 flex items-center justify-center gap-3">
                  <img src={favourite} alt="" className="w-[20px]" />
                  <img src={comparison} alt="" className="w-[20px]" />
                  <IoClose
                    className="text-[20px]"
                    onClick={() => {
                      dispatch(removeItem({ name: item.name }));
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {cart.length > 0 && (
        <div className="w-full max-w-[320px] rounded-xl h-[270px] bg-primaryWhite px-5 py-[14px]">
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
            <Link to="/complete" className="mt-4 flex w-full text-xl text-blue-500">
              <button className="buttonG w-full">Оформить заказ</button>
            </Link>
            <Link to="/complete" className=" mt-[10px] flex w-full text-xl text-blue-500">
              <button className="buttonW w-full">Задать вопрос</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

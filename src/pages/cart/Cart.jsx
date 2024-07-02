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
    <div className="mx-auto w-full max-w-[1350px] px-5">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="flex w-[78%] flex-col gap-3">
          {cart.map((item) => (
            <li
              key={item.name}
              className="relative flex flex-row items-start gap-5 overflow-hidden rounded-xl border border-accent"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-[237px] w-[320px] object-cover"
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
      <p>{total}</p>

      {cart.length > 0 && (
        <Link to="/complete" className="mt-4 text-xl text-blue-500">
          Proceed to Complete
        </Link>
      )}
    </div>
  );
};

export default Cart;

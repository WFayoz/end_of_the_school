import React, { useState } from "react";
import data from "../../services/data";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import favourite from "../../../public/icons/favourite.svg";
import comparison from "../../../public/icons/comparison.svg";
import { addCart } from "../../redux/basketSlice";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import catalogTypes from "../../services/catalogTypes";

const DiscountCards = () => {
  const dispatch = useDispatch();
  const filteredData = data.filter((item) => item.category === "Акции");
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col items-center justify-center gap-[30px]">
      <div className="h-min w-full rounded-xl border border-accent p-4 md:hidden">
        <p
          onClick={toggleDropdown}
          className="flex cursor-pointer items-center justify-between"
        >
          Направления
          {isOpen ? (
            <FaAngleDown className="text-[14px] text-secondaryGray" />
          ) : (
            <FaAngleRight className="text-[14px] text-secondaryGray" />
          )}
        </p>
        {isOpen && (
          <>
            <div className="my-5 w-full border border-secondaryGray"></div>
            <ul className="flex w-full flex-col gap-2">
              {catalogTypes.map((item, index) => (
                <li
                  key={index}
                  className="flex w-full items-center justify-between text-[14px] text-primaryBlack"
                >
                  <p>{item}</p>
                  <FaAngleRight className="text-[14px] text-secondaryGray" />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="grid w-full grid-cols-3 gap-3 max-lg:grid-cols-2 max-md:gap-6 max-sm:grid-cols-1">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center overflow-hidden rounded-xl border border-accent"
          >
            <div className="h-[50px] w-full bg-white">
              <div className="flex justify-between p-4">
                <div className="rounded-[50px] bg-[#FFE095] px-4 py-1">
                  {item.category}
                </div>
                <div className="flex gap-2">
                  <button>
                    <img src={comparison} alt="" />
                  </button>
                  <button>
                    <img src={favourite} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <Link to={`/review/${item.id}`} className="product-card">
              <img
                src={item.img}
                alt={item.name}
                className="h-[197px] w-full bg-white object-contain"
              />
              <div className="w-[320px] p-5">
                <p className="h-[40px] text-primaryBlack">{item.name}</p>
                <p className="pt-1 text-[14px] text-secondaryGray">
                  Артикул: {item.seriesNumber}
                </p>
                <p className="pt-3 text-[18px] font-semibold text-primaryBlack">
                  {item.price.toFixed(2)} руб.
                </p>
              </div>
            </Link>
            <button
              className="buttonW mb-4 w-[90%]"
              onClick={() => dispatch(addCart({ name: item.name }))}
            >
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountCards;

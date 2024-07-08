import React from "react";
import data from "../../services/data";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import favourite from "../../../public/icons/favourite.svg";
import comparison from "../../../public/icons/comparison.svg";
import { addCart } from "../../redux/basketSlice";

const DiscountCards = () => {
  const dispatch = useDispatch();
  const filteredData = data.filter((item) => item.category === "Акции");
  return (
    <div className="grid grid-cols-3 gap-3">
      {filteredData.map((item) => (
        <div
          key={item.id}
          className="flex w-[320px] flex-col items-center overflow-hidden rounded-xl border border-accent"
        >
          <div className="h-[50px] w-[320px] bg-white">
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
              className="h-[197px] w-[320px] bg-white object-contain"
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
  );
};

export default DiscountCards;

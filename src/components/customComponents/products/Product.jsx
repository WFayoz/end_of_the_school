import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/basketSlice";
import { Link } from "react-router-dom";
import favourite from "../../../../public/icons/favourite.svg";
import comparison from "../../../../public/icons/comparison.svg";

const Product = ({ id, name, img, price, seriesNumber, category }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center">
      <div className="flex w-[320px] flex-col items-center overflow-hidden rounded-xl border border-accent">
        <div className="h-[50px] w-[320px] bg-white">
          <div className="flex justify-between p-4">
            <div className="rounded-[50px] bg-secondaryGreen3 px-4 py-1">
              {category}
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
        <Link to={`/review/${id}`} className="product-card">
          <img
            src={img}
            alt={name}
            className="h-[197px] w-[320px] bg-white object-contain"
          />
          <div className="w-[320px] p-5">
            <p className="h-[30px] text-primaryBlack">{name}</p>
            <p className="text-[14px] text-secondaryGray">
              Артикул: {seriesNumber}
            </p>
            <p className="pt-3 text-[18px] font-semibold text-primaryBlack">
              {price.toFixed(2)} руб.
            </p>
          </div>
        </Link>
        <button
          className="buttonW mb-4 w-[90%]"
          onClick={() => dispatch(addCart({ name }))}
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default Product;

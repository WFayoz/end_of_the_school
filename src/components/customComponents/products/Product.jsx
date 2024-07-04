import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../../../redux/basketSlice";
import { Link } from "react-router-dom";

const Product = ({ id, name, img, price, seriesNumber }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center">
      <div className="flex h-[520px] w-[320px] flex-col items-center overflow-hidden rounded-lg border border-accent">
        <Link to={`/review/${id}`} className="product-card">
          <img
            src={img}
            alt={name}
            className="h-[297px] w-[320px] bg-white object-cover"
          />
          <div className="w-[320px] p-5">
            <p className="h-[50px] text-primaryBlack">{name}</p>
            <p className="pt-2 text-[14px] text-secondaryGray">
              Артикул: {seriesNumber}
            </p>
            <p className="pt-5 text-[18px] font-semibold text-primaryBlack">
              {price.toFixed(2)} руб.
            </p>
          </div>
        </Link>
        <button
          className="buttonW  w-[90%]"
          onClick={() => dispatch(addCart({ name }))}
        >
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default Product;

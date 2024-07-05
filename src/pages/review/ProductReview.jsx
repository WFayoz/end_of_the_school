import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import storeData from "../../services/data";
import BasicRating from "../../components/RatingComp";
import { addCart } from "../../redux/basketSlice";

const ProductReview = () => {
  const { productId } = useParams();
  const product = storeData.find((item) => item.id === parseInt(productId));
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addCart({ id: product.id, name: product.name, price: product.price }),
    );
  };

  return (
    <div className="mx-auto flex max-w-[1350px] gap-16 px-5">
      <div className="flex h-[509px] w-[760px] items-center justify-center">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="h-[509px] p-6">
        <h1 className="text-[30px] text-primaryBlack">{product.name}</h1>
        <div className="py-3">
          <BasicRating />
        </div>
        <div className="flex flex-col gap-1 text-secondaryGray">
          <p>Категория: {product.category}</p>
          <p>Производитель: lorem</p>
          <p>Артикул: {product.seriesNumber}</p>
        </div>
        <p className="pt-4 text-[24px]">{product.price} руб.</p>
        <div className="mt-5 flex gap-3">
          <button className="buttonW">Задать вопрос</button>
          <button className="buttonG" onClick={handleAddToCart}>
            Добавить в корзину
          </button>
        </div>
        <div className="my-5 w-full border border-accent"></div>
        <div>
          <h3 className="text-[24px]">О товаре</h3>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;

import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import storeData from "../../services/data";
import favourite from "../../../public/icons/favourite.svg";
import likedGreen from "../../../public/icons/likedGreen.svg";
import comparison from "../../../public/icons/comparison.svg";
import BasicRating from "../../components/RatingComp";
import {
  addCart,
  decreaseAmount,
  increaseAmount,
} from "../../redux/basketSlice";
import { toggleCompare } from "../../redux/compareSlice";
import { toggleWishlist } from "../../redux/wishlistSlice";

const ProductReview = () => {
  const { productId } = useParams();
  const product = storeData.find((item) => item.id === parseInt(productId));
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.basket.cart);
  const cartItem = cart.find((item) => item.name === product.name);
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const handleAddToCart = () => {
    dispatch(
      addCart({ id: product.id, name: product.name, price: product.price }),
    );
  };

  const isLiked = wishlist.some((item) => item.name === product.name);

  return (
    <div className="mx-auto flex max-w-[1350px] gap-16 px-5 max-md:flex-col">
      <div className="relative flex h-[509px] w-[760px] items-center justify-center max-md:h-full max-md:w-full">
        <img
          src={product.img}
          alt={product.name}
          className="h-full w-full bg-primaryWhite object-contain"
        />
        <div className="absolute top-2 flex w-full justify-between px-2">
          <div className="rounded-[50px] bg-secondaryGreen3 px-[10px] py-[4px] text-secondaryGreen2">
            {product.category}
          </div>
          <div>
            <div className="flex gap-2">
              <button onClick={() => dispatch(toggleCompare({ name: product.name }))}>
                <img src={comparison} alt="" />
              </button>
              <button onClick={() => dispatch(toggleWishlist({ name: product.name }))}>
                <img src={isLiked ? likedGreen : favourite} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[509px] p-6">
        <h1 className="text-xl text-primaryBlack md:text-3xl">
          {product.name}
        </h1>
        <div className="py-3">
          <BasicRating />
        </div>
        <div className="flex flex-col gap-1 text-secondaryGray">
          <p>Категория: {product.category}</p>
          <p>Производитель: lorem</p>
          <p>Артикул: {product.seriesNumber}</p>
        </div>
        <p className="pt-4 text-lg max-sm:hidden md:text-2xl">
          {product.price} руб.
        </p>
        <div className="mt-5 flex gap-3 max-lg:flex-col max-sm:hidden">
          {cartItem ? (
            <div className="flex w-min flex-row items-center gap-4 rounded-xl border border-accent px-5 py-2 font-medium text-gray-600">
              <button
                onClick={() => {
                  dispatch(decreaseAmount({ name: product.name }));
                }}
              >
                -
              </button>
              <p>{cartItem ? cartItem.amount : 0}</p>
              <button
                onClick={() => {
                  dispatch(increaseAmount({ name: product.name }));
                }}
              >
                +
              </button>
            </div>
          ) : null}
          <button className="buttonW max-sm:hidden">Задать вопрос</button>
          <button className="buttonG max-sm:hidden" onClick={handleAddToCart}>
            Добавить в корзину
          </button>
        </div>
        <div className="my-5 w-full border border-accent"></div>
        <div className="max-sm:rounded-xl max-sm:border max-sm:border-accent max-sm:bg-white max-sm:p-5">
          <h3 className="text-[24px]">О товаре</h3>
          <p>{product.description}</p>
        </div>
      </div>

      {/* footerRevie */}

      <div className="fixed bottom-14 left-0 right-0 z-50 flex w-full items-start justify-around bg-white py-2 sm:hidden">
        <div className="flex flex-col gap-3">
          <div>
            <p className="pt-4 text-lg md:text-2xl">{product.price} руб.</p>
          </div>
          {cartItem ? (
            <div className="flex w-min flex-row items-center gap-4 rounded-xl border border-accent px-5 py-2 font-medium text-gray-600">
              <button
                onClick={() => {
                  dispatch(decreaseAmount({ name: product.name }));
                }}
              >
                -
              </button>
              <p>{cartItem ? cartItem.amount : 0}</p>
              <button
                onClick={() => {
                  dispatch(increaseAmount({ name: product.name }));
                }}
              >
                +
              </button>
            </div>
          ) : null}
        </div>
        <div className="flex flex-col gap-3">
          <button className="buttonG" onClick={handleAddToCart}>
            Добавить в корзину
          </button>
          <button className="buttonW">Задать вопрос</button>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
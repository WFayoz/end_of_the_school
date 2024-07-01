import React from "react";
import BasicRating from "../../components/RatingComp";

const ProductReview = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1350px] gap-16 px-5">
      <div className="flex w-[760px] items-center justify-center">
        <img src="" alt="img" className="h-full w-full border object-cover" />
      </div>
      <div className="p-6">
        <h1 className="text-[30px] text-primaryBlack">
          Анализатор мочи MIND UA-66
        </h1>
        <div className="py-3">
          <BasicRating />
        </div>
        <div className="flex flex-col gap-1 text-secondaryGray">
          <p>Категория:</p>
          <p>Производитель:</p>
          <p>Артикул:</p>
        </div>
        <p className="pt-4 text-[24px]">price</p>
        <div className="mt-5 flex gap-3">
          <div></div>
          <button className="buttonW">Задать вопрос</button>
          <button className="buttonG">Добавить в корзину</button>
        </div>
        <div className="my-5 w-full border border-accent"></div>
        <div>
          <h3 className="text-[24px]">О товаре</h3>
          <p>smth</p>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;

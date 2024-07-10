import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import favourite from "../../../public/icons/favourite.svg";
import comparison from "../../../public/icons/comparison.svg";
import { Link } from "react-router-dom";
import { addCart } from "../../redux/basketSlice";
import { toggleWishlist } from "../../redux/wishlistSlice";
import { toggleCompare } from "../../redux/compareSlice";

const CompareCards = () => {
  const { compare } = useSelector((state) => state.compare);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <div>
        {compare.length === 0 ? (
          <div className="flex w-full items-start justify-between py-24">
            <div>
              <h2 className="text-[30px]">
                “Не добавлено товаров в сравнению”
              </h2>
              <p className="max-w-[384px] py-6 text-secondaryGray">
                Вы можете перейти на главную страницу или воспользоваться
                каталогом товаров
              </p>
              <div className="flex gap-3">
                <Link className="buttonW" to={"/"}>На главную</Link>
                <Link to={"/catalog"} className="buttonG" >В каталог</Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="my-36 flex flex-col items-center max-lg:mb-36 max-lg:mt-10">
            <div className="grid grid-cols-3 gap-3 max-xl:grid-cols-2 max-sm:grid-cols-1">
              {compare.map((item) => (
                <div
                  key={item.id}
                  className="flex w-[320px] flex-col items-center overflow-hidden rounded-xl border border-accent"
                >
                  <div className="h-[50px] w-[320px] bg-white">
                    <div className="flex justify-between p-4">
                      <div className="rounded-[50px] bg-secondaryGreen3 px-4 py-1">
                        {item.category}
                      </div>
                      <div className="flex gap-2">
                        <button>
                          <img
                            src={comparison}
                            alt=""
                            onClick={() =>
                              dispatch(toggleCompare({ name: item.name }))
                            }
                          />
                        </button>
                        <button
                          onClick={() =>
                            dispatch(toggleWishlist({ name: item.name }))
                          }
                        >
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
                      <p className="h-[30px] text-primaryBlack">{item.name}</p>
                      <p className="text-[14px] text-secondaryGray">
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
            <Link to={"/catalog"} className="buttonG mt-5 h-min">
              В каталог
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompareCards;

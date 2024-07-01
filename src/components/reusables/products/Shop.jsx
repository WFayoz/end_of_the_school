import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Product from "./Product";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="custom-arrow next-arrow border border-accent max-md:hidden"
      onClick={onClick}
    >
      <GrLinkNext />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="custom-arrow prev-arrow border border-accent max-md:hidden"
      onClick={onClick}
    >
      <GrLinkPrevious />
    </div>
  );
};

const Shop = () => {
  const { products, total } = useSelector((store) => store.basket);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 588,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 888,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="relative mx-auto mt-32 flex max-w-[1350px] gap-[40px] overflow-hidden px-5 max-lg:flex-col">
      <div className="flex w-56 items-start justify-between max-md:mt-5">
        <p className="w-56 text-[28px] text-primaryBlack">Каталог товаров</p>
      </div>
      <div className="mb-32 flex w-full flex-col items-center justify-center">
        <Slider
          {...settings}
          className="w-full max-md:ml-[7%] max-md:flex max-md:items-center max-md:justify-center"
        >
          {products.map((item) => (
            <Product
              key={item.name}
              name={item.name}
              id={item.id}
              img={item.img}
              price={item.price}
              amount={item.amount}
              seriesNumber={item.seriesNumber}
              total={item.total}
            />
          ))}
        </Slider>
        <div className="-mt-9 ml-[300px] flex gap-5 max-xl:ml-[150px] max-lg:ml-[350px] max-md:ml-0 max-md:mt-10 max-md:flex max-md:items-center max-md:justify-center max-sm:flex-col">
          <button className="buttonW">Бесплатная консультация</button>
          <Link to={"/catalog"} className="z-10" >
            <button className="buttonG">Все товары</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shop;

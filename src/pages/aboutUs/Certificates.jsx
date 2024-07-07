import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import img from "../../../public/imgs/licence.png";

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

const Certificates = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="relative mx-auto mt-32 flex max-w-[1350px] items-start gap-[135px] overflow-hidden px-5 max-lg:flex-col max-lg:gap-12">
      <div className="flex w-full items-center justify-between max-md:mt-5">
        <p className="w-[240px] text-[32px] text-primaryBlack max-lg:w-full max-sm:text-[20px]">
          Сертификаты на продукцию
        </p>
        <button className="buttonG md:hidden">Сертификаты</button>
      </div>
      <div className="mb-32 flex w-full flex-col items-center justify-center">
        <Slider {...settings} className="w-full">
          {[img, img, img, img, img, img].map((imgSrc, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="mx-2 flex items-start justify-center overflow-hidden rounded-lg border border-accent bg-primaryWhite">
                <img src={imgSrc} alt="" className="bg-white object-cover" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Certificates;

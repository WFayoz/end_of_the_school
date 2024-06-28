import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkPrevious } from "react-icons/gr";

import { GrLinkNext } from "react-icons/gr";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="custom-arrow next-arrow border border-accent max-lg:hidden"
      onClick={onClick}
    >
      <GrLinkNext />
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="custom-arrow prev-arrow border border-accent max-lg:hidden"
      onClick={onClick}
    >
      <GrLinkPrevious />
    </div>
  );
};
const EquipmentSections = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="relative mx-auto mt-32 flex max-w-[1350px] flex-col gap-[35px] overflow-hidden">
      <p className="text-[32px] text-primaryBlack">
        Комплексное оснащение кабинетов
      </p>
      <div className="mb-32 flex w-full flex-col items-center justify-center">
        <Slider {...settings} className="w-full pl-10">
          <div className="flex items-center justify-center">
            <div className="flex h-[570px] w-[400px] flex-col items-center overflow-hidden rounded-lg border border-accent max-xl:w-[320px]">
              <img
                src="https://global-mt.ru/local/templates/gmt/img/complex1.png"
                alt=""
                className="h-[510px] w-[400px] max-xl:w-[320px]"
              />
              <div className="flex w-full items-center justify-start p-5">
                <p className="text-black">Экспресс лаборатория</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="tems-center flex h-[570px] w-[400px] flex-col overflow-hidden rounded-lg border border-accent max-xl:w-[320px]">
              <img
                src="https://global-mt.ru/local/templates/gmt/img/complex2.png"
                alt=""
                className="h-[510px] w-[400px] max-xl:w-[320px]"
              />
              <div className="flex w-full items-center justify-start p-5">
                <p className="text-black">Экспресс лаборатория</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[570px] w-[400px] flex-col items-center overflow-hidden rounded-lg border border-accent max-xl:w-[320px]">
              <img
                src="https://global-mt.ru/local/templates/gmt/img/complex3.png"
                alt=""
                className="h-[510px] w-[400px] max-xl:w-[320px]"
              />
              <div className="flex w-full items-center justify-start p-5">
                <p className="text-black">Экспресс лаборатория</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[570px] w-[400px] flex-col items-center overflow-hidden rounded-lg border border-accent max-xl:w-[320px]">
              <img
                src="https://global-mt.ru/local/templates/gmt/img/complex1.png"
                alt=""
                className="h-[510px] w-[400px] max-xl:w-[320px]"
              />
              <div className="flex w-full items-center justify-start p-5">
                <p className="text-black">Экспресс лаборатория</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[570px] w-[400px] flex-col items-center overflow-hidden rounded-lg border border-accent max-xl:w-[320px]">
              <img
                src="https://global-mt.ru/local/templates/gmt/img/complex2.png"
                alt=""
                className="h-[510px] w-[400px] max-xl:w-[320px]"
              />
              <div className="flex w-full items-center justify-start p-5">
                <p className="text-black">Экспресс лаборатория</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[570px] w-[400px] flex-col items-center overflow-hidden rounded-lg border border-accent max-xl:w-[320px]">
              <img
                src="https://global-mt.ru/local/templates/gmt/img/complex2.png"
                alt=""
                className="h-[510px] w-[400px] max-xl:w-[320px]"
              />
              <div className="flex w-full items-center justify-start p-5">
                <p className="text-black">Экспресс лаборатория</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[570px] w-[400px] flex-col items-center overflow-hidden rounded-lg border border-accent max-xl:w-[320px]">
              <img
                src="https://global-mt.ru/local/templates/gmt/img/complex3.png"
                alt=""
                className="h-[510px] w-[400px] max-xl:w-[320px]"
              />
              <div className="flex w-full items-center justify-start p-5">
                <p className="text-black">Экспресс лаборатория</p>
              </div>
            </div>
          </div>
        </Slider>
        <div className="-mt-9 flex items-center gap-5 pl-[800px] max-xl:pl-[700px] max-lg:mx-auto max-lg:mt-6 max-lg:flex-col max-lg:p-0">
          <button className="buttonW">Бесплатная консультация</button>
          <button className="buttonG">Рассчитать стоимость</button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentSections;

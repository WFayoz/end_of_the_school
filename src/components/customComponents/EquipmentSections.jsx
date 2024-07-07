import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const NextArrow = ({ onClick }) => (
  <div
    className="custom-arrow next-arrow border border-accent max-lg:hidden"
    onClick={onClick}
  >
    <GrLinkNext />
  </div>
);
const PrevArrow = ({ onClick }) => (
  <div
    className="custom-arrow prev-arrow border border-accent max-lg:hidden"
    onClick={onClick}
  >
    <GrLinkPrevious />
  </div>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: { slidesToShow: 3, slidesToScroll: 2, initialSlide: 2 },
    },
    {
      breakpoint: 980,
      settings: { slidesToShow: 2, slidesToScroll: 2, initialSlide: 2 },
    },
    {
      breakpoint: 500,
      settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 2 },
    },
  ],
};

const EquipmentSections = () => (
  <div className="relative mx-auto my-36 w-full max-w-[1350px] px-5">
    <p className="text-[30px] text-primaryBlack">
      Комплексное оснащение кабинетов
    </p>
    <div className="mt-10">
      <Slider {...settings}>
        {["complex1.png", "complex2.png", "complex3.png"].map((img, index) => (
          <div key={index} className="">
            <div className="mx-2 overflow-hidden rounded-xl border border-accent">
              <img
                src={`https://global-mt.ru/local/templates/gmt/img/${img}`}
                alt=""
                className="w-full"
              />
              <p className="bg-primaryWhite p-5">Экспресс лаборатория</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-0 right-5 flex items-center gap-5 max-lg:-bottom-36 max-lg:left-0 max-lg:right-0 max-lg:flex-col max-lg:p-0">
        <button className="buttonW">Бесплатная консультация</button>
        <button className="buttonG">Рассчитать стоимость</button>
      </div>
    </div>
  </div>
);

export default EquipmentSections;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkPrevious } from "react-icons/gr";

import { GrLinkNext } from "react-icons/gr";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="custom-arrow next-arrow border border-accent"
      onClick={onClick}
    >
      <GrLinkNext />
    </div>
  );
};
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="custom-arrow prev-arrow border border-accent"
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
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative mx-auto mt-32 flex max-w-[1350px] flex-col gap-[35px] overflow-hidden pl-5">
      <p className="text-[32px] text-primaryBlack">
        Комплексное оснащение кабинетов
      </p>
      <div className="mb-32 flex w-full flex-col items-center justify-center">
        <Slider {...settings} className="w-full">
          <div className="flex items-center justify-center">
            <div className="flex h-[465px] w-[320px] flex-col items-center overflow-hidden rounded-lg border border-accent">
              <img
                src="https://global-mt.ru/local/templates/gmt/img/complex1.png"
                alt=""
                className="h-[320px] w-[320px]"
              />
              <div className="p-5">
                <p className="text-[12px] text-secondaryGray">07.11.2022</p>
                <p className="pb-3 pt-1 text-[18px] font-semibold text-black">
                  Название новости
                </p>
                <p className="text-secondaryGray">
                  Допускает внедрение поэтапного и развития общества.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="tems-center flex h-[465px] w-[320px] flex-col overflow-hidden rounded-lg border border-accent">
              <img
                src="https://global-mt.ru/local/templates/gmt/img/complex2.png"
                alt=""
                className="h-[320px] w-[320px]"
              />
              <div className="p-5">
                <p className="text-[12px] text-secondaryGray">07.11.2022</p>
                <p className="pb-3 pt-1 text-[18px] font-semibold text-black">
                  Название новости
                </p>
                <p className="text-secondaryGray">
                  Допускает внедрение поэтапного и развития общества.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[465px] w-[320px] flex-col items-center overflow-hidden rounded-lg border border-accent">
              <img
                src="https://global-mt.ru/local/templates/gmt/img/complex3.png"
                alt=""
                className="h-[320px] w-[320px]"
              />
              <div className="p-5">
                <p className="text-[12px] text-secondaryGray">07.11.2022</p>
                <p className="pb-3 pt-1 text-[18px] font-semibold text-black">
                  Название новости
                </p>
                <p className="text-secondaryGray">
                  Допускает внедрение поэтапного и развития общества.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[465px] w-[320px] flex-col items-center overflow-hidden rounded-lg border border-accent">
              <img
                src="https://global-mt.ru/local/templates/gmt/img/complex1.png"
                alt=""
                className="h-[320px] w-[320px]"
              />
              <div className="p-5">
                <p className="text-[12px] text-secondaryGray">07.11.2022</p>
                <p className="pb-3 pt-1 text-[18px] font-semibold text-black">
                  Название новости
                </p>
                <p className="text-secondaryGray">
                  Допускает внедрение поэтапного и развития общества.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[465px] w-[320px] flex-col items-center overflow-hidden rounded-lg border border-accent">
              <img
                src="https://global-mt.ru/local/templates/gmt/img/complex2.png"
                alt=""
                className="h-[320px] w-[320px]"
              />
              <div className="p-5">
                <p className="text-[12px] text-secondaryGray">07.11.2022</p>
                <p className="pb-3 pt-1 text-[18px] font-semibold text-black">
                  Название новости
                </p>
                <p className="text-secondaryGray">
                  Допускает внедрение поэтапного и развития общества.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[465px] w-[320px] flex-col items-center overflow-hidden rounded-lg border border-accent">
              <img
                src="https://global-mt.ru/local/templates/gmt/img/complex2.png"
                alt=""
                className="h-[320px] w-[320px]"
              />
              <div className="p-5">
                <p className="text-[12px] text-secondaryGray">07.11.2022</p>
                <p className="pb-3 pt-1 text-[18px] font-semibold text-black">
                  Название новости
                </p>
                <p className="text-secondaryGray">
                  Допускает внедрение поэтапного и развития общества.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[465px] w-[320px] flex-col items-center overflow-hidden rounded-lg border border-accent">
              <img
                src="https://global-mt.ru/local/templates/gmt/img/complex3.png"
                alt=""
                className="h-[320px] w-[320px]"
              />
              <div className="p-5">
                <p className="text-[12px] text-secondaryGray">07.11.2022</p>
                <p className="pb-3 pt-1 text-[18px] font-semibold text-black">
                  Название новости
                </p>
                <p className="text-secondaryGray">
                  Допускает внедрение поэтапного и развития общества.
                </p>
              </div>
            </div>
          </div>
        </Slider>
        <button className="-mt-8 ml-[580px]">hellp</button>
      </div>
    </div>
  );
};

export default EquipmentSections;

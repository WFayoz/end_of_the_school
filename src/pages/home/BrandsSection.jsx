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

const BrandsSection = () => {
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
    <div className="relative mx-auto mt-32 flex max-w-[1350px] gap-[135px] overflow-hidden pl-5">
      <p className="text-[32px] text-primaryBlack">Бренды</p>
      <div className="mb-32 flex w-full flex-col items-center justify-center">
        <Slider {...settings} className="w-full">
          <div className="flex items-center justify-center">
            <div className="flex h-[280px] w-[320px] flex-col items-start overflow-hidden rounded-lg border border-accent">
              <img
                src="https://global-mt.ru/upload/iblock/99e/nqmjgop6u1sj2eiszy08vnuh8jsqdvcv/kls_martin_group.png"
                alt=""
                className="h-[196px] w-[320px] bg-white object-contain"
              />
              <div className="p-5 text-start">
                <p className="text-primaryBlack">
                  НМИЦ онкологии им. Н.Н. <br /> Блохина
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[280px] w-[320px] flex-col items-start overflow-hidden rounded-lg border border-accent">
              <img
                src="https://global-mt.ru/upload/iblock/2aa/fz4tyn09v91peefu64isycitobwh7p04/erba_group.png"
                alt=""
                className="h-[196px] w-[320px] bg-white object-contain"
              />
              <div className="p-5">
                <p className="text-primaryBlack">
                  НМИЦ онкологии им. Н.Н. <br /> Блохина
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[280px] w-[320px] flex-col items-start overflow-hidden rounded-lg border border-accent">
              <img
                src="https://global-mt.ru/upload/iblock/c5b/un71fm2pu3dd750j29wk8jkq9w1utauy/image017.png"
                alt=""
                className="h-[196px] w-[320px] bg-white object-contain"
              />
              <div className="p-5">
                <p className="text-[16px] text-primaryBlack">
                  НМИЦ онкологии им. Н.Н. <br /> Блохина
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[280px] w-[320px] flex-col items-start overflow-hidden rounded-lg border border-accent">
              <img
                src="https://global-mt.ru/upload/iblock/ad3/k538egnzgcvlp25sv0xufbcce218npg6/atmos.png"
                alt=""
                className="h-[196px] w-[320px] bg-white object-contain"
              />
              <div className="p-5">
                <p className="text-primaryBlack">
                  НМИЦ онкологии им. Н.Н. <br /> Блохина
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[280px] w-[320px] flex-col items-start overflow-hidden rounded-lg border border-accent">
              <img
                src="https://global-mt.ru/upload/iblock/a0b/zt6p9i54fsw42u7lgqwpvdw0bpfj5pap/johnson_johnson.png"
                alt=""
                className="h-[196px] w-[320px] bg-white object-contain"
              />
              <div className="p-5">
                <p className="text-[16px] text-primaryBlack">
                  НМИЦ онкологии им. Н.Н. <br /> Блохина
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[280px] w-[320px] flex-col items-start overflow-hidden rounded-lg border border-accent">
              <img
                src="https://global-mt.ru/upload/iblock/ec0/j1go3t2m3y4hg488aqw6f5ft8qz6ph00/logo_siemens2.jpg"
                alt=""
                className="h-[196px] w-[320px] bg-white object-contain"
              />
              <div className="p-5">
                <p className="text-primaryBlack">
                  НМИЦ онкологии им. Н.Н. <br /> Блохина
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-[280px] w-[320px] flex-col items-start overflow-hidden rounded-lg border border-accent">
              <img
                src="https://global-mt.ru/upload/iblock/d27/gi22l3fjkpzgove7qr9fz0f44sygglep/pentax_medical.png"
                alt=""
                className="h-[196px] w-[320px] bg-white object-contain"
              />
              <div className="p-5">
                <p className="text-[16px] text-primaryBlack">
                  НМИЦ онкологии им. Н.Н. <br /> Блохина
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

export default BrandsSection;

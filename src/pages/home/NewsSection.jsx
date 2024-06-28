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

const NewsSection = () => {
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
      <p className="text-[32px] text-primaryBlack">
        Новости <br /> компании
      </p>
      <div className="mb-32 flex w-full flex-col items-center justify-center">
        <Slider {...settings} className="w-full">
          <div className="flex items-center justify-center">
            <div className="flex h-[465px] w-[320px] flex-col items-center overflow-hidden rounded-lg border border-accent">
              <img
                src="https://global-mt.ru/upload/iblock/82d/g57wjmay75x4ek171rdg2nt32zh3036u/blog1.png"
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
                src="https://global-mt.ru/upload/iblock/e76/5w6d2xwkq8yofkrjju5j490t8q96cg8m/Sochi-stend_1.jpeg"
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
                src="https://global-mt.ru/upload/iblock/93a/uqdf55z14yki50iedbogsw017ncirykn/Kazan-stend.jpeg"
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
                src="https://global-mt.ru/upload/iblock/aa5/vd1abipadaqt3n3lgzzlfv67nwyopaqz/5d1fc423_1cd3_4a26_a7e3_f816082bebfa-_1_.jpeg"
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
                src="https://global-mt.ru/upload/iblock/107/prm7chi8jbly1wev6r2f3vs9pzf2x2kq/blog1.jpg"
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
                src="https://global-mt.ru/upload/iblock/097/c082dol82vbcbv09rn2cgmnpts5ttv10/blog.png"
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
                src="https://global-mt.ru/upload/iblock/dbd/yh1angxt70m6exar62ixv9k59ej6cxvk/blog_3_.png"
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
        <button className="-mt-8 ml-[580px] buttonG">Все новости</button>
      </div>
    </div>
  );
};

export default NewsSection;

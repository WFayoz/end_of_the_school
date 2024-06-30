import React, { useRef } from "react";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function PreviousNextMethods() {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 970,
        settings: {
          dots: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="relative mx-auto w-full max-w-[1350px] px-5">
      <Slider className="w-full overflow-hidden" ref={sliderRef} {...settings}>
        <div className="mx-auto flex w-[1350px] items-center ">
          <div
            key={1}
            className="flex w-full items-center justify-between overflow-hidden rounded-xl bg-accent pl-8 max-md:flex-col max-md:p-0"
          >
            <div className="flex w-[40%] flex-col py-8 max-lg:w-[50%] max-md:w-full max-md:pl-8 max-sm:pl-0">
              <div className=" max-sm:mx-auto max-sm:text-center max-sm:justify-center max-sm:flex-col">
                <h2 className="text-[32px] text-primaryBlack max-md:text-[28px] max-sm:mx-auto max-sm:text-center">
                  Заголовок баннера <br /> в пару строк
                </h2>
                <p className="pt-6 text-secondaryGray max-sm:mx-auto max-sm:text-center">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit, sed do eiusmod tempor
                </p>
              </div>
              <div className="flex items-center gap-5 pt-16 max-sm:flex-col">
                <button className="buttonG">Запросить цену</button>
                <Link to={"/catalog"} className="buttonW">
                  В каталог
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center overflow-hidden rounded-tl-[400px] object-cover max-lg:w-[50%] max-md:w-full max-md:rounded-none">
              <img
                className="flex h-[344px] max-sm:h-[250px]"
                src="https://global-mt.ru/upload/iblock/cca/9uor26v7qfowv4mtzlg83trq09ux4sx0/banner_mgt-_1_.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-[1350px] items-center ">
          <div
            key={2}
            className="flex w-full items-center justify-between overflow-hidden rounded-xl bg-accent pl-8 max-md:flex-col max-md:p-0"
          >
            <div className="flex w-[40%] flex-col py-8 max-lg:w-[50%] max-md:w-full max-md:pl-8 max-sm:pl-0">
              <div className=" max-sm:mx-auto max-sm:text-center max-sm:justify-center max-sm:flex-col">
                <h2 className="text-[32px] text-primaryBlack max-md:text-[28px] max-sm:mx-auto max-sm:text-center">
                  Заголовок баннера <br /> в пару строк
                </h2>
                <p className="pt-6 text-secondaryGray max-sm:mx-auto max-sm:text-center">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit, sed do eiusmod tempor
                </p>
              </div>
              <div className="flex items-center gap-5 pt-16 max-sm:flex-col">
                <button className="buttonG">Запросить цену</button>
                <Link to={"/catalog"} className="buttonW">
                  В каталог
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center overflow-hidden rounded-tl-[400px] object-cover max-lg:w-[50%] max-md:w-full max-md:rounded-none">
              <img
                className="flex h-[344px] max-sm:h-[250px]"
                src="https://global-mt.ru/upload/iblock/cca/9uor26v7qfowv4mtzlg83trq09ux4sx0/banner_mgt-_1_.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-[1350px] items-center ">
          <div
            key={3}
            className="flex w-full items-center justify-between overflow-hidden rounded-xl bg-accent pl-8 max-md:flex-col max-md:p-0"
          >
            <div className="flex w-[40%] flex-col py-8 max-lg:w-[50%] max-md:w-full max-md:pl-8 max-sm:pl-0">
              <div className=" max-sm:mx-auto max-sm:text-center max-sm:justify-center max-sm:flex-col">
                <h2 className="text-[32px] text-primaryBlack max-md:text-[28px] max-sm:mx-auto max-sm:text-center">
                  Заголовок баннера <br /> в пару строк
                </h2>
                <p className="pt-6 text-secondaryGray max-sm:mx-auto max-sm:text-center">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit, sed do eiusmod tempor
                </p>
              </div>
              <div className="flex items-center gap-5 pt-16 max-sm:flex-col">
                <button className="buttonG">Запросить цену</button>
                <Link to={"/catalog"} className="buttonW">
                  В каталог
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center overflow-hidden rounded-tl-[400px] object-cover max-lg:w-[50%] max-md:w-full max-md:rounded-none">
              <img
                className="flex h-[344px] max-sm:h-[250px]"
                src="https://global-mt.ru/upload/iblock/cca/9uor26v7qfowv4mtzlg83trq09ux4sx0/banner_mgt-_1_.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-[1350px] items-center ">
          <div
            key={4}
            className="flex w-full items-center justify-between overflow-hidden rounded-xl bg-accent pl-8 max-md:flex-col max-md:p-0"
          >
            <div className="flex w-[40%] flex-col py-8 max-lg:w-[50%] max-md:w-full max-md:pl-8 max-sm:pl-0">
              <div className=" max-sm:mx-auto max-sm:text-center max-sm:justify-center max-sm:flex-col">
                <h2 className="text-[32px] text-primaryBlack max-md:text-[28px] max-sm:mx-auto max-sm:text-center">
                  Заголовок баннера <br /> в пару строк
                </h2>
                <p className="pt-6 text-secondaryGray max-sm:mx-auto max-sm:text-center">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit, sed do eiusmod tempor
                </p>
              </div>
              <div className="flex items-center gap-5 pt-16 max-sm:flex-col">
                <button className="buttonG">Запросить цену</button>
                <Link to={"/catalog"} className="buttonW">
                  В каталог
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center overflow-hidden rounded-tl-[400px] object-cover max-lg:w-[50%] max-md:w-full max-md:rounded-none">
              <img
                className="flex h-[344px] max-sm:h-[250px]"
                src="https://global-mt.ru/upload/iblock/cca/9uor26v7qfowv4mtzlg83trq09ux4sx0/banner_mgt-_1_.jpg"
                alt=""
              />
            </div>
          </div>
        </div>


      </Slider>
      <div className="absolute bottom-8 right-16 flex gap-5 max-lg:bottom-24 max-md:hidden">
        <button
          className="button rounded-full border border-accent bg-white p-3"
          onClick={previous}
        >
          <GrLinkPrevious />
        </button>
        <button
          className="button rounded-full border border-accent bg-white p-3"
          onClick={next}
        >
          <GrLinkNext />
        </button>
      </div>
    </div>
  );
}

export default PreviousNextMethods;

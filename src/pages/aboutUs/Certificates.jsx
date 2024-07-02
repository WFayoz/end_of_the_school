import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

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
    <div className="relative mx-auto items-start mt-32 flex max-w-[1350px] gap-[135px] overflow-hidden px-5 max-lg:flex-col">
      <div className="flex w-full items-center justify-between max-md:mt-5">
        <p className="text-[32px] text-primaryBlack w-[240px]">Сертификаты на <br /> продукцию</p>
        <button className="buttonG md:hidden">Сертификаты</button>
      </div>
      <div className="mb-32 flex w-full flex-col items-center justify-center">
        <Slider {...settings} className="w-full">
          {[
            "https://global-mt.ru/upload/iblock/99e/nqmjgop6u1sj2eiszy08vnuh8jsqdvcv/kls_martin_group.png",
            "https://global-mt.ru/upload/iblock/2aa/fz4tyn09v91peefu64isycitobwh7p04/erba_group.png",
            "https://global-mt.ru/upload/iblock/c5b/un71fm2pu3dd750j29wk8jkq9w1utauy/image017.png",
            "https://global-mt.ru/upload/iblock/ad3/k538egnzgcvlp25sv0xufbcce218npg6/atmos.png",
            "https://global-mt.ru/upload/iblock/a0b/zt6p9i54fsw42u7lgqwpvdw0bpfj5pap/johnson_johnson.png",
            "https://global-mt.ru/upload/iblock/ec0/j1go3t2m3y4hg488aqw6f5ft8qz6ph00/logo_siemens2.jpg",
            "https://global-mt.ru/upload/iblock/d27/gi22l3fjkpzgove7qr9fz0f44sygglep/pentax_medical.png",
          ].map((imgSrc, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="flex h-[280px] w-[210px]  bg-primaryWhite  justify-center items-start overflow-hidden rounded-lg border border-accent max-lg:h-[240px] max-lg:w-[280px] max-md:h-[280px] max-md:w-[320px]">
                <img
                  src={imgSrc}
                  alt=""
                  className="h-[248px] w-[178px] bg-white object-contain max-lg:h-[156px] max-lg:w-[280px] max-md:h-[196px] max-md:w-[320px]"
                />
              </div>
            </div>
          ))}
        </Slider>
        
      </div>
    </div>
  );
};

export default Certificates;

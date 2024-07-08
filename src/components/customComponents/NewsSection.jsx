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

const NewsCard = ({ imgSrc, date, title, description }) => (
  <div className="mx-2 overflow-hidden rounded-xl border border-accent">
    <img src={imgSrc} alt={title} className="h-[320px] w-full object-fill" />
    <div className="bg-transparent p-5">
      <p className="text-[12px] text-secondaryGray max-lg:text-[10px]">
        {date}
      </p>
      <p className="pb-3 pt-1 text-[18px] font-semibold text-black max-lg:text-[16px]">
        {title}
      </p>
      <p className="text-secondaryGray max-lg:text-[12px]">{description}</p>
    </div>
  </div>
);

const NewsSection = () => {
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
        breakpoint: 660,
        settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 2 },
      },
    ],
  };

  const newsData = [
    {
      imgSrc:
        "https://global-mt.ru/upload/iblock/82d/g57wjmay75x4ek171rdg2nt32zh3036u/blog1.png",
      date: "07.11.2022",
      title: "Название новости",
      description: "Допускает внедрение поэтапного и развития общества.",
    },
    {
      imgSrc:
        "https://global-mt.ru/upload/iblock/e76/5w6d2xwkq8yofkrjju5j490t8q96cg8m/Sochi-stend_1.jpeg",
      date: "07.11.2022",
      title: "Название новости",
      description: "Допускает внедрение поэтапного и развития общества.",
    },
    {
      imgSrc:
        "https://global-mt.ru/upload/iblock/93a/uqdf55z14yki50iedbogsw017ncirykn/Kazan-stend.jpeg",
      date: "07.11.2022",
      title: "Название новости",
      description: "Допускает внедрение поэтапного и развития общества.",
    },
    {
      imgSrc:
        "https://global-mt.ru/upload/iblock/aa5/vd1abipadaqt3n3lgzzlfv67nwyopaqz/5d1fc423_1cd3_4a26_a7e3_f816082bebfa-_1_.jpeg",
      date: "07.11.2022",
      title: "Название новости",
      description: "Допускает внедрение поэтапного и развития общества.",
    },
    {
      imgSrc:
        "https://global-mt.ru/upload/iblock/107/prm7chi8jbly1wev6r2f3vs9pzf2x2kq/blog1.jpg",
      date: "07.11.2022",
      title: "Название новости",
      description: "Допускает внедрение поэтапного и развития общества.",
    },
    {
      imgSrc:
        "https://global-mt.ru/upload/iblock/097/c082dol82vbcbv09rn2cgmnpts5ttv10/blog.png",
      date: "07.11.2022",
      title: "Название новости",
      description: "Допускает внедрение поэтапного и развития общества.",
    },
    {
      imgSrc:
        "https://global-mt.ru/upload/iblock/dbd/yh1angxt70m6exar62ixv9k59ej6cxvk/blog_3_.png",
      date: "07.11.2022",
      title: "Название новости",
      description: "Допускает внедрение поэтапного и развития общества.",
    },
  ];

  return (
    <div className="relative mx-auto my-36 w-full max-w-[1350px] px-5">
      <div className="flex w-full items-center justify-between">
        <p className="text-[32px] text-primaryBlack max-sm:text-[20px]">
          Новости компании
        </p>
        <button className="buttonG md:hidden">Все новости</button>
      </div>
      <div className="mt-10">
        <Slider {...settings}>
          {newsData.map((news, index) => (
            <NewsCard
              key={index}
              imgSrc={news.imgSrc}
              date={news.date}
              title={news.title}
              description={news.description}
            />
          ))}
        </Slider>
        <div className="absolute bottom-0 right-5 flex items-center gap-5 max-lg:-bottom-16 max-md:hidden">
          <button className="buttonG">Все новости</button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;

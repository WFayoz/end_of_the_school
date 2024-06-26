import React from "react";

const CatagorySection = () => {
  return (
    <div className="max-w-[1350px] px-5 mx-auto items-center justify-center mt-36 ">
      <div className="w-full flex items-center justify-between">
        <p className="text-primaryBlack text-[32px]">Популярные категории</p>
        <button>Все категории</button>
      </div>
      <div className="flex flex-row gap-3  justify-between  mt-[45px]">
        <div className="flex flex-col items-center justify-between">
          <div className="bg-primaryCream w-[320px] h-[304px] border border-accent rounded-lg">
            <img src="" alt="img" className="w-full h-[220px]" />
            <p className="text-primaryBlack p-5">Дерматологическое <br /> оборудование</p>
          </div>
          <div className="bg-primaryCream w-[320px] h-[304px] border border-accent rounded-lg">
            <img src="" alt="img" className="w-full h-[220px]" />
            <p className="text-primaryBlack p-5">Дерматологическое <br /> оборудование</p>
          </div>
        </div>
        <div className="w-[320px] h-[618px] bg-primaryCream border border-accent rounded-lg">
            <img src="" alt="img" className="w-full h-[534px]" />
            <p className="text-primaryBlack p-5">
            Дерматологическое оборудование
            </p>
        </div>
        <div className="flex flex-col items-center justify-between">
          <div className="bg-primaryCream w-[320px] h-[304px] border border-accent rounded-lg">
            <img src="" alt="img" className="w-full h-[220px]" />
            <p className="text-primaryBlack p-5">Дерматологическое <br /> оборудование</p>
          </div>
          <div className="bg-primaryCream w-[320px] h-[304px] border border-accent rounded-lg">
            <img src="" alt="img" className="w-full h-[220px]" />
            <p className="text-primaryBlack p-5">Дерматологическое <br /> оборудование</p>
          </div>
        </div> <div className="flex flex-col items-center justify-between">
          <div className="bg-primaryCream w-[320px] h-[304px] border border-accent rounded-lg">
            <img src="" alt="img" className="w-full h-[220px]" />
            <p className="text-primaryBlack p-5">Дерматологическое <br /> оборудование</p>
          </div>
          <div className="bg-primaryCream w-[320px] h-[304px] border border-accent rounded-lg">
            <img src="" alt="img" className="w-full h-[220px]" />
            <p className="text-primaryBlack p-5">Дерматологическое <br /> оборудование</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatagorySection;

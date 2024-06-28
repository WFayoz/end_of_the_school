import React from "react";

const CatagorySection = () => {
  return (
    <div className="mx-auto mt-36 max-w-[1350px] items-center justify-center px-5">
      <div className="flex w-full items-center justify-between">
        <p className="text-[32px] text-primaryBlack">Популярные категории</p>
        <button className="hidden sm:block buttonG">Все категории</button>
      </div>
      <div className="mt-[45px] grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <div className="flex-1 rounded-lg border border-accent bg-primaryCream">
            <img src="" alt="img" className="h-[220px] w-full" />
            <p className="p-5 text-primaryBlack">
              Дерматологическое <br /> оборудование
            </p>
          </div>
          <div className="flex-1 rounded-lg border border-accent bg-primaryCream">
            <img src="" alt="img" className="h-[220px] w-full" />
            <p className="p-5 text-primaryBlack">
              Дерматологическое <br /> оборудование
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col rounded-lg border border-accent bg-primaryCream">
          <img src="" alt="img" className="h-[534px] w-full" />
          <p className="p-5 text-primaryBlack">
            Дерматологическое оборудование
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex-1 rounded-lg border border-accent bg-primaryCream">
            <img src="" alt="img" className="h-[220px] w-full" />
            <p className="p-5 text-primaryBlack">
              Дерматологическое <br /> оборудование
            </p>
          </div>
          <div className="flex-1 rounded-lg border border-accent bg-primaryCream">
            <img src="" alt="img" className="h-[220px] w-full" />
            <p className="p-5 text-primaryBlack">
              Дерматологическое <br /> оборудование
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex-1 rounded-lg border border-accent bg-primaryCream">
            <img src="" alt="img" className="h-[220px] w-full" />
            <p className="p-5 text-primaryBlack">
              Дерматологическое <br /> оборудование
            </p>
          </div>
          <div className="flex-1 rounded-lg border border-accent bg-primaryCream">
            <img src="" alt="img" className="h-[220px] w-full" />
            <p className="p-5 text-primaryBlack">
              Дерматологическое <br /> оборудование
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatagorySection;

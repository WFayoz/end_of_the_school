import React from "react";
import img1 from "../../../public/imgs/cabinetimg1.png";
import img2 from "../../../public/imgs/cabinetimg2.png";

const CabinetCards = () => {
  return (
    <div className="mx-auto w-full max-w-[1350px] items-start justify-center px-5 mt-20">
      <h1 className="text-[48px] text-primaryBlack">Кабинеты под ключ</h1>
      <div className="grid grid-cols-2 gap-3 mt-10">
        <div className="rounded-xl border border-accent bg-primaryWhite">
          <img src={img1} alt="" />
          <p className="p-5">Реанимация</p>
        </div>
        <div className="rounded-xl border border-accent bg-primaryWhite">
          <img src={img2} alt="" />
          <p className="p-5">Реанимация</p>
        </div>
        <div className="rounded-xl border border-accent bg-primaryWhite">
          <img src={img2} alt="" />
          <p className="p-5">Реанимация</p>
        </div>
        <div className="rounded-xl border border-accent bg-primaryWhite">
          <img src={img1} alt="" />
          <p className="p-5">Реанимация</p>
        </div>
        <div className="rounded-xl border border-accent bg-primaryWhite">
          <img src={img1} alt="" />
          <p className="p-5">Реанимация</p>
        </div>
        <div className="rounded-xl border border-accent bg-primaryWhite">
          <img src={img2} alt="" />
          <p className="p-5">Реанимация</p>
        </div>
        <div className="rounded-xl border border-accent bg-primaryWhite">
          <img src={img2} alt="" />
          <p className="p-5">Реанимация</p>
        </div>
        <div className="rounded-xl border border-accent bg-primaryWhite">
          <img src={img1} alt="" />
          <p className="p-5">Реанимация</p>
        </div>
        <div className="rounded-xl border border-accent bg-primaryWhite">
          <img src={img1} alt="" />
          <p className="p-5">Реанимация</p>
        </div>
      </div>
    </div>
  );
};

export default CabinetCards;

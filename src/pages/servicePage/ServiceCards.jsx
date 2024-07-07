import React from "react";
import {servicesData} from '../../services/servicesData';

const ServiceCards = () => {
  return (
    <div className="max-w-[1350px] w-full mx-auto px-5">
      <h1 className="text-[48px] text-primaryBlack">Услуги</h1>
      <div className="grid grid-cols-2 gap-3 max-sm:grid-cols-1">
        {servicesData.map((item) => (
          <div key={item.id} className="flex bg-primaryWhite rounded-xl justify-between overflow-hidden max-lg:flex-col-reverse ">
            <div className="max-w-[350px] w-full p-5">
            <h2 className="text-[18px] font-semibold h-[40px]">{item.name}</h2>
            <p className="text-secondaryGray text-[12px] pt-9">Описание услуги</p>
            <p className="text-secondaryGray  w-full ">{item.description}</p>
            <button className="buttonW mt-20">Заказать</button>
            </div>
            <img src={item.img} alt={item.name} className="w-[265px] object-cover bg-transparent max-lg:w-full"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;

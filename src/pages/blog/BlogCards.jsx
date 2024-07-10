import React from "react";
import data from "../../services/BlogData";

const BlogCards = () => {
  return (
    <div className="mx-auto flex flex-col gap-3 ">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-7 rounded-xl border border-accent">
          <div className="flex-shrink-0">
            <img src={item.img} alt={item.name} className="w-full md:w-[430px] rounded-t-xl md:rounded-l-xl md:rounded-t-none" />
          </div>
          <div className="w-full md:w-[474px] p-5">
            <h1 className="text-[18px] font-semibold">{item.name}</h1>
            <p className="text-secondaryGray text-[12px]">{item.date}</p>
            <p className="text-secondaryGray pt-6">{item.title}</p>
            <button className="buttonW mt-4 md:mt-[71px]">Подробнее</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
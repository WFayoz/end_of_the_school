import React from "react";
import data from "../../services/BlogData";
data;
const BlogCards = () => {
  return (
    <div className="w-[980px] flex flex-col gap-3">
      {data.map((item) => (
        <div className="flex gap-7 rounded-xl border border-accent">
          <div>
            <img src={item.img} alt=""  className="w-[430px]"/>
          </div>
          <div className="w-[474px] p-5">
            <h1 className="text-[18px] font-semibold">{item.name}</h1>
            <p className="text-secondaryGray text-[12px]">{item.date}</p>
            <p className="text-secondaryGray pt-6">{item.title}</p>
            <button className="buttonW mt-[71px]">Подробнее</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;

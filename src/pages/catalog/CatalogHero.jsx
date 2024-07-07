import React from "react";
import catalogTypes from '../../services/catalogTypes';
import { FaAngleRight } from "react-icons/fa";
import data from '../../services/data';
import { Link } from "react-router-dom";

const CatalogHero = () => {
  return (
    <div className="mx-auto mt-8 flex w-full gap-3 max-w-[1350px] items-start justify-between px-5">
      <div className="w-[320px] p-4 max-xl:hidden border border-accent rounded-xl">
        <p>Направления</p>
        <div className="w-full border border-secondaryGray my-5"></div>
        <ul className="w-full flex flex-col gap-2">
          {catalogTypes.map((item, index) => (
            <li key={index} className="flex w-full items-center justify-between text-[14px] text-primaryBlack">
              <p>{item}</p>
              <FaAngleRight className="text-[14px] text-secondaryGray"/>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 max-md:gap-6">
          {data.slice(0, 9).map((item) => (
            <Link to={`/review/${item.id}`} key={item.id} className="flex flex-col gap-3">
              <div className="w-full flex-1 rounded-lg object-cover border border-accent bg-primaryCream">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[220px] w-full rounded-t-lg object-contain bg-white"
                />
                <p className="p-5 text-primaryBlack">
                  {item.name} <br />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogHero;
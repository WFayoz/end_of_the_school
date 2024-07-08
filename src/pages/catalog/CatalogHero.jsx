import React, { useState } from "react";
import catalogTypes from "../../services/catalogTypes";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import data from "../../services/data";
import { Link } from "react-router-dom";

const CatalogHero = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mx-auto mt-8 flex w-full max-w-[1350px] items-start justify-between gap-3 px-5">
      <div className="w-[320px] rounded-xl border border-accent p-4 max-xl:hidden">
        <p
        onClick={toggleDropdown}
          className="flex cursor-pointer items-center justify-between"
        >
          Направления
          {isOpen ? (
            <FaAngleDown className="text-[14px] text-secondaryGray" />
          ) : (
            <FaAngleRight className="text-[14px] text-secondaryGray" />
          )}
        </p>
        {isOpen && (
          <>
            <div className="my-5 w-full border border-secondaryGray"></div>
            <ul className="flex w-full flex-col gap-2">
              {catalogTypes.map((item, index) => (
                <li
                  key={index}
                  className="flex w-full items-center justify-between text-[14px] text-primaryBlack"
                >
                  <p>{item}</p>
                  <FaAngleRight className="text-[14px] text-secondaryGray" />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 gap-3 max-md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.slice(0, 9).map((item) => (
            <Link
              to={`/review/${item.id}`}
              key={item.id}
              className="flex flex-col gap-3"
            >
              <div className="w-full flex-1 rounded-lg border border-accent bg-primaryCream object-cover">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[220px] w-full rounded-t-lg bg-white object-contain"
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

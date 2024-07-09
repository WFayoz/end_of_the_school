import React, { useState } from "react";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import catalogTypes from "../../services/catalogTypes";

const BlogDropdown = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-min w-[320px] rounded-xl border border-accent p-4 max-xl:hidden">
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
  );
};

export default BlogDropdown;

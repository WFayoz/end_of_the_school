import React, { useState } from "react";
import BasicRating from "../../components/RatingComp";
import ava from "../../../public/imgs/commentsAva.png";
import data from "../../services/comments";
import Pagination from "../../components/customComponents/Pagination";

const CommentsCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="mx-auto mb-36 max-w-[1350px] px-5">
      <h1 className="text-[40px] text-primaryBlack">Отзывы</h1>
      <div className="mt-5 grid grid-cols-2 gap-3 max-md:grid-cols-1">
        {currentData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 rounded-xl border border-accent bg-primaryWhite p-5"
          >
            <div className="flex items-start justify-start gap-1">
              <img src={ava} alt="" className="h-16 w-16" />
              <div>
                <h1 className="text-[18px] font-semibold text-primaryBlack">
                  ООО Название компании
                </h1>
                <p className="py-1 text-[12px] text-secondaryGray">
                  Михаил Булич Андреевич, Директор
                </p>
                <BasicRating />
              </div>
            </div>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CommentsCards;

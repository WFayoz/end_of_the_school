import React, { useState } from "react";
import Pagination from "./Pagination";
// const data = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
import data from "../../services/FaqData";

const PaginationView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="App">
      <h1 className="my-4 text-center text-2xl font-bold">
        Pagination Example
      </h1>
      <ul className="mx-auto max-w-md list-inside list-disc">
        {paginatedData.map((item, index) => (
          <li key={index} className="border-b border-gray-300 py-2">
            <div>
              {item.content}
              {item.id}
              {item.title}
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationView;

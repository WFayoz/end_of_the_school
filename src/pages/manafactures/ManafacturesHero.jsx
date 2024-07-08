import React, { useState } from "react";
import Pagination from "../../components/customComponents/Pagination";
import data from "../../services/manafactureData";
import { FaAngleRight, FaAngleDown } from "react-icons/fa";
import catalogTypes from "../../services/catalogTypes";
import countries from "../../services/CountriesTypes";

const PaginationView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [selectedCountries, setSelectedCountries] = useState(
    countries.map((country) => country.checked),
  );
  const [dropdownOpen, setDropdownOpen] = useState(true);

  const toggleCountry = (index) => {
    const newSelectedCountries = [...selectedCountries];
    newSelectedCountries[index] = !newSelectedCountries[index];
    setSelectedCountries(newSelectedCountries);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="mx-auto mt-16 flex w-full max-w-[1350px] gap-3 px-5">
      <div>
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
        <div className="mt-3 h-min w-[320px] rounded-xl border border-accent p-4 max-xl:hidden">
          <p
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex cursor-pointer items-center justify-between"
          >
            Страны
            {dropdownOpen ? (
              <FaAngleDown className="text-[14px] text-secondaryGray" />
            ) : (
              <FaAngleRight className="text-[14px] text-secondaryGray" />
            )}
          </p>
          {dropdownOpen && (
            <div className="mt-2 max-h-64 overflow-y-auto rounded">
              <input
                type="text"
                placeholder="Поиск по стране"
                className="mb-4 w-full rounded-[50px] border p-2 outline-none"
              />
              {countries.map((country, index) => (
                <div key={index} className="mb-2 flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedCountries[index]}
                    onChange={() => toggleCountry(index)}
                    className="mr-2 accent-primaryGreen"
                  />
                  <label>{country.name}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="mt-4 flex w-[320px] justify-between max-xl:hidden">
          <button className="buttonW">Сбросить</button>
          <button className="buttonG">Показать</button>
        </div>
      </div>
      <div className="mx-auto w-full">
        <div className="mb-10 grid grid-cols-3 gap-3 max-md:gap-6 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3">
          {paginatedData.map((item) => (
            <li key={item.id} className="flex flex-col gap-3">
              <div className="w-full flex-1 rounded-lg border border-accent bg-primaryCream object-cover">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[220px] w-full rounded-t-lg bg-white object-contain"
                />
                <p className="p-5 text-primaryBlack">{item.name}</p>
              </div>
            </li>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default PaginationView;

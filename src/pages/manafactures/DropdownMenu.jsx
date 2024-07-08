import React, { useState } from "react";

const countries = [
  { name: "Австралия", checked: false },
  { name: "Австрия", checked: true },
  { name: "Беларусь", checked: true },
  { name: "Бельгия", checked: false },
  { name: "Великобритания", checked: true },
  { name: "Германия", checked: false },
  { name: "Израиль", checked: true },
  { name: "Испания", checked: false },
];

const CountrySelector = () => {
  const [selectedCountries, setSelectedCountries] = useState(
    countries.map((country) => country.checked),
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleCountry = (index) => {
    const newSelectedCountries = [...selectedCountries];
    newSelectedCountries[index] = !newSelectedCountries[index];
    setSelectedCountries(newSelectedCountries);
  };

  return (
    <div className="p-4">
      <h2
        className="mb-2 text-xl font-semibold"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        Страны
      </h2>
      <input
        type="text"
        placeholder="Поиск по стране"
        className="mb-4 w-full rounded border p-2"
      />
      {dropdownOpen && (
        <div className="mt-2 max-h-64 overflow-y-auto rounded border">
          {countries.map((country, index) => (
            <div key={index} className="mb-2 flex items-center">
              <input
                type="checkbox"
                checked={selectedCountries[index]}
                onChange={() => toggleCountry(index)}
                className="mr-2"
              />
              <label>{country.name}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelector;

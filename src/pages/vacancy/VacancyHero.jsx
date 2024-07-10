import React from "react";
import VacancyAccordion from "./VacancyAccardion";
import VacancyAccordion2 from "./VacancyAccardion2";

const VacancyHero = () => {
  return (
    <div className="mx-auto flex flex-col md:flex-row w-full max-w-[1350px] justify-between px-5 mt-10">
      <div className="md:w-1/2">
        <h1 className="text-[30px] text-primaryBlack">Вакансии</h1>
        <p className="max-w-[540px] pt-6">
          В «Глобал Медикал Трейд» всегда есть место как для новичков, так и для состоявшихся экспертов. Тем, кто только начинает строить карьеру, мы предлагаем возможность получить ценные знания, а опытным специалистам — расширить компетенции.
        </p>
      </div>
      <div className="md:w-1/2 flex flex-col mt-6 md:mt-0">
        <div>
          <h1 className="text-[30px]">Актуальные вакансии</h1>
          <div className="mt-6">
            <VacancyAccordion />
          </div>
        </div>
        <div className="mt-6">
          <h1 className="text-[30px]">Архив вакансии</h1>
          <div className="mt-6">
            <VacancyAccordion2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacancyHero;
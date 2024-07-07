import React from "react";

const RulesSection = () => {
  return (
    <div className="mx-auto flex  mt-36  flex-col md:flex-row w-full max-w-[1350px] items-start justify-between px-4 md:px-0">
      <div className="flex flex-col md:w-[540px] w-full items-start">
        <h1 className="text-[24px] md:text-[30px]">
          Правила получения <br className="hidden md:block" /> товара в пункте выдачи
        </h1>
        <p className="pt-4 md:pt-6">
          Учитывая стремительное развитие мировых медицинских технологий, врачи
          в Российской Федерации и соседних странах столкнулись с вызовом,
          требующим обновления приборов.
        </p>
      </div>
      <div className="flex flex-col md:w-1/2 w-full items-center mt-6 md:mt-0">
        <div className="flex flex-col items-start justify-center gap-4 border-t border-accent py-6 w-full max-md:mt-10">
          <h2 className="text-[18px] md:text-[20px] font-semibold">Подготовить документы</h2>
          <p className="text-secondaryGreen1">
            Предварительно ознакомиться с условиями выдачи грузов на сайте и
            подготовьте нужные документы
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 border-t border-accent py-6 w-full">
          <h2 className="text-[18px] md:text-[20px] font-semibold">Подготовить документы</h2>
          <p className="text-secondaryGreen1">
            Предварительно ознакомиться с условиями выдачи грузов на сайте и
            подготовьте нужные документы
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 border-t border-accent py-6 w-full">
          <h2 className="text-[18px] md:text-[20px] font-semibold">Подготовить документы</h2>
          <p className="text-secondaryGreen1">
            Предварительно ознакомиться с условиями выдачи грузов на сайте и
            подготовьте нужные документы
          </p>
        </div>
      </div>
    </div>
  );
};

export default RulesSection;
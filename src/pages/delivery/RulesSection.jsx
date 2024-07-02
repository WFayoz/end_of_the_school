import React from "react";

const RulesSection = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1350px] items-start justify-between">
      <div className="flex w-[540px] flex-col items-start">
        <h1 className="text-[30px]">
          Правила получения <br /> товара в пункте выдачи
        </h1>
        <p className="pt-6">
          Учитывая стремительное развитие мировых медицинских технологий, врачи
          в Российской Федерации и соседних странах столкнулись с вызовом,
          требующим обновления приборов.
        </p>
      </div>
      <div className="flex w-1/2 flex-col items-center">
        <div className="flex flex-col items-start justify-center gap-4 border-t border-accent py-6">
          <h2 className="text-[20px] font-semibold">Подготовить документы</h2>
          <p className="text-secondaryGreen1">
            Предварительно ознакомиться с условиями выдачи грузов на сайте и
            подготовьте нужные документы
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 border-t border-accent py-6">
          <h2 className="text-[20px] font-semibold">Подготовить документы</h2>
          <p className="text-secondaryGreen1">
            Предварительно ознакомиться с условиями выдачи грузов на сайте и
            подготовьте нужные документы
          </p>
        </div>
        <div className="flex flex-col items-start justify-center gap-4 border-t border-accent py-6">
          <h2 className="text-[20px] font-semibold">Подготовить документы</h2>
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

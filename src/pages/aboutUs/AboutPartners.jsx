import React from "react";

const AboutPartners = () => {
  return (
    <div className="mx-auto w-full bg-primaryGreen">
      <div className="flex w-full max-w-[1350px] items-start justify-between px-5 py-20  max-md:flex max-md:flex-col">
        <div className="flex w-1/2 max-md:w-full items-center justify-center ">
          <img
            src="https://global-mt.ru/upload/iblock/0cc/jbqe5dm1c8h2a3hfop40ueqmmc0oxv7f/600_320.jpg"
            alt=""
            className="h-[345px] w-[600px]"
          />
        </div>
        <div className="w-[48%] max-md:w-full max-md:mt-5">
          <h2 className="text-[30px] text-primaryWhite">Наши партнёры</h2>
          <p className="pt-6 text-primaryWhite">
            Нашими партнёрами являются наиболее серьёзные игроки на мировом
            рынке профильного оборудования. Это позволяет нам наладить
            долгосрочное и успешное сотрудничество, добиться лучших
            цен для государственных учреждений здравоохранения, медицинских
            центров, лабораторий, а также ветеринарных клиник и кабинетов.
            Купить нужную вам технику по оптимальным ценам, выбрать подходящую
            модель устройства в рамках бюджета в нашей компании окажется намного
            проще. Мы поддерживаем скидки и особые предложения для наших
            партнёров, предлагаем оформление аппаратов в лизинг и готовы
            предоставить системы в рассрочку на выгодных условиях.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPartners;

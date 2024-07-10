import React from "react";

const DeliveryMap2 = () => {
  return (
    <div className="mx-auto mt-36 flex w-full max-w-[1350px] flex-col px-5">
      <div className="flex w-full flex-wrap items-start justify-between">
        <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
          <h1 className="text-[30px]">
            Вы сможете забрать оборудование самостоятельно из нашего офиса
          </h1>
        </div>
        <div className="flex w-full lg:w-1/2 gap-3">
          <div className="flex w-full lg:w-1/2 flex-col items-start rounded-lg border border-accent bg-white p-6 pr-8 sm:pr-32">
            <h2 className="text-[18px] font-bold">Контакты</h2>
            <p className="pt-4 text-[14px] text-secondaryGray">
              +7 (000) 000-00-00
            </p>
            <p className="text-[14px] text-secondaryGray">info@mail.ru</p>
          </div>
          <div className="flex w-full lg:w-1/2 flex-col items-start rounded-lg border border-accent bg-white p-6 pr-8 sm:pr-32">
            <h2 className="text-[18px] font-bold">Режим работы</h2>
            <p className="pt-4 text-[14px] text-secondaryGray">
              пн-пт: 09:00-19:00
            </p>
            <p className="text-[14px] text-secondaryGray">сб-вс: выходной</p>
          </div>
        </div>
      </div>
      <div className="relative mt-8 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.1272608464124!2d69.26538967543686!3d41.284334702381955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8abf6cafffff%3A0xf891468a94f4bf81!2sFrontend%20Web%20Developer!5e0!3m2!1sen!2s!4v1719918016414!5m2!1sen!2s"
          width="100%"
          height="389"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <button className="buttonG absolute bottom-3 right-3">
          Пункт выдачи
        </button>
      </div>
    </div>
  );
};

export default DeliveryMap2;
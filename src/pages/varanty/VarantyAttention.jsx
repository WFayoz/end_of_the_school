import React from "react";

const VarantyAttention = () => {
  return (
    <div className="mx-auto my-36 w-full max-w-[1350px] px-5">
      <div className="flex flex-col md:flex-row justify-between rounded-lg bg-primaryGreen p-10 text-primaryWhite">
        <div className="w-full md:w-1/2 mb-5 md:mb-0">
          <p className="text-[30px]">Внимание!</p>
        </div>
        <div className="w-full md:w-1/2">
          <p>
            Рассмотрение заявки на замену товара осуществляется в срок до 30
            дней со дня её регистрации согласно п. 1 ст. 12 Закона № 59-ФЗ, при
            условии предоставления документов, перечисленных в договоре.
          </p>
          <p className="pt-5">
            Оформление гарантийного случая осуществляется согласно Гражданскому
            кодексу РФ, при условии предоставления документов, перечисленных в
            договоре и при наличии заявления с указанием причины возврата,
            оформленного надлежащим образом.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VarantyAttention;
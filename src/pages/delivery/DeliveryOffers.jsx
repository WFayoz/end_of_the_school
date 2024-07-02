import React from 'react';
import symbol5 from '../../../public/icons/symbol5.svg';
import symbol6 from '../../../public/icons/symbol6.svg';
import symbol7 from '../../../public/icons/symbol7.svg';
import symbol8 from '../../../public/icons/symbol8.svg';

const DeliveryOffers = () => {
  return (
    <div className="w-full px-5">
      <div className="mt-36 flex w-full max-w-[1350px] flex-col items-start justify-center mx-auto text-center">
        <div>
          <p className="text-[32px] text-primaryBlack max-md:text-[28px]">
            Почему выбирают нас?
          </p>
        </div>
        <div className="mt-10 grid w-full gap-10 grid-cols-4 max-md:grid-cols-1">
          <div className="flex h-[320px] flex-col items-center justify-center rounded-lg border border-accent max-xl:h-[250px] max-lg:h-[200px] max-md:h-[160px]">
            <img src={symbol5} alt="symbol" />
            <p className="pt-3 text-primaryBlack">Доставка по <br />всей России</p>
          </div>
          <div className="flex h-[320px] flex-col items-center justify-center rounded-lg border border-accent max-xl:h-[250px] max-lg:h-[200px] max-md:h-[160px]">
            <img src={symbol6} alt="symbol" />
            <p className="pt-3 text-primaryBlack">Собственный склад <br /> с продукцией</p>
          </div>
          <div className="flex h-[320px] flex-col items-center justify-center rounded-lg border border-accent max-xl:h-[250px] max-lg:h-[200px] max-md:h-[160px]">
            <img src={symbol7} alt="symbol" />
            <p className="pt-3 text-primaryBlack">Весь товар <br />сертифицирован</p>
          </div>
          <div className="flex h-[320px] flex-col items-center justify-center rounded-lg border border-accent max-xl:h-[250px] max-lg:h-[200px] max-md:h-[160px]">
            <img src={symbol8} alt="symbol" />
            <p className="pt-3 text-primaryBlack">Безопасные <br />способы оплаты</p>
          </div>
        </div>
        <div className="w-full flex items-center justify-end mt-10">
          <button className="buttonG">Проверить статус доставки</button>
        </div>
      </div>
    </div>
  );
}

export default DeliveryOffers;
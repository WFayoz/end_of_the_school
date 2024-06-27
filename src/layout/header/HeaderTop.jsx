import React from "react";

const HeaderTop = () => {
  return (
    <div className="flex items-center justify-between pt-4">
      <ul className="flex items-center justify-start gap-5">
        <li className="text-secondaryGray">О компании</li>
        <li className="text-secondaryGray">Доставка</li>
        <li className="text-secondaryGray">Оплата</li>
        <li className="text-secondaryGray">Гарантии</li>
        <li className="text-secondaryGray">Блог</li>
      </ul>
      <ul className="flex items-center justify-center gap-11">
        <a href="https://news.mail.ru/" className="text-secondaryGray">
          info@mail.ru
        </a>
        <a
          href="https://yandex.uz/maps/-/CDv3JWnh"
          className="text-secondaryGray"
        >
          г. Москва, ул. Московская, д. 35
        </a>
      </ul>
    </div>
  );
};

export default HeaderTop;

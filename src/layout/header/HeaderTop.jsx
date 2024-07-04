import React from "react";
import { Link } from "react-router-dom";

const HeaderTop = () => {
  return (
    <div className="flex items-center justify-between pt-4 max-lg:hidden">
      <ul className="flex items-center justify-start gap-5">
        <Link className="text-secondaryGray" to="/about">
          О компании
        </Link>
        <Link to="/delivery" className="text-secondaryGray">
          Доставка
        </Link>
        <Link to="./payment" className="text-secondaryGray">
          Оплата
        </Link>
        <Link to="/varanty" className="text-secondaryGray">
          Гарантии
        </Link>
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

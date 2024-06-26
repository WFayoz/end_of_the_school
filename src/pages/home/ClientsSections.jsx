import React from "react";
import Marquee from "react-fast-marquee";

const clients = [
  {
    imgSrc:
      "https://global-mt.ru/upload/iblock/42a/5v2wg01of3rez9u1ee3q7w6dub963ljz/slider7.png",
    description: "ФГБУ «НМИЦ радиологии» <br /> Минздрава России",
  },
  {
    imgSrc:
      "https://global-mt.ru/upload/iblock/55f/2ucwemhgjoqvi0xwad53u322awn6kydz/11.png",
    description: "ФГБУ «НМИЦ радиологии» <br /> Минздрава России",
  },
  {
    imgSrc:
      "https://global-mt.ru/upload/iblock/a98/asyu7avffyglsba9gj33sbzw0l1fes5r.png",
    description: "ФГБУ «НМИЦ радиологии» <br /> Минздрава России",
  },
  {
    imgSrc:
      "https://global-mt.ru/upload/iblock/a04/tnrrj9eg674c2lr979rqtldsuk0hojzx/slider5.png",
    description: "ФГБУ «НМИЦ радиологии» <br /> Минздрава России",
  },
  {
    imgSrc:
      "https://global-mt.ru/upload/iblock/d24/vwmcaq263qatmju6kh83be34r4v35rxj/12.png",
    description: "ФГБУ «НМИЦ радиологии» <br /> Минздрава России",
  },
  {
    imgSrc:
      "https://global-mt.ru/upload/iblock/4d0/3yg35cvejk0jpbralf633oflhcxgzzj5/logoy.png",
    description: "ФГБУ «НМИЦ радиологии» <br /> Минздрава России",
  },
  {
    imgSrc:
      "https://global-mt.ru/upload/iblock/dee/p67uqkkh2kual0fb0w0wt7rx7umm9xp9/logo1.png",
    description: "ФГБУ «НМИЦ радиологии» <br /> Минздрава России",
  },
  {
    imgSrc:
      "https://global-mt.ru/upload/iblock/b80/2nniui5rpvgfpy30nc6upwhm5s7c3uny/logo2.png",
    description: "ФГБУ «НМИЦ радиологии» <br /> Минздрава России",
  },
  {
    imgSrc:
      "https://global-mt.ru/upload/iblock/574/3sngx3vqypjecn874vcf5z3k96fprgum/logo3.png",
    description: "ФГБУ «НМИЦ радиологии» <br /> Минздрава России",
  },
  {
    imgSrc:
      "https://global-mt.ru/upload/iblock/882/zc9jyvco106ojsjhhszzlpa8oit2nb5v/img14.png",
    description: "ФГБУ «НМИЦ радиологии» <br /> Минздрава России",
  },
];

const Client = () => (
  <div className="mt-36 bg-accent py-24">
    <div className="mx-auto flex max-w-[1350px] items-center justify-between px-5">
      <p className="w-1/2 text-[30px] text-primaryBlack">Наши клиенты</p>
      <div className="w-1/2 items-start text-[48px] text-primaryBlack">
        БОЛЕЕ <span className="text-primaryGreen">5000</span> <br />
        УСПЕШНЫХ ПРОЕКТОВ
      </div>
    </div>
    <div className="mt-24">
      <Marquee>
        <div className="flex gap-2">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex h-[280px] w-[320px] flex-col overflow-hidden rounded-xl border border-accent bg-primaryCream"
            >
              <div className="flex h-[196px] w-full items-center justify-center rounded-lg bg-white object-contain">
                <img
                  src={client.imgSrc}
                  alt=""
                  className="h-[196px] w-[196px] rounded-lg bg-white object-contain"
                />
              </div>
              <p
                className="p-5 text-primaryBlack"
                dangerouslySetInnerHTML={{ __html: client.description }}
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  </div>
);

export default Client;

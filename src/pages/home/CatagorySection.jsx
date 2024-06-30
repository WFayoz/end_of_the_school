import React from "react";
import { Link } from "react-router-dom";

const CatagorySection = () => {
  return (
    <div className="mx-auto mt-36 max-w-[1350px] items-center justify-center px-5 overflow-hidden" >
      <div className="flex w-full items-center justify-between overflow-hidden">
        <p className="text-[32px] text-primaryBlack">Популярные категории</p>
        <Link to={"/catalog"}>
          <button className="buttonG hidden sm:block">Все категории</button>
        </Link>
      </div>
      <div className="mt-[45px] grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <Link to={"/catalog"}>
            <div className="flex-1 rounded-lg border border-accent bg-primaryCream">
              <img src="https://global-mt.ru/upload/iblock/c6e/0pordpcsv1m0eejjpk0uie7ftwusdl2k.jpg" alt="img" className="rounded-t-lg h-[220px] w-full" />
              <p className="p-5 text-primaryBlack">
              Дерматологическое <br /> оборудование
              </p>
            </div>
          </Link>
          <Link to={"/catalog"}>
            <div className="flex-1 rounded-lg border border-accent bg-primaryCream">
              <img src="https://global-mt.ru/upload/iblock/343/thhoixipw9z1qmr1d532z5xs0r698m68.jpg" alt="img" className="rounded-t-lg h-[220px] w-full" />
              <p className="p-5 text-primaryBlack">
              Оборудование для <br /> анастезиологии
              </p>
            </div>
          </Link>
        </div>

        <div
          className="flex flex-1 flex-col rounded-lg border border-accent bg-primaryCream"
          to={"/catalog"}
        >
          <Link to={"/catalog"} className="h-full">
            <img src="https://global-mt.ru/upload/iblock/85e/o3f2bd3fcsty3x0ykxn00ki55gjdkb3r/metrologya7.jpg" alt="img" className="rounded-t-lg h-[540px] w-full" />
            <p className="p-5 text-primaryBlack">
            Мебель для <br /> медецинских целей
            </p>
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <Link to={"/catalog"}>
            <div className="flex-1 rounded-lg border border-accent bg-primaryCream">
              <img src="https://global-mt.ru/upload/iblock/f4f/x5ak53u35c2xyod0djun1lznt9ihcccs.jpg" alt="img" className="rounded-t-lg h-[220px] w-full" />
              <p className="p-5 text-primaryBlack">
              Ветеринарное <br /> оборудование
              </p>
            </div>
          </Link>
          <Link to={"/catalog"}>
            <div className="flex-1 rounded-lg border border-accent bg-primaryCream">
              <img src="https://global-mt.ru/upload/iblock/b39/0o4wfxmcinlhszb86sgnuymbxesi3w7g.jpg" alt="img" className="rounded-t-lg h-[220px] w-full" />
              <p className="p-5 text-primaryBlack">
              Дерматологическое <br />оборудование
              </p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <Link to={"/catalog"}>
            <div className="flex-1 rounded-lg border border-accent bg-primaryCream">
              <img src="https://global-mt.ru/upload/iblock/d9a/znevgk80fmxnma6s5mid0zvb75leyal0/testery_germetichnosti.webp" alt="img" className="rounded-t-lg h-[220px] w-full" />
              <p className="p-5 text-primaryBlack">
              Оборудование для <br /> анастезиологии
              </p>
            </div>
          </Link>
          <Link to={"/catalog"}>
            <div className="flex-1 rounded-lg border border-accent bg-primaryCream">
              <img src="https://global-mt.ru/upload/iblock/653/ckz3b0q869x4wl2iv444lmwtbc54a11a/pompy_irrigacionnye.webp" alt="img" className="rounded-t-lg h-[220px] w-full" />
              <p className="p-5 text-primaryBlack">
                Дерматологическое <br /> оборудование
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CatagorySection;

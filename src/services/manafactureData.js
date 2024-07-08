import img from "../../public/imgs/manafacture.png";

const names = [
  "НМИЦ кардиологии им. А.А. Блохина",
  "НМИЦ a им. А.А. Блохина",
  "НМИЦ кардиологии им. А.А. Блохина",
  "НМИЦ b им. А.А. Блохина",
  "НМИЦ кардиологии им. А.А. Блохина",
  "НМИЦ кардиологии им. А.А. Блохина",
  "НМИЦ кардиологии им. А.А. Блохина",
  "НМИЦ кардиологии им. А.А. Блохина",
];

const ManafactureData = Array.from({ length: 120 }, (_, index) => ({
  id: index + 1,
  name: names[Math.floor(Math.random() * names.length)],
  img:
    index % 2 === 0
      ? img
      : "https://global-mt.ru/upload/medialibrary/543/uvj307ri4hr5dqnceesy4dw0iqpagtsx/f1a75c68290fe89ba38ff88fe583e0e4.jpg",
}));

// Shuffle the array
ManafactureData.sort(() => Math.random() - 0.5);

export default ManafactureData;

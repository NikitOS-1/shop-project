type ProductsProps = {
  title: string;
  desc: string;
  type: string;
  capasity: string;
  price: number;
  image: string;
};

const productsArray: ProductsProps[] = [
  {
    title: "iPhone X",
    desc: 'Экран (6.1", IPS (Liquid Retina HD), 1792x828)/ Apple A13 Bionic/ основная двойная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп/ RAM 4 ГБ/ 128 ГБ встроенной памяти/ 3G/ LTE/ GPS/ ГЛОНАСС/ Nano-SIM/ iOS 13 / 3046 мА*ч',
    type: "Phone",
    capasity: "64gb",
    price: 500,
    image: "/images/iphone1.jpg",
  },
  {
    title: "iPhone XS",
    desc: 'Экран (6.1", IPS (Liquid Retina HD), 1792x828)/ Apple A13 Bionic/ основная двойная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп/ RAM 4 ГБ/ 128 ГБ встроенной памяти/ 3G/ LTE/ GPS/ ГЛОНАСС/ Nano-SIM/ iOS 13 / 3046 мА*ч',
    type: "Phone",
    capasity: "128",
    price: 700,
    image: "/images/iphone2.jpg",
  },
  {
    title: "iPhone 12",
    desc: 'Экран (6.1", IPS (Liquid Retina HD), 1792x828)/ Apple A13 Bionic/ основная двойная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп/ RAM 4 ГБ/ 128 ГБ встроенной памяти/ 3G/ LTE/ GPS/ ГЛОНАСС/ Nano-SIM/ iOS 13 / 3046 мА*ч',
    type: "Phone",
    capasity: "256",
    price: 900,
    image: "/images/iphone3.jpg",
  },
  {
    title: "iPhone 14 Pro",
    desc: 'Экран (6.1", IPS (Liquid Retina HD), 1792x828)/ Apple A13 Bionic/ основная двойная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп/ RAM 4 ГБ/ 128 ГБ встроенной памяти/ 3G/ LTE/ GPS/ ГЛОНАСС/ Nano-SIM/ iOS 13 / 3046 мА*ч',
    type: "Phone",
    capasity: "512",
    price: 1100,
    image: "/images/iphone3.jpg",
  },
  {
    title: "iPhone 13 Pro",
    desc: 'Экран (6.1", IPS (Liquid Retina HD), 1792x828)/ Apple A13 Bionic/ основная двойная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп/ RAM 4 ГБ/ 128 ГБ встроенной памяти/ 3G/ LTE/ GPS/ ГЛОНАСС/ Nano-SIM/ iOS 13 / 3046 мА*ч',
    type: "Phone",
    capasity: "256",
    price: 1050,
    image: "/images/iphone2.jpg",
  },
  {
    title: "iPhone 14",
    desc: 'Экран (6.1", IPS (Liquid Retina HD), 1792x828)/ Apple A13 Bionic/ основная двойная камера: 12 Мп + 12 Мп, фронтальная камера: 12 Мп/ RAM 4 ГБ/ 128 ГБ встроенной памяти/ 3G/ LTE/ GPS/ ГЛОНАСС/ Nano-SIM/ iOS 13 / 3046 мА*ч',
    type: "Phone",
    capasity: "512",
    price: 1000,
    image: "/images/iphone1.jpg",
  },
];

export default productsArray;

type ProductsProps = {
  title: string;
  desc: string;
  type: string;
  capasity: string;
  price: number;
};

const productsArray: ProductsProps[] = [
  {
    title: "iPhone X",
    desc: "this is iPhone X",
    type: "Phone",
    capasity: "64gb",
    price: 500,
  },
  {
    title: "iPhone XS",
    desc: "this is iPhone XS",
    type: "Phone",
    capasity: "128",
    price: 700,
  },
  {
    title: "iPhone 12",
    desc: "this is iPhone 12",
    type: "Phone",
    capasity: "256",
    price: 900,
  },
  {
    title: "iPhone 14 Pro",
    desc: "this is iPhone 14 Pro",
    type: "Phone",
    capasity: "512",
    price: 1100,
  },
  {
    title: "iPhone 13 Pro",
    desc: "this is iPhone 13 Pro",
    type: "Phone",
    capasity: "256",
    price: 1050,
  },
  {
    title: "iPhone 14",
    desc: "this is iPhone 14",
    type: "Phone",
    capasity: "512",
    price: 1000,
  },
];

export default productsArray;

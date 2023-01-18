import productsArray, {
  ProductsProps,
  getProductsObject,
} from "../../../components/Products/productsArray";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: {
    [id: number]: ProductsProps;
  };
};

const CartProductList = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
}: Props) => {
  return (
    <div className="product-in-cart">
      {Object.keys(productsInCart).map((productId) => (
        <div key={productId}>
          {productsObject[+productId].title} : {productsInCart[+productId]} :{" "}
          {productsInCart[+productId] * productsObject[+productId].price}
          {" $"}
        </div>
      ))}
    </div>
  );
};
export default CartProductList;

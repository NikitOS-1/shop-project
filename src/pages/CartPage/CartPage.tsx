import productsArray, {
  ProductsProps,
  getProductsObject,
} from "../../components/Products/productsArray";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: {
    [id: number]: ProductsProps;
  };
};

const CartPage = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
}: Props) => {
  return (
    <div>
      <div className="product-in-cart">
        {Object.keys(productsInCart).map((productId) => (
          <div key={productId}>
            {productsObject[+productId].title} : {productsInCart[+productId]} :{" "}
            {productsInCart[+productId] * productsObject[+productId].price}
            {" $"}
          </div>
        ))}
      </div>
      <div className="total">
        Total :{" "}
        {Object.keys(productsInCart).reduce(
          (total, productId) =>
            total +
            productsInCart[+productId] * productsObject[+productId].price,
          0
        )}
        $
      </div>
    </div>
  );
};
export default CartPage;

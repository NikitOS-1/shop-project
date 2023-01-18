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

const CartTotal = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
}: Props) => {
  return (
    <div className="total">
      Total :{" "}
      {Object.keys(productsInCart).reduce(
        (total, productId) =>
          total + productsInCart[+productId] * productsObject[+productId].price,
        0
      )}
      $
    </div>
  );
};
export default CartTotal;

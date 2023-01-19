import productsArray, {
  ProductsProps,
  getProductsObject,
} from "../../../components/Products/productsArray";
import CartProductListItem from "./CartProductListItem";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: {
    [id: number]: ProductsProps;
  };
  CartItem?: any;
  removeProductFromCart?: (id: number) => void;
};

const CartProductList = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
  CartItem = CartProductListItem,
  removeProductFromCart,
}: Props) => {
  return (
    <>
      {Object.keys(productsInCart).map((productId) => (
        <CartItem
          key={productId}
          product={productsObject[+productId]}
          productCount={productsInCart[+productId]}
          removeProductFromCart={removeProductFromCart}
        />
      ))}
    </>
  );
};
export default CartProductList;

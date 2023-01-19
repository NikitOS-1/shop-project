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
  changeProductQuantity?: (id: number, count: number) => void;
};

const CartProductList = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
  CartItem = CartProductListItem,
  removeProductFromCart,
  changeProductQuantity,
}: Props) => {
  return (
    <>
      {Object.keys(productsInCart).map((productId) => (
        <CartItem
          key={productId}
          product={productsObject[+productId]}
          productCount={productsInCart[+productId]}
          removeProductFromCart={removeProductFromCart}
          changeProductQuantity={changeProductQuantity}
        />
      ))}
    </>
  );
};
export default CartProductList;

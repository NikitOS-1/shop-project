import { Typography } from "@mui/material";
import CartProductList from "../../components/Cart/CartProductList/CartProductList";
import CartTotal from "../../components/Cart/CartTotal/CartTotal";
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
      <Typography variant="h4">Cart</Typography>
      <CartProductList
        productsInCart={productsInCart}
        productsObject={productsObject}
      />
      <CartTotal
        productsInCart={productsInCart}
        productsObject={productsObject}
      />
    </div>
  );
};
export default CartPage;

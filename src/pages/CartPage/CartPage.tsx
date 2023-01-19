import { Grid, Typography } from "@mui/material";
import CartProductList from "../../components/Cart/CartProductList/CartProductList";
import CartProductListItemExtented from "../../components/Cart/CartProductList/CartProductListItemExtented";
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
  removeProductFromCart: (id: number) => void;
};

const CartPage = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
  removeProductFromCart,
}: Props) => {
  return (
    <div>
      <Grid container spacing={2}>
        <CartProductList
          productsInCart={productsInCart}
          productsObject={productsObject}
          CartItem={CartProductListItemExtented}
          removeProductFromCart={removeProductFromCart}
        />
      </Grid>
      <CartTotal
        productsInCart={productsInCart}
        productsObject={productsObject}
      />
    </div>
  );
};
export default CartPage;

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
};

const CartPage = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
}: Props) => {
  return (
    <div>
      <Typography variant="h4">Cart</Typography>
      <Grid container>
        <CartProductList
          productsInCart={productsInCart}
          productsObject={productsObject}
          CartItem={CartProductListItemExtented}
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

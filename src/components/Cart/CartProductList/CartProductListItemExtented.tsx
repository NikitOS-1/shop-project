import { Button, Card, CardContent, Grid } from "@mui/material";
import { ProductsProps } from "../../Products/productsArray";
import "./cartstyle.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import Quantity from "../../Quantity/Quantity";

type Props = {
  product: ProductsProps;
  productCount: number;
  removeProductFromCart: (id: number) => void;
  changeProductQuantity: (id: number, count: number) => void;
};

const CartProductListItemExtented = ({
  product,
  productCount,
  removeProductFromCart,
  changeProductQuantity,
}: Props) => {
  return (
    <Grid item xs={12}>
      <Card variant="outlined">
        <CardContent>
          <div className="product-in-cart-wrap">
            <div className="icon-cart">
              <img src={product.image} alt={product.title} />
              <div className="title-cart">{product.title}</div>
            </div>
            <div className="count-cart">
              <Quantity
                count={productCount}
                onDecrement={() =>
                  changeProductQuantity(product.id, productCount - 1)
                }
                onIncrement={() =>
                  changeProductQuantity(product.id, productCount + 1)
                }
              />
            </div>
            <div className="price-cart">
              Сумма: {productCount * product.price} $
            </div>
            <Button
              variant="outlined"
              onClick={() => removeProductFromCart(product.id)}>
              <DeleteIcon />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CartProductListItemExtented;

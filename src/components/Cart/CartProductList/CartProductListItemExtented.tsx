import { Button, Card, CardContent, Grid } from "@mui/material";
import { ProductsProps } from "../../Products/productsArray";
import "./cartstyle.scss";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  product: ProductsProps;
  productCount: number;
};

const CartProductListItemExtented = ({ product, productCount }: Props) => {
  return (
    <Grid item xs={12}>
      <Card variant="outlined">
        <CardContent>
          <div className="product-in-cart-wrap">
            <div className="icon-cart">
              <img src={product.image} alt={product.title} />
              <div className="title-cart">{product.title}</div>
            </div>
            <div className="count-cart">Количество: {productCount}</div>
            <div className="price-cart">
              Сумма: {productCount * product.price} $
            </div>
            <Button variant="outlined">
              <DeleteIcon />
            </Button>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CartProductListItemExtented;
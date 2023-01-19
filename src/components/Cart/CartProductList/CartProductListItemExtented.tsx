import { Card, CardContent, Grid } from "@mui/material";
import { ProductsProps } from "../../Products/productsArray";
import "./cartstyle.scss";

type Props = {
  product: ProductsProps;
  productCount: number;
};

const CartProductListItemExtented = ({ product, productCount }: Props) => {
  return (
    <Grid item xs={12} md={4}>
      <Card variant="outlined">
        <CardContent>
          <div className="iconcart">
            <img src={product.image} alt={product.title} />
          </div>
          <div>{product.title}</div>
          <p>{product.price}</p>
          <p>{productCount}</p>
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CartProductListItemExtented;

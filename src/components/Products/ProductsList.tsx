import { Grid } from "@mui/material";
import ProductsListItem from "./ProductsListItem";
import productsArray from "./productsArray";

type Props = {};

const ProductsList = (props: Props) => {
  return (
    <Grid container direction="row" alignItems="center" spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <ProductsListItem title={productsArray[0].title} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductsListItem title={productsArray[1].title} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductsListItem title={productsArray[2].title} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductsListItem title={productsArray[3].title} />
      </Grid>
    </Grid>
  );
};
export default ProductsList;

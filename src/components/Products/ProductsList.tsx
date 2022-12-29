import { Grid } from "@mui/material";
import ProductsListItem from "./ProductsListItem";

type Props = {};

const ProductsList = (props: Props) => {
  return (
    <Grid container direction="row" alignItems="center" spacing={4}>
      <Grid item xs={12} sm={6} md={4}>
        <ProductsListItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductsListItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductsListItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductsListItem />
      </Grid>
    </Grid>
  );
};
export default ProductsList;

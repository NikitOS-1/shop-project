import { Grid } from "@mui/material";
import ProductsListItem from "./ProductsListItem";

type Props = {};

const ProductsList = (props: Props) => {
  return (
    <Grid container direction="row" alignItems="center" spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <ProductsListItem title="IPhone X" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductsListItem title="IPhone XS" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductsListItem title="IPhone 12" />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <ProductsListItem title="IPhone 14 Pro" />
      </Grid>
    </Grid>
  );
};
export default ProductsList;

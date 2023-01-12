import { Grid } from "@mui/material";
import ProductsListItem from "./ProductsListItem";
import productsArray from "./productsArray";

type ProductsProps = {
  title: string;
  desc: string;
  type: string;
  capasity: string;
  price: number;
  image: string;
};

type Props = {};

const ProductsList = (props: Props) => {
  return (
    <Grid container direction="row" alignItems="center" spacing={2}>
      {productsArray.map((product: ProductsProps) => (
        <Grid item xs={12} sm={6} md={4}>
          <ProductsListItem
            title={product.title}
            desc={product.desc}
            type={product.type}
            capasity={product.capasity}
            price={product.price}
            image={product.image}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default ProductsList;

import { Grid } from "@mui/material";
import ProductsListItem from "./ProductsListItem";
import productsArray from "./productsArray";

type ProductsProps = {
  id: number;
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
      {productsArray.map(
        ({ id, title, desc, type, capasity, price, image }: ProductsProps) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            <ProductsListItem
              title={title}
              desc={desc}
              type={type}
              capasity={capasity}
              price={price}
              image={image}
            />
          </Grid>
        )
      )}
    </Grid>
  );
};
export default ProductsList;

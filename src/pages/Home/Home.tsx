import { Typography } from "@mui/material";
import ProductsList from "../../components/Products/ProductsList";
import Reviews from "../../components/Reviews/Reviews";
import "./Home.scss";

type Props = {
  addProductInCart: (id: number, count: number) => void;
};
const Home = ({ addProductInCart }: Props) => {
  return (
    <>
      <Typography variant="h4" align="center" className="home-title">
        List of Product
      </Typography>
      <ProductsList addProductInCart={addProductInCart} />
      <Reviews />
    </>
  );
};
export default Home;

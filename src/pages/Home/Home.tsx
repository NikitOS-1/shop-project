import { Typography } from "@mui/material";
import ProductsList from "../../components/Products/ProductsList";
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
    </>
  );
};
export default Home;

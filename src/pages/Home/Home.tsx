import { Typography } from "@mui/material";
import ProductsList from "../../components/Products/ProductsList";
import "./Home.scss";

type Props = {
  addProductCard: (total: number, price: number) => void;
};
const Home = ({ addProductCard }: Props) => {
  return (
    <>
      <Typography variant="h4" align="center" className="home-title">
        List of Product
      </Typography>
      <ProductsList addProductCard={addProductCard} />
    </>
  );
};
export default Home;

import { Typography } from "@mui/material";
import ProductsList from "../../components/Products/ProductsList";
import "./Home.scss";

type Props = {};
const Home = (props: Props) => {
  return (
    <>
      <Typography variant="h4" align="center" className="home-title">
        List of Product
      </Typography>
      <ProductsList />
    </>
  );
};
export default Home;

import Home from "../../pages/Home/Home";
import Container from "@mui/material/Container";
import "./Main.scss";

type Props = {
  addProductCard: (total: number, price: number) => void;
};
const Main = ({ addProductCard }: Props) => {
  return (
    <main className="main">
      <Container>
        <Home addProductCard={addProductCard} />
      </Container>
    </main>
  );
};
export default Main;

import Home from "../../pages/Home/Home";
import Container from "@mui/material/Container";
import "./Main.scss";

type Props = {
  addProductInCart: (id: number, count: number) => void;
};
const Main = ({ addProductInCart }: Props) => {
  return (
    <main className="main">
      <Container>
        <Home addProductInCart={addProductInCart} />
      </Container>
    </main>
  );
};
export default Main;

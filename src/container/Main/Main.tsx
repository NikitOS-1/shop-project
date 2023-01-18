import Home from "../../pages/Home/Home";
import Container from "@mui/material/Container";
import "./Main.scss";
import { Route, Routes } from "react-router-dom";

type Props = {
  addProductInCart: (id: number, count: number) => void;
};
const Main = ({ addProductInCart }: Props) => {
  return (
    <main className="main">
      <Container>
        <Routes>
          <Route
            path="/"
            element={<Home addProductInCart={addProductInCart} />}
          />
        </Routes>
      </Container>
    </main>
  );
};
export default Main;

import Home from "../../pages/Home/Home";
import Container from "@mui/material/Container";
import "./Main.scss";

type Props = {};
const Main = ({}: Props) => {
  return (
    <main className="main">
      <Container>
        <Home />
      </Container>
    </main>
  );
};
export default Main;

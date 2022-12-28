import Home from "../../pages/Home/Home";
import Container from "@mui/material/Container";

type Props = {};
const Main = (props: Props) => {
  return (
    <main style={{ padding: "40px 0" }}>
      <Container>
        <Home />
      </Container>
    </main>
  );
};
export default Main;

import Header from "../Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import Main from "../Main/Main";
import { useState } from "react";

type Props = {};

type CardDataProps = {
  totalCount: number;
  totalPrice: number;
};

const App = (props: Props) => {
  const [cartData, setCartData] = useState<CardDataProps>({
    totalCount: 10,
    totalPrice: 100,
  });

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header cartData={cartData} />
      <Main />
    </StyledEngineProvider>
  );
};

export default App;

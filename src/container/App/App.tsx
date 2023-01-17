import Header from "../Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import Main from "../Main/Main";
import { useState } from "react";

type ProductsInCart = {
  [id: number]: number;
};

const App = () => {
  const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
    1: 5,
    2: 2,
  });

  const addProductCard = () => {};

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header productsInCart={productsInCart} />
      <Main addProductCard={addProductCard} />
    </StyledEngineProvider>
  );
};

export default App;

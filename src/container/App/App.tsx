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
  });

  const addProductInCart = (id: number, count: number) => {
    console.log(id, count);
    setProductsInCart((prevState: ProductsInCart) => ({
      ...prevState,
      [id]: prevState[id] + count,
    }));
  };

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header productsInCart={productsInCart} />
      <button onClick={() => addProductInCart(1, 5)}>Add to cart</button>
      <Main />
    </StyledEngineProvider>
  );
};

export default App;

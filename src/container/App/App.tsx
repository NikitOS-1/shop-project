import Header from "../Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import Main from "../Main/Main";
import { useState } from "react";
import { type } from "os";

type ProductsInCart = {
  [id: number]: number;
};

const App = () => {
  const [productsInCart, setProductsInCart] = useState<ProductsInCart>({});

  const addProductInCart = (id: number, count: number) => {
    setProductsInCart((prevState: ProductsInCart) => ({
      ...prevState,
      [id]: (prevState[id] || 0) + count,
    }));
  };

  const removeProductFromCart = (id: number) => {
    setProductsInCart((prevState: ProductsInCart) => {
      let prevProductsInCart = { ...prevState };
      delete prevProductsInCart[id];
      return prevProductsInCart;
    });
  };

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header productsInCart={productsInCart} />
      <button onClick={() => removeProductFromCart(1)}>Remove Product</button>
      <Main
        addProductInCart={addProductInCart}
        productsInCart={productsInCart}
      />
    </StyledEngineProvider>
  );
};

export default App;

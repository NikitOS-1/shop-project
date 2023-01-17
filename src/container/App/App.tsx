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

type ProductsInCart = {
  [id: number]: number;
};

const App = (props: Props) => {
  const [cartData, setCartData] = useState<CardDataProps>({
    totalCount: 0,
    totalPrice: 0,
  });

  const [productsInCart, setProductsInCart] = useState<ProductsInCart>({
    1: 5,
    2: 2,
  });

  const addProductCard = (total: number, price: number) => {
    setCartData((prevState: CardDataProps) => ({
      totalCount: prevState.totalCount + total,
      totalPrice: prevState.totalPrice + total * price,
    }));
  };

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Header cartData={cartData} />
      <Main addProductCard={addProductCard} />
    </StyledEngineProvider>
  );
};

export default App;

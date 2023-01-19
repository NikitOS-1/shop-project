import Home from "../../pages/Home/Home";
import Container from "@mui/material/Container";
import "./Main.scss";
import { Route, Routes } from "react-router-dom";
import CartPage from "../../pages/CartPage/CartPage";
import ProductPage from "../../pages/ProductPage/ProductPage";
import PaymentPage from "../../pages/PaymentPage/PaymentPage";
import ShippingPage from "../../pages/ShippingPage/ShippingPage";

type Props = {
  addProductInCart: (id: number, count: number) => void;
  productsInCart: {
    [id: number]: number;
  };
  removeProductFromCart: (id: number) => void;
};
const Main = ({
  addProductInCart,
  productsInCart,
  removeProductFromCart,
}: Props) => {
  return (
    <main className="main">
      <Container>
        <Routes>
          <Route
            path="/"
            element={<Home addProductInCart={addProductInCart} />}
          />
          <Route path="product" element={<ProductPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="shipping" element={<ShippingPage />} />
          <Route
            path="cart"
            element={
              <CartPage
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
              />
            }
          />
        </Routes>
      </Container>
    </main>
  );
};
export default Main;

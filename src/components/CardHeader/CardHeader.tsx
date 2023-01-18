import { useState } from "react";
import productsArray, {
  ProductsProps,
  getProductsObject,
} from "../Products/productsArray";
import iconCart from "../../assets/icon-cart.svg";
import style from "./CardHeader.module.scss";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
  productsObject?: {
    [id: number]: ProductsProps;
  };
};

const CardHeader = ({
  productsInCart,
  productsObject = getProductsObject(productsArray),
}: Props) => {
  const [isPopUpShow, setIsPopUpShow] = useState<boolean>(false);

  return (
    <div className={style.wrapcart}>
      <div className={style.cart}>
        <div className={style.iconcart}>
          <img src={iconCart} alt="cart" onClick={() => setIsPopUpShow(true)} />
        </div>
      </div>

      <div className={style.totalPriceInCart}>
        {Object.keys(productsInCart).reduce(
          (total, productId) =>
            total +
            productsInCart[+productId] * productsObject[+productId].price,
          0
        )}{" "}
        $
      </div>

      {isPopUpShow && (
        <div className={style.popupWrap}>
          <button onClick={() => setIsPopUpShow(false)}>X</button>
          {Object.keys(productsInCart).map((productId) => (
            <div key={productId}>
              {productsObject[+productId].title} : {productsInCart[+productId]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default CardHeader;

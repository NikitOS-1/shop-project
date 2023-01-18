import productsArray, {
  ProductsProps,
  getProductsObject,
} from "../Products/productsArray";

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
  return (
    <div>
      <div>
        {Object.keys(productsInCart).map((productId) => (
          <div key={productId}>
            {productsObject[+productId].title} : {productsInCart[+productId]}
          </div>
        ))}
      </div>
      <div>Total: 0$</div>
    </div>
  );
};
export default CardHeader;

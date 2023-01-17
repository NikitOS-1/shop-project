type Props = {
  productsInCart: {
    [id: number]: number;
  };
};

const CardHeader = ({ productsInCart }: Props) => {
  return (
    <div>
      {Object.keys(productsInCart).map((productId) => (
        <div key={productId}>
          {productId}:{productsInCart[+productId]}
        </div>
      ))}
    </div>
  );
};
export default CardHeader;

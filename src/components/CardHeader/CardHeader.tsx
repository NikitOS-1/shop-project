type Props = {
  cartData: {
    totalCount: number;
    totalPrice: number;
  };
  productsInCart: {
    [id: number]: number;
  };
};

const CardHeader = ({ cartData, productsInCart }: Props) => {
  return (
    <div>
      <div>{}</div>
      <div>{cartData.totalCount}</div>
      <div>$ {cartData.totalPrice}</div>
    </div>
  );
};
export default CardHeader;

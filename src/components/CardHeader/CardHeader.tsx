type Props = {
  productsInCart: {
    [id: number]: number;
  };
};

const CardHeader = ({ productsInCart }: Props) => {
  return (
    <div>
      <div>{}</div>
      {/* <div>{cartData.totalCount}</div>
      <div>$ {cartData.totalPrice}</div> */}
    </div>
  );
};
export default CardHeader;

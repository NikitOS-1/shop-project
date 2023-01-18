import MenuItem from "./MenuItem";

type Props = {};

const Menu = (props: Props) => {
  return (
    <>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/product">Product</MenuItem>
      <MenuItem to="/payment">Payment</MenuItem>
      <MenuItem to="/shipping">Shipping</MenuItem>
      <MenuItem to="/cart">Card</MenuItem>
    </>
  );
};
export default Menu;

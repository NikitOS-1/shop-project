import { ProductsProps } from "../../Products/productsArray";

type Props = {
  product: ProductsProps;
  productCount: number;
  removeProductFromCart?: (id: number) => void;
};
const CartProductListItem = ({ product, productCount }: Props) => {
  return;
  <div>
    {product.title} :{productCount}
    {product.title} :{productCount}
  </div>;
};
export default CartProductListItem;

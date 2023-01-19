import { ProductsProps } from "../../Products/productsArray";

type Props = {
  product: ProductsProps;
  productCount: number;
};
const CartProductListItem = ({ product, productCount }: Props) => {
  return;
  <div>
    {product.title} :{productCount}
  </div>;
};
export default CartProductListItem;

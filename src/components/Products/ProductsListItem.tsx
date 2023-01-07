import { Button, Card, CardActions, CardContent } from "@mui/material";

type Props = {};

const ProductsListItem = (props: Props) => {
  return (
    <Card>
      <CardContent>
        <h4 className="product-title">iProne X</h4>
        <p className="product-desc">This is iPhone X</p>
        <div className="product-features">Type: Phone</div>
        <div className="product-features">Capacity: 64gb</div>
        <div className="product-price">900$</div>
        <div className="product-price">900$</div>
        <div className="product-price">900$</div>
        <div className="product-price">900$</div>
      </CardContent>
      <CardActions>
        <Button>Add to cart</Button>
      </CardActions>
    </Card>
  );
};
export default ProductsListItem;

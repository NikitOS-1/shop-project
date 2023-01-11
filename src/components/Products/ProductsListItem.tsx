import { Button, Card, CardActions, CardContent } from "@mui/material";
import "./ProductsListItem.scss";

type Props = {};

const ProductsListItem = (props: Props) => {
  return (
    <Card className="product-list-item">
      <CardContent>
        <h4 className="product-title">iProne X</h4>
        <p className="product-desc">This is iPhone X</p>
        <div className="product-features">
          {" "}
          <span>Type:</span> Phone
        </div>
        <div className="product-features">
          {" "}
          <span>Capacity:</span> 64gb
        </div>
        <div className="product-price">900$</div>
      </CardContent>
      <CardActions className="btn-wrap">
        <Button variant="outlined">Add to cart</Button>
      </CardActions>
    </Card>
  );
};
export default ProductsListItem;

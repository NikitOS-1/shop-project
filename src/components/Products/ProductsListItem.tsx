import { Button, Card, CardActions, CardContent } from "@mui/material";
import "./ProductsListItem.scss";

type Props = {
  title: string;
  desc: string;
  type: string;
  capasity: string;
  price: number;
};

const ProductsListItem = (props: Props) => {
  return (
    <Card className="product-list-item">
      <CardContent>
        <h4 className="product-title">{props.title}</h4>
        <p className="product-desc">{props.desc}</p>
        <div className="product-features">
          <span>Type:</span> {props.type}
        </div>
        <div className="product-features">
          <span>Capacity:</span> {props.capasity}
        </div>
        <div className="product-price">{props.price}$</div>
      </CardContent>
      <CardActions className="btn-wrap">
        <Button variant="outlined">Add to cart</Button>
      </CardActions>
    </Card>
  );
};
export default ProductsListItem;

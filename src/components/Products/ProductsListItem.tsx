import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import "./ProductsListItem.scss";

type Props = {
  id: number;
  title: string;
  desc: string;
  type: string;
  capasity: string;
  price: number;
  image: string;
  addProductInCart: (id: number, count: number) => void;
};

const ProductsListItem = ({
  id,
  title,
  desc,
  type,
  capasity,
  price,
  image,
  addProductInCart,
}: Props) => {
  const [count, setCount] = useState<number>(1);

  const onDecrement = () => {
    setCount((prevState: number) => prevState - 1);
  };

  const onIncrement = () => {
    setCount((prevState: number) => prevState + 1);
  };

  return (
    <Card className="product-list-item">
      <CardContent>
        <div className="product-img">
          <img src={image} alt="#" />
        </div>
        <h4 className="product-title">{title}</h4>
        <p className="product-desc">{desc}</p>
        <div className="product-features">
          <span>Type:</span> {type}
        </div>
        <div className="product-features">
          <span>Capacity:</span> {capasity}
        </div>
        <div className="product-price">{price}$</div>
      </CardContent>
      <div className="product-quantity">
        <Button variant="outlined" onClick={onDecrement} disabled={count <= 1}>
          -
        </Button>

        <TextField
          size="small"
          value={count}
          disabled
          className="quantity-count"
        />

        <Button variant="outlined" onClick={onIncrement} disabled={count >= 10}>
          +
        </Button>
      </div>
      <CardActions className="btn-wrap">
        <Button variant="outlined" onClick={() => addProductInCart(id, count)}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductsListItem;

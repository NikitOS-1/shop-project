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
  title: string;
  desc: string;
  type: string;
  capasity: string;
  price: number;
  image: string;
};

const ProductsListItem = ({
  title,
  desc,
  type,
  capasity,
  price,
  image,
}: Props) => {
  const [count, setCount] = useState<number>(1);
  const [color, setColor] = useState<string>("green");

  const onDecrement = () => {
    setCount((prevState: number) => prevState - 1);
  };
  const onIncrement = () => {
    setCount((prevState: number) => prevState + 1);
  };
  const changeColor = () => {
    setColor((prevState: string) => (prevState === "green" ? "red" : "green"));
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
        <p>Color: {color}</p>
        <button onClick={changeColor}>Change color</button>
        <div className="product-price">{price}$</div>
      </CardContent>
      <div className="product-quantity">
        <Button variant="outlined" onClick={onDecrement}>
          -
        </Button>
        <TextField size="small" value={count} />
        <Button variant="outlined" onClick={onIncrement}>
          +
        </Button>
      </div>
      <CardActions className="btn-wrap">
        <Button variant="outlined">Add to cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductsListItem;

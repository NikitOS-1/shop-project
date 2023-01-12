import {
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
} from "@mui/material";
import { Component } from "react";
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
        <div className="color">
          <p>Color: red</p>
        </div>
        <button>Change color</button>
        <div className="product-price">{price}$</div>
      </CardContent>
      <div className="product-quantity">
        <Button variant="outlined">-</Button>
        <TextField size="small" value={1} />
        <Button variant="outlined">+</Button>
      </div>
      <CardActions className="btn-wrap">
        <Button variant="outlined">Add to cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductsListItem;

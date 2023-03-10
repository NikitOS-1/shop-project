import { Button, Card, CardActions, CardContent } from "@mui/material";
import { useState } from "react";
import Quantity from "../Quantity/Quantity";
import "./ProductsListItem.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addLike, removeLike } from "../../redux/likeReducer";

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

  const isLiked = useAppSelector((state) => state.likeProducts[id]);
  const dispatch = useAppDispatch();

  return (
    <Card className="product-list-item">
      <Button
        onClick={() =>
          isLiked ? dispatch(removeLike(id)) : dispatch(addLike(id))
        }>
        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </Button>
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
      <Quantity
        count={count}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />
      <CardActions className="btn-wrap">
        <Button variant="outlined" onClick={() => addProductInCart(id, count)}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductsListItem;

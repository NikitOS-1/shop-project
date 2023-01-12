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

type State = {
  count: number;
  color: string;
};

class ProductsListItem extends Component<Props, State> {
  state = {
    count: 1,
    color: "red",
  };

  onDecrementClick = () => {
    this.setState((prevState: State) => ({
      count: prevState.count - 1,
    }));
  };

  onIncrementClick() {
    this.setState((prevState: State) => ({
      count: prevState.count + 1,
    }));
  }

  changeColor = () => {
    this.setState((prevState: State) => ({
      color: prevState.color === "green" ? "red" : "green",
    }));
  };

  render() {
    const { title, desc, type, capasity, price, image } = this.props;

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
            <p>Color:</p>
            <div className={this.state.color} />
            {/* <p>{this.state.color}</p> */}
          </div>
          <button onClick={() => this.changeColor()}>Change color</button>
          <div className="product-price">{price}$</div>
        </CardContent>
        <div className="product-quantity">
          <Button variant="outlined" onClick={this.onDecrementClick}>
            -
          </Button>
          <TextField size="small" value={this.state.count} />
          <Button variant="outlined" onClick={() => this.onIncrementClick()}>
            +
          </Button>
        </div>
        <CardActions className="btn-wrap">
          <Button variant="outlined">Add to cart</Button>
        </CardActions>
      </Card>
    );
  }
}

export default ProductsListItem;

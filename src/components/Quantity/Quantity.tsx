import { Button, TextField } from "@mui/material";
import "./Quantity.scss";

type Props = {
  count: number;
  onDecrement?: () => void;
  onIncrement?: () => void;
  minCount?: number;
};
const Quantity = ({ count, onDecrement, onIncrement, minCount = 1 }: Props) => {
  return (
    <div className="product-quantity">
      <Button variant="outlined" onClick={onDecrement} disabled={count <= 1}>
        -
      </Button>

      <TextField
        size="small"
        value={count}
        disabled={count <= minCount}
        className="quantity-count"
      />

      <Button variant="outlined" onClick={onIncrement} disabled={count >= 10}>
        +
      </Button>
    </div>
  );
};
export default Quantity;

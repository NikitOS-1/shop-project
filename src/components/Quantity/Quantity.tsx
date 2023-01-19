import { Button, TextField } from "@mui/material";

type Props = {
  count: number;
  onDecrement?: () => void;
  onIncrement?: () => void;
};
const Quantity = ({ count, onDecrement, onIncrement }: Props) => {
  return (
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
  );
};
export default Quantity;

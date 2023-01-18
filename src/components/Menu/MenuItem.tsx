import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  children: React.ReactNode;
};
const MenuItem = ({ to, children }: Props) => {
  return (
    <Button color="inherit">
      <NavLink to={to}>{children}</NavLink>
    </Button>
  );
};
export default MenuItem;

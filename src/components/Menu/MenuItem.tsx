import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./MenuItem.scss";

type Props = {
  to: string;
  children: React.ReactNode;
};
const MenuItem = ({ to, children }: Props) => {
  return (
    <Button color="inherit">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "menu-item-active" : "menu-item"
        }>
        {children}
      </NavLink>
    </Button>
  );
};
export default MenuItem;

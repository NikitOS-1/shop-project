import "./Header.scss";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Menu from "../../components/Menu/Menu";
import logo from "../../assets/logo.svg";
import CardHeader from "../../components/Cart/CartHeader/CardHeader";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
};

const Header = ({ productsInCart }: Props) => {
  return (
    <>
      <AppBar position="static" className="app-bar">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <Menu />
            <CardHeader productsInCart={productsInCart} />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Header;

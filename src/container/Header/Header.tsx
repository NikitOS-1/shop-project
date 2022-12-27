import "./Header.scss";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Menu from "../../components/Menu/Menu";

type Props = {};

const Header = () => {
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
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Menu />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Header;

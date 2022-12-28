import Header from "../Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import Main from "../Main/Main";

type Props = {};

const App = (props: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <Main />
      <CssBaseline />
    </StyledEngineProvider>
  );
};

export default App;

import Header from "../Header/Header";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";

type Props = {};

const App = (props: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <CssBaseline />
    </StyledEngineProvider>
  );
};

export default App;

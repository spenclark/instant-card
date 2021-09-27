import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import { Navbar, Footer } from "./Components/Navigation";
import Routing from "./Routing";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routing />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

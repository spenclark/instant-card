import "./App.css";
import { theme } from "./theme";
import { ThemeProvider } from "@material-ui/styles";
import { Navbar, Footer } from "./Components/Navigation";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

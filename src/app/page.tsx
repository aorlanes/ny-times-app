import Header from "./components/Header";
import HomePage from "./Home/HomePage";
import Footer from "./components/Footer";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";

export default function Page() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HomePage />
      <Footer />
    </ThemeProvider>
  );
}

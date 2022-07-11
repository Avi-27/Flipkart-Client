import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Cart from "./components/cart/Cart";
import TemplateProvider from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import DetailView from "./components/itemDetails/DetailView";
import { Box } from "@mui/system";

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <Router>
          <Header />
          <Box style={{ marginTop: "55px" }}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/cart" element={<Cart />} />
              <Route exact path="/product/:id" element={<DetailView />} />
            </Routes>
          </Box>
        </Router>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;

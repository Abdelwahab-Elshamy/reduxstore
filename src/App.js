import AppNavbar from "./Components/AppNavbar";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

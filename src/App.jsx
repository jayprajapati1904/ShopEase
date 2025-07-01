// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ProductPage from "./components/product";
import Navbar from "./components/navbar";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />

        <Route path="/cart" element={<div>Cart Page</div>} />
        <Route path="/profile" element={<div>Profile Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

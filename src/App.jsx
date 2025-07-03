import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import useAuthStore from "./context/authStore.js";
import Home from "./components/home";
import ProductPage from "./components/product";
import Navbar from "./components/navbar";
import { CartProvider } from "./context/CartContext";
import Profile from "./pages/profile";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  const { checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth(); // run on app load
  }, []);

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

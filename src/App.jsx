import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/templates/Navbar";
import Footer from "./components/templates/Footer";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProductsPage from "./pages/products";
import ProfilePage from "./pages/profile";
import DetailProductPage from "./pages/detailProduct";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/404";
import Report from "./pages/Report";
import ProductStock from "./pages/ProductStock";

function App() {
  const location = useLocation();
  const hideNavbarAndFooter =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/product/:id" element={<DetailProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/report" element={<Report />} />
        <Route path="/product-stock" element={<ProductStock />} />
      </Routes>
      {!hideNavbarAndFooter && <Footer />}
    </>
  );
}

export default App;

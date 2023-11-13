import { Route, Routes } from "react-router-dom";
import Navbar from "./components/templates/Navbar";
import Footer from "./components/templates/Footer";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ProductsPage from "./pages/products";
import ProfilePage from "./pages/profile";
import DetailProductPage from "./pages/detailProduct";
import Cart from "./pages/Cart";
import Stock from "./pages/Stock";
import Report from "./pages/report";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/product/:id" element={<DetailProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/report" element={<Report />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

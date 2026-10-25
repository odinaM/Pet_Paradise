import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Service } from "./pages/Service/Service";
import { Shop } from "./pages/Shop/Shop";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home page</div>} />
        <Route path="/service" element={<Service />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<div>Contact page</div>} />
        <Route path="/register" element={<div>Register / Login</div>} />
        <Route path="/checkout" element={<div>Checkout page</div>} />
        <Route path="/account" element={<div>Account page</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

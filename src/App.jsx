import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { About } from "./pages/About/About";
import { Service } from "./pages/Service/Service";
import { Shop } from "./pages/Shop/Shop";
import { Register } from "./pages/Register/Register";
import { Login } from './pages/Login/login'; 
import { Contact } from "./pages/Contact/Contact";
import { Cart } from "./pages/Cart/Cart";

import "./App.css";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<div>Account page</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

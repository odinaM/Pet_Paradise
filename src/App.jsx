import { Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { About } from "./pages/About/About";
import { Service } from "./pages/Service/Service";
import { Shop } from "./pages/Shop/Shop";
import { Register } from "./pages/Register/Register";
import { Contact } from "./pages/Contact/Contact";

import "./App.css";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<div>Checkout page</div>} />
        <Route path="/account" element={<div>Account page</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

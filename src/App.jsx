import { Routes, Route } from 'react-router-dom';

import { Header }  from './components/Header/Header';
import { Service } from './pages/Service/Service';
import { Register } from './pages/Register/Register';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"         element={<div>Home page</div>} />
        <Route path="/service"  element={<Service />} />
        <Route path="/shop"     element={<div>Shop page</div>} />
        <Route path="/contact"  element={<div>Contact page</div>} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<div>Checkout page</div>} />
        <Route path="/account"  element={<div>Account page</div>} />
      </Routes>
    </>
  );
}

export default App;